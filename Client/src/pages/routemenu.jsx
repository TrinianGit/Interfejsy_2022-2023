import * as React from "react";
import { useEffect } from 'react';

export default function RouteMenu() {
  
  let logmain
  
  if(sessionStorage.getItem("LoggedIn") === '1'){
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/UserAccount" className="mb-0">Moje konto</a></h2>
  }
  else{
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/Login?#" className="mb-0">Zaloguj się</a></h2>
  }
  
  useEffect(() => {
    sessionStorage.setItem("Prev", "/RouteMenu")
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.miniform').querySelector('.py-4').classList.remove('py-4')
      document.querySelector('.miniform').classList.add('col-6')
      document.querySelector('.miniform').classList.remove('col-5')
    }
    
    
    if (JSON.parse(sessionStorage.getItem("Train")).traindetails.length === 1){
      document.querySelector('#T1').innerHTML = JSON.parse(sessionStorage.getItem("Train")).traindetails[0]
      document.querySelector('#T2').style.visibility = "hidden"
      document.querySelector('#T3').style.visibility = "hidden"
    }
    else if (JSON.parse(sessionStorage.getItem("Train")).traindetails.length === 2){
      document.querySelector('#T1').innerHTML = JSON.parse(sessionStorage.getItem("Train")).traindetails[0]
      document.querySelector('#T2').innerHTML = JSON.parse(sessionStorage.getItem("Train")).traindetails[1]
      document.querySelector('#T3').style.visibility = "hidden"
    }
    else{
      document.querySelector('#T1').innerHTML = JSON.parse(sessionStorage.getItem("Train")).traindetails[0]
      document.querySelector('#T2').innerHTML = JSON.parse(sessionStorage.getItem("Train")).traindetails[1]
      document.querySelector('#T3').innerHTML = JSON.parse(sessionStorage.getItem("Train")).traindetails[2]
    }
  }, [])
  
  
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
              <a href="/en/RouteMenu">
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
                <div className="py-4">
                </div>
                <div className="row justify-content-center pt-5 mt-2 mx-5">
                  <h5 className='text-center mb-4'>Wybierz numer pociągu, aby zobaczyć jego trasę</h5>
                  <button className="button col-5 py-2 OrangeButton" id="T1" onClick={() => {
                      sessionStorage.setItem("Show", JSON.parse(sessionStorage.getItem("Train")).traindetails[0])
                      sessionStorage.setItem("ShowCarrier", JSON.parse(sessionStorage.getItem("Train")).brandlogos.split('+')[0])
                      sessionStorage.setItem("ShowSS", JSON.parse(sessionStorage.getItem("Train")).startStations[0])
                      sessionStorage.setItem("ShowES", JSON.parse(sessionStorage.getItem("Train")).endStations[0])
                      window.location.href = '/RouteLoading'
                    }}>Pociąg 1</button>
                  <button className="button col-5 py-2 OrangeButton" id="T2" onClick={() => {
                      sessionStorage.setItem("Show", JSON.parse(sessionStorage.getItem("Train")).traindetails[1])
                      sessionStorage.setItem("ShowCarrier", JSON.parse(sessionStorage.getItem("Train")).brandlogos.split('+')[1])
                      sessionStorage.setItem("ShowSS", JSON.parse(sessionStorage.getItem("Train")).startStations[1])
                      sessionStorage.setItem("ShowES", JSON.parse(sessionStorage.getItem("Train")).endStations[1])
                      window.location.href = '/RouteLoading'
                    }}>Pociąg 2</button>
                </div>
                <div className="row justify-content-center mt-3 mx-5">
                  <button className="button col-5 py-2 OrangeButton" id="T3" onClick={() => {
                      sessionStorage.setItem("Show", JSON.parse(sessionStorage.getItem("Train")).traindetails[2])
                      sessionStorage.setItem("ShowCarrier", JSON.parse(sessionStorage.getItem("Train")).brandlogos.split('+')[2])
                      sessionStorage.setItem("ShowSS", JSON.parse(sessionStorage.getItem("Train")).startStations[2])
                      sessionStorage.setItem("ShowES", JSON.parse(sessionStorage.getItem("Train")).endStations[2])
                      window.location.href = '/RouteLoading'
                    }}>Pociąg 3</button>
                </div>
                <div className="row justify-content-center my-5 mx-5"></div>
                <div className="row justify-content-center mt-3 mx-5">
                  <button className="button col-5 py-2 OrangeButton" id="WT" onClick={() => {
                      window.location.href = '/MapLoading'
                    }}>Całość trasy na mapie</button>
                </div>
                <div className="row justify-content-center mt-3 mx-5">
                  <button className="button col-5 py-2 RedButton" onClick={() => {
                      if (sessionStorage.getItem("Compare") !== null){
                        window.location.href = '/CompareResults'
                      }
                      else{
                        window.location.href = '/SearchResults'
                      }
                      
                    }}>Powrót</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
