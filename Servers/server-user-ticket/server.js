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

    let Logins;
    let Tickets;
    sequelize.authenticate()
      .then(function(err) {
        console.log('Connection has been established successfully.');

        Logins = sequelize.define('Logins', {
          Login: {
            type: Sequelize.STRING,
            allowNull: false
            },
            Password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            Email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            Name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            Surname: {
                type: Sequelize.STRING,
                allowNull: false
            }
            });
            Tickets = sequelize.define("Tickets", {
              Login: {
                  type: Sequelize.STRING,
                  allowNull: true
              },
              TicketNumber: {
                  type: Sequelize.STRING,
                  allowNull: false
              },
              TrainsNumber: {
                  type: Sequelize.STRING,
                  allowNull: false
              },
              TicketTypes: {
                  type: Sequelize.STRING,
                  allowNull:false
              },
              StartStation: {
                  type: Sequelize.STRING,
                  allowNull: false
              },
              EndStation: {
                  type: Sequelize.STRING,
                  allowNull: false
              },
              FullDate: {
                  type: Sequelize.STRING,
                  allowNull: false
              },
              Price: {
                  type: Sequelize.STRING,
                  allowNull: false
              },
              Returned: {
                  type: Sequelize.STRING,
                  allownull: false
              }
            })
            
              Logins.sync().then(function(){
                console.log()
              });  
      
              Tickets.sync().then(function(){
              
              });
          })
  .catch(function (err) {
    console.log('Unable to connect to the database: ', err);
  });

app.get("/", async (req, res) => {
  res.send("OK")
})



app.get("/logins", async (req, res) => {
    const Login = req.query.Login
    const Password = req.query.Password
    const user = await Logins.findOne(
        {
        where: {Login : Login}
        }
    )
    if (user === null) {
        res.json("Not found Login");
    }
    else if (user["Password"] !== Password){
        res.json("Wrong Password");
    } 
    else{
        res.json({
            Email: user["Email"],
            Name: user["Name"],
            Surname: user["Surname"]
        });
    }
});

app.post("/logins", async (req, res) => {

    const Login = req.query.Login
    const Password = req.query.Password
    const Email = req.query.Email
    const Name = req.query.Name
    const Surname = req.query.Surname
    const Flag = req.query.Flag
    console.log(Password)
    if (Flag === "Update"){
        await Logins.update(
            {Password : Password},
            {where : {Login : Login}} 
        );
        res.json("Password changed");
    }
    else if (Flag === 'Dane'){
      await Logins.update(
            {Name: Name,
            Surname: Surname,
            Email: Email},
            {where : {Login : Login}} 
        );
      res.json("User changed");
    } 
    else{
      try{
        const [u, created] = await Logins.findOrCreate(
            {
                where: {Login : Login},
                defaults: {
                    Login: Login,
                    Password: Password,
                    Email: Email,
                    Name: Name,
                    Surname: Surname
                }
            }
        );
        if (created){
            res.json("User created");
        }
        else{
            res.json("User with this name already exists");
        }
      }
      catch(error){
        res.status(400).send("Bad request");
      }
    }
});


app.get("/tickets", async (req, res) => {
    const Login = req.query.Login
    if (Login === undefined){
        const tickets = await Tickets.findAll();
        res.json({tickets})
    }
    else{
      try{
        const tickets = await Tickets.findAll(
          {
            where: {Login : Login}
          }
        )
        if (tickets.length == 0) {
            res.json("Empty");
        }
        else{
            res.json({tickets});
        }
      }
      catch(error){
        res.json("Empty");
      }
    }
});

app.post("/tickets", async (req, res) => {

    const Login = req.query.Login
    const TicketN = req.query.T
    const TicketTypes = req.query.TT
    const TrainsNumber = req.query.TN
    const StartStation = req.query.SS
    const EndStation = req.query.ES
    const FullDate = req.query.FD
    const Price = req.query.P
    const Return = req.query.R
    let TicketNumber;
    let c = false
    console.log(Login, TrainsNumber, StartStation, EndStation, FullDate, Price, Return)
    if (Return !== undefined){
      await Tickets.update(
            {Returned : '1'},
            {where : {TicketNumber : TicketN}} 
        );
        res.json("Ticket returned");
    }
    else{
      while(!c){
      TicketNumber = Math.floor(Math.random() * 899999) + 100000;
      const [u, created] = await Tickets.findOrCreate(
            {
                where: {TicketNumber: TicketNumber},
                defaults: {
                    Login: Login,
                    TicketNumber: TicketNumber,
                    TrainsNumber: TrainsNumber,
                    TicketTypes: TicketTypes,
                    StartStation: StartStation,
                    EndStation: EndStation,
                    FullDate: FullDate,
                    Price: Price,
                    Returned: '0'
                }
            }
        );
      c = created
      }
      res.json(TicketNumber)
    }
    
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});