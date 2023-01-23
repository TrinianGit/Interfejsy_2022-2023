import * as React from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function Login() {
  
  useEffect(() => {
    sessionStorage.setItem("Prev", "/en/Login?#")
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.bigPad').classList.add('smallPad')
      document.querySelector('.bigPad').classList.add('bigPad')
      Object.values(document.querySelectorAll('.Laptop')).map(y => {
          y.classList.remove('pt-5')
          y.classList.remove('py-4')
        })
    }
    
    if (sessionStorage.getItem("Login") !== null){
      document.querySelector('#LogLogin').value = sessionStorage.getItem("Login")
      document.querySelector('#RegLogin').value = sessionStorage.getItem("Login")
    }
    if (sessionStorage.getItem("Name") !== null){
      document.querySelector('#RegName').value = sessionStorage.getItem("Name").split(" ")[0]
      document.querySelector('#RegName2').value = sessionStorage.getItem("Name").split(" ")[0]
    }
    if (sessionStorage.getItem("Email") !== null){
      document.querySelector('#RegEmail').value = sessionStorage.getItem("Email")
    }
  }, [])
  
  
  async function validateLogin(){
    await axios.get("https://css-server-user-ticket.glitch.me/logins", {
          params: {
              Login: sessionStorage.getItem("Login"),
              Password: sessionStorage.getItem("Password")
          }
      }).then(async (response) => {
          console.log(response.data);
          if (response.data.Name !== undefined){
            sessionStorage.removeItem("Password")
            sessionStorage.setItem("LoggedIn", '1')
            sessionStorage.setItem("Name", response.data.Name + ' ' + response.data.Surname)
            sessionStorage.setItem("Email", response.data.Email)
            window.location.href = '/en/UserAccount'
          }
          else{
            document.querySelector('.ErrorMessage').style.visibility = "visible";
          }
          
      }).catch((error) => {
          console.log(error)
          window.location.href = "/en/400badrequest"
      });
  }
  
  async function createAccount(){

    await axios.post("https://css-server-user-ticket.glitch.me/logins", null, {
          params: {
              Login: sessionStorage.getItem("Login"),
              Password: sessionStorage.getItem("Password"),
              Email: sessionStorage.getItem("Email"),
              Name: sessionStorage.getItem("Name").split(" ")[0],
              Surname: sessionStorage.getItem("Name").split(" ")[1],
              Flag: "Create"
          }
      }).then(async (response) => {
          console.log(response.data);
          if (response.data === "User created"){
            sessionStorage.removeItem("Password")
            sessionStorage.setItem("LoggedIn", '1')
            window.location.href = '/en/UserAccount'
          }
          else{
            document.querySelector('.ErrorMessage2').style.visibility = "visible";
          }
          
      }).catch((error) => {
          console.log(error)
          window.location.href = "/en/400badrequest"
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
              <a href="https://centralna-siec-szyn.glitch.me/Login?#">
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
          <div className="Pillultrablack">
            <div className="row text-center align-items-center bigPad">
              <div className="miniform col-5">
                <h2 className="my-4">My Account</h2>
                <form action='#' onSubmit={async () => {
                    await validateLogin();
                  }}>
                  <div className="row px-5">
                    <input className="form-control my-4" type="text" id='LogLogin' placeholder="Login" onChange={() => {
                        sessionStorage.setItem("Login", document.querySelector('#LogLogin').value)
                      }} required/>
                  </div>
                  <div className="row px-5 pb-5">
                    <input className="form-control my-4" type="password" id='LogPass' placeholder="Password" onChange={() => {
                        sessionStorage.setItem("Password", document.querySelector('#LogPass').value)
                      }} required/>
                    <span class='ErrorMessage' style={{visibility: 'hidden', color: 'red'}}><h5>Invalid login or password</h5></span>
                  </div>
                  <div className="row px-5 Laptop pt-5">
                    <a className="fs-4 Advanced text-end" href="/en/ForgotPassword?#">Forgot password?</a>
                  </div>
                  <div className="row px-5 py-4 justify-content-end">
                    <button className="button OrangeButton SmallButton" type="submit"><h6 className="py-2">Log in</h6></button>
                  </div>
                </form>
              </div>
              <div className="col-2">
                <h1 className />
              </div>
              <div className="miniform col-5">
                <h2 className="my-4">Don't have an account?</h2>
                <form action='#' onSubmit={async () => {
                    await createAccount();
                  }}>
                  <div className="row px-5">
                    <input className="form-control my-2" type="text" id="RegName" placeholder="First Name" onChange={() => {
                        sessionStorage.setItem("Name", document.querySelector('#RegName').value + " " + document.querySelector('#RegName2').value)
                      }} required/>
                  </div>
                  <div className="row px-5">
                    <input className="form-control my-2" type="text" id="RegName2" placeholder="Second name" onChange={() => {
                        sessionStorage.setItem("Name", document.querySelector('#RegName').value + " " + document.querySelector('#RegName2').value)
                      }} required/>
                  </div>
                  <div className="row px-5">
                    <input className="form-control my-2" type="text" id="RegLogin" placeholder="Login" onChange={() => {
                        sessionStorage.setItem("Login", document.querySelector('#RegLogin').value)
                      }} required/>
                  </div>
                  <div className="row px-5">
                    <input className="form-control my-2" type="password" id="RegPassword" placeholder="Password" onChange={() => {
                        sessionStorage.setItem("Password", document.querySelector('#RegPassword').value)
                      }} required/>
                  </div>
                  <div className="row px-5 pb-1">
                    <input className="form-control my-2" type="email" id="RegEmail" placeholder="E-mail address" onChange={() => {
                        sessionStorage.setItem("Email", document.querySelector('#RegEmail').value)
                      }} required/>
                    <span class='ErrorMessage2' style={{visibility: 'hidden', color: 'red'}}><h5>User with this login already exists</h5></span>
                  </div>
                  <div className="row px-5 pb-4 py-4 pt-5 Laptop justify-content-end">
                    <button className="button OrangeButton SmallButton" type="submit"><h6 className="py-2">Create account</h6></button>
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
