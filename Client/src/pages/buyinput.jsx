import * as React from "react";
import { useEffect } from 'react';
import { Formik, Form } from 'formik';


export default function BuyInput() {
  
  let clicked = false
  
  let logmain
  
  if(sessionStorage.getItem("LoggedIn") === '1'){
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/UserAccount" className="mb-0">Moje konto</a></h2>
  }
  else{
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/Login?#" className="mb-0">Zaloguj się</a></h2>
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
      sessionStorage.setItem("TicketType1", ['1', 'Bilet normalny'])
    }
    if (sessionStorage.getItem("TicketNum2") === null){
      sessionStorage.setItem("TicketNum2", '1')
      sessionStorage.setItem("TicketType2", ['1', 'Bilet normalny'])
    }
    if (sessionStorage.getItem("TicketNum3") === null){
      sessionStorage.setItem("TicketNum3", '1')
      sessionStorage.setItem("TicketType3", ['1', 'Bilet normalny'])
    }
    if (sessionStorage.getItem("TicketNum4") === null){
      sessionStorage.setItem("TicketNum4", '1')
      sessionStorage.setItem("TicketType4", ['1', 'Bilet normalny'])
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
        document.querySelector('#TicketType1').innerHTML = "Bilet na przewóz dodatkowego bagażu"
    }
    else if (sessionStorage.getItem("TicketType1").split(',')[0] == "Zwierze"){
        document.querySelector('#TicketType1').innerHTML = "Bilet dla zwierzęcia"
    }
    else{
        document.querySelector('#TicketType1').innerHTML = `${(100.0 - parseFloat(sessionStorage.getItem("TicketType1").split(",")[0] * 100)).toFixed()}% ${sessionStorage.getItem("TicketType1").split(",")[1]}`
    }
    
    if (sessionStorage.getItem("TicketType2").split(',')[0] == "Bagaz"){
        document.querySelector('#TicketType2').innerHTML = "Bilet na przewóz dodatkowego bagażu"
    }
    else if (sessionStorage.getItem("TicketType2").split(',')[0] == "Zwierze"){
        document.querySelector('#TicketType2').innerHTML = "Bilet dla zwierzęcia"
    }
    else{
        
        document.querySelector('#TicketType2').innerHTML = `${(100.0 - parseFloat(sessionStorage.getItem("TicketType2").split(",")[0] * 100)).toFixed()}% ${sessionStorage.getItem("TicketType2").split(",")[1]}`
       
    }
    
    if (sessionStorage.getItem("TicketType3").split(',')[0] == "Bagaz"){
        document.querySelector('#TicketType3').innerHTML = `Bilet na przewóz dodatkowego bagażu`
    }
    else if (sessionStorage.getItem("TicketType3").split(',')[0] == "Zwierze"){
        document.querySelector('#TicketType3').innerHTML = `Bilet dla zwierzęcia`
    }
    else{
        document.querySelector('#TicketType3').innerHTML = `${(100.0 - parseFloat(sessionStorage.getItem("TicketType3").split(",")[0] * 100)).toFixed()}% ${sessionStorage.getItem("TicketType3").split(",")[1]}`
    }
    
    if (sessionStorage.getItem("TicketType4").split(',')[0] == "Bagaz"){
        document.querySelector('#TicketType4').innerHTML = `Bilet na przewóz dodatkowego bagażu`
    }
    else if (sessionStorage.getItem("TicketType4").split(',')[0] == "Zwierze"){
        document.querySelector('#TicketType4').innerHTML = `Bilet dla zwierzęcia`
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
              <h1 className="mb-0 fs-1"><a href="/" className="mb-0"><img className="LogoImg" src="https://cdn.glitch.global/bcbe3d98-25d5-4c98-a874-76548ff73b90/logo.png?v=1671633863339" /></a></h1>
            </div>
            <div className="col-2" />
            <div className="col-6 py-2 px-5 d-flex align-items-center justify-content-between badge rounded-pill Pillwhite">
              <a href="/en/BuyInput?#">
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
          <div className="Pillultrablack smallPad">
            <div className="row justify-content-center">
              <div className="miniform col-6">
                <h1 className="mt-5 text-center Header">Kupujesz bilet!</h1>
                <form action='/BuyInfo'>
                    <div className="row px-5 mx-5">
                      <input className="form-control my-4" type="text" id="Name" pattern="[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+ [a-zA-Z-żźćńółęąśŻŹĆĄŚĘŁÓŃ]+"
                        title="Dane powinny być w formacie 'Imię Nazwisko' np. 'Jan Kowalski'" placeholder="Imię i nazwisko jednego z podróżnych" onChange={() => {
                                sessionStorage.setItem('NameBuy', document.getElementById('Name').value)
                                }} required/>
                    </div>
                    <div className="row px-5 mx-5">
                      <input className="form-control" id="Email" type="email" placeholder="Adres e-mail kupującego" onChange={() => {
                                sessionStorage.setItem('EmailBuy', document.getElementById('Email').value)
                                }} required/>
                    </div>
                    <div className="row px-5 mx-5 my-4 Laptop justify-content-center">
                      <div className="dropdown p-0">
                        <button className="btn TicketDis dropdown-toggle" id="Discounts" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Ile typów biletów potrzeba?
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
                                
                                                                                    document.querySelector('#Discounts').innerHTML = '1 Typ Biletu'
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
                                
                                                                                    document.querySelector('#Discounts').innerHTML = '2 Typy Biletów'
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
                                
                                                                                    document.querySelector('#Discounts').innerHTML = '3 Typy Biletów'
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
                                
                                                                                    document.querySelector('#Discounts').innerHTML = '4 Typy Biletów'
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
                          0% Bilet normalny
                        </button>
                        <ul className="dropdown-menu TicketDisType fw-bold">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '0% Bilet normalny'
                                                                                    sessionStorage.setItem("TicketType1", ['1', 'Bilet normalny'])
                                                                                        }}>0% Bilet normalny</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '100% Dziecko do lat 4'
                                                                                    sessionStorage.setItem("TicketType1", ['0', 'Dziecko do lat 4'])
                                                                                        }}>100% Dziecko do lat 4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '30% Bilet dla seniora'
                                                                                    sessionStorage.setItem("TicketType1", ['0.7', 'Bilet dla seniora'])
                                                                                        }}>30% Bilet dla seniora</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '33% Honorowy Dawca Krwi'
                                                                                    sessionStorage.setItem("TicketType1", ['0.67', 'Honorowy Dawca Krwi'])
                                                                                        }}>33% Honorowy Dawca Krwi</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% 2 przejazdy w roku (emeryt/rencista)'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', '2 przejazdy w roku (emeryt/rencista)'])
                                                                                        }}>37% 2 przejazdy w roku (emeryt/rencista)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Cywilna niewidoma ofiara działań wojennych'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Cywilna niewidoma ofiara działań wojennych'])
                                                                                        }}>37% Cywilna niewidoma ofiara działań wojennych</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Dzieci/Młodzież'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Dzieci/Młodzież'])
                                                                                        }}>37% Dzieci/Młodzież</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Inwalidzi wojenni i wojskowi'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Inwalidzi wojenni i wojskowi'])
                                                                                        }}>37% Inwalidzi wojenni i wojskowi</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Karta Polaka'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Karta Polaka'])
                                                                                        }}>37% Karta Polaka</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Os. niewidome zdolne do sam.egzyst.'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Os. niewidome zdolne do sam.egzyst.'])
                                                                                        }}>37% Os. niewidome zdolne do sam.egzyst.</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Os. niezd. do sam. egzystencji'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Os. niezd. do sam. egzystencji'])
                                                                                        }}>37% Os. niezd. do sam. egzystencji</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Rodzic/Małżonek - Karta Dużej Rodziny'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Rodzic/Małżonek - Karta Dużej Rodziny'])
                                                                                        }}>37% Rodzic/Małżonek - Karta Dużej Rodziny</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '37% Weterani - klasa 1 / klasa 2'
                                                                                    sessionStorage.setItem("TicketType1", ['0.63', 'Weterani - klasa 1 / klasa 2'])
                                                                                        }}>37% Weterani - klasa 1 / klasa 2</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '50% Umowa'
                                                                                    sessionStorage.setItem("TicketType1", ['0.5', 'Umowa'])
                                                                                        }}>50% Umowa</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '51% Dział. opoz. antykom./os. represjonowane politycznie'
                                                                                    sessionStorage.setItem("TicketType1", ['0.49', 'Dział. opoz. antykom./os. represjonowane politycznie'])
                                                                                        }}>51% Dział. opoz. antykom./os. represjonowane politycznie</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '51% Kombatanci'
                                                                                    sessionStorage.setItem("TicketType1", ['0.49', 'Kombatanci'])
                                                                                        }}>51% Kombatanci</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '51% Studenci do 26 lat/Doktoranci do 35 lat'
                                                                                    sessionStorage.setItem("TicketType1", ['0.49', 'Studenci do 26 lat/Doktoranci do 35 lat'])
                                                                                        }}>51% Studenci do 26 lat/Doktoranci do 35 lat</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '78% Cywile niewid. ofiary wojny niezd. do sam. egzyst.'
                                                                                    sessionStorage.setItem("TicketType1", ['0.22', 'Cywile niewid. ofiary wojny niezd. do sam. egzyst.'])
                                                                                        }}>78% Cywile niewid. ofiary wojny niezd. do sam. egzyst.</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '78% Dzieci/Młodzież/Studenci niepełnosprawni'
                                                                                    sessionStorage.setItem("TicketType1", ['0.22', 'Dzieci/Młodzież/Studenci niepełnosprawni'])
                                                                                        }}>78% Dzieci/Młodzież/Studenci niepełnosprawni</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = 'Kombatant/Inwalida - I grupa'
                                                                                    sessionStorage.setItem("TicketType1", ['0.22', 'Kombatant/Inwalida - I grupa'])
                                                                                        }}>78% Kombatant/Inwalida - I grupa</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '78% Żołnierze'
                                                                                    sessionStorage.setItem("TicketType1", ['0.22', 'Żołnierze'])
                                                                                        }}>78% Żołnierze</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '80% Rodzina pracownika kolei'
                                                                                    sessionStorage.setItem("TicketType1", ['0.2', 'Rodzina pracownika kolei'])
                                                                                        }}>80% Rodzina pracownika kolei</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '95% Przewodnik kombatanta/inwalidy I grupy'
                                                                                    sessionStorage.setItem("TicketType1", ['0.05', 'Przewodnik kombatanta/inwalidy I grupy'])
                                                                                        }}>95% Przewodnik kombatanta/inwalidy I grupy</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '95% Przewodnik/Opiekun'
                                                                                    sessionStorage.setItem("TicketType1", ['0.05', 'Przewodnik/Opiekun'])
                                                                                        }}>95% Przewodnik/Opiekun</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = '99% Pracownik kolei'
                                                                                    sessionStorage.setItem("TicketType1", ['0.01', 'Pracownik kolei'])
                                                                                        }}>99% Pracownik kolei</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = 'Bilet dla zwierzęcia'
                                                                                    sessionStorage.setItem("TicketType1", ['Zwierze', 'Bilet dla zwierzęcia'])
                                                                                        }}>Bilet dla zwierzęcia</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType1').innerHTML = 'Bilet na przewóz dodatkowego bagażu'
                                                                                    sessionStorage.setItem("TicketType1", ['Bagaz', 'Bilet na przewóz dodatkowego bagażu'])
                                                                                        }}>Bilet na przewóz dodatkowego bagażu</a></li>
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
                          0% Bilet normalny
                        </button>
                        <ul className="dropdown-menu TicketDisType fw-bold">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '0% Bilet normalny'
                                                                                    sessionStorage.setItem("TicketType2", ['1', 'Bilet normalny'])
                                                                                        }}>0% Bilet normalny</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '100% Dziecko do lat 4'
                                                                                    sessionStorage.setItem("TicketType2", ['0', 'Dziecko do lat 4'])
                                                                                        }}>100% Dziecko do lat 4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '30% Bilet dla seniora'
                                                                                    sessionStorage.setItem("TicketType2", ['0.7', 'Bilet dla seniora'])
                                                                                        }}>30% Bilet dla seniora</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '33% Honorowy Dawca Krwi'
                                                                                    sessionStorage.setItem("TicketType2", ['0.67', 'Honorowy Dawca Krwi'])
                                                                                        }}>33% Honorowy Dawca Krwi</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% 2 przejazdy w roku (emeryt/rencista)'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', '2 przejazdy w roku (emeryt/rencista)'])
                                                                                        }}>37% 2 przejazdy w roku (emeryt/rencista)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Cywilna niewidoma ofiara działań wojennych'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Cywilna niewidoma ofiara działań wojennych'])
                                                                                        }}>37% Cywilna niewidoma ofiara działań wojennych</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Dzieci/Młodzież'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Dzieci/Młodzież'])
                                                                                        }}>37% Dzieci/Młodzież</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Inwalidzi wojenni i wojskowi'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Inwalidzi wojenni i wojskowi'])
                                                                                        }}>37% Inwalidzi wojenni i wojskowi</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Karta Polaka'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Karta Polaka'])
                                                                                        }}>37% Karta Polaka</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Os. niewidome zdolne do sam.egzyst.'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Os. niewidome zdolne do sam.egzyst.'])
                                                                                        }}>37% Os. niewidome zdolne do sam.egzyst.</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Os. niezd. do sam. egzystencji'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Os. niezd. do sam. egzystencji'])
                                                                                        }}>37% Os. niezd. do sam. egzystencji</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Rodzic/Małżonek - Karta Dużej Rodziny'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Rodzic/Małżonek - Karta Dużej Rodziny'])
                                                                                        }}>37% Rodzic/Małżonek - Karta Dużej Rodziny</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '37% Weterani - klasa 1 / klasa 2'
                                                                                    sessionStorage.setItem("TicketType2", ['0.63', 'Weterani - klasa 1 / klasa 2'])
                                                                                        }}>37% Weterani - klasa 1 / klasa 2</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '50% Umowa'
                                                                                    sessionStorage.setItem("TicketType2", ['0.5', 'Umowa'])
                                                                                        }}>50% Umowa</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '51% Dział. opoz. antykom./os. represjonowane politycznie'
                                                                                    sessionStorage.setItem("TicketType2", ['0.49', 'Dział. opoz. antykom./os. represjonowane politycznie'])
                                                                                        }}>51% Dział. opoz. antykom./os. represjonowane politycznie</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '51% Kombatanci'
                                                                                    sessionStorage.setItem("TicketType2", ['0.49', 'Kombatanci'])
                                                                                        }}>51% Kombatanci</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '51% Studenci do 26 lat/Doktoranci do 35 lat'
                                                                                    sessionStorage.setItem("TicketType2", ['0.49', 'Studenci do 26 lat/Doktoranci do 35 lat'])
                                                                                        }}>51% Studenci do 26 lat/Doktoranci do 35 lat</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '78% Cywile niewid. ofiary wojny niezd. do sam. egzyst.'
                                                                                    sessionStorage.setItem("TicketType2", ['0.22', 'Cywile niewid. ofiary wojny niezd. do sam. egzyst.'])
                                                                                        }}>78% Cywile niewid. ofiary wojny niezd. do sam. egzyst.</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '78% Dzieci/Młodzież/Stuenci niepełnosprawni'
                                                                                    sessionStorage.setItem("TicketType2", ['0.22', 'Dzieci/Młodzież/Stuenci niepełnosprawni'])
                                                                                        }}>78% Dzieci/Młodzież/Stuenci niepełnosprawni</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = 'Kombatant/Inwalida - I grupa'
                                                                                    sessionStorage.setItem("TicketType2", ['0.22', 'Kombatant/Inwalida - I grupa'])
                                                                                        }}>78% Kombatant/Inwalida - I grupa</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '78% Żołnierze'
                                                                                    sessionStorage.setItem("TicketType2", ['0.22', 'Żołnierze'])
                                                                                        }}>78% Żołnierze</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '80% Rodzina pracownika kolei'
                                                                                    sessionStorage.setItem("TicketType2", ['0.2', 'Rodzina pracownika kolei'])
                                                                                        }}>80% Rodzina pracownika kolei</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '95% Przewodnik kombatanta/inwalidy I grupy'
                                                                                    sessionStorage.setItem("TicketType2", ['0.05', 'Przewodnik kombatanta/inwalidy I grupy'])
                                                                                        }}>95% Przewodnik kombatanta/inwalidy I grupy</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '95% Przewodnik/Opiekun'
                                                                                    sessionStorage.setItem("TicketType2", ['0.05', 'Przewodnik/Opiekun'])
                                                                                        }}>95% Przewodnik/Opiekun</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = '99% Pracownik kolei'
                                                                                    sessionStorage.setItem("TicketType2", ['0.01', 'Pracownik kolei'])
                                                                                        }}>99% Pracownik kolei</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = 'Bilet dla zwierzęcia'
                                                                                    sessionStorage.setItem("TicketType2", ['Zwierze', 'Bilet dla zwierzęcia'])
                                                                                        }}>Bilet dla zwierzęcia</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType2').innerHTML = 'Bilet na przewóz dodatkowego bagażu'
                                                                                    sessionStorage.setItem("TicketType2", ['Bagaz', 'Bilet na przewóz dodatkowego bagażu'])
                                                                                        }}>Bilet na przewóz dodatkowego bagażu</a></li>
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
                          0% Bilet normalny
                        </button>
                        <ul className="dropdown-menu TicketDisType fw-bold">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '0% Bilet normalny'
                                                                                    sessionStorage.setItem("TicketType3", ['1', 'Bilet normalny'])
                                                                                        }}>0% Bilet normalny</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '100% Dziecko do lat 4'
                                                                                    sessionStorage.setItem("TicketType3", ['0', 'Dziecko do lat 4'])
                                                                                        }}>100% Dziecko do lat 4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '30% Bilet dla seniora'
                                                                                    sessionStorage.setItem("TicketType3", ['0.7', 'Bilet dla seniora'])
                                                                                        }}>30% Bilet dla seniora</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '33% Honorowy Dawca Krwi'
                                                                                    sessionStorage.setItem("TicketType3", ['0.67', 'Honorowy Dawca Krwi'])
                                                                                        }}>33% Honorowy Dawca Krwi</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% 2 przejazdy w roku (emeryt/rencista)'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', '2 przejazdy w roku (emeryt/rencista)'])
                                                                                        }}>37% 2 przejazdy w roku (emeryt/rencista)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Cywilna niewidoma ofiara działań wojennych'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Cywilna niewidoma ofiara działań wojennych'])
                                                                                        }}>37% Cywilna niewidoma ofiara działań wojennych</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Dzieci/Młodzież'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Dzieci/Młodzież'])
                                                                                        }}>37% Dzieci/Młodzież</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Inwalidzi wojenni i wojskowi'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Inwalidzi wojenni i wojskowi'])
                                                                                        }}>37% Inwalidzi wojenni i wojskowi</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Karta Polaka'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Karta Polaka'])
                                                                                        }}>37% Karta Polaka</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Os. niewidome zdolne do sam.egzyst.'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Os. niewidome zdolne do sam.egzyst.'])
                                                                                        }}>37% Os. niewidome zdolne do sam.egzyst.</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Os. niezd. do sam. egzystencji'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Os. niezd. do sam. egzystencji'])
                                                                                        }}>37% Os. niezd. do sam. egzystencji</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Rodzic/Małżonek - Karta Dużej Rodziny'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Rodzic/Małżonek - Karta Dużej Rodziny'])
                                                                                        }}>37% Rodzic/Małżonek - Karta Dużej Rodziny</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '37% Weterani - klasa 1 / klasa 2'
                                                                                    sessionStorage.setItem("TicketType3", ['0.63', 'Weterani - klasa 1 / klasa 2'])
                                                                                        }}>37% Weterani - klasa 1 / klasa 2</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '50% Umowa'
                                                                                    sessionStorage.setItem("TicketType3", ['0.5', 'Umowa'])
                                                                                        }}>50% Umowa</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '51% Dział. opoz. antykom./os. represjonowane politycznie'
                                                                                    sessionStorage.setItem("TicketType3", ['0.49', 'Dział. opoz. antykom./os. represjonowane politycznie'])
                                                                                        }}>51% Dział. opoz. antykom./os. represjonowane politycznie</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '51% Kombatanci'
                                                                                    sessionStorage.setItem("TicketType3", ['0.49', 'Kombatanci'])
                                                                                        }}>51% Kombatanci</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '51% Studenci do 26 lat/Doktoranci do 35 lat'
                                                                                    sessionStorage.setItem("TicketType3", ['0.49', 'Studenci do 26 lat/Doktoranci do 35 lat'])
                                                                                        }}>51% Studenci do 26 lat/Doktoranci do 35 lat</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '78% Cywile niewid. ofiary wojny niezd. do sam. egzyst.'
                                                                                    sessionStorage.setItem("TicketType3", ['0.22', 'Cywile niewid. ofiary wojny niezd. do sam. egzyst.'])
                                                                                        }}>78% Cywile niewid. ofiary wojny niezd. do sam. egzyst.</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '78% Dzieci/Młodzież/Stuenci niepełnosprawni'
                                                                                    sessionStorage.setItem("TicketType3", ['0.22', 'Dzieci/Młodzież/Stuenci niepełnosprawni'])
                                                                                        }}>78% Dzieci/Młodzież/Stuenci niepełnosprawni</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = 'Kombatant/Inwalida - I grupa'
                                                                                    sessionStorage.setItem("TicketType3", ['0.22', 'Kombatant/Inwalida - I grupa'])
                                                                                        }}>78% Kombatant/Inwalida - I grupa</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '78% Żołnierze'
                                                                                    sessionStorage.setItem("TicketType3", ['0.22', 'Żołnierze'])
                                                                                        }}>78% Żołnierze</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '80% Rodzina pracownika kolei'
                                                                                    sessionStorage.setItem("TicketType3", ['0.2', 'Rodzina pracownika kolei'])
                                                                                        }}>80% Rodzina pracownika kolei</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '95% Przewodnik kombatanta/inwalidy I grupy'
                                                                                    sessionStorage.setItem("TicketType3", ['0.05', 'Przewodnik kombatanta/inwalidy I grupy'])
                                                                                        }}>95% Przewodnik kombatanta/inwalidy I grupy</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '95% Przewodnik/Opiekun'
                                                                                    sessionStorage.setItem("TicketType3", ['0.05', 'Przewodnik/Opiekun'])
                                                                                        }}>95% Przewodnik/Opiekun</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = '99% Pracownik kolei'
                                                                                    sessionStorage.setItem("TicketType3", ['0.01', 'Pracownik kolei'])
                                                                                        }}>99% Pracownik kolei</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = 'Bilet dla zwierzęcia'
                                                                                    sessionStorage.setItem("TicketType3", ['Zwierze', 'Bilet dla zwierzęcia'])
                                                                                        }}>Bilet dla zwierzęcia</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType3').innerHTML = 'Bilet na przewóz dodatkowego bagażu'
                                                                                    sessionStorage.setItem("TicketType3", ['Bagaz', 'Bilet na przewóz dodatkowego bagażu'])
                                                                                        }}>Bilet na przewóz dodatkowego bagażu</a></li>
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
                          0% Bilet normalny
                        </button>
                        <ul className="dropdown-menu TicketDisType fw-bold">
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '0% Bilet normalny'
                                                                                    sessionStorage.setItem("TicketType4", ['1', 'Bilet normalny'])
                                                                                        }}>0% Bilet normalny</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '100% Dziecko do lat 4'
                                                                                    sessionStorage.setItem("TicketType4", ['0', 'Dziecko do lat 4'])
                                                                                        }}>100% Dziecko do lat 4</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '30% Bilet dla seniora'
                                                                                    sessionStorage.setItem("TicketType4", ['0.7', 'Bilet dla seniora'])
                                                                                        }}>30% Bilet dla seniora</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '33% Honorowy Dawca Krwi'
                                                                                    sessionStorage.setItem("TicketType4", ['0.67', 'Honorowy Dawca Krwi'])
                                                                                        }}>33% Honorowy Dawca Krwi</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% 2 przejazdy w roku (emeryt/rencista)'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', '2 przejazdy w roku (emeryt/rencista)'])
                                                                                        }}>37% 2 przejazdy w roku (emeryt/rencista)</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Cywilna niewidoma ofiara działań wojennych'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Cywilna niewidoma ofiara działań wojennych'])
                                                                                        }}>37% Cywilna niewidoma ofiara działań wojennych</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Dzieci/Młodzież'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Dzieci/Młodzież'])
                                                                                        }}>37% Dzieci/Młodzież</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Inwalidzi wojenni i wojskowi'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Inwalidzi wojenni i wojskowi'])
                                                                                        }}>37% Inwalidzi wojenni i wojskowi</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Karta Polaka'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Karta Polaka'])
                                                                                        }}>37% Karta Polaka</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Os. niewidome zdolne do sam.egzyst.'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Os. niewidome zdolne do sam.egzyst.'])
                                                                                        }}>37% Os. niewidome zdolne do sam.egzyst.</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Os. niezd. do sam. egzystencji'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Os. niezd. do sam. egzystencji'])
                                                                                        }}>37% Os. niezd. do sam. egzystencji</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Rodzic/Małżonek - Karta Dużej Rodziny'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Rodzic/Małżonek - Karta Dużej Rodziny'])
                                                                                        }}>37% Rodzic/Małżonek - Karta Dużej Rodziny</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '37% Weterani - klasa 1 / klasa 2'
                                                                                    sessionStorage.setItem("TicketType4", ['0.63', 'Weterani - klasa 1 / klasa 2'])
                                                                                        }}>37% Weterani - klasa 1 / klasa 2</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '50% Umowa'
                                                                                    sessionStorage.setItem("TicketType4", ['0.5', 'Umowa'])
                                                                                        }}>50% Umowa</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '51% Dział. opoz. antykom./os. represjonowane politycznie'
                                                                                    sessionStorage.setItem("TicketType4", ['0.49', 'Dział. opoz. antykom./os. represjonowane politycznie'])
                                                                                        }}>51% Dział. opoz. antykom./os. represjonowane politycznie</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '51% Kombatanci'
                                                                                    sessionStorage.setItem("TicketType4", ['0.49', 'Kombatanci'])
                                                                                        }}>51% Kombatanci</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '51% Studenci do 26 lat/Doktoranci do 35 lat'
                                                                                    sessionStorage.setItem("TicketType4", ['0.49', 'Studenci do 26 lat/Doktoranci do 35 lat'])
                                                                                        }}>51% Studenci do 26 lat/Doktoranci do 35 lat</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '78% Cywile niewid. ofiary wojny niezd. do sam. egzyst.'
                                                                                    sessionStorage.setItem("TicketType4", ['0.22', 'Cywile niewid. ofiary wojny niezd. do sam. egzyst.'])
                                                                                        }}>78% Cywile niewid. ofiary wojny niezd. do sam. egzyst.</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '78% Dzieci/Młodzież/Stuenci niepełnosprawni'
                                                                                    sessionStorage.setItem("TicketType4", ['0.22', 'Dzieci/Młodzież/Stuenci niepełnosprawni'])
                                                                                        }}>78% Dzieci/Młodzież/Stuenci niepełnosprawni</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = 'Kombatant/Inwalida - I grupa'
                                                                                    sessionStorage.setItem("TicketType4", ['0.22', 'Kombatant/Inwalida - I grupa'])
                                                                                        }}>78% Kombatant/Inwalida - I grupa</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '78% Żołnierze'
                                                                                    sessionStorage.setItem("TicketType4", ['0.22', 'Żołnierze'])
                                                                                        }}>78% Żołnierze</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '80% Rodzina pracownika kolei'
                                                                                    sessionStorage.setItem("TicketType4", ['0.2', 'Rodzina pracownika kolei'])
                                                                                        }}>80% Rodzina pracownika kolei</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '95% Przewodnik kombatanta/inwalidy I grupy'
                                                                                    sessionStorage.setItem("TicketType4", ['0.05', 'Przewodnik kombatanta/inwalidy I grupy'])
                                                                                        }}>95% Przewodnik kombatanta/inwalidy I grupy</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '95% Przewodnik/Opiekun'
                                                                                    sessionStorage.setItem("TicketType4", ['0.05', 'Przewodnik/Opiekun'])
                                                                                        }}>95% Przewodnik/Opiekun</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = '99% Pracownik kolei'
                                                                                    sessionStorage.setItem("TicketType4", ['0.01', 'Pracownik kolei'])
                                                                                        }}>99% Pracownik kolei</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = 'Bilet dla zwierzęcia'
                                                                                    sessionStorage.setItem("TicketType4", ['Zwierze', 'Bilet dla zwierzęcia'])
                                                                                        }}>Bilet dla zwierzęcia</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                    document.querySelector('#TicketType4').innerHTML = 'Bilet na przewóz dodatkowego bagażu'
                                                                                    sessionStorage.setItem("TicketType4", ['Bagaz', 'Bilet na przewóz dodatkowego bagażu'])
                                                                                        }}>Bilet na przewóz dodatkowego bagażu</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row px-5 mx-4 py-4 mt-2 justify-content-center">
                      <button className="button OrangeButton BuyButton w-25 me-5" type="button" onClick={() => {
                          if(sessionStorage.getItem('Compare') !== null){
                            window.location.href = '/CompareResults'
                          }
                          else{
                            window.location.href = '/SearchResults'
                          }
                        }}><h5 className="pt-1">Powrót</h5></button>
                      <button className="button OrangeButton BuyButton w-25" id='Sub' type="submit"><h5 className="pt-1">Dalej</h5></button>
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
