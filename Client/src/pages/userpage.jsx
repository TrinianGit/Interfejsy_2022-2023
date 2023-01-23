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
              <h1 className="mb-0 fs-1"><a href="/" className="mb-0"><img className="LogoImg" src="https://cdn.glitch.global/bcbe3d98-25d5-4c98-a874-76548ff73b90/logo.png?v=1671633863339" /></a></h1>
            </div>
            <div className="col-2" />
            <div className="col-6 py-2 px-5 d-flex align-items-center justify-content-between badge rounded-pill Pillwhite">
              <a href="/en/UserAccount">
                    <div className="flag england">
                    </div>
                </a>
              <div>
                <h2 className="mb-0 fs-2 px-4 float-end"><a href="/" className="mb-0">Strona główna</a></h2>
                <h2 className="mb-0 fs-2 px-4 float-end"><a href="/Contact" className="mb-0">Kontakt</a></h2>
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
                          window.location.href = "/UserData"
                        }}>Moje dane</button>
                    </div>
                    <div className="row justify-content-center">
                      <button className="button GreenButton Shadow w-75 mt-3" onClick={() => {
                          window.location.href = "/NewPassword?#"
                        }}>Zmień hasło</button>
                    </div>
                    <div className="row justify-content-center">
                      <button className="button GreenButton Shadow w-75 mt-3" onClick={() => {
                          window.location.href = "/TicketHistory"
                        }}>Historia biletów</button>
                    </div>
                    <div className="row justify-content-center">
                      <button className="button GreenButton Shadow w-75 mt-3" onClick={() => {
                          window.location.href = "/"
                        }}>Wyszukaj połączenie</button>
                    </div>
                    <div className="row justify-content-center">
                      <button className="button GreenButton Shadow w-75 mt-3" onClick={() => {
                          window.location.href = "/"
                        }}>Porównaj oferty</button>
                    </div>
                    <div className="row Laptop2 justify-content-center">
                      <button className="button RedButton Shadow w-75 mt-3" onClick={() => {
                          window.location.href = '/Logout'
                        }}>Wyloguj się</button>
                    </div>
                  </div>
                  <div className="col-9 text-center mt-5"><h1 className="mt-5">Witaj, {sessionStorage.getItem("Name").split(" ")[0]}</h1></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>


  );
}