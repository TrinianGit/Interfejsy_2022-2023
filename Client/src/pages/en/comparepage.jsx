import React from 'react';
import {useEffect, useState} from "react";
import moment from 'moment';
import "../../styles/loaders.css"
import axios from 'axios';
import _ from 'lodash';
import { Formik, Form } from 'formik';

export default function ComparePage() {

    let trains = [];
    let actualtrain = 0;
  
  let logmain
  
  
  useEffect(() => {
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
        document.querySelector('.site-navbar').classList.add('pt-3')
        document.querySelector('.site-navbar').classList.remove('pt-5')
        document.querySelector('.noyPad').classList.add('smallPadLaptop')
        document.querySelector('.noyPad').classList.add('pt-3')
        document.querySelector('.noyPad').classList.remove('smallPad')
        document.querySelector('.Relation').classList.add('fs-5')
        document.querySelector('.Relation').classList.add('mb-2')
        document.querySelector('.Relation').classList.remove('mt-2')
        document.querySelector('.mx-5').classList.add('mx-3')
        document.querySelector('.mx-5').classList.remove('mx-5')
        Object.values(document.querySelectorAll('.miniform')).map(y => {
          y.classList.add('miniformLaptop')
          y.classList.remove('miniform')
        })
        document.querySelector('.py-5').classList.add('py-4')
        document.querySelector('.py-5').classList.remove('py-5')
        Object.values(document.querySelectorAll('.Brands')).map(y => {
          y.classList.add('fs-5')
        })
        Object.values(document.querySelectorAll('.TextButton')).map(y => {
          y.classList.add('mb-4')
          y.classList.remove('my-4')
        })
        Object.values(document.querySelectorAll('.OrangeButton')).map(y => {
          y.classList.remove('px-4')
        })
        Object.values(document.querySelectorAll('.Label')).map(y => {
          y.parentNode.classList.add('mt-2')
          y.parentNode.classList.remove('mt-3')
        })
       Object.values(document.querySelectorAll('.Labeltext')).map(y => {
          y.style.fontSize = '14px'
        })
    }

  },[])
  
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
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="It is possible to transport animals on this train.">
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
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="It is possible to transport a bicycle/extra luggage on this train.">
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
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="The train contains wagons adapted to transport disabled people (e.g. places for the disabled, platforms enabling wheelchair users to enter the train).">
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
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Train equipped with sleeping cars.">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bed" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6"></path>
                          <circle cx="7" cy="10" r="1"></circle>
                       </svg>
                  </i>`
      }
      if (arr[4] === '1'){
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="On the train you can connect to free WiFi provided by the carrier.">
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
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="This train has diner/mobile snack cart.">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools-kitchen-2" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3"></path>
                       </svg>
                  </i>`
      }
      if (arr[6] === '1'){
        inner += `<i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="On the train, it is possible to send a conductor's parcel (an additional fee will be required when sending it).">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"/>
                      </svg>
                  </i>`
      }
      return inner
    }
  
  
  
  if(sessionStorage.getItem("LoggedIn") === '1'){
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/UserAccount" className="mb-0">My Account</a></h2>
  }
  else{
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/Login?#" className="mb-0">Log in</a></h2>
  }
  
  
    async function SortTrains() {
      if (sessionStorage.getItem("Compare") === 'Price'){
        await trains.sort((a,b) => {
          if (parseFloat(a.price.replace('zł', '').replace(',', '.')) === parseFloat(b.price.replace('zł', '').replace(',', '.'))){
            return Math.abs(moment(a.from, "hh:mm").diff(moment(sessionStorage.getItem("Time"), "hh:mm")) / 60000) < Math.abs(moment(b.from, "hh:mm").diff(moment(sessionStorage.getItem("Time"), "hh:mm")) / 60000) ? -1 : 1;
          }
          else{
            return parseFloat(a.price.replace('zł', '').replace(',', '.')) < parseFloat(b.price.replace('zł', '').replace(',', '.')) ? -1 : 1;
          }
        })
      }
      else if (sessionStorage.getItem("Compare") === 'Seats'){
        await trains.sort((a,b) => {
          if (a.seats === b.seats){
            return Math.abs(moment(a.from, "hh:mm").diff(moment(sessionStorage.getItem("Time"), "hh:mm")) / 60000) < Math.abs(moment(b.from, "hh:mm").diff(moment(sessionStorage.getItem("Time"), "hh:mm")) / 60000) ? -1 : 1;
          }
          else{
            return a.seats > b.seats ? -1 : 1;
          }
        })
      }
      else if (sessionStorage.getItem("Compare") === 'TimeTrav'){
        await trains.sort((a,b) => {
          if (moment(a.to, "hh:mm").diff(moment(a.from, "hh:mm")) / 60000 === moment(b.to, "hh:mm").diff(moment(b.from, "hh:mm")) / 60000){
            return Math.abs(moment(a.from, "hh:mm").diff(moment(sessionStorage.getItem("Time"), "hh:mm")) / 60000) < Math.abs(moment(b.from, "hh:mm").diff(moment(sessionStorage.getItem("Time"), "hh:mm")) / 60000) ? -1 : 1;
          }
          else{
            if (moment(a.to, "hh:mm").diff(moment(a.from, "hh:mm")) / 60000 < 0){
              return (1440 - moment(a.to, "hh:mm").diff(moment(a.from, "hh:mm")) / 60000) < (moment(b.to, "hh:mm").diff(moment(b.from, "hh:mm")) / 60000) ? -1 : 1;
            }
            else if (moment(b.to, "hh:mm").diff(moment(b.from, "hh:mm")) / 60000 < 0){
              return (moment(a.to, "hh:mm").diff(moment(a.from, "hh:mm")) / 60000) < (1440 - moment(b.to, "hh:mm").diff(moment(b.from, "hh:mm")) / 60000) ? -1 : 1;
            }
            else if (moment(b.to, "hh:mm").diff(moment(b.from, "hh:mm")) / 60000 < 0 && moment(a.to, "hh:mm").diff(moment(a.from, "hh:mm")) / 60000 < 0){
              return (1440 - moment(a.to, "hh:mm").diff(moment(a.from, "hh:mm")) / 60000) < (1440 - moment(b.to, "hh:mm").diff(moment(b.from, "hh:mm")) / 60000) ? -1 : 1;
            }
            else{
              return moment(a.to, "hh:mm").diff(moment(a.from, "hh:mm")) / 60000 < moment(b.to, "hh:mm").diff(moment(b.from, "hh:mm")) / 60000 ? -1 : 1;
            }
          }
        })
      }
      else if (sessionStorage.getItem("Compare") === 'Changes'){
        await trains.sort((a,b) => {
          if (a.startStations.length === b.startStations.length){
            return Math.abs(moment(a.from, "hh:mm").diff(moment(sessionStorage.getItem("Time"), "hh:mm")) / 60000) < Math.abs(moment(b.from, "hh:mm").diff(moment(sessionStorage.getItem("Time"), "hh:mm")) / 60000) ? -1 : 1;
          }
          else{
            return a.startStations.length < b.startStations.length ? -1 : 1;
          }
        })
      }
    }
        
    const onSubmit1 = async () => {
      sessionStorage.setItem("Train", JSON.stringify(trains[actualtrain]))
      window.location.href = "/en/BuyInput"
    }
    
    const onSubmit2 = async() => {
      sessionStorage.setItem("Train", JSON.stringify(trains[actualtrain + 1]))
      window.location.href = "/en/BuyInput"
    }
    
    const onSubmit3 = async () => {
      sessionStorage.setItem("Train", JSON.stringify(trains[actualtrain + 2]))
      window.location.href = "/en/BuyInput"
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
  
    async function changeTrains(){
      console.log(actualtrain)
      if (actualtrain + 3 >= trains.length){
        document.querySelector('#Next').style.display = "none"
        if (actualtrain + 3 >= trains.length){
          actualtrain = trains.length - 3
        }
      }
      else{
        document.querySelector('#Next').style.display = "block"
      }
      if (actualtrain <= 0){
        document.querySelector('#Prev').style.display = "none";
        actualtrain = 0
      }
      else{
        document.querySelector('#Prev').style.display = "block";
      }
      
      
      let i = actualtrain;
      let now = moment(moment(), "DD-MM-YYYY hh:mm")
      
      Object.values(document.querySelectorAll('.Train')).map(y => {
        let then = sessionStorage.getItem("Date") + " " +  trains[i].from
        let timediff = moment(then,"DD/MM/YYYY HH:mm").diff(moment(now,"DD/MM/YYYY HH:mm")) / 60000;
        y.querySelector('#Brands').innerHTML = `${trains[i].brandlogos}`
        y.querySelector('#Data').innerHTML = `Date: ${sessionStorage.getItem("Date")}`
        y.querySelector('#From').innerHTML = `Departure: ${trains[i].from}`
        y.querySelector('#To').innerHTML = `Arrival: ${trains[i].to}`
        
        if (i == 0){
          y.querySelector(".TextButton").innerHTML = "Best offer"
        }
        else {
          y.querySelector(".TextButton").innerHTML = `${i+1} offer`
        }
        
        if(trains[i].brandlogos.includes('IC') || trains[i].brandlogos.includes('EIP')){
          y.querySelector("#Services").innerHTML = `Services: ${returnIcons(sessionStorage.getItem("ICservice"))}`
        }
        else if(!trains[i].brandlogos.includes('TLK') && !trains[i].brandlogos.includes('PR')){
          y.querySelector("#Services").innerHTML = `Services: ${returnIcons(sessionStorage.getItem("Rservice"))}`
        }
        else if (trains[i].brandlogos.includes('PR')){
          y.querySelector("#Services").innerHTML = `Services: ${returnIcons(sessionStorage.getItem("PRservice"))}`
        }
        else{
          y.querySelector("#Services").innerHTML = `Services: ${returnIcons(sessionStorage.getItem("TLKservice"))}`
        }
        
        if (trains[i].startStations.length - 1 > 0){
          if (trains[i].startStations.length - 1 === 1){
            y.querySelector('#Changes').innerHTML = `Changes: ${trains[i].startStations.length - 1} <i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Station: ${trains[i].startStations[1]} \n Time to change: ${Math.floor(Math.random() * 10 + 5)}min">
                      <svg fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                      </svg>
                  </i>`
          }
          else if (trains[i].startStations.length > 1){
            y.querySelector('#Changes').innerHTML = `Changes: ${trains[i].startStations.length - 1} <i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="1. Station: ${trains[i].startStations[1]}\nTime to change: ${Math.floor(Math.random() * 10 + 5)}min\n2. Station: ${trains[i].startStations[2]}\nTime to change: ${Math.floor(Math.random() * 10 + 5)}min">
                      <svg fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                      </svg>
                  </i>`
          }
        }
        else {
          y.querySelector('#Changes').innerHTML = `Changes: none`
        }
        
        if(timediff > 1440){
          y.querySelector('#Seats').innerHTML = "Many seats available"
        }
        else if (timediff > 360){
          y.querySelector('#Seats').innerHTML = "Limited seats available"
        }
        else if (timediff > 30){
          y.querySelector('#Seats').innerHTML = "Last seats available"
        }
        else {
          y.querySelector('#Seats').innerHTML = "No seats available"
          y.querySelector('#Buytext').innerHTML = "No seats"
          y.querySelector('.Buy').style.background='#ff4d4d';
          y.querySelector('.Buy').style.color='#000000';
          y.querySelector('.Buy').disabled = true;
        }
        
        if (trains[i].brandlogos.includes('IC')){
           if(window.screen.width <= 1800){
            y.querySelector('#SeatsType').innerHTML = "Non-comp. + Comp."
          }
          else{
            y.querySelector('#SeatsType').innerHTML = "Non-compartment + Compartment"
          }
        }
        else if(trains[i].brandlogos.includes('TLK')){
          y.querySelector('#SeatsType').innerHTML = "Compartment"
        }
        else{
          y.querySelector('#SeatsType').innerHTML = "Non-compartment"
        }
        if (trains[i].price === "Brak ceny"){
          
          y.querySelector('#Price').innerHTML = `Price: ${trains[i].price}`
        }
        else{
          y.querySelector('#Price').innerHTML = `Price: ${trains[i].price}`
        }
        

        i += 1
      })
      scripter()
    }

    useEffect(async () => {
      if (sessionStorage.getItem("Trains") === null){
        window.location.href = '/CompareTrains'
      }
      trains = JSON.parse(sessionStorage.getItem("Trains"));
      sessionStorage.setItem("Prev", "/en/CompareResults")
      await trains.forEach(function(train, index){
        if (train.price === 'Brak ceny'){
          trains[index].price = countprice(train.brandlogos, moment(train.to, "HH:mm").diff(moment(train.from, "HH:mm")) / 60000).toFixed(2).replace('.', ',') + "zł"
        }
      })
      
      let now = moment(moment(), "DD-MM-YYYY hh:mm")
      
      await trains.forEach(function(train, index){
        let then = sessionStorage.getItem("Date") + " " +  train.from
        var timediff = moment(then,"DD/MM/YYYY HH:mm").diff(moment(now,"DD/MM/YYYY HH:mm")) / 60000;
        if(timediff > 1440){
          train.seats = 4
        }
        else if (timediff > 360){
          train.seats = 3
        }
        else if (timediff > 30){
          train.seats = 2
        }
        else {
          train.seats = 1
        }
      })
      
      await SortTrains();
      changeTrains();
      },[])

      return (
        <div>
        <header className="site-navbar pt-5" role="banner">
          <div className="container-fluid">
            <div className="px-5 row align-items-center">
              <div className="col-4 badge rounded-pill Pillblack">
                <h1 className="mb-0 fs-1"><a href="/en/" className="mb-0"><img className="LogoImg" src="https://cdn.glitch.global/bcbe3d98-25d5-4c98-a874-76548ff73b90/logo.png?v=1671633863339" /></a></h1>
              </div>
              <div className="col-2" />
              <div className="col-6 py-2 px-5 d-flex align-items-center justify-content-between badge rounded-pill Pillwhite">
                <a href="https://centralna-siec-szyn.glitch.me/CompareResults">
                  <div className="flag poland">
                  </div>
              </a>
                <div>
                  {logmain}
                  <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/Contact" className="mb-0">Contact</a></h2>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container-fluid px-5">
          <div className="px-5 py-5">
            <div className="Pillultrablack">
              <div className="row text-center align-items-center justify-content-center noyPad">
                <h2 className="Relation mt-2">Trains' relation: {sessionStorage.getItem("From")} - {sessionStorage.getItem("To")}</h2>
                <div className="col-1">
                  <button className="Arrow" id="Prev" type='button' onClick={() => {
                       actualtrain -= 1;
                       changeTrains();
                    }
                    }>
                    <i className="arrow-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                      </svg>
                    </i>
                    
                  </button>
                </div>
                <div className="col-3 Train">
                  <button className="TextButton my-4 px-4" disabled>
                    Best offer
                  </button>
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
                      <span className="badge rounded-pill text-bg-primary pt-1 pb-0 Shadow Label"><h6 className="Labeltext" id='Price'>Cena:</h6></span>
                    </div>
                    <div className="px-5 mt-4 justify-content-center mb-4">
                      <Formik onSubmit={onSubmit1}>
                        <Form>
                          <button className="button OrangeButton ExtraSmallButton px-4" type="button" onClick={() => {
                              sessionStorage.setItem("Train", JSON.stringify(trains[actualtrain]))
                              window.location.href = '/en/RouteMenu'
                          }}><h6 className="pt-1 Smalltext">See route</h6></button>
                          <button className="button OrangeButton ExtraSmallButton px-4 Buy" type="submit"><h6 className="pt-1 Smalltext" id='Buytext'>Buy ticket</h6></button>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
                <div className="col-3 mx-5 Train">
                  <button className="TextButton my-4 px-4" disabled>
                    
                  </button>
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
                              sessionStorage.setItem("Train", JSON.stringify(trains[actualtrain]))
                              window.location.href = '/en/RouteMenu'
                          }}><h6 className="pt-1 Smalltext">See route</h6></button>
                          <button className="button OrangeButton ExtraSmallButton px-4 Buy" type="submit"><h6 className="pt-1 Smalltext" id='Buytext'>Buy ticket</h6></button>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
                <div className="col-3  Train">
                  <button className="TextButton my-4 px-4" disabled>
                    
                  </button>
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
                      <Formik onSubmit={onSubmit3}>
                        <Form>
                          <button className="button OrangeButton ExtraSmallButton px-4" type="button" onClick={() => {
                              sessionStorage.setItem("Train", JSON.stringify(trains[actualtrain]))
                              window.location.href = '/en/RouteMenu'
                          }}><h6 className="pt-1 Smalltext">See route</h6></button>
                          <button className="button OrangeButton ExtraSmallButton px-4 Buy" type="submit"><h6 className="pt-1 Smalltext" id='Buytext'>Buy ticket</h6></button>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <button className="Arrow" id="Next" type="button" onClick={() => {
                        actualtrain += 1;
                        changeTrains(); 
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
                        window.location.href = "/en/"
                      }}>Back to main page</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
    
};