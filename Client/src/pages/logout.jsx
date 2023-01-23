import * as React from "react";
import { useEffect } from 'react';


export default function Logout() {
  
  useEffect(() => {
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.col-5').classList.add('col-6')
      document.querySelector('.col-5').classList.remove('col-5')
    }
    sessionStorage.removeItem("Login")
    sessionStorage.removeItem("Name")
    sessionStorage.removeItem("Email")
    sessionStorage.removeItem("LoggedIn")
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
              <a href="/en/Logout">
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
            <div className="row justify-content-center">
              <div className="miniform col-5">
                <div className="py-4">
                </div>
                <h2 className="mt-5 pt-4 mx-4 text-center">Poprawnie wylogowano</h2>
                <div className="mx-5 mt-4 mb-5">
                  <h6 className="ms-4 text-center">Możesz zalogować się ponownie lub powrócić na stronę główną klikając w jeden z poniższych przycisków</h6>
                </div>
                <div className="row justify-content-center pt-5 mt-5 mx-5">
                  <button className="button col-4 me-5 py-3 OrangeButton" onClick={() => {
                      window.location.href = "/";
                    }}>Strona główna</button>
                  <button className="button col-4 py-3 OrangeButton" onClick={() => {
                      window.location.href = "/Login?#"
                    }}>Zaloguj ponownie</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>



  );
}
