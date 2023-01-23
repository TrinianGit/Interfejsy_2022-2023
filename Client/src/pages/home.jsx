import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import TimeKeeper from 'react-timekeeper';
import DatePicker, { registerLocale } from "react-datepicker";
import { pl } from 'date-fns/locale';
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Formik, Form, Field } from 'formik';
import autoComplete from "@tarekraafat/autocomplete.js";
import "../styles/autocomplete.css"

registerLocale("pl", pl);

export default function Home() {

      let logmain;
      let pad;
  
      if(sessionStorage.getItem("LoggedIn") === '1'){
        logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/UserAccount" className="mb-0">Moje konto</a></h2>
      }
      else{
        logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/Login?#" className="mb-0">Zaloguj się</a></h2>
      }
    useEffect(() => {
        sessionStorage.setItem("Prev", "/");
        (async function scrape() {
            await axios.get("https://css-server-stations-list.glitch.me/").then(async (response) => {
              const autoCompleteJS = new autoComplete({
                name: "autoCompleteFrom",
                selector: "#From",
                placeHolder: "Skąd",
                data: {
                    src: response.data,
                    cache: true,
                },
                resultsList: {
                    element: (list, data) => {
                        if (!data.results.length) {
                            const message = document.createElement("div");
                            message.setAttribute("class", "no_result");
                            message.innerHTML = `<span>Brak rezultatów dla "${data.query}"</span>`;
                            list.prepend(message);
                        }
                    },
                    noResults: true,
                },
                resultItem: {
                    highlight: true,
                },
                events: {
                    input: {
                        selection: (event) => {
                            const selection = event.detail.selection.value;
                            sessionStorage.setItem("From", selection)
                            autoCompleteJS.input.value = selection;
                            document.querySelector("#From2").value = selection;
                        }
                    }
                },
                diacritics: true,
            });
              
            const autoCompleteJS2 = new autoComplete({
                name: "autoCompleteFrom2",
                selector: "#From2",
                placeHolder: "Skąd",
                data: {
                    src: response.data,
                    cache: true,
                },
                resultsList: {
                    element: (list, data) => {
                        if (!data.results.length) {
                            const message = document.createElement("div");
                            message.setAttribute("class", "no_result");
                            message.innerHTML = `<span>Brak rezultatów dla "${data.query}"</span>`;
                            list.prepend(message);
                        }
                    },
                    noResults: true,
                },
                resultItem: {
                    highlight: true,
                },
                events: {
                    input: {
                        selection: (event) => {
                            const selection = event.detail.selection.value;
                            sessionStorage.setItem("From", selection)
                            autoCompleteJS2.input.value = selection;
                            document.querySelector("#From").value = selection;
                        }
                    }
                },
                diacritics: true,
            });
            
              
            const autoCompleteJS3 = new autoComplete({
                name: "autoCompleteTo",
                selector: "#To",
                placeHolder: "Dokąd",
                data: {
                    src: response.data,
                    cache: true,
                },
                resultsList: {
                    element: (list, data) => {
                        if (!data.results.length) {
                            const message = document.createElement("div");
                            message.setAttribute("class", "no_result");
                            message.innerHTML = `<span>Brak rezultatów dla "${data.query}"</span>`;
                            list.prepend(message);
                        }
                    },
                    noResults: true,
                },
                resultItem: {
                    highlight: true,
                },
                events: {
                    input: {
                        selection: (event) => {
                            const selection = event.detail.selection.value;
                            sessionStorage.setItem("To", selection)
                            autoCompleteJS3.input.value = selection;
                            document.querySelector("#To2").value = selection;
                        }
                    }
                },
                diacritics: true,
            });
            
              
              const autoCompleteJS4 = new autoComplete({
                name: "autoCompleteTo2",
                selector: "#To2",
                placeHolder: "Dokąd",
                data: {
                    src: response.data,
                    cache: true,
                },
                resultsList: {
                    element: (list, data) => {
                        if (!data.results.length) {
                            const message = document.createElement("div");
                            message.setAttribute("class", "no_result");
                            message.innerHTML = `<span>Brak rezultatów dla "${data.query}"</span>`;
                            list.prepend(message);
                        }
                    },
                    noResults: true,
                },
                resultItem: {
                    highlight: true,
                },
                events: {
                    input: {
                        selection: (event) => {
                            const selection = event.detail.selection.value;
                            sessionStorage.setItem("To", selection)
                            autoCompleteJS3.input.value = selection;
                            document.querySelector("#To2").value = selection;
                        }
                    }
                },
                diacritics: true,
            });
              
              
            }).catch((error) => {
            });
            
          
          
        }
          
        )();
      
        
    },[])
    
  
  
    
    let uslugiIC = [1,1,1,0,1,1,1];
    let uslugiTLK = [1,1,0,0,0,0,1];
    let uslugiPR = [1,1,1,0,0,0,1];
    let uslugiR = [1,1,1,0,1,0,1];
    let przewoznicy = ["IC", "EIC", "EIP", "TLK", "KD", "KM", "KMŁ", "KŚ", "KW", "ŁKA", "PR", "SKM-T"]
  
    sessionStorage.setItem('Carriers', przewoznicy);
    sessionStorage.setItem('ICservice', uslugiIC);
    sessionStorage.setItem('TLKservice', uslugiTLK);
    sessionStorage.setItem('PRservice', uslugiPR);
    sessionStorage.setItem('Rservice', uslugiR);

    
  
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

    useEffect(() => {
      document.getElementById("Time1").value = sessionStorage.getItem("Time")
      document.getElementById("Time2").value = sessionStorage.getItem("Time")
      document.getElementById("Time3").value = sessionStorage.getItem("Time")
      document.getElementById("Time4").value = sessionStorage.getItem("Time")
      if (window.screen.width <= 1800){
        document.querySelector('.bigPad').classList.add('smallPadLaptop');
        document.querySelector('.bigPad').classList.remove('bigPad');
        document.querySelector('.Laptop').classList.remove('px-5');
        document.querySelector('.LogoImg').style.height = '72px'
        document.querySelector('.site-navbar').classList.add('pt-3')
        document.querySelector('.site-navbar').classList.remove('pt-5')
        Object.values(document.querySelectorAll('.Title')).map(y => {
          y.classList.add('fs-3')
        })
      }
    }, [])
  
    
  
    let timekeeper = (<div>
                            <TimeKeeper
                                time={time}
                                onChange={(newTime) => {setTime(newTime.formatted24)
                                                        sessionStorage.setItem("Time", newTime.formatted24)
                                                        document.getElementById("Time1").value = newTime.formatted24;
                                                        document.getElementById("Time2").value = newTime.formatted24;
                                                        document.getElementById("Time3").value = newTime.formatted24;
                                                        document.getElementById("Time4").value = newTime.formatted24;
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
  
    const onSubmit = async () => {
        window.location.href = '/LoadingTrains';
    }

    const onSubmit2 = async () => {
        
        if(sessionStorage.getItem("Compare") === null){
            window.location.href = '/LoadingTrains';
        }
        else{
            window.location.href = '/CompareTrains';
        }
    }

    let dropdown = "Porównaj po"
    if (sessionStorage.getItem("Compare") !== null){
        if (sessionStorage.getItem("Compare") === "Price"){
          if (sessionStorage.getItem("All") === '1'){
            dropdown = "Cena (cały dzień)"
          }
          else if (sessionStorage.getItem("All") === '0'){
            dropdown = "Cena (+/- 3h)"
          }
        }
        else if (sessionStorage.getItem("Compare") === "Seats"){
          if (sessionStorage.getItem("All") === '1'){
            dropdown = "Dostępność miejsc (cały dzień)"
          }
          else if (sessionStorage.getItem("All") === '0'){
            dropdown = "Dostępność miejsc (+/- 3h)"
          }
        }
        else if (sessionStorage.getItem("Compare") === "TimeTrav"){
          if (sessionStorage.getItem("All") === '1'){
            dropdown = "Czas podróży (cały dzień)"
          }
          else if (sessionStorage.getItem("All") === '0'){
            dropdown = "Czas podróży (+/- 3h)"
          }
        }
        else if (sessionStorage.getItem("Compare") === "Changes"){
          if (sessionStorage.getItem("All") === '1'){
            dropdown = "Liczba przesiadek (cały dzień)"
          }
          else if (sessionStorage.getItem("All") === '0'){
            dropdown = "Liczba przesiadek (+/- 3h)"
          }
        }
    }

    return (
    <div>
        <header className="site-navbar pt-5" role="banner">
            <div className="container-fluid">
            <div className="px-5 row align-items-center">
                <div className="col-4 badge rounded-pill Pillblack">
                <h1 className="mb-0 fs-1"><a href="/" className="mb-0"><img className='LogoImg' src="https://cdn.glitch.global/bcbe3d98-25d5-4c98-a874-76548ff73b90/logo.png?v=1671633863339" /></a></h1>
                </div>
                <div className="col-2" />
                <div className="col-6 py-2 px-5 d-flex align-items-center justify-content-between badge rounded-pill Pillwhite">
                <a href="/en/">
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
        <div className="container-fluid Laptop px-5">
            <div className="px-5 py-5">
            <div className="Pillultrablack">
                <div className="row text-center align-items-center bigPad">
                <div className="miniform col-5 my-4">
                    <h2 className="my-4 Title">Wyszukaj połączenie!</h2>
                    <Formik onSubmit={onSubmit}>
                    <Form>
                        <div className="row px-5">
                        <input className="form-control my-3" autoComplete="off" value={sessionStorage.getItem('From')} id='From' type="text" placeholder="Skąd" onChange={async() => {
                                sessionStorage.setItem('From', document.getElementById('From').value)
                                await setTimeout(100)
                                document.getElementById('From2').value = sessionStorage.getItem('From')
                                document.getElementById('From').value = sessionStorage.getItem('From')
                                }}  required/>
                        </div>
                        <div className="row px-5">
                        <input className="form-control my-3" autoComplete="off" value={sessionStorage.getItem('To')} id='To' type="text" placeholder="Dokąd" onChange={async() => {
                                sessionStorage.setItem('To', document.getElementById('To').value)
                                await setTimeout(100)
                                document.getElementById('To2').value = sessionStorage.getItem('To')
                                document.getElementById('To').value = sessionStorage.getItem('To')
                                }} required/>
                        </div>
                        <div className="row px-5 justify-content-center align-items-center self-align-center my-3">
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
                            <input className="form-control" style={{borderWidth: '0px', padding: '0px', maxWidth: '1px'}} type="text" id="Time4" pattern="([3-9]|1[0-9]|2[0-1])(:[0-5][0-9])" title="Ze względu na działanie wyszukiwarki godzina powinna znajdować się w przedziale 3:00-21:59" placeholder="Godzina" value={sessionStorage.getItem('Time')} required/>
                            <input className="form-control" id='Time1' type="text" placeholder="Godzina" disabled readOnly/>
                            <div className="modal fade" id="timemodal" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                    <div className="modal-header justify-content-center">
                                        <h1 className="modal-title fs-5 text-black text-center" id="staticBackdropLabel">Wybierz czas</h1>
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
                        <div className="row px-5">
                            <a className="fs-4 Advanced" href='/AdvancedSearch?#'>Wyszukiwanie zaawansowane</a>
                        </div>
                        <div className="row px-2 mx-4 py-2 pt-4">
                            <button className="button OrangeButton" type="submit"><h2 className="py-1">Wyszukaj połączenie</h2></button>
                        </div>
                    </Form>
                    </Formik>
                </div>
                <div className="col-2">
                    <h1 className>lub</h1>
                </div>
                <div className="miniform col-5">
                    <h2 className="my-4 Title">Porównaj oferty!</h2>
                    <Formik onSubmit={onSubmit2}>

                        <Form>
                        <div className="row px-5">
                        <input className="form-control my-3" autoComplete="off" value={sessionStorage.getItem('From')} id='From2' type="text" placeholder="Skąd" onChange={async() => {
                                sessionStorage.setItem('From', document.getElementById('From2').value)
                                await setTimeout(100)
                                document.getElementById('From2').value = sessionStorage.getItem('From')
                                document.getElementById('From').value = sessionStorage.getItem('From')
                                }} required/>
                        </div>
                        <div className="row px-5">
                            <input className="form-control my-3" autoComplete="off" value={sessionStorage.getItem('To')} id='To2' type="text" placeholder="Dokąd" onChange={async() => {
                                sessionStorage.setItem('To', document.getElementById('To2').value)
                                await setTimeout(100)
                                document.getElementById('To2').value = sessionStorage.getItem('To')
                                document.getElementById('To').value = sessionStorage.getItem('To')
                                }} required/>
                        </div>
                        <div className="row px-5 justify-content-center align-items-center self-align-center my-3">
                            <div className="input-group w-100 p-0">
                            <span className='input-group-text' style={{padding: '0px'}}>
                                    {datepicker}

                            </span>
                            <input className="form-control" type="text" id='Date2' placeholder="Data" pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}" value={sessionStorage.getItem('Date')} disabled readOnly/>
                            <button className="input-group-text" type='button' data-bs-toggle="modal" data-bs-target="#timemodal">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>
                            </button>
                              <input className="form-control" style={{borderWidth: '0px', padding: '0px', maxWidth: '1px'}} type="text" id="Time3" pattern="([3-9]|1[0-8])(:[0-5][0-9])" title="Ze względu na działanie porównywarki godzina powinna znajdować się w przedziale 3:00-18:59" placeholder="Godzina" value={sessionStorage.getItem('Time')} required/>
                              <input className="form-control" id='Time2' type="text" placeholder="Godzina" disabled readOnly/>
                            </div>
                        </div>
                        <div className="row px-5">
                            <div className="dropdown">
                            <button className="btn Compare dropdown-toggle" id='Compare' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {dropdown}
                            </button>
                            <ul className="dropdown-menu MainPageDropdown">
                                <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                            sessionStorage.setItem('Compare', "Price");
                                                                                            sessionStorage.setItem('All', "0");
                                                                                            document.getElementById('Compare').innerHTML = 'Cena (+/- 3h)'
                                                                                        }}>Cena (+/- 3h)</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                            sessionStorage.setItem('Compare', "Price");
                                                                                            sessionStorage.setItem('All', "1");
                                                                                            document.getElementById('Compare').innerHTML = 'Cena (cały dzień)'
                                                                                        }}>Cena (cały dzień)</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                            sessionStorage.setItem('Compare', "Seats");
                                                                                            sessionStorage.setItem('All', "0");
                                                                                            document.getElementById('Compare').innerHTML = 'Dostępność miejsc (+/- 3h)'
                                                                                        }}>Dostępność miejsc (+/- 3h)</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                            sessionStorage.setItem('Compare', "Seats");
                                                                                            sessionStorage.setItem('All', "1");
                                                                                            document.getElementById('Compare').innerHTML = 'Dostępność miejsc (cały dzień)'
                                                                                        }}>Dostępność miejsc (cały dzień)</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                            sessionStorage.setItem('Compare', "TimeTrav");
                                                                                            sessionStorage.setItem('All', "0");
                                                                                            document.getElementById('Compare').innerHTML = 'Czas przejazdu (+/- 3h)'
                                                                                        }}>Czas przejazdu (+/- 3h)</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                            sessionStorage.setItem('Compare', "TimeTrav");
                                                                                            sessionStorage.setItem('All', "1");
                                                                                            document.getElementById('Compare').innerHTML = 'Czas przejazdu (cały dzień)'
                                                                                        }}>Czas przejazdu (cały dzień)</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                            sessionStorage.setItem('Compare', "Changes");
                                                                                            sessionStorage.setItem('All', "0");
                                                                                            document.getElementById('Compare').innerHTML = 'Liczba przesiadek (+/- 3h)'
                                                                                        }}>Liczba przesiadek (+/- 3h)</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => {
                                                                                            sessionStorage.setItem('Compare', "Changes");
                                                                                            sessionStorage.setItem('All', "1");
                                                                                            document.getElementById('Compare').innerHTML = 'Liczba przesiadek (cały dzień)'
                                                                                        }}>Liczba przesiadek (cały dzień)</a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="row px-5 mx-4 py-3 pt-4">
                            <button className="button OrangeButton" type="submit"><h2 className="py-1">Porównaj oferty</h2></button>
                        </div>
                        </Form>
                    </Formik>
                </div>
                </div>
            </div>
            </div>




        </div>
        </div>
  );
};
