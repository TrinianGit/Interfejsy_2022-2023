import * as React from "react";
import { useEffect } from 'react';

export default function About() {
  
   useEffect(() => {
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
        document.querySelector('.site-navbar').classList.add('pt-3')
        document.querySelector('.site-navbar').classList.remove('pt-5')
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
              <a href="/en/Contact">
                    <div className="flag england">
                    </div>
                </a>
              <div>
                <h2 className="mb-0 fs-2 px-4 float-end"><a href="index.html" className="mb-0">Zaloguj się</a></h2>
                <h2 className="mb-0 fs-2 px-4 float-end"><a href="index.html" className="mb-0">Kontakt</a></h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container-fluid px-5">
        <div className="px-5 py-5">
          <div className="Pillultrablack smallPad">
            <div className="row miniform justify-content-around">
              <div className="col-5 text-center align-self-center">
                <h1>Kontakt</h1>
                <h4 className="text-start">Kontakt możliwy jest telefonicznie pod numerami:</h4>
                <h5><a style={{color: 'orange'}} href="tel:+48 675 473 283">675 473 283</a> - dla klientów indywidualnych</h5>
                <h5><a style={{color: 'orange'}} href="tel:+48 694 496 444">694 496 444</a> - dla firm przewozowych</h5>
                <h5><a style={{color: 'orange'}} href="tel:+48 213 721 372">213 721 372</a> - w sprawach biznesowych</h5>
                <h4 className="text-start">Na adresy e-mail:</h4>
                <h5><a style={{color: 'orange'}} href="mailto: klient@css.example.com">klient@css.example.com</a> - dla klientów indywidualnych</h5>
                <h5><a style={{color: 'orange'}} href="mailto: kolej@css.example.com">kolej@css.example.com</a> - dla firm przewozowych</h5>
                <h5><a style={{color: 'orange'}} href="mailto: biznes@css.example.com">biznes@css.example.com</a> - w sprawach biznesowych</h5>
                <h4 className="text-start">Lub odwiedzając nas bezpośrednio w siedzibie:</h4>
                <h5>Centralna Sieć Szyn sp. z o.o.</h5>
                <h5>ul. Szynowa 69, 03-164 Warszawa</h5>
              </div>
              <div className="col-6 text-center my-4 py-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.1194665333464!2d20.98327455172997!3d52.33197877967979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec8ffddfd33c5%3A0x2841d55d67e70122!2sSzynowa%2069%2C%2003-164%20Warszawa!5e0!3m2!1spl!2spl!4v1674418205970!5m2!1spl!2spl" width="80%" height={450} style={{borderRadius: '10px'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
