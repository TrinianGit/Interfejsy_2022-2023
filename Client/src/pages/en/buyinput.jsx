import * as React from "react";
import { useEffect } from 'react';
import { Formik, Form } from 'formik';


export default function BuyInput() {
  
  let clicked = false
  
  let logmain
  
  if(sessionStorage.getItem("LoggedIn") === '1'){
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/UserAccount" className="mb-0">My Account</a></h2>
  }
  else{
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/Login?#" className="mb-0">Log in</a></h2>
  }
  
  useEffect(() => {
    
    if(window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.smallPad').classList.add('noyPad')
      document.querySelector('.smallPad').classList.add('py-4')
      document.querySelector('.smallPad').classList.remove('smallPad')
      document.querySelector('.Header').classList.add('fs-2')
      document.querySelector('.Header').classList.remove('mt-5')
      document.querySelector('.Header').classList.add('my-4')
      document.querySelector('.miniform').classList.remove('col-6')
      document.querySelector('.miniform').classList.add('col-7')
      document.querySelector('.form-control').classList.add('mb-3')
      document.querySelector('.form-control').classList.remove('my-4')
      document.querySelector('.Laptop').classList.add('my-3')
      document.querySelector('.Laptop').classList.remove('my-4')
    }
    
    
    if (sessionStorage.getItem("Email") !== null){
      sessionStorage.setItem("EmailBuy", sessionStorage.getItem("Email"))
    }
    if (sessionStorage.getItem("Name") !== null){
      sessionStorage.setItem("NameBuy", sessionStorage.getItem("Name"))
    }
    
    if (sessionStorage.getItem("TicketNum1") === null){
      sessionStorage.setItem("TicketNum1", '1')
      sessionStorage.setItem("TicketType1", ['1', 'Normal ticket'])
    }
    if (sessionStorage.getItem("TicketNum2") === null){
      sessionStorage.setItem("TicketNum2", '1')
      sessionStorage.setItem("TicketType2", ['1', 'Normal ticket'])
    }
    if (sessionStorage.getItem("TicketNum3") === null){
      sessionStorage.setItem("TicketNum3", '1')
      sessionStorage.setItem("TicketType3", ['1', 'Normal ticket'])
    }
    if (sessionStorage.getItem("TicketNum4") === null){
      sessionStorage.setItem("TicketNum4", '1')
      sessionStorage.setItem("TicketType4", ['1', 'Normal ticket'])
    }
    if (sessionStorage.getItem("Discounts") === null || sessionStorage.getItem("Discounts") === '0'){
      sessionStorage.setItem("Discounts", '0')
      
      document.querySelector('#TicketDis1').style.display = 'none'
      document.querySelector('#TicketType1').style.display = 'none'
      
      document.querySelector('#TicketDis2').style.display = 'none'
      document.querySelector('#TicketType2').style.display = 'none'

      document.querySelector('#TicketDis3').style.display = 'none'
      document.querySelector('#TicketType3').style.display = 'none'

      document.querySelector('#TicketDis4').style.display = 'none'
      document.querySelector('#TicketType4').style.display = 'none'
    }
    else if (sessionStorage.getItem("Discounts") === '1'){
      document.querySelector('#TicketDis2').style.display = 'none'
      document.querySelector('#TicketType2').style.display = 'none'

      document.querySelector('#TicketDis3').style.display = 'none'
      document.querySelector('#TicketType3').style.display = 'none'

      document.querySelector('#TicketDis4').style.display = 'none'
      document.querySelector('#TicketType4').style.display = 'none'
      
      document.querySelector('#Discounts').innerHTML = '1 Typ Biletu'
    }
    else if (sessionStorage.getItem("Discounts") === '2'){
      document.querySelector('#TicketDis3').style.display = 'none'
      document.querySelector('#TicketType3').style.display = 'none'

      document.querySelector('#TicketDis4').style.display = 'none'
      document.querySelector('#TicketType4').style.display = 'none'
      
      document.querySelector('#Discounts').innerHTML = '2 Typy Biletów'
    }
    else if (sessionStorage.getItem("Discounts") === '3'){
      document.querySelector('#TicketDis4').style.display = 'none'
      document.querySelector('#TicketType4').style.display = 'none'
      
      document.querySelector('#Discounts').innerHTML = '3 Typy Biletów'
    }
    else if (sessionStorage.getItem("Discounts") === '4'){
      document.querySelector('#Discounts').innerHTML = '4 Typy Biletów'
    }
       
    document.querySelector('#TicketDis1').innerHTML = sessionStorage.getItem("TicketNum1")
    document.querySelector('#TicketDis2').innerHTML = sessionStorage.getItem("TicketNum2")
    document.querySelector('#TicketDis3').innerHTML = sessionStorage.getItem("TicketNum3")
    document.querySelector('#TicketDis4').innerHTML = sessionStorage.getItem("TicketNum4")
    
    if (sessionStorage.getItem("TicketType1").split(',')[0] == "Bagaz"){
        document.querySelector('#TicketType1').innerHTML = "Extra baggage ticket"
    }
    else if (sessionStorage.getItem("TicketType1").split(',')[0] == "Zwierze"){
        document.querySelector('#TicketType1').innerHTML = "Pet\'s ticket"
    }
    else{
        document.querySelector('#TicketType1').innerHTML = `${(100.0 - parseFloat(sessionStorage.getItem("TicketType1").split(",")[0] * 100)).toFixed()}% ${sessionStorage.getItem("TicketType1").split(",")[1]}`
    }
    
    if (sessionStorage.getItem("TicketType2").split(',')[0] == "Bagaz"){
        document.querySelector('#TicketType2').innerHTML = "Extra baggage ticket"
    }
    else if (sessionStorage.getItem("TicketType2").split(',')[0] == "Zwierze"){
        document.querySelector('#TicketType2').innerHTML = "Pet\'s ticket"
    }
    else{
        
        document.querySelector('#TicketType2').innerHTML = `${(100.0 - parseFloat(sessionStorage.getItem("TicketType2").split(",")[0] * 100)).toFixed()}% ${sessionStorage.getItem("TicketType2").split(",")[1]}`
       
    }
    
    if (sessionStorage.getItem("TicketType3").split(',')[0] == "Bagaz"){
        document.querySelector('#TicketType3').innerHTML = `Extra baggage ticket`
    }
    else if (sessionStorage.getItem("TicketType3").split(',')[0] == "Zwierze"){
        document.querySelector('#TicketType3').innerHTML = `Pet\'s ticket`
    }
    else{
        document.querySelector('#TicketType3').innerHTML = `${(100.0 - parseFloat(sessionStorage.getItem("TicketType3").split(",")[0] * 100)).toFixed()}% ${sessionStorage.getItem("TicketType3").split(",")[1]}`
    }
    
    if (sessionStorage.getItem("TicketType4").split(',')[0] == "Bagaz"){
        document.querySelector('#TicketType4').innerHTML = `Extra baggage ticket`
    }
    else if (sessionStorage.getItem("TicketType4").split(',')[0] == "Zwierze"){
        document.querySelector('#TicketType4').innerHTML = `Pet\'s ticket`
    }
    else{
        document.querySelector('#TicketType4').innerHTML = `${(100.0 - parseFloat(sessionStorage.getItem("TicketType4").split(",")[0] * 100)).toFixed()}% ${sessionStorage.getItem("TicketType4").split(",")[1]}`
    }
    
    
    
    
    
    if(sessionStorage.getItem("NameBuy") !== null){
      document.getElementById('Name').value = sessionStorage.getItem("NameBuy")
    }
    if (sessionStorage.getItem("EmailBuy") !== null){
      document.getElementById('Email').value = sessionStorage.getItem("EmailBuy")
    }
    
    if (sessionStorage.getItem("Discounts") === '0' || sessionStorage.getItem("Discounts") === null){
      document.querySelector('#Sub').disabled = true
    }
    else{
      document.querySelector('#Sub').disabled = false
    }
    
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
              <a href="https://centralna-siec-szyn.glitch.me/BuyInput?#">
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
          <div className="Pillultrablack smallPad">
            <div className="row justify-content-center">
              <div className="miniform col-6">
                <h1 className="mt-5 text-center Header">You're buying a ticket!</h1>
                <form action='/en/BuyInfo'>
                    <div className="row px-5 mx-5">
                      <input className="form-control my-4" type="text" id="Name" pattern="[a-zA-Z]+ [a-zA-Z-]+"
                        title="Data should be in format: 'Name Surname' e.g. 'John Goodman'" placeholder="Name and Surname of one of the travellers" onChange={() => {
                                sessionStorage.setItem('NameBuy', document.getElementById('Name').value)
                                }} required/>
                    </div>
                    <div className="row px-5 mx-5">
                      <input className="form-control" id="Email" type="email" placeholder="Email address of the buyer" onChange={() => {
                                sessionStorage.setItem('EmailBuy', document.getElementById('Email').value)
                                }} required/>
                    </div>
                    <div className="row px-5 mx-5 my-4 Laptop justify-content-center">
                      <div className="dropdown p-0">
                        <button className="btn TicketDis dropdown-toggle" id="Discounts" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          How many types of tickets do you need?
                        </button>
                        <ul className="dropdown-menu TicketDisCount">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis1').style.display = 'block'
                                                                                    document.querySelector('#TicketType1').style.display = 'block'
                                
                                                                                    document.querySelector('#TicketDis2').style.display = 'none'
                                                                                    document.querySelector('#TicketType2').style.display = 'none'
                                
                                                                                    document.querySelector('#TicketDis3').style.display = 'none'
                                                                                    document.querySelector('#TicketType3').style.display = 'none'
                                
                                                                                    document.querySelector('#TicketDis4').style.display = 'none'
                                                                                    document.querySelector('#TicketType4').style.display = 'none'
                                
                                                                                    document.querySelector('#Discounts').innerHTML = '1 Type of Ticket'
                                                                                    sessionStorage.setItem("Discounts", '1')
                                                                                    document.querySelector('#Sub').disabled = false
                                                                                        }}>1</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                
                                                                                    document.querySelector('#TicketDis1').style.display = 'block'
                                                                                    document.querySelector('#TicketType1').style.display = 'block'
                                
                                                                                    document.querySelector('#TicketDis2').style.display = 'block'
                                                                                    document.querySelector('#TicketType2').style.display = 'block'
                                
                                                                                    document.querySelector('#TicketDis3').style.display = 'none'
                                                                                    document.querySelector('#TicketType3').style.display = 'none'
                                
                                                                                    document.querySelector('#TicketDis4').style.display = 'none'
                                                                                    document.querySelector('#TicketType4').style.display = 'none'
                                
                                                                                    document.querySelector('#Discounts').innerHTML = '2 Types of Tickets'
                                                                                    sessionStorage.setItem("Discounts", '2')
                                                                                    document.querySelector('#Sub').disabled = false
                                                                                        }}>2</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis1').style.display = 'block'
                                                                                    document.querySelector('#TicketType1').style.display = 'block'
                                
                                                                                    document.querySelector('#TicketDis2').style.display = 'block'
                                                                                    document.querySelector('#TicketType2').style.display = 'block'
                                
                                                                                    document.querySelector('#TicketDis3').style.display = 'block'
                                                                                    document.querySelector('#TicketType3').style.display = 'block'
                                
                                                                                    document.querySelector('#TicketDis4').style.display = 'none'
                                                                                    document.querySelector('#TicketType4').style.display = 'none'
                                
                                                                                    document.querySelector('#Discounts').innerHTML = '3 Types of Tickets'
                                                                                    sessionStorage.setItem("Discounts", '3')
                                                                                    document.querySelector('#Sub').disabled = false
                                                                                        }}>3</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis1').style.display = 'block'
                                                                                    document.querySelector('#TicketType1').style.display = 'block'
                                
                                                                                    document.querySelector('#TicketDis2').style.display = 'block'
                                                                                    document.querySelector('#TicketType2').style.display = 'block'
                                
                                                                                    document.querySelector('#TicketDis3').style.display = 'block'
                                                                                    document.querySelector('#TicketType3').style.display = 'block'
                                
                                                                                    document.querySelector('#TicketDis4').style.display = 'block'
                                                                                    document.querySelector('#TicketType4').style.display = 'block'
                                
                                                                                    document.querySelector('#Discounts').innerHTML = '4 Types of Tickets'
                                                                                    sessionStorage.setItem("Discounts", '4')
                                                                                    document.querySelector('#Sub').disabled = false
                                                                                        }}>4</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row px-5 mx-5 mt-2">
                      <div className="dropdown p-0 col-2">
                        <button className="btn TicketDis dropdown-toggle" id="TicketDis1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          1
                        </button>
                        <ul className="dropdown-menu col-1 TicketDisNum">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis1').innerHTML = '1'
                                                                                    sessionStorage.setItem("TicketNum1", '1')
                                                                                        }}>1</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis1').innerHTML = '2'
                                                                                    sessionStorage.setItem("TicketNum1", '2')
                                                                                        }}>2</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis1').innerHTML = '3'
                                                                                    sessionStorage.setItem("TicketNum1", '3')
                                                                                        }}>3</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis1').innerHTML = '4'
                                                                                    sessionStorage.setItem("TicketNum1", '4')
                                                                                        }}>4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis1').innerHTML = '5'
                                                                                    sessionStorage.setItem("TicketNum1", '5')
                                                                                        }}>5</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis1').innerHTML = '6'
                                                                                    sessionStorage.setItem("TicketNum1", '6')
                                                                                        }}>6</a></li>
                        </ul>
                      </div>
                      <div className="dropdown p-0 col-10">
                        <button className="btn TicketDis w-100 text-start dropdown-toggle" id="TicketType1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          0% Normal ticket
                        </button>
                        <ul className="dropdown-menu TicketDisType fw-bold">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '0% Normal ticket'
                                                                                    sessionStorage.setItem("TicketType1", ['1', 'Normal ticket'])
                                                                                        }}>0% Normal ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '100% Children below 4'
                                                                                    sessionStorage.setItem("TicketType1", ['0', 'Children below 4'])
                                                                                        }}>100% Children below 4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '30% Pensioner\'s ticket'
                                                                                    sessionStorage.setItem("TicketType1", ['0.7', 'Pensioner\'s ticket'])
                                                                                        }}>30% Pensioner's ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '33% Honorary blood donors'
                                                                                    sessionStorage.setItem("TicketType1", ['0.67', 'Honorary blood donors'])
                                                                                        }}>33% Honorary blood donors</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% 2 rides a year (for pensioners)'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', '2 rides a year (for pensioners)'])
                                                                                        }}>37% 2 rides a year (for pensioners)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Blind victims of war (civilian)'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Blind victims of war (civilian)'])
                                                                                        }}>37% Blind victims of war (civilian)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Minors'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Minors'])
                                                                                        }}>37% Minors</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% War invalids'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'War invalids'])
                                                                                        }}>37% War invalids</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Pole\'s Card'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Pole\'s Card'])
                                                                                        }}>37% Pole's Card</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% The blind able to live independently'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'The blind able to live independently'])
                                                                                        }}>37% The blind able to live independently</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% People unable to live independently'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'People unable to live independently'])
                                                                                        }}>37% People unable to live independently</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Parents (Big Family Card)'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Parents (Big Family Card)'])
                                                                                        }}>37% Parents (Big Family Card)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Veterans (1st and 2nd class)'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Veterans (1st and 2nd class)'])
                                                                                        }}>37% Veterans (1st and 2nd class)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '50% Agreement'
                                                                                    sessionStorage.setItem("TicketType1", ['0.5', 'Agreement'])
                                                                                        }}>50% Agreement</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '51% Politically repressed people'
                                                                                    sessionStorage.setItem("TicketType1", ['0.49', 'Politically repressed people'])
                                                                                        }}>51% Politically repressed people</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '51% Combatants'
                                                                                    sessionStorage.setItem("TicketType1", ['0.49', 'Combatants'])
                                                                                        }}>51% Combatants</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '51% Students below 26/Graduate students below 35'
                                                                                    sessionStorage.setItem("TicketType1", ['0.49', 'Students below 26/Graduate students below 35'])
                                                                                        }}>51% Students below 26/Graduate students below 35</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '78% The blind vict. of war unable to live ind. (civ.)'
                                                                                    sessionStorage.setItem("TicketType1", ['0.22', 'The blind vict. of war unable to live ind. (civ.)'])
                                                                                        }}>78% The blind vict. of war unable to live ind. (civ.)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '78% Disabled minors and students'
                                                                                    sessionStorage.setItem("TicketType1", ['0.22', 'Disabled minors and students'])
                                                                                        }}>78% Disabled minors and students</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = 'Combatants/invalids (1st group)'
                                                                                    sessionStorage.setItem("TicketType1", ['0.22', 'Combatants/invalids (1st group)'])
                                                                                        }}>78% Combatants/invalids (1st group)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '78% Soldiers'
                                                                                    sessionStorage.setItem("TicketType1", ['0.22', 'Soldiers'])
                                                                                        }}>78% Soldiers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '80% Family of railway workers'
                                                                                    sessionStorage.setItem("TicketType1", ['0.2', 'Family of railway workers'])
                                                                                        }}>80% Family of railway workers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '95% Guides of combatants/invalids (1st group)'
                                                                                    sessionStorage.setItem("TicketType1", ['0.05', 'Guides of combatants/invalids (1st group)'])
                                                                                        }}>95% Guides of combatants/invalids (1st group)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '95% Guides'
                                                                                    sessionStorage.setItem("TicketType1", ['0.05', 'Guides'])
                                                                                        }}>95% Guides</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '99% Railway workers'
                                                                                    sessionStorage.setItem("TicketType1", ['0.01', 'Railway workers'])
                                                                                        }}>99% Railway workers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = 'Pet\'s ticket'
                                                                                    sessionStorage.setItem("TicketType1", ['Zwierze', 'Pet\'s ticket'])
                                                                                        }}>Pet's ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = 'Extra baggage ticket'
                                                                                    sessionStorage.setItem("TicketType1", ['Bagaz', 'Extra baggage ticket'])
                                                                                        }}>Extra baggage ticket</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row px-5 mx-5 mt-2">
                      <div className="dropdown p-0 col-2">
                        <button className="btn TicketDis dropdown-toggle" id="TicketDis2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          1
                        </button>
                        <ul className="dropdown-menu col-1 TicketDisNum">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis2').innerHTML = '1'
                                                                                    sessionStorage.setItem("TicketNum2", '1')
                                                                                        }}>1</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis2').innerHTML = '2'
                                                                                    sessionStorage.setItem("TicketNum2", '2')
                                                                                        }}>2</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis2').innerHTML = '3'
                                                                                    sessionStorage.setItem("TicketNum2", '3')
                                                                                        }}>3</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis2').innerHTML = '4'
                                                                                    sessionStorage.setItem("TicketNum2", '4')
                                                                                        }}>4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis2').innerHTML = '5'
                                                                                    sessionStorage.setItem("TicketNum2", '5')
                                                                                        }}>5</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis2').innerHTML = '6'
                                                                                    sessionStorage.setItem("TicketNum2", '6')
                                                                                        }}>6</a></li>
                        </ul>
                      </div>
                      <div className="dropdown p-0 col-10">
                        <button className="btn TicketDis w-100 text-start dropdown-toggle" id="TicketType2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          0% Normal ticket
                        </button>
                        <ul className="dropdown-menu TicketDisType fw-bold">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '0% Normal ticket'
                                                                                    sessionStorage.setItem("TicketType2", ['1', 'Normal ticket'])
                                                                                        }}>0% Normal ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '100% Children below 4'
                                                                                    sessionStorage.setItem("TicketType2", ['0', 'Children below 4'])
                                                                                        }}>100% Children below 4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '30% Pensioner\'s ticket'
                                                                                    sessionStorage.setItem("TicketType2", ['0.7', 'Pensioner\'s ticket'])
                                                                                        }}>30% Pensioner's ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '33% Honorary blood donors'
                                                                                    sessionStorage.setItem("TicketType2", ['0.67', 'Honorary blood donors'])
                                                                                        }}>33% Honorary blood donors</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% 2 rides a year (for pensioners)'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', '2 rides a year (for pensioners)'])
                                                                                        }}>37% 2 rides a year (for pensioners)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Blind victims of war (civilian)'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Blind victims of war (civilian)'])
                                                                                        }}>37% Blind victims of war (civilian)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Minors'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Minors'])
                                                                                        }}>37% Minors</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% War invalids'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'War invalids'])
                                                                                        }}>37% War invalids</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Pole\'s Card'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Pole\'s Card'])
                                                                                        }}>37% Pole's Card</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% The blind able to live independently'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'The blind able to live independently'])
                                                                                        }}>37% The blind able to live independently</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% People unable to live independently'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'People unable to live independently'])
                                                                                        }}>37% People unable to live independently</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Parents (Big Family Card)'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Parents (Big Family Card)'])
                                                                                        }}>37% Parents (Big Family Card)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Veterans (1st and 2nd class)'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Veterans (1st and 2nd class)'])
                                                                                        }}>37% Veterans (1st and 2nd class)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '50% Agreement'
                                                                                    sessionStorage.setItem("TicketType2", ['0.5', 'Agreement'])
                                                                                        }}>50% Agreement</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '51% Politically repressed people'
                                                                                    sessionStorage.setItem("TicketType2", ['0.49', 'Politically repressed people'])
                                                                                        }}>51% Politically repressed people</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '51% Combatants'
                                                                                    sessionStorage.setItem("TicketType2", ['0.49', 'Combatants'])
                                                                                        }}>51% Combatants</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '51% Students below 26/Graduate students below 35'
                                                                                    sessionStorage.setItem("TicketType2", ['0.49', 'Students below 26/Graduate students below 35'])
                                                                                        }}>51% Students below 26/Graduate students below 35</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '78% The blind vict. of war unable to live ind. (civ.)'
                                                                                    sessionStorage.setItem("TicketType2", ['0.22', 'The blind vict. of war unable to live ind. (civ.)'])
                                                                                        }}>78% The blind vict. of war unable to live ind. (civ.)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '78% Disabled minors and students'
                                                                                    sessionStorage.setItem("TicketType2", ['0.22', 'Disabled minors and students'])
                                                                                        }}>78% Disabled minors and students</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = 'Combatants/invalids (1st group)'
                                                                                    sessionStorage.setItem("TicketType2", ['0.22', 'Combatants/invalids (1st group)'])
                                                                                        }}>78% Combatants/invalids (1st group)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '78% Soldiers'
                                                                                    sessionStorage.setItem("TicketType2", ['0.22', 'Soldiers'])
                                                                                        }}>78% Soldiers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '80% Family of railway workers'
                                                                                    sessionStorage.setItem("TicketType2", ['0.2', 'Family of railway workers'])
                                                                                        }}>80% Family of railway workers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '95% Guides of combatants/invalids (1st group)'
                                                                                    sessionStorage.setItem("TicketType2", ['0.05', 'Guides of combatants/invalids (1st group)'])
                                                                                        }}>95% Guides of combatants/invalids (1st group)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '95% Guides'
                                                                                    sessionStorage.setItem("TicketType2", ['0.05', 'Guides'])
                                                                                        }}>95% Guides</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '99% Railway workers'
                                                                                    sessionStorage.setItem("TicketType2", ['0.01', 'Railway workers'])
                                                                                        }}>99% Railway workers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = 'Pet\'s ticket'
                                                                                    sessionStorage.setItem("TicketType2", ['Zwierze', 'Pet\'s ticket'])
                                                                                        }}>Pet's ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = 'Extra baggage ticket'
                                                                                    sessionStorage.setItem("TicketType2", ['Bagaz', 'Extra baggage ticket'])
                                                                                        }}>Extra baggage ticket</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row px-5 mx-5 mt-2">
                      <div className="dropdown p-0 col-2">
                        <button className="btn TicketDis dropdown-toggle" id="TicketDis3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          1
                        </button>
                        <ul className="dropdown-menu col-1 TicketDisNum">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis3').innerHTML = '1'
                                                                                    sessionStorage.setItem("TicketNum3", '1')
                                                                                        }}>1</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis3').innerHTML = '2'
                                                                                    sessionStorage.setItem("TicketNum3", '2')
                                                                                        }}>2</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis3').innerHTML = '3'
                                                                                    sessionStorage.setItem("TicketNum3", '3')
                                                                                        }}>3</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis3').innerHTML = '4'
                                                                                    sessionStorage.setItem("TicketNum3", '4')
                                                                                        }}>4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis3').innerHTML = '5'
                                                                                    sessionStorage.setItem("TicketNum3", '5')
                                                                                        }}>5</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis3').innerHTML = '6'
                                                                                    sessionStorage.setItem("TicketNum3", '6')
                                                                                        }}>6</a></li>
                        </ul>
                      </div>
                      <div className="dropdown p-0 col-10">
                        <button className="btn TicketDis w-100 text-start dropdown-toggle" id="TicketType3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          0% Normal ticket
                        </button>
                        <ul className="dropdown-menu TicketDisType fw-bold">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '0% Normal ticket'
                                                                                    sessionStorage.setItem("TicketType3", ['1', 'Normal ticket'])
                                                                                        }}>0% Normal ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '100% Children below 4'
                                                                                    sessionStorage.setItem("TicketType3", ['0', 'Children below 4'])
                                                                                        }}>100% Children below 4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '30% Pensioner\'s ticket'
                                                                                    sessionStorage.setItem("TicketType3", ['0.7', 'Pensioner\'s ticket'])
                                                                                        }}>30% Pensioner's ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '33% Honorary blood donors'
                                                                                    sessionStorage.setItem("TicketType3", ['0.67', 'Honorary blood donors'])
                                                                                        }}>33% Honorary blood donors</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% 2 rides a year (for pensioners)'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', '2 rides a year (for pensioners)'])
                                                                                        }}>37% 2 rides a year (for pensioners)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Blind victims of war (civilian)'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Blind victims of war (civilian)'])
                                                                                        }}>37% Blind victims of war (civilian)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Minors'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Minors'])
                                                                                        }}>37% Minors</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% War invalids'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'War invalids'])
                                                                                        }}>37% War invalids</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Pole\'s Card'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Pole\'s Card'])
                                                                                        }}>37% Pole's Card</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% The blind able to live independently'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'The blind able to live independently'])
                                                                                        }}>37% The blind able to live independently</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% People unable to live independently'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'People unable to live independently'])
                                                                                        }}>37% People unable to live independently</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Parents (Big Family Card)'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Parents (Big Family Card)'])
                                                                                        }}>37% Parents (Big Family Card)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Veterans (1st and 2nd class)'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Veterans (1st and 2nd class)'])
                                                                                        }}>37% Veterans (1st and 2nd class)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '50% Agreement'
                                                                                    sessionStorage.setItem("TicketType3", ['0.5', 'Agreement'])
                                                                                        }}>50% Agreement</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '51% Politically repressed people'
                                                                                    sessionStorage.setItem("TicketType3", ['0.49', 'Politically repressed people'])
                                                                                        }}>51% Politically repressed people</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '51% Combatants'
                                                                                    sessionStorage.setItem("TicketType3", ['0.49', 'Combatants'])
                                                                                        }}>51% Combatants</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '51% Students below 26/Graduate students below 35'
                                                                                    sessionStorage.setItem("TicketType3", ['0.49', 'Students below 26/Graduate students below 35'])
                                                                                        }}>51% Students below 26/Graduate students below 35</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '78% The blind vict. of war unable to live ind. (civ.)'
                                                                                    sessionStorage.setItem("TicketType3", ['0.22', 'The blind vict. of war unable to live ind. (civ.)'])
                                                                                        }}>78% The blind vict. of war unable to live ind. (civ.)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '78% Disabled minors and students'
                                                                                    sessionStorage.setItem("TicketType3", ['0.22', 'Disabled minors and students'])
                                                                                        }}>78% Disabled minors and students</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = 'Combatants/invalids (1st group)'
                                                                                    sessionStorage.setItem("TicketType3", ['0.22', 'Combatants/invalids (1st group)'])
                                                                                        }}>78% Combatants/invalids (1st group)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '78% Soldiers'
                                                                                    sessionStorage.setItem("TicketType3", ['0.22', 'Soldiers'])
                                                                                        }}>78% Soldiers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '80% Family of railway workers'
                                                                                    sessionStorage.setItem("TicketType3", ['0.2', 'Family of railway workers'])
                                                                                        }}>80% Family of railway workers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '95% Guides of combatants/invalids (1st group)'
                                                                                    sessionStorage.setItem("TicketType3", ['0.05', 'Guides of combatants/invalids (1st group)'])
                                                                                        }}>95% Guides of combatants/invalids (1st group)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '95% Guides'
                                                                                    sessionStorage.setItem("TicketType3", ['0.05', 'Guides'])
                                                                                        }}>95% Guides</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '99% Railway workers'
                                                                                    sessionStorage.setItem("TicketType3", ['0.01', 'Railway workers'])
                                                                                        }}>99% Railway workers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = 'Pet\'s ticket'
                                                                                    sessionStorage.setItem("TicketType3", ['Zwierze', 'Pet\'s ticket'])
                                                                                        }}>Pet's ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = 'Extra baggage ticket'
                                                                                    sessionStorage.setItem("TicketType3", ['Bagaz', 'Extra baggage ticket'])
                                                                                        }}>Extra baggage ticket</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row px-5 mx-5 mt-2">
                      <div className="dropdown p-0 col-2">
                        <button className="btn TicketDis dropdown-toggle" id="TicketDis4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          1
                        </button>
                        <ul className="dropdown-menu col-1 TicketDisNum">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis4').innerHTML = '1'
                                                                                    sessionStorage.setItem("TicketNum4", '1')
                                                                                        }}>1</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis4').innerHTML = '2'
                                                                                    sessionStorage.setItem("TicketNum4", '2')
                                                                                        }}>2</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis4').innerHTML = '3'
                                                                                    sessionStorage.setItem("TicketNum4", '3')
                                                                                        }}>3</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis4').innerHTML = '4'
                                                                                    sessionStorage.setItem("TicketNum4", '4')
                                                                                        }}>4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis4').innerHTML = '5'
                                                                                    sessionStorage.setItem("TicketNum4", '5')
                                                                                        }}>5</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketDis4').innerHTML = '6'
                                                                                    sessionStorage.setItem("TicketNum4", '6')
                                                                                        }}>6</a></li>
                        </ul>
                      </div>
                      <div className="dropdown p-0 col-10">
                        <button className="btn TicketDis w-100 text-start dropdown-toggle" id="TicketType4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          0% Normal ticket
                        </button>
                        <ul className="dropdown-menu TicketDisType fw-bold">
                                                    <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '0% Normal ticket'
                                                                                    sessionStorage.setItem("TicketType4", ['1', 'Normal ticket'])
                                                                                        }}>0% Normal ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '100% Children below 4'
                                                                                    sessionStorage.setItem("TicketType4", ['0', 'Children below 4'])
                                                                                        }}>100% Children below 4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '30% Pensioner\'s ticket'
                                                                                    sessionStorage.setItem("TicketType4", ['0.7', 'Pensioner\'s ticket'])
                                                                                        }}>30% Pensioner's ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '33% Honorary blood donors'
                                                                                    sessionStorage.setItem("TicketType4", ['0.67', 'Honorary blood donors'])
                                                                                        }}>33% Honorary blood donors</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% 2 rides a year (for pensioners)'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', '2 rides a year (for pensioners)'])
                                                                                        }}>37% 2 rides a year (for pensioners)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Blind victims of war (civilian)'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Blind victims of war (civilian)'])
                                                                                        }}>37% Blind victims of war (civilian)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Minors'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Minors'])
                                                                                        }}>37% Minors</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% War invalids'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'War invalids'])
                                                                                        }}>37% War invalids</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Pole\'s Card'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Pole\'s Card'])
                                                                                        }}>37% Pole's Card</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% The blind able to live independently'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'The blind able to live independently'])
                                                                                        }}>37% The blind able to live independently</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% People unable to live independently'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'People unable to live independently'])
                                                                                        }}>37% People unable to live independently</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Parents (Big Family Card)'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Parents (Big Family Card)'])
                                                                                        }}>37% Parents (Big Family Card)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Veterans (1st and 2nd class)'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Veterans (1st and 2nd class)'])
                                                                                        }}>37% Veterans (1st and 2nd class)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '50% Agreement'
                                                                                    sessionStorage.setItem("TicketType4", ['0.5', 'Agreement'])
                                                                                        }}>50% Agreement</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '51% Politically repressed people'
                                                                                    sessionStorage.setItem("TicketType4", ['0.49', 'Politically repressed people'])
                                                                                        }}>51% Politically repressed people</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '51% Combatants'
                                                                                    sessionStorage.setItem("TicketType4", ['0.49', 'Combatants'])
                                                                                        }}>51% Combatants</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '51% Students below 26/Graduate students below 35'
                                                                                    sessionStorage.setItem("TicketType4", ['0.49', 'Students below 26/Graduate students below 35'])
                                                                                        }}>51% Students below 26/Graduate students below 35</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '78% The blind vict. of war unable to live ind. (civ.)'
                                                                                    sessionStorage.setItem("TicketType4", ['0.22', 'The blind vict. of war unable to live ind. (civ.)'])
                                                                                        }}>78% The blind vict. of war unable to live ind. (civ.)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '78% Disabled minors and students'
                                                                                    sessionStorage.setItem("TicketType4", ['0.22', 'Disabled minors and students'])
                                                                                        }}>78% Disabled minors and students</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = 'Combatants/invalids (1st group)'
                                                                                    sessionStorage.setItem("TicketType4", ['0.22', 'Combatants/invalids (1st group)'])
                                                                                        }}>78% Combatants/invalids (1st group)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '78% Soldiers'
                                                                                    sessionStorage.setItem("TicketType4", ['0.22', 'Soldiers'])
                                                                                        }}>78% Soldiers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '80% Family of railway workers'
                                                                                    sessionStorage.setItem("TicketType4", ['0.2', 'Family of railway workers'])
                                                                                        }}>80% Family of railway workers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '95% Guides of combatants/invalids (1st group)'
                                                                                    sessionStorage.setItem("TicketType4", ['0.05', 'Guides of combatants/invalids (1st group)'])
                                                                                        }}>95% Guides of combatants/invalids (1st group)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '95% Guides'
                                                                                    sessionStorage.setItem("TicketType4", ['0.05', 'Guides'])
                                                                                        }}>95% Guides</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '99% Railway workers'
                                                                                    sessionStorage.setItem("TicketType4", ['0.01', 'Railway workers'])
                                                                                        }}>99% Railway workers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = 'Pet\'s ticket'
                                                                                    sessionStorage.setItem("TicketType4", ['Zwierze', 'Pet\'s ticket'])
                                                                                        }}>Pet's ticket</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = 'Extra baggage ticket'
                                                                                    sessionStorage.setItem("TicketType4", ['Bagaz', 'Extra baggage ticket'])
                                                                                        }}>Extra baggage ticket</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row px-5 mx-4 py-4 mt-2 justify-content-center">
                      <button className="button OrangeButton BuyButton w-25 me-5" type="button" onClick={() => {
                          if(sessionStorage.getItem('Compare') !== null){
                            window.location.href = '/en/CompareResults'
                          }
                          else{
                            window.location.href = '/en/SearchResults'
                          }
                        }}><h5 className="pt-1">Powrót</h5></button>
                      <button className="button OrangeButton BuyButton w-25" id='Sub' type="submit"><h5 className="pt-1">Next</h5></button>
                    </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
