import * as React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import TimeKeeper from 'react-timekeeper';
import DatePicker, { registerLocale } from "react-datepicker";
import { pl } from 'date-fns/locale';
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export default function AdvancedSearch() {

  let uslugiIC = [1,1,1,0,1,1,1];
  let uslugiTLK = [1,1,0,0,0,0,1];
  let uslugiPR = [1,1,1,0,0,0,1];
  let uslugiR = [1,1,1,0,1,0,1];
  let przewoznicy  = ["IC", "EIC", "EIP", "TLK", "KD", "KM", "KMŁ", "KŚ", "KW", "ŁKA", "PR", "SKM-T"];
  let logmain
  
  if(sessionStorage.getItem("LoggedIn") === '1'){
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/UserAccount" className="mb-0">Moje konto</a></h2>
  }
  else{
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/Login?#" className="mb-0">Zaloguj się</a></h2>
  }
  
  useEffect(() => {
    if(window.screen.width <= 1800){
    document.querySelector('.LogoImg').style.height = '72px'
    document.querySelector('.site-navbar').classList.add('pt-3')
    document.querySelector('.site-navbar').classList.remove('pt-5')
    document.querySelector('.smallPad').classList.add('noyPad')
    document.querySelector('.smallPad').classList.remove('smallPad')
    document.querySelector('.miniform').classList.add('my-4')
    document.querySelector('.miniform').classList.remove('px-5')
    Object.values(document.querySelector('.miniform').querySelectorAll('.col-4')).map(y => {
          y.classList.add('py-3')
          y.classList.remove('py-5')
        })
    }
  }, []);
  
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))`
    document.body.appendChild(script);
    
  }, [])
  
  
  async function submiter(){
    
    if (document.querySelector('#Animal').checked && document.querySelector('#Bike').checked){
      sessionStorage.setItem("Discounts", 3)
      sessionStorage.setItem("TicketNum2", '1')
      sessionStorage.setItem("TicketNum3", '1')
      sessionStorage.setItem("TicketType2", ['Zwierze', 'Bilet dla zwierzęcia'])
      sessionStorage.setItem("TicketType3", ['Bagaz', 'Bilet na przewóz dodatkowego bagażu'])
    }
    else if (document.querySelector('#Animal').checked){
      sessionStorage.setItem("Discounts", 2)
      sessionStorage.setItem("TicketNum2", '1')
      sessionStorage.setItem("TicketType2", ['Zwierze', 'Bilet dla zwierzęcia'])
    }
    else if (document.querySelector('#Bike').checked){
      sessionStorage.setItem("Discounts", 2)
      sessionStorage.setItem("TicketNum2", '1')
      sessionStorage.setItem("TicketType2", ['Bagaz', 'Bilet na przewóz dodatkowego bagażu'])
    }
    
    await axios.get("https://css-server-user-ticket.glitch.me/").then(async (response) => {
          sessionStorage.setItem('Carriers', przewoznicy);
          sessionStorage.setItem('ICservice', uslugiIC);
          sessionStorage.setItem('TLKservice', uslugiTLK);
          sessionStorage.setItem('PRservice', uslugiPR);
          sessionStorage.setItem('Rservice', uslugiR);
          window.location.href = "/LoadingTrains"
          
      }).catch((error) => {
          console.log(error)
          window.location.href = "/400badrequest"
      });
  }
  
  function uslugiPrzewoznicy(){
    przewoznicy = []
    
    if (document.querySelector('#Handicapped').checked){
      uslugiTLK[2] = 1
    }
    else{
      uslugiTLK[2] = 0
    }
    
    if (document.querySelector('#Sleep').checked){
      uslugiIC[3] = 1
      uslugiTLK[3] = 1
      uslugiPR[3] = 1
      uslugiR[3] = 1
    }
    else{
      uslugiIC[3] = 0
      uslugiTLK[3] = 0
      uslugiPR[3] = 0
      uslugiR[3] = 0
    }
    
    if (document.querySelector('#Wifi').checked){
      uslugiTLK[4] = 1
      uslugiPR[4] = 1
    }
    else{
     uslugiTLK[4] = 0
      uslugiPR[4] = 0
    }
    
    if (document.querySelector('#Eat').checked){
      uslugiTLK[5] = 0
      uslugiPR[5] = 0
      uslugiR[5] = 0
    }
    else{
      uslugiTLK[5] = 0
      uslugiPR[5] = 0
      uslugiR[5] = 0
    }

    
    if(document.querySelector('#IC').checked){
      przewoznicy.push("IC")
      przewoznicy.push("EIC")
      przewoznicy.push("EIP")
      przewoznicy.push("TLK")
    }
    
    if(document.querySelector('#KD').checked){
      przewoznicy.push("KD")
    }
    
    if(document.querySelector('#KM').checked){
      przewoznicy.push("KM")
    }
    
    if(document.querySelector('#KMŁ').checked){
      przewoznicy.push("KMŁ")
    }
    
    if(document.querySelector('#KŚ').checked){
      przewoznicy.push("KŚ")
    }
    
    if(document.querySelector('#KW').checked){
      przewoznicy.push("KW")
    }
    
    if(document.querySelector('#ŁKA').checked){
      przewoznicy.push("ŁKA")
    }
    
    if(document.querySelector('#PR').checked){
      przewoznicy.push("PR")
    }
    
    if(document.querySelector('#SKM-T').checked){
      przewoznicy.push("SKM-T")
    }
    
    console.log(przewoznicy)
  }
  
  const today = moment();
    let timenow = '0'
    if (today.minutes() < 10){
        timenow = today.hour() + ":" + "0" + today.minutes();
        if (sessionStorage.getItem('Time') === null){
            sessionStorage.setItem('Time', timenow);
        }
    }
    else{
        timenow = today.hour() + ":" + today.minutes();
        if (sessionStorage.getItem('Time') === null){
            sessionStorage.setItem('Time', timenow);
        }
    }
    const [date, setDate] = useState(today.toDate());
    const [time, setTime] = useState(timenow);
    if (sessionStorage.getItem('Date') === null){
        sessionStorage.setItem('Date', format(date, 'dd-MM-yyyy'));
    }

    let timekeeper = (<div>
                            <TimeKeeper
                                time={time}
                                onChange={(newTime) => {setTime(newTime.formatted24)
                                                        sessionStorage.setItem("Time", newTime.formatted24)
                                                        document.getElementById("Time1").value = newTime.formatted24;
                                                        document.getElementById("Time2").value = newTime.formatted24;
                                                    }}
                                hour24Mode
                                forceCoarseMinutes
                                switchToMinuteOnHourSelect
                            />
                        </div>)
    
    let datepicker = (<DatePicker
                        className='form-control'
                        selected={date}
                        dateFormat='dd-MM-yyyy'
                        locale="pl"
                        minDate={moment().toDate()}
                        maxDate={moment().add(30, 'd').toDate()}
                        onChange={(date) => {setDate(date)
                                            sessionStorage.setItem("Date", format(date, 'dd-MM-yyyy'))}}
                        customInput={<button className='input-group-text' type="button" style={{borderWidth: '0px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-calendar-date-fill" viewBox="0 0 16 16">
                                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                                        <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                                        </svg>
                                    </button>}
                        
                        withPortal
                    />)
  
  
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
              <a href="/en/AdvancedSearch?#">
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
          <div className="Pillultrablack">
            <div className="row text-center align-items-center smallPad">
              <div className="miniform px-5" style={{width: '90%', marginLeft: '5%'}}>
                <div className="row">
                  <div className="col-4 py-5">
                    <h2>Dane połączenia</h2>
                    <form id="form" action="#" onSubmit={() => {
                        submiter()
                      }}>
                      <div className="row px-5 mt-4">
                        <input className="form-control my-4" value={sessionStorage.getItem('From')} id='From' type="text" placeholder="Skąd" onChange={async() => {
                                sessionStorage.setItem('From', document.getElementById('From').value)
                                }}  required/>
                      </div>
                      <div className="row px-5">
                         <input className="form-control my-4" value={sessionStorage.getItem('To')} id='To' type="text" placeholder="Dokąd" onChange={async() => {
                                sessionStorage.setItem('To', document.getElementById('To').value)
                                }} required/>
                      </div>
                      <div className="row px-5 justify-content-center align-items-center self-align-center my-4">
                        <div className="input-group w-100 p-0">
                                <span className='input-group-text' style={{padding: '0px'}}>
                                    {datepicker}

                                </span>
                            <input className="form-control" type="text" id='Date1' placeholder="Data" value={sessionStorage.getItem('Date')} disabled readOnly/>
                            <button className="input-group-text" type='button' data-bs-toggle="modal" data-bs-target="#timemodal" >
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>
                            </button>
                            <input className="form-control" style={{borderWidth: '0px', padding: '0px', maxWidth: '1px'}} id='Time2' type="text" pattern="([3-9]|1[0-9]|2[0-1])(:[0-5][0-9])" title="Ze względu na działanie wyszukiwarki godzina powinna znajdować się w przedziale 3:00-21:59" placeholder="Godzina" value={sessionStorage.getItem('Time')} required/>
                            <input className="form-control" id='Time1' type="text" placeholder="Godzina" value={sessionStorage.getItem('Time')} disabled readOnly/>
                            <div className="modal fade" id="timemodal" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Wybierz czas</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        {timekeeper}
                                    </div>
                                    <div className="modal-footer">
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-4 py-5">
                    <h2>Usługi dodatkowe</h2>
                    <div className="form-check text-start mt-5">
                      <input className="form-check-input" type="checkbox" id="Animal" defaultValue onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label me-2" htmlFor="flexCheckDefault">Możliwość przewozu zwierząt</label>
                      <i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Wyświetlone zostaną wyłącznie pociągi z możliwością przewozu zwierząt. Przy zakupie biletu automatycznie dodana zostanie opcja biletu dla zwierząt.">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </i>
                    </div>
                    <div className="form-check text-start my-3">
                      <input className="form-check-input" type="checkbox" id="Bike" defaultValue onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label me-2" htmlFor="flexCheckDefault">Przewóz roweru/dodatkowego bagażu</label>
                      <i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Wyświetlone zostaną wyłącznie pociągi z możliwością przewozu roweru/dodatkowego bagażu. Przy zakupie biletu automatycznie dodana zostanie opcja biletu dla roweru/dodatkowego bagażu.">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </i>
                    </div>
                    <div className="form-check text-start my-3">
                      <input className="form-check-input" type="checkbox" id="Handicapped" defaultValue onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label me-2" htmlFor="flexCheckDefault">Udogodnienia dla niepełnosprawnych</label>
                      <i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Wyświetlone zostaną wyłącznie pociągi zawierające wagony przystosowane do przewozu osób niepełnosprawnych (np. miejsca dla niepełnosprawnych, kładki umożliwiające wjechanie do pociągu na wózku inwalidzkim).">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </i>
                    </div>
                    <div className="form-check text-start my-3">
                      <input className="form-check-input" type="checkbox" id="Sleep" defaultValue onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label me-2" htmlFor="flexCheckDefault">Wagony sypialne</label>
                      <i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Wyświetlone zostaną wyłącznie pociągi wyposażone w wagony sypialne.">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </i>
                    </div>
                    <div className="form-check text-start my-3">
                      <input className="form-check-input" type="checkbox" id="Wifi" defaultValue onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label me-2" htmlFor="flexCheckDefault">Dostęp do WiFi</label>
                      <i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Wyświetlone zostaną wyłącznie pociągi, w których można połączyć się z bezpłatnym WiFi udostępnionym przez przewoźnika">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </i>
                    </div>
                    <div className="form-check text-start my-3">
                      <input className="form-check-input" type="checkbox" id="Eat" defaultValue onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label me-2" htmlFor="flexCheckDefault">Sprzedaż napojów/przekąsek</label>
                      <i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Wyświetlone zostaną wyłącznie pociągi, które posiadają wagon gastronomiczny/mobilny wózek z przekąskami">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </i>
                    </div>
                    <div className="form-check text-start my-3">
                      <input className="form-check-input" type="checkbox" id="Send" defaultValue onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label me-2" htmlFor="flexCheckDefault">Przewóz przesyłek konduktorskich</label>
                      <i data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Wyświetlone zostaną wyłącznie pociągi, w których możliwe jest nadanie przesyłki konduktorskiej (podczas nadania wymagana będzie dodatkowa opłata).">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </i>
                    </div>                           
                  </div>
                  <div className="col-4 py-5">
                    <h2>Przewoźnicy</h2>
                    <div className="form-check text-start mt-5">
                      <input className="form-check-input" type="checkbox" id="IC" defaultValue defaultChecked onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label" htmlFor="flexCheckChecked">"PKP Intercity" S.A.</label>
                    </div>
                    <div className="form-check text-start mt-2">
                      <input className="form-check-input" type="checkbox" id="KD" defaultValue defaultChecked onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label" htmlFor="flexCheckChecked">Koleje Dolnośląskie S.A.</label>
                    </div>
                    <div className="form-check text-start mt-2">
                      <input className="form-check-input" type="checkbox" id="KM" defaultValue defaultChecked onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label" htmlFor="flexCheckChecked">"Koleje Mazowieckie - KM" sp. z o.o.</label>
                    </div>
                    <div className="form-check text-start mt-2">
                      <input className="form-check-input" type="checkbox" id="KMŁ" defaultValue defaultChecked onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label" htmlFor="flexCheckChecked">"Koleje Małopolskie" sp. z o.o.</label>
                    </div>
                    <div className="form-check text-start mt-2">
                      <input className="form-check-input" type="checkbox" id="KŚ" defaultValue defaultChecked onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label" htmlFor="flexCheckChecked">Koleje Śląskie sp. z o.o.</label>
                    </div>
                    <div className="form-check text-start mt-2">
                      <input className="form-check-input" type="checkbox" id="KW" defaultValue defaultChecked onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label" htmlFor="flexCheckChecked">Koleje Wielkopolskie sp. z o.o.</label>
                    </div>
                    <div className="form-check text-start mt-2">
                      <input className="form-check-input" type="checkbox" id="ŁKA" defaultValue defaultChecked onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label" htmlFor="flexCheckChecked">"Łódzka Kolej Aglomeracyjna" sp. z o.o.</label>
                    </div>
                    <div className="form-check text-start mt-2">
                      <input className="form-check-input" type="checkbox" id="PR" defaultValue defaultChecked onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label" htmlFor="flexCheckChecked">POLREGIO S.A.</label>
                    </div>
                    <div className="form-check text-start mt-2">
                      <input className="form-check-input" type="checkbox" id="SKM-T" defaultValue defaultChecked onClick={() => uslugiPrzewoznicy()} />
                      <label className="form-check-label" htmlFor="flexCheckChecked">PKP Szybka Kolej Miejska w Trójmieście sp. z o.o.</label>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mb-5">
                  <button className="button col-2 py-2 me-5 OrangeButton" type="button" onClick={() => {
                      window.location.href = "/"
                    }}>Powrót</button>
                  <button className="button col-2 py-2 OrangeButton" form="form">Wyszukaj połączenia</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
