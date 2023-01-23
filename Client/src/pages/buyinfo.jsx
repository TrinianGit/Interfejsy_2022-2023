import * as React from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function BuyInfo() {

  let TT;
  
  let logmain
  
  if(sessionStorage.getItem("LoggedIn") === '1'){
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/UserAccount" className="mb-0">Moje konto</a></h2>
  }
  else{
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/Login?#" className="mb-0">Zaloguj się</a></h2>
  }
  
  async function saveTicket() {
    await axios.post("https://css-server-user-ticket.glitch.me/tickets", null, {
          params: {
              Login: sessionStorage.getItem("Login"),
              TN: JSON.parse(sessionStorage.getItem("Train")).traindetails.join('+'),
              TT: TT,
              SS: sessionStorage.getItem("From"),
              ES: sessionStorage.getItem("To"),
              FD: sessionStorage.getItem("Date") + '+' +JSON.parse(sessionStorage.getItem("Train")).from + '-' + JSON.parse(sessionStorage.getItem("Train")).to,
              P: countmoney().toFixed(2).replace('.', ',') + 'zł'
              
          }
      }).then(async (response) => {
          sessionStorage.setItem("TicketNumber", response.data)    
          sessionStorage.setItem("FullPrice", countmoney().toFixed(2).replace('.', ',') + 'zł')
          sessionStorage.setItem("TT", TT)
          window.location.href = "/Payment"
          
      }).catch((error) => {
          console.log(error)
          window.location.href = "/400badrequest"
      }); 
  }
  
  function countmoney () {
    let pricedefault = parseFloat(JSON.parse(sessionStorage.getItem("Train")).price.replace("zł", "").replace(',', '.'))
    let ticket1
    let ticket2
    let ticket3
    let ticket4
    
    if (sessionStorage.getItem("TicketType1").split(',')[0] === "Bagaz"){
        ticket1 = 7.5
    }
    else if (sessionStorage.getItem("TicketType1").split(',')[0] === "Zwierze"){
        ticket1 = 5.0
    }
    else{
        ticket1 = parseFloat(sessionStorage.getItem("TicketNum1")) * pricedefault * parseFloat(sessionStorage.getItem("TicketType1").split(",")[0]);
    }
    
    if (sessionStorage.getItem("TicketType2").split(',')[0] === "Bagaz"){
        ticket2 = 7.5
    }
    else if (sessionStorage.getItem("TicketType2").split(',')[0] === "Zwierze"){
        ticket2 = 5.0
    }
    else{
        ticket2 = parseFloat(sessionStorage.getItem("TicketNum2")) * pricedefault * parseFloat(sessionStorage.getItem("TicketType2").split(",")[0]);
    }
    
    if (sessionStorage.getItem("TicketType3").split(',')[0] === "Bagaz"){
        ticket3 = 7.5
    }
    else if (sessionStorage.getItem("TicketType3").split(',')[0] === "Zwierze"){
        ticket3 = 5.0
    }
    else{
        ticket3 = parseFloat(sessionStorage.getItem("TicketNum3")) * pricedefault * parseFloat(sessionStorage.getItem("TicketType3").split(",")[0]);
    }
    
    if (sessionStorage.getItem("TicketType4").split(',')[0] === "Bagaz"){
        ticket4 = 7.5
    }
    else if (sessionStorage.getItem("TicketType4").split(',')[0] === "Zwierze"){
        ticket4 = 5.0
    }
    else{
        ticket4 = parseFloat(sessionStorage.getItem("TicketNum4")) * pricedefault * parseFloat(sessionStorage.getItem("TicketType4").split(",")[0]);
    }
    
    
    
    if (sessionStorage.getItem("Discounts") == '1'){
      return ticket1;
    }
    else if (sessionStorage.getItem("Discounts") == '2'){
      return ticket1 + ticket2;
    }
    else if (sessionStorage.getItem("Discounts") == '3'){
      return ticket1 + ticket2 + ticket3;
    }
    else if (sessionStorage.getItem("Discounts") == '4'){
      return ticket1 + ticket2 + ticket3 + ticket4;
    }
  }
  
  useEffect(() => {
    sessionStorage.setItem("Prev", "/BuyInfo")
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.smallPad').classList.add('noyPad')
      document.querySelector('.smallPad').classList.add('py-4')
      document.querySelector('.smallPad').classList.remove('smallPad')
      document.querySelector('.Header').classList.add('fs-2')
      document.querySelector('.Header').classList.remove('my-5')
      document.querySelector('.Header').classList.add('my-3')
      document.querySelector('.miniform').classList.remove('col-5')
      document.querySelector('.miniform').classList.add('col-7')
      document.querySelector('.py-5').classList.add('py-4')
      document.querySelector('.py-5').classList.remove('py-5')
    }
    
    
    if (sessionStorage.getItem("Discounts") == '1'){
      document.querySelector('#T1').innerHTML = sessionStorage.getItem("TicketNum1") + 'x ' + sessionStorage.getItem("TicketType1").split(",")[1];
      TT = sessionStorage.getItem("TicketNum1") + 'x' + sessionStorage.getItem("TicketType1").split(",")[1];
    }
    else if (sessionStorage.getItem("Discounts") == '2'){
      document.querySelector('#T1').innerHTML = sessionStorage.getItem("TicketNum1") + 'x ' + sessionStorage.getItem("TicketType1").split(",")[1];
      document.querySelector('#T2').innerHTML = sessionStorage.getItem("TicketNum2") + 'x ' + sessionStorage.getItem("TicketType2").split(",")[1];
      TT = (sessionStorage.getItem("TicketNum1") + 'x' + sessionStorage.getItem("TicketType1").split(",")[1] + '+' 
            + sessionStorage.getItem("TicketNum2") + 'x' + sessionStorage.getItem("TicketType2").split(",")[1])
    }
    else if (sessionStorage.getItem("Discounts") == '3'){
      document.querySelector('#T1').innerHTML = sessionStorage.getItem("TicketNum1") + 'x ' + sessionStorage.getItem("TicketType1").split(",")[1];
      document.querySelector('#T2').innerHTML = sessionStorage.getItem("TicketNum2") + 'x ' + sessionStorage.getItem("TicketType2").split(",")[1];
      document.querySelector('#T3').innerHTML = sessionStorage.getItem("TicketNum3") + 'x ' + sessionStorage.getItem("TicketType3").split(",")[1];
      TT = (sessionStorage.getItem("TicketNum1") + 'x' + sessionStorage.getItem("TicketType1").split(",")[1] + '+' 
            + sessionStorage.getItem("TicketNum2") + 'x' + sessionStorage.getItem("TicketType2").split(",")[1] + '+' 
            + sessionStorage.getItem("TicketNum3") + 'x' + sessionStorage.getItem("TicketType3").split(",")[1])
    }
    else if (sessionStorage.getItem("Discounts") == '4'){
      document.querySelector('#T1').innerHTML = sessionStorage.getItem("TicketNum1") + 'x ' + sessionStorage.getItem("TicketType1").split(",")[1];
      document.querySelector('#T2').innerHTML = sessionStorage.getItem("TicketNum2") + 'x ' + sessionStorage.getItem("TicketType2").split(",")[1];
      document.querySelector('#T3').innerHTML = sessionStorage.getItem("TicketNum3") + 'x ' + sessionStorage.getItem("TicketType3").split(",")[1];
      document.querySelector('#T4').innerHTML = sessionStorage.getItem("TicketNum4") + 'x ' + sessionStorage.getItem("TicketType4").split(",")[1];
      TT = (sessionStorage.getItem("TicketNum1") + 'x' + sessionStorage.getItem("TicketType1").split(",")[1] + '+' 
            + sessionStorage.getItem("TicketNum2") + 'x' + sessionStorage.getItem("TicketType2").split(",")[1] + '+' 
            + sessionStorage.getItem("TicketNum3") + 'x' + sessionStorage.getItem("TicketType3").split(",")[1]+ '+' 
            + sessionStorage.getItem("TicketNum4") + 'x' + sessionStorage.getItem("TicketType4").split(",")[1])
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
              <a href="/en/BuyInfo">
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
              <div className="miniform col-5">
                <h2 className="my-5 ms-4 Header text-center">Sprawdź poprawność danych!</h2>
                <div className="row mt-4">
                  <div className="col-7">
                    <h4>Kupujesz bilety na trasie:</h4>
                    <h6 className="text-center mt-3 Smalltext">{sessionStorage.getItem("Date")}; {JSON.parse(sessionStorage.getItem("Train")).from + '-' + JSON.parse(sessionStorage.getItem("Train")).to}
                      <br></br>{sessionStorage.getItem("From") + '-' + sessionStorage.getItem("To")}</h6>
                  </div>
                  <button className="button col-4 OrangeButton fw-bold h-50 align-self-center py-3 mx-4" type="button" onClick={() => {
                      window.location.href = '/LoadingTrains'
                    }}>Chcę zmienić godzinę</button>
                </div>
                <div className="row mt-4">
                  <div className="col-7">
                    <h4>Twoje bilety:</h4>
                    <div className="my-3">
                      <h6 className="text-center w-50 Smalltext float-start" id="T1"></h6>
                      <h6 className="text-center w-50 Smalltext float-end" id="T2"> </h6>
                    </div>
                    <div>
                      <h6 className="text-center w-50 Smalltext float-start" id="T3"> </h6>
                      <h6 className="text-center w-50 Smalltext float-end" id="T4"> </h6>
                    </div>
                  </div>
                  <button className="button col-4 OrangeButton fw-bold h-50 align-self-center py-3 mx-4" type="button" onClick={() => {
                      window.location.href = '/BuyInput'
                    }}>Chcę zmienić bilety</button>
                </div>
                <div className="row mt-4">
                  <div className="col-7">
                    <h4>Na dane:</h4>
                    <div className="mt-3">
                      <h6 className="text-center Smalltext">{sessionStorage.getItem("NameBuy")}</h6>
                    </div>
                    <div>
                      <h6 className="text-center Smalltext">{sessionStorage.getItem("EmailBuy")}</h6>
                    </div>
                  </div>
                  <button className="button col-4 OrangeButton Smalltext fw-bold h-50 align-self-center py-3 mx-4" type="button" onClick={() => {
                      window.location.href = '/BuyInput'
                    }}>Chciałbym poprawić dane</button>
                </div>
                <div className="row px-5 mx-4 py-4 mt-2 justify-content-center">
                  <form>
                    <button className="button OrangeButton BuyButton w-50" type="button" style={{backgroundColor: '#ff4d4d'}} onClick={() => {
                                                                                                                                            sessionStorage.clear()
                                                                                                                                            window.location.href = '/'
                    }}><h5 className="pt-1">Rezygnuję</h5></button>
                    <button className="button OrangeButton BuyButton w-50" type="button" onClick={() => {
                        saveTicket()
                      }}><h6 className="pt-1">Przejdź do płatności: {countmoney().toFixed(2).replace('.', ',')}zł</h6></button>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
