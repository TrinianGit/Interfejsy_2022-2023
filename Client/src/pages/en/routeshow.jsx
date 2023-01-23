import * as React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import '../../styles/line.css';

export default function RouteShow() {
  
  let logmain
  
   useEffect(() => {
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.OrangeButton').classList.add('mt-0')
      document.querySelector('.OrangeButton').classList.add('mb-4')
      document.querySelector('.OrangeButton').classList.remove('mt-5')
      document.querySelector('.OrangeButton').classList.remove('my-4')
      document.querySelector('.Laptop').classList.add('fs-3')
    }

  },[])
  
  if(sessionStorage.getItem("LoggedIn") === '1'){
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/UserAccount" className="mb-0">My Account</a></h2>
  }
  else{
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/Login?#" className="mb-0">Log in</a></h2>
  }
  
  let stations = []
  let currentstation = 0
  
  function showStations() {
    document.querySelector('.timeline').style.visibility = "visible"
    if (currentstation == 0){
      document.querySelector("#P1").classList.add("StartPoint")
      document.querySelector(".Left").style.visibility = "hidden"
    }
    else{
      document.querySelector("#P1").classList.remove("StartPoint")
      document.querySelector(".Left").style.visibility = "visible"
    }
    if (currentstation + 5 >= stations.length){
      document.querySelector("#P5").classList.add("EndPoint")
      document.querySelector(".Right").style.visibility = "hidden"
    }
    else{
      document.querySelector("#P5").classList.remove("EndPoint")
      document.querySelector(".Right").style.visibility = "visible"
    }
    
    if (stations.length == 2){
      document.querySelector('#P2').style.visibility = "hidden"
      document.querySelector('#P3').style.visibility = "hidden"
      document.querySelector('#P4').style.visibility = "hidden"
      document.querySelector('#S1').innerHTML = stations[currentstation]
      document.querySelector('#S5').innerHTML = stations[currentstation + 1]  
    }
    else if (stations.length == 3){
      document.querySelector('#P2').style.visibility = "hidden"
      document.querySelector('#P4').style.visibility = "hidden"
      document.querySelector('#S1').innerHTML = stations[currentstation]
      document.querySelector('#S3').innerHTML = stations[currentstation + 1]
      document.querySelector('#S5').innerHTML = stations[currentstation + 2]  
    }
    else if (stations.length == 4){
      document.querySelector('#P3').style.visibility = "hidden"
      document.querySelector('#S1').innerHTML = stations[currentstation]
      document.querySelector('#S2').innerHTML = stations[currentstation + 1]
      document.querySelector('#S4').innerHTML = stations[currentstation + 2]
      document.querySelector('#S5').innerHTML = stations[currentstation + 3] 
    }
    else{
      document.querySelector('#S1').innerHTML = stations[currentstation]
      document.querySelector('#S2').innerHTML = stations[currentstation + 1]
      document.querySelector('#S3').innerHTML = stations[currentstation + 2]
      document.querySelector('#S4').innerHTML = stations[currentstation + 3]
      document.querySelector('#S5').innerHTML = stations[currentstation + 4]  
    }
    
   }
  
  useEffect(async () => {
    document.querySelector(".Left").style.visibility = "hidden"
    document.querySelector(".Right").style.visibility = "hidden"
    document.querySelector('.timeline').style.visibility = "hidden"
     stations = JSON.parse(sessionStorage.getItem("Stations"))
    showStations()
      
  }, [])
  
  
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
              <a href="https://centralna-siec-szyn.glitch.me/RouteShow">
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
              <div className="col-1">
                <button className="Arrow Left" onClick={() => {
                    currentstation -= 1
                    showStations()
                  }}>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                  </i>
                </button>
              </div>
              <div className="col-8 Route">
                <h1 className="my-5 Laptop mb-5 px-4">Route of train no. {sessionStorage.getItem("Show")}</h1>
                <div className="RouteElems miniform-timeline py-5 my-5">
                  <div className="row justify-content-center pt-5">
                    <ul className="row justify-content-between timeline pt-1 p-0">
                      <li id="P1"/>
                      <li id="P2"/>
                      <li id="P3"/>
                      <li id="P4"/>
                      <li id="P5"/>
                    </ul>
                  </div>
                  <div className="row justify-content-center mt-4">
                    <ul className="row justify-content-between timeline-text p-0">
                      <li id="S1"></li>
                      <li id="S2"></li>
                      <li id="S3"></li>
                      <li id="S4"></li>
                      <li id="S5"></li>
                    </ul>
                  </div>
                </div>
                <button className="OrangeButton my-4 mt-5 px-4" onClick={() => {
                    window.location.href = '/en/RouteMenu'
                  }}>
                  <h4>Back</h4>
                </button>
              </div>
              <div className="col-1">
                <button className="Arrow Right" onClick={() => {
                    currentstation += 1;
                    showStations()
                  }}>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}
