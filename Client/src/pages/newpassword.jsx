import * as React from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function NewPassword() {
  
  let logmain
  
  useEffect(() => {
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.col-5').classList.add('col-6')
      document.querySelector('.col-5').classList.remove('col-5')
      document.querySelector('.mt-5').classList.remove('mt-5')
    }

  },[])
  
  if(sessionStorage.getItem("LoggedIn") === '1'){
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/UserAccount" className="mb-0">Moje konto</a></h2>
  }
  else{
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/Login?#" className="mb-0">Zaloguj się</a></h2>
  }
  
  async function newPass(){
    await axios.post("https://css-server-user-ticket.glitch.me/logins", null, {
          params: {
              Login: sessionStorage.getItem("Login"),
              Password: document.querySelector("#Pass").value,
              Flag: "Update"
          }
      }).then(async (response) => {
          console.log(response.data)
          window.location.href = "/PasswordChanged"
          
      }).catch((error) => {
          console.log(error)
          window.location.href = "/400badrequest"
      });
  }
  
  
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
              <a href="/en/NewPassword?#">
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
              <div className="miniform col-5 pt-5">
                <div className="pt-5 mt-5 text-center">
                  <h2>Wprowadź nowe hasło</h2>
                </div>
                <form action="#" onSubmit={() => {
                    newPass();
                  }}>
                  <div className="row justify-content-around mt-5 mx-5">
                    <div className="row px-5">
                      <input className="form-control mb-5" id="Pass" type="password" placeholder="Nowe hasło" required/>
                    </div>
                    <button className="button col-5 py-3 OrangeButton">Zmień hasło</button>
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
