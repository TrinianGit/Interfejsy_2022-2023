import * as React from "react";
import { useEffect } from 'react';


export default function UserPage() {
  
  useEffect(() => {
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.miniformdiff').classList.add('miniformdiffLaptop')
      document.querySelector('.miniformdiff').classList.remove('miniformdiff')
      document.querySelector('.Laptop').classList.remove('mt-5')
      document.querySelector('.Laptop').classList.add('mt-3')
      document.querySelector('.Laptop2').classList.add('mb-4')
      }
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
              <a href="https://centralna-siec-szyn.glitch.me/UserAccount">
                  <div className="flag poland">
                  </div>
                </a>
              <div>
                <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/" className="mb-0">Main Page</a></h2>
                <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/Contact" className="mb-0">Contact</a></h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container-fluid px-5">
        <div className="px-5 py-5">
          <div className="Pillultrablack smallPad">
            <div className="row mx-5">
              <div className="miniform">
                <div className="row">
                  <div className="miniformdiff text-center  mx-0 col-3" style={{borderWidth: '10px', borderColor: 'rgba(0, 0, 0, 0.644)', borderStyle: 'solid'}}>
                    <h6 className="Laptop mt-5">{sessionStorage.getItem("Login")}</h6>
                    <h6>{sessionStorage.getItem("Name")}</h6>
                    <h6>{sessionStorage.getItem("Email")}</h6>
                    <div className="row justify-content-center">
                      <button className="button GreenButton Shadow w-75 mt-5" onClick={() => {
                          window.location.href = "/en/UserData"
                        }}>My data</button>
                    </div>
                    <div className="row justify-content-center">
                      <button className="button GreenButton Shadow w-75 mt-3" onClick={() => {
                          window.location.href = "/en/NewPassword?#"
                        }}>Change password</button>
                    </div>
                    <div className="row justify-content-center">
                      <button className="button GreenButton Shadow w-75 mt-3" onClick={() => {
                          window.location.href = "/en/TicketHistory"
                        }}>Ticket history</button>
                    </div>
                    <div className="row justify-content-center">
                      <button className="button GreenButton Shadow w-75 mt-3" onClick={() => {
                          window.location.href = "/en/"
                        }}>Search connection</button>
                    </div>
                    <div className="row justify-content-center">
                      <button className="button GreenButton Shadow w-75 mt-3" onClick={() => {
                          window.location.href = "/en/"
                        }}>Compare offers</button>
                    </div>
                    <div className="row Laptop2 justify-content-center">
                      <button className="button RedButton Shadow w-75 mt-3" onClick={() => {
                          window.location.href = '/en/Logout'
                        }}>Logout</button>
                    </div>
                  </div>
                  <div className="col-9 text-center mt-5"><h1 className="mt-5">Hello, {sessionStorage.getItem("Name").split(" ")[0]}</h1></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>


  );
}