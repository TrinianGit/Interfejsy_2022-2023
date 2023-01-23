import * as React from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function UserEdit() {
  
  let tmpname;
  let tmpsurname;
  let tmpemail;
  
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
  },[])
  
  
  async function changeData (){
    await axios.post("https://css-server-user-ticket.glitch.me/logins", null, {
          params: {
              Login: sessionStorage.getItem("Login"),
              Email: tmpemail,
              Name: tmpname,
              Surname: tmpsurname,
              Flag: "Dane"
          }
      }).then(async (response) => {
          console.log(response.data);
          if (response.data === "User changed"){
            sessionStorage.setItem("Name", tmpname + ' ' + tmpsurname)
            sessionStorage.setItem("Email", tmpemail)
            window.location.href = '/UserData'
          }
          
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
              <a href="/en/UserEdit">
                    <div className="flag england">
                    </div>
                </a>
              <div>
                <h2 className="mb-0 fs-2 px-4 float-end"><a href="/UserAccount" className="mb-0">Moje konto</a></h2>
                <h2 className="mb-0 fs-2 px-4 float-end"><a href="/Contact" className="mb-0">Kontakt</a></h2>
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
                <form action="#" onSubmit={() => {
                    changeData()
                  }}>
                  <div className="row justify-content-between mt-4 mx-3">
                    <div className="text-center col-5">
                      <h2 className="Laptop">Imię</h2>
                      <input className="w-50 text-center fs-5 fw-bold Shadow form-control my-4" id="UsName" style={{marginLeft: '25%', borderRadius: '20px'}} type="text" placeholder="Imię" onChange={() => {
                          tmpname = document.querySelector("#UsName").value
                        }} required/>
                    </div>
                    <div className="text-center col-5">
                      <h2 className="Laptop">Nazwisko</h2>
                      <input className="w-50 text-center fs-5 fw-bold Shadow form-control my-4" id="UsName2" style={{marginLeft: '25%', borderRadius: '20px'}} type="text" placeholder="Nazwisko" onChange={() => {
                          tmpsurname = document.querySelector("#UsName2").value
                        }} required/>
                    </div>
                  </div>
                  <div className="row text-center justify-content-center mb-5 mt-4">
                    <h2 className="Laptop">Adres e-mail</h2>
                    <input className="w-75 text-center fs-5 fw-bold Shadow form-control my-4" id="UsEmail" style={{borderRadius: '20px'}} type="email" placeholder="Adres e-mail" onChange={() => {
                          tmpemail = document.querySelector("#UsEmail").value
                        }} required/>
                  </div>
                  <div className="row justify-content-center">
                    <button className="col-2 me-5 my-5 py-3 button OrangeButton" type="button" onClick={() => {
                        window.location.href = "/UserData"
                      }}>Anuluj</button>
                    <button className="col-2 my-5 py-3 button OrangeButton">Zapisz zmiany</button>
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