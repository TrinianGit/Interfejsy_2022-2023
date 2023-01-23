    const express = require('express')
    const app = express()
    const puppeteer = require('puppeteer');
    const cors = require('cors');
    app.use(cors());
    const { Sequelize } = require('sequelize');

    const request_client = require("request-promise-native");


    let sequelize = new Sequelize('database', process.env.DB_USER, process.env.DB_PASS, {
      host: '0.0.0.0',
      dialect: 'sqlite',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      storage: './data/database.sqlite'
    });

    let Stations;
    sequelize.authenticate()
      .then(function(err) {
        console.log('Connection has been established successfully.');
        Stations = sequelize.define('Stations', {
          StationName: {
            type: Sequelize.STRING,
            allowNull: false
          },
          Lat: {
            type: Sequelize.STRING,
            allowNull: false
          },
          Long: {
            type: Sequelize.STRING,
            allowNull: false
          }
        })
        Stations.sync().then(function(){
          console.log()
        });  
      })
  .catch(function (err) {
    console.log('Unable to connect to the database: ', err);
  });

app.get("/", async (req, res) => {
  let stacje = await Stations.findAll({
    attributes: ['StationName']
  });
  let stacjetab = []
  for (let i = 0; i < stacje.length; i++){
    stacjetab.push(stacje[i].StationName)
  }
    
  res.json(stacjetab)
})

app.get("/latlong", async(req, res) => {
  const Name = req.query.N;
  let record = await Stations.findOne({
    where: {StationName: Name}
  })
  
  res.json({lat: record.Lat, lon: record.Long})
})


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});