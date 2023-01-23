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
        const Date = req.query.D;
        const Brand = req.query.B;
        const StartPoint = req.query.SP;
        const EndPoint = req.query.EP;
        const TrainName = req.query.TN;

        const page = await browser.newPage();
        await page.goto(`https://koleo.pl/pociag/${Brand}/${TrainName}/${Date}`);
        await page.waitForSelector(".station-name")
        
        let quotes = await page.evaluate(() => {
            let quotesElement = document.body.querySelectorAll('.station-name');
                let napis = ""
                Object.values(quotesElement).map(x => {
                    
                    napis += x.querySelector("a").innerHTML + "+";
                    
                });
                return napis
            });
            await browser.close();
            let list = quotes.split("+");
            let finallist = [];
            for (let i = list.findIndex((e) => e.toLowerCase() === StartPoint.toLowerCase()); i <=  list.findIndex((e) => e.toLowerCase() === EndPoint.toLowerCase()); i++){
                finallist.push(list[i]);
            }
            res.json(finallist)
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