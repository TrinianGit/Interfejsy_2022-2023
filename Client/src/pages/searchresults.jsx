import React from 'react';
import {useEffect, useState} from "react";
import moment from 'moment';
import "../styles/loaders.css"
import axios from 'axios';
import _ from 'lodash';
import { Formik, Form } from 'formik';

export default function SearchTrainPl() {

    let logmain
  
    if(sessionStorage.getItem("LoggedIn") === '1'){
      logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/UserAccount" className="mb-0">Moje konto</a></h2>
    }
    else{
      logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/Login?#" className="mb-0">Zaloguj się</a></h2>
    }  

    let trains = [];
    let nt = []
    let changedtrains = []
    let actualtrain = 0;
    let loading = false;
    let finalend = false;
    let finalstart = false;
    
    function addFakeFront(){
      nt.forEach(function(item, index) {
        changedtrains.splice(index, 0, item)
      })
    }
  
    function addFakeBack(){
      nt.forEach(function(item){
        changedtrains.push(item)
      })
    }
    
    function scripter(){
      let button  = document.createElement("button");
      button.type = "button"
      button.setAttribute('onclick', 'mapTooltip()')
      document.body.appendChild(button)
      button.click()
      button.parentNode.removeChild(button)
    }
    
    useEffect(() => {
      let script = document.createElement("script");
      script.innerHTML = `function mapTooltip(){
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
      }`
      document.body.appendChild(script);

    }, [])
  
    function returnIcons(carrierData){
      let arr = carrierData.split(',')
      let inner = ``
      if (arr[0] === '1'){
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="W pociągu istnieje możliwość przewozu zwierząt">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cat" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546z"></path>
                          <path d="M2 16h5l-4 4"></path>
                          <path d="M22 16h-5l4 4"></path>
                          <circle cx="12" cy="16" r="1"></circle>
                          <path d="M9 11v.01"></path>
                          <path d="M15 11v.01"></path>
                       </svg>
                  </i>`
      }
      if (arr[1] === '1'){
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="W pociągu istnieje możliwość przewozu roweru/dodatkowego bagażu">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-motorbike" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <circle cx="5" cy="16" r="3"></circle>
                          <circle cx="19" cy="16" r="3"></circle>
                          <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4"></path>
                          <path d="M13 6h2l1.5 3l2 4"></path>
                       </svg>
                  </i>`
      }
      if (arr[2] === '1'){
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Pociąg zawiera wagony przystosowane do przewozu osób niepełnosprawnych (np. miejsca dla niepełnosprawnych, kładki umożliwiające wjechanie do pociągu na wózku inwalidzkim).">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-disabled" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <circle cx="11" cy="5" r="2"></circle>
                          <polyline points="11 7 11 15 15 15 19 20"></polyline>
                          <line x1="11" y1="11" x2="16" y2="11"></line>
                          <path d="M7 11.5a5 5 0 1 0 6 7.5"></path>
                      </svg>
                  </i>`
      }
      if (arr[3] === '1'){
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Pociąg wyposażony w wagony sypialne.">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bed" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6"></path>
                          <circle cx="7" cy="10" r="1"></circle>
                       </svg>
                  </i>`
      }
      if (arr[4] === '1'){
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="W pociągu można połączyć się z bezpłatnym WiFi udostępnionym przez przewoźnika">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wifi" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <line x1="12" y1="18" x2="12.01" y2="18"></line>
                          <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
                          <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
                          <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
                       </svg>
                  </i>`
      }
      if (arr[5] === '1'){
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Pociąg posiada wagon gastronomiczny/mobilny wózek z przekąskami">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools-kitchen-2" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3"></path>
                       </svg>
                  </i>`
      }
      if (arr[6] === '1'){
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="W pociągu możliwe jest nadanie przesyłki konduktorskiej (podczas nadania wymagana będzie dodatkowa opłata).">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"/>
                      </svg>
                  </i>`
      }
      return inner
    }
  
  
    const onSubmit1 = async () => {
      sessionStorage.setItem("Train", JSON.stringify(changedtrains[actualtrain]))
      window.location.href = "/BuyInput"
    }
    
    const onSubmit2 = async() => {
      sessionStorage.setItem("Train", JSON.stringify(changedtrains[actualtrain + 1]))
      window.location.href = "/BuyInput"
    }
    
    const onSubmit3 = async () => {
      sessionStorage.setItem("Train", JSON.stringify(changedtrains[actualtrain + 2]))
      window.location.href = "/BuyInput"
    }
  
    function countprice(brands, timediff){
      if (timediff < 0){
        timediff = 1440 - timediff
      }
      if(brands.includes('EIC')){
        return timediff * 0.81
      }
      else if(brands.includes("EIP")){
        return timediff * 1.15
      }
      else if(brands.includes("IC")){
        return timediff * 0.2
      }
      else if(brands.includes("TLK")){
        return timediff * 0.15
      }
      else{
        return timediff * 0.23
      }
    }
  
    async function repairCarriers(t){
      let allcariers = sessionStorage.getItem("Carriers").split(',');
      console.log(allcariers)
      await t.forEach(function(item, index) {
                        let carriers = item.brandlogos.split('+')
                        carriers.forEach (function (it, i) {
                          if (!allcariers.includes(it)){
                            it = allcariers[Math.floor(Math.random()*allcariers.length)];
                          }
                          carriers[i] = it
                        })
                        t[index].brandlogos = carriers.join('+')
                      });
      console.log(t)
      return t;
    }
  
        
    async function loadmoreAfter(){
      document.querySelector('.arrow-right').remove()
      
      let node = document.createElement('span')
      node.classList.add('loader2')
      
      document.querySelector('#Next').appendChild(node)
      
      document.querySelector('#Next').disabled = true
      loading = true
      
      
      let from_f = sessionStorage.getItem("From").replace(/\u0142/g, "l").normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim().replace(" ", '-')
      let to_f = sessionStorage.getItem("To").replace(/\u0142/g, "l").normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim().replace(" ", '-')
      let date_f = sessionStorage.getItem('Date')
      let time_f = trains[trains.length - 1].from
      
      
      
      await axios.get("https://css-server-trains.glitch.me/", {
          params: {
              SP: from_f,
              EP: to_f,
              DT: date_f,
              TM: time_f
          }
      }).then(async (response) => {
          let newtrains = response.data
          newtrains.forEach (function (item, index) {
            let equal = false 
            trains.forEach(function(it, ind) {
              if (_.isEqual(item, it)){
                equal = true
              }
              if (moment(item.from, 'hh:mm').hours() >= 21){
                console.log("Here")
                finalend = true
              }
            })
            if (!equal){
              trains.push(item);
              nt.push(item)
            }
            }
          )
          console.log(trains);
      }).catch((error) => {
          console.log(error)
          window.location.href = "/400badrequest"
      });
      
      
      document.querySelector('.loader2').remove()
      
      node = document.createElement('i')
      node.classList.add('arrow-right')
      node.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>`
      
      document.querySelector('#Next').appendChild(node)
      
      document.querySelector('#Next').disabled = false
      loading = false
      
      
      
    }
  
    async function loadmoreBefore(){
      document.querySelector('.arrow-left').remove()
      
      
      let node = document.createElement('span')
      node.classList.add('loader2')
      
      document.querySelector('#Prev').appendChild(node)
      
      document.querySelector('#Prev').disabled = true
      loading = true
      
      
      
      let from_f = sessionStorage.getItem("From").replace(/\u0142/g, "l").normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim().replace(" ", '-')
      let to_f = sessionStorage.getItem("To").replace(/\u0142/g, "l").normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim().replace(" ", '-')
      let date_f = sessionStorage.getItem('Date')
      let time_f = moment(trains[0].from, 'hh:mm').hours() - 2 + ':00'
      if (moment(trains[0].from, 'hh:mm').hours() - 2 < 3){
        finalstart = true
      }
      
      
      await axios.get("https://css-server-trains.glitch.me/", {
          params: {
              SP: from_f,
              EP: to_f,
              DT: date_f,
              TM: time_f
          }
      }).then(async (response) => {
          let newtrains = response.data
          newtrains.forEach (function (item, index) {
            let equal = false
            console.log(index)
            trains.forEach(function(it, ind) {
              if (_.isEqual(item, it)){
                equal = true
              }
            })
            if (!equal){
              actualtrain += 1
              trains.splice(index, 0, item);
              nt.splice(index, 0, item)
            }
            }
          )
          console.log(trains);
      }).catch((error) => {
          console.log(error)
          window.location.href = "/400badrequest"
      });
      
      
      document.querySelector('.loader2').remove()
      
      node = document.createElement('i')
      node.classList.add('arrow-left')
      node.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>`
      
      document.querySelector('#Prev').appendChild(node)
      
      document.querySelector('#Prev').disabled = false
      loading = false
    }
  
    async function changeTrains(){
      
      console.log(actualtrain)
      if (actualtrain + 2 >= trains.length){
        if(!finalend){
          document.querySelector("#Sub1").disabled = true
          document.querySelector("#Sub2").disabled = true
          document.querySelector("#Sub3").disabled = true
          await loadmoreAfter()
          await addFakeBack()
          nt = []
        }
      }
      else if (actualtrain === -1){
        document.querySelector("#Sub1").disabled = true
        document.querySelector("#Sub2").disabled = true
        document.querySelector("#Sub3").disabled = true
        await loadmoreBefore()
        await addFakeFront()
        nt = []
      }
      else {
        document.querySelector('#Next').style.display = "block"
      }
      if (finalend && actualtrain + 3 >= trains.length){
        document.querySelector('#Next').style.display = "none"
        if (actualtrain + 3 >= trains.length){
          actualtrain = trains.length - 3
        }
      }
      document.querySelector("#Sub1").disabled = false
      document.querySelector("#Sub2").disabled = false
      document.querySelector("#Sub3").disabled = false
      if (finalstart && actualtrain <= 0){
        document.querySelector('#Prev').style.display = "none";
        actualtrain = 0
      }
      let oldTrains = _.cloneDeep(trains)
      changedtrains = await repairCarriers(changedtrains)
      trains = _.cloneDeep(changedtrains)
      
      let i = actualtrain;
      let now = moment(moment(), "DD-MM-YYYY hh:mm")
      
      await Object.values(document.querySelectorAll('.Train')).map(y => {
        let then = sessionStorage.getItem("Date") + " " +  trains[i].from
        let timediff = moment(then,"DD/MM/YYYY HH:mm").diff(moment(now,"DD/MM/YYYY HH:mm")) / 60000;
        y.querySelector('#Brands').innerHTML = `${trains[i].brandlogos}`
        y.querySelector('#Data').innerHTML = `Data: ${sessionStorage.getItem("Date")}`
        y.querySelector('#From').innerHTML = `Odjazd: ${trains[i].from}`
        y.querySelector('#To').innerHTML = `Przyjazd: ${trains[i].to}`
        
        
        if (trains[i].startStations.length - 1 > 0){
          
          if (trains[i].startStations.length - 1 === 1){
            y.querySelector('#Changes').innerHTML = `Przesiadki: ${trains[i].startStations.length - 1} <i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="W stacji: ${trains[i].startStations[1]} \n Czas na przesiadkę: ${Math.floor(Math.random() * 10 + 5)}min">
                      <svg fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                      </svg>
                  </i>`
          }
          else if (trains[i].startStations.length > 1){
            y.querySelector('#Changes').innerHTML = `Przesiadki: ${trains[i].startStations.length - 1} <i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="1. W stacji: ${trains[i].startStations[1]}\nCzas na przesiadkę: ${Math.floor(Math.random() * 10 + 5)}min\n2. W stacji: ${trains[i].startStations[2]}\nCzas na przesiadkę: ${Math.floor(Math.random() * 10 + 5)}min">
                      <svg fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                      </svg>
                  </i>`
          }
        }
        else {
          y.querySelector('#Changes').innerHTML = `Przesiadki: brak`
        }
        
        if(timediff > 1440){
          y.querySelector('#Seats').innerHTML = "Duża ilość miejsc"
        }
        else if (timediff > 360){
          y.querySelector('#Seats').innerHTML = "Ograniczona ilość miejsc"
        }
        else if (timediff > 30){
          y.querySelector('#Seats').innerHTML = "Ostatnie wolne miejsca"
        }
        else {
          y.querySelector('#Seats').innerHTML = "Brak wolnych miejsc"
          y.querySelector('#Buytext').innerHTML = "Brak miejsc"
          y.querySelector('.Buy').style.background='#ff4d4d';
          y.querySelector('.Buy').style.color='#000000';
          y.querySelector('.Buy').disabled = true;
        }
        
        if (trains[i].brandlogos.includes('IC')){
          if(window.screen.width <= 1800){
            y.querySelector('#SeatsType').innerHTML = "Bezprzedz. + Przedz."
          }
          else{
            y.querySelector('#SeatsType').innerHTML = "Bezprzedziałowe + Przedziałowe"
          }
          
        }
        else if(trains[i].brandlogos.includes('TLK')){
          y.querySelector('#SeatsType').innerHTML = "Przedziałowe"
        }
        else{
          y.querySelector('#SeatsType').innerHTML = "Bezprzedziałowe"
        }
        
        if(trains[i].brandlogos.includes('IC') || trains[i].brandlogos.includes('EIP')){
          y.querySelector("#Services").innerHTML = `Usługi: ${returnIcons(sessionStorage.getItem("ICservice"))}`
        }
        else if(!trains[i].brandlogos.includes('TLK') && !trains[i].brandlogos.includes('PR')){
          y.querySelector("#Services").innerHTML = `Usługi: ${returnIcons(sessionStorage.getItem("Rservice"))}`
        }
        else if (trains[i].brandlogos.includes('PR')){
          y.querySelector("#Services").innerHTML = `Usługi: ${returnIcons(sessionStorage.getItem("PRservice"))}`
        }
        else{
          y.querySelector("#Services").innerHTML = `Usługi: ${returnIcons(sessionStorage.getItem("TLKservice"))}`
        }
        
        if (trains[i].price === "Brak ceny"){
          trains[i].price = countprice(trains[i].brandlogos, moment(trains[i].to, "HH:mm").diff(moment(trains[i].from, "HH:mm")) / 60000).toFixed(2).replace('.', ',') + "zł"
          y.querySelector('#Price').innerHTML = `Cena: ${trains[i].price}`
        }
        else{
          y.querySelector('#Price').innerHTML = `Cena: ${trains[i].price}`
        }
        

        i += 1
      })
      trains = oldTrains
      console.log(trains)
      scripter()
    }

    useEffect(() => {
      
      if(window.screen.width <= 1800){
        document.querySelector('.LogoImg').style.height = '72px'
        document.querySelector('.site-navbar').classList.add('pt-3')
        document.querySelector('.site-navbar').classList.remove('pt-5')
        document.querySelector('.noyPad').classList.add('smallPadLaptop')
        document.querySelector('.noyPad').classList.add('pt-3')
        document.querySelector('.noyPad').classList.remove('noyPad')
        document.querySelector('.Relation').classList.add('fs-5')

        document.querySelector('.py-5').classList.add('py-4')
        document.querySelector('.py-5').classList.remove('py-5')
        Object.values(document.querySelectorAll('.Brands')).map(y => {
          y.classList.add('fs-5')
        })
        Object.values(document.querySelectorAll('.OrangeButton')).map(y => {
          y.classList.remove('px-4')
        })
        Object.values(document.querySelectorAll('.Label')).map(y => {
          y.parentNode.classList.add('mt-2')
          y.parentNode.classList.remove('mt-3')
        })
      }
      
      if (sessionStorage.getItem("Trains") === null){
        window.location.href = '/LoadingTrains'
      }
      sessionStorage.removeItem("Compare")
      sessionStorage.removeItem("All")
      sessionStorage.setItem("Prev", "/SearchResults")
      trains = JSON.parse(sessionStorage.getItem("Trains"));
      changedtrains = _.cloneDeep(trains)
      changeTrains();
      },[])

      return (
        <div>
        <header className="site-navbar pt-5" role="banner">
          <div className="container-fluid">
            <div className="px-5 row align-items-center">
              <div className="col-4 badge rounded-pill Pillblack">
                <h1 className="mb-0 fs-1"><a href="/" className="mb-0"><img className="LogoImg" src="https://cdn.glitch.global/bcbe3d98-25d5-4c98-a874-76548ff73b90/logo.png?v=1671633863339" /></a></h1>
              </div>
              <div className="col-2" />
              <div className="col-6 py-2 px-5 d-flex align-items-center justify-content-between badge rounded-pill Pillwhite">
                <a href="/en/SearchResults">
                  <div className="flag england">
                  </div>
                </a>
                <div>
                  {logmain}
                  <h2 className="mb-0 fs-2 px-4 float-end"><a href="/Contact" className="mb-0">Kontakt</a></h2>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container-fluid px-5">
          <div className="px-5 py-5">
            <div className="Pillultrablack">
              <div className="row text-center align-items-center justify-content-center noyPad py-4">
                <div className="row mb-3">
                  <h2 className="Relation">Pociągi relacji: {sessionStorage.getItem("From")} - {sessionStorage.getItem("To")}</h2>
                </div>
                <div className="col-1">
                  <button className="Arrow" id="Prev" type='button' onClick={() => {
                      if(!loading){
                       actualtrain -= 1;
                       changeTrains(); 
                      }
                    }
                    }>
                    <i className="arrow-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                      </svg>
                    </i>
                    
                  </button>
                </div>
                <div className="miniform col-3 Train">
                  <div className="row mt-3">
                    <h1 className='Brands' id='Brands'></h1>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Data'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='From'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='To'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Changes'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Seats'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='SeatsType'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Services'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Price'></h6></span>
                  </div>
                  <div className="px-5 mt-4 justify-content-center mb-4">
                    <Formik onSubmit={onSubmit1}>
                      <Form>
                        <button className="button OrangeButton ExtraSmallButton px-4" type="button" onClick={() => {
                            if (!loading){
                              sessionStorage.setItem("Train", JSON.stringify(trains[actualtrain]))
                              window.location.href = '/RouteMenu'
                            }
                          }}><h6 className="pt-1 Smalltext">Zobacz trasę</h6></button>
                        <button className="button OrangeButton ExtraSmallButton px-4 Buy" id="Sub1" type="submit"><h6 className="pt-1 Smalltext" id='Buytext'>Kup bilet</h6></button>
                      </Form>
                    </Formik>
                  </div>
                </div>
                <div className="col-3 mx-5 Train">
                  <div className="miniform">
                    <div className="row mt-3">
                    <h1 className='Brands' id='Brands'></h1>
                    </div>
                    <div className="row px-5 mt-3">
                      <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Data'></h6></span>
                    </div>
                    <div className="row px-5 mt-3">
                      <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='From'></h6></span>
                    </div>
                    <div className="row px-5 mt-3">
                      <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='To'></h6></span>
                    </div>
                    <div className="row px-5 mt-3">
                      <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Changes'></h6></span>
                    </div>
                    <div className="row px-5 mt-3">
                      <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Seats'></h6></span>
                    </div>
                    <div className="row px-5 mt-3">
                      <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='SeatsType'></h6></span>
                    </div>
                    <div className="row px-5 mt-3">
                      <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Services'></h6></span>
                    </div>
                    <div className="row px-5 mt-3">
                      <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Price'></h6></span>
                    </div>
                    <div className="px-5 mt-4 justify-content-center mb-4">
                      <Formik onSubmit={onSubmit2}>
                        <Form>
                          <button className="button OrangeButton ExtraSmallButton px-4" type="button" onClick={() => {
                              if (!loading){
                                sessionStorage.setItem("Train", JSON.stringify(trains[actualtrain + 1]))
                                window.location.href = '/RouteMenu'
                              }
                            }}><h6 className="pt-1 Smalltext">Zobacz trasę</h6></button>
                          <button className="button OrangeButton ExtraSmallButton px-4 Buy" id="Sub2" type="submit"><h6 className="pt-1 Smalltext" id='Buytext'>Kup bilet</h6></button>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
                <div className="miniform col-3  Train">
                  <div className="row mt-3">
                  <h1 className='Brands' id='Brands'></h1>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Data'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='From'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='To'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Changes'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Seats'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='SeatsType'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Services'></h6></span>
                  </div>
                  <div className="row px-5 mt-3">
                    <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Price'></h6></span>
                  </div>
                  <div className="px-5 mt-4 justify-content-center mb-4">
                    <Formik onSubmit={onSubmit3}>
                      <Form>
                        <button className="button OrangeButton ExtraSmallButton px-4" type="button" onClick={() => {
                            if (!loading){
                              sessionStorage.setItem("Train", JSON.stringify(trains[actualtrain + 2]))
                              window.location.href = '/RouteMenu'
                            }
                          }}><h6 className="pt-1 Smalltext">Zobacz trasę</h6></button>
                        <button className="button OrangeButton ExtraSmallButton px-4 Buy" id="Sub3" type="submit"><h6 className="pt-1 Smalltext" id='Buytext'>Kup bilet</h6></button>
                      </Form>
                    </Formik>
                  </div>
                </div>
                <div className="col-1">
                  <button className="Arrow" id="Next" type="button" onClick={() => {
                       if(!loading){
                        actualtrain += 1;
                        changeTrains(); 
                       } 
                    }}>
                    <i className="arrow-right">
                     <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                       <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                     </svg>
                    </i>
                  </button>
                </div>
                <div className='row'>
                  <div className='mt-4 mb-1'>
                    <button className="OrangeButton" onClick={() => {
                        window.location.href = "/"
                      }}>Powrót do wyszukiwania</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
    
};
