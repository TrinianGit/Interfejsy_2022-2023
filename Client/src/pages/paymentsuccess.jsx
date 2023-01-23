import * as React from "react";
import { useEffect } from 'react';



export default function PaymentSuccess() {
  
  let logmain
  
  if(sessionStorage.getItem("LoggedIn") === '1'){
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/UserAccount" className="mb-0">Moje konto</a></h2>
  }
  else{
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/Login?#" className="mb-0">Zaloguj się</a></h2>
  }
  
  function Download(){
    let numer = sessionStorage.getItem("TicketNumber")
    let str = `Bilet numer: ${numer}\n
    Zakupione bilety: ${sessionStorage.getItem("TT").replaceAll("+", ',').replaceAll('x', 'x ')}
    Relacja: ${sessionStorage.getItem('From')}-${sessionStorage.getItem('To')}
    Dnia: ${sessionStorage.getItem("Date")}
    W godzinach: ${JSON.parse(sessionStorage.getItem("Train")).from}-${JSON.parse(sessionStorage.getItem("Train")).to}
    Pociągami: ${JSON.parse(sessionStorage.getItem("Train")).traindetails.join(", ")}
    Cena: ${sessionStorage.getItem("FullPrice")}`
    let plik = new Blob([str], {
      type: 'text/plain'
    });
    const download = window.URL.createObjectURL(plik);
    const link = document.createElement('a');
    link.href = download;
    link.setAttribute(
      'download',
      `Bilet_${numer}.txt`
    )
    document.body.appendChild(link)
    link.click()
    link.parentNode.removeChild(link)
  }
  
  useEffect(() => {
    if(window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.py-4').classList.remove('py-4')
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
              <a href="/en/PaymentSuccess">
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
                <h2 className="my-5 pt-4 mx-4 text-center">Bilet został zakupiony i wysłany na podany adres e-mail!</h2>
                <div className="mx-5 my-5">
                  <h6 className="ms-4 text-center">Dla Twojej wygody możesz go pobrać bezpośrednio klikając w poniższy przycisk i/lub zakupić bilet powrotny.</h6>
                </div>
                <div className="row justify-content-around mt-5 mx-5">
                  <button className="button col-5 py-3 OrangeButton" onClick={() => {
                                                                              Download()
                                                                              
                                                                            }}>Pobierz bilet</button>
                  <button className="button col-5 py-3 OrangeButton" onClick={() => {
                      let tmp = sessionStorage.getItem('From')
                      sessionStorage.setItem('From', sessionStorage.getItem('To'));
                      sessionStorage.setItem('To', tmp);
                      window.location.href = '/';
                    }}>Kup bilet powrotny</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}
