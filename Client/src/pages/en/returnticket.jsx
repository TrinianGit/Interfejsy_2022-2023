import * as React from "react";
import { useEffect } from 'react';

export default function ReturnTicket() {
  
  useEffect(() => {
     if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.miniform').classList.add('col-6')
      document.querySelector('.miniform').classList.remove('col-5')
      document.querySelector('.Laptop').classList.remove('mt-5')
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
              <a href="https://centralna-siec-szyn.glitch.me/ReturnTicket">
                  <div className="flag poland">
                  </div>
              </a>
              <div>
                <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/UserAccount" className="mb-0">My Account</a></h2>
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
              <div className="miniform col-5">
                <div className="py-4">
                </div>
                <h2 className="mt-5 Laptop pt-4 mx-4 text-center">Are you sure you want to return ticket no. <br /> nr {sessionStorage.getItem("TicketNumber")}?</h2>
                <div className="mx-5 mt-4 mb-5">
                  <h6 className="ms-4 text-center">Caution! If you return your ticket you won't be able to undo this operation and money transfer will be commissioned.</h6>
                </div>
                <div className="row justify-content-around pt-5 mt-5 mx-5">
                  <button className="button col-5 py-3 OrangeButton" onClick={() => {
                      sessionStorage.removeItem("TicketNumber")
                      window.location.href = '/en/TicketHistory'
                    }}>Cancel</button>
                  <button className="button col-5 py-3 RedButton" style={{borderRadius: '50px', borderColor: 'red'}} onClick={() => {
                      window.location.href = "/en/ReturnConfirm"
                    }}>Return ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>

  );
}
