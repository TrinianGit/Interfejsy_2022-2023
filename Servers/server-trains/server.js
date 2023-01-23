    const express = require('express')
    const app = express()
    const puppeteer = require('puppeteer');
    const cors = require('cors');
    app.use(cors());
    const { Sequelize } = require('sequelize');

    const request_client = require("request-promise-native");


app.get("/", async (req, res) => {
  const browser = await puppeteer.launch({
          args: ['--no-sandbox']
        });
  try{
        const StartPoint = req.query.SP;
        const EndPoint = req.query.EP;
        const Date = req.query.DT;
        const Time = req.query.TM;
    
        
        
        const page = await browser.newPage();
        await page.goto(`https://koleo.pl/rozklad-pkp/${StartPoint}/${EndPoint}/${Date}_${Time}/all/all`);
        await page.waitForSelector('.day-connections')
        await page.waitForSelector('.has-train-nr');
        await page.waitForSelector('.price-parts');
        await page.waitForSelector('.later');
        await page.waitForSelector('.brand-logo');
        await page.waitForSelector('.carrier-name');
        await page.waitForSelector('.train-number-details');
        await page.waitForSelector('.start');
        await page.waitForSelector('.end');
        await page.waitForSelector('.travel-time-value')
        
        let quotes = await page.evaluate(() => {
            let quotesElement = document.body.querySelector('.day-connections').querySelectorAll('.has-train-nr');
            let quotes = Object.values(quotesElement).map(x => {
                const trains = [];
                const startStations = [];
                const endStations = [];
                const Brands = [];
                var i = 0;
                Object.values(x.querySelectorAll('.train-name-cell')).map(y => {
                    if (i % 2 === 0){
                        trains.push(y.querySelector('.train-number-details').textContent.trim().replace(/\s+/g, ' '));
                    }
                    i = i + 1;
                })

                Object.values(x.querySelectorAll('.start')).map(y => {

                    if (y.querySelector('.station') !== null){
                        startStations.push(y.querySelector('.station').textContent.trim().replace(/\s+/g, ' '));
                    }
                })

                Object.values(x.querySelectorAll('.end')).map(y => {
                    if (y.querySelector('.station') !== null){
                        endStations.push(y.querySelector('.station').textContent.trim().replace(/\s+/g, ' '));
                    }
                })

                Object.values(x.querySelectorAll('.carrier-name')).map(y => {

                    if (y.querySelector('.brand-logo') !== null){
                        Brands.push(y.querySelector('.brand-logo').textContent.trim().replace(/\s+/g, ' ') );
                    }
                })

                if(x.querySelector('.price-parts') !== null){
                    return {
                        from: x.querySelector('.from').textContent.replace(/\s+/g, ''),
                        to: x.querySelector('.to').textContent.replace(/\s+/g, ''),
                        price: x.querySelector('.price-parts').textContent.replace(/\s+/g, ''),
                        brandlogos: Brands.join('+'),
                        traindetails: trains,
                        startStations: startStations,
                        endStations: endStations
                    };
                }
                else{
                return{
                    from: x.querySelector('.from').textContent.replace(/\s+/g, ''),
                    to: x.querySelector('.to').textContent.replace(/\s+/g, ''),
                    price: "Brak ceny",
                    brandlogos: Brands.join('+'),
                    traindetails: trains,
                    startStations: startStations,
                    endStations: endStations
                }
                }
            });
            return quotes;
            });
            await browser.close();
            res.json(quotes)
    }
    catch(error){
        console.log(error)
        await browser.close();
        res.status(400).send("Bad request");
    }
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});