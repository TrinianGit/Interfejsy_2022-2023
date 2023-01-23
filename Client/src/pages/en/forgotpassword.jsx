import * as React from "react";
import { useEffect } from 'react';
import axios from 'axios'

export default function ForgotPassword() {
  
  useEffect(() => {
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.col-5').classList.add('col-6')
      document.querySelector('.col-5').classList.remove('col-5')
    }

  },[])
  
  async function func(){
    sessionStorage.setItem("Login", document.querySelector("#Login").value);
    await axios.get("https://css-server-user-ticket.glitch.me/").then(async (response) => {
             window.location.href = "/en/EmailSend";         
      }).catch((error) => {
      });
   
  }
  
  
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
              <a href="https://centralna-siec-szyn.glitch.me/ForgotPassword?#">
                  <div className="flag poland">
                  </div>
              </a>
              <div>
                <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/Login?#" className="mb-0">Log in</a></h2>
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
                <h4 className="mb-5 pt-4 mx-4 text-center">Please enter your login below to recover your account. We'll send an email to the email address associated with your account with a link to set a new password.</h4>
                <form action="#" onSubmit={async() => {
                    func()
                  }}>
                  <div className="row justify-content-around mt-5 mx-5">
                    <div className="row px-5">
                      <input className="form-control mb-5" id="Login" type="text" placeholder="Login" required/>
                    </div>
                    <button className="button col-5 py-3 OrangeButton">Next</button>
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
