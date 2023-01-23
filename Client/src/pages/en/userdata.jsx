import * as React from "react";
import { useEffect } from 'react';


export default function UserData() {
  
  useEffect(() => {
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      Object.values(document.querySelectorAll('.Laptop')).map(y => {
          y.classList.add('fs-4')
        })
      Object.values(document.querySelectorAll('.Shadow')).map(y => {
          y.classList.remove('mt-4')
          y.classList.add('mt-2')
        })
    }
  })
  
  
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
              <a href="https://centralna-siec-szyn.glitch.me/UserData">
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
            <div className="row justify-content-center mx-5">
              <div className="miniform col-10">
                <div className="row justify-content-between mt-4 mx-3">
                  <div className="text-center col-5">
                    <h2 className="Laptop">First Name</h2>
                    <h4 className="w-50 text-black py-2 mt-4 Shadow" style={{backgroundColor: '#6BD2B0', marginLeft: '25%', borderRadius: '20px'}}>{sessionStorage.getItem("Name").split(" ")[0]}</h4>
                  </div>
                  <div className="text-center col-5">
                    <h2 className="Laptop">Second Name</h2>
                    <h4 className="w-50 text-black py-2 mt-4 Shadow" style={{backgroundColor: '#6BD2B0', marginLeft: '25%', borderRadius: '20px'}}>{sessionStorage.getItem("Name").split(" ")[1]}</h4>
                  </div>
                </div>
                <div className="row text-center justify-content-center mt-4">
                  <h2 className="Laptop">User name</h2>
                  <h4 className="w-75 text-black py-2 mt-4 Shadow" style={{backgroundColor: '#6BD2B0', borderRadius: '20px'}}>{sessionStorage.getItem("Login")}</h4>
                </div>
                <div className="row text-center justify-content-center mt-4">
                  <h2 className="Laptop">E-mail address</h2>
                  <h4 className="w-75 text-black py-2 mt-4 Shadow" style={{backgroundColor: '#6BD2B0', borderRadius: '20px'}}>{sessionStorage.getItem("Email")}</h4>
                </div>
                <div className="row justify-content-center">
                   <button className="col-2 my-4 me-5 py-3 button OrangeButton" onClick={() => {
                      window.location.href = '/en/UserAccount'
                    }}>Back to account page</button>
                  <button className="col-2 my-4 py-3 button OrangeButton" onClick={() => {
                      window.location.href = '/en/UserEdit?#'
                    }}>Edit data</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>


  );
}