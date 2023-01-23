import * as React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

export default function TicketHistory() {
  let tickets = [];
  let currentticket = 0;
  
  function Download(nr){
    let numer = tickets[nr].TicketNumber
    let str = `Ticket number: ${numer}\n
    Your tickets: ${tickets[nr].TicketTypes.replaceAll("+", ',').replaceAll('x', 'x ')}
    Relation: ${tickets[nr].StartStation}-${tickets[nr].EndStation}
    Day: ${tickets[nr].FullDate.split('+')[0]}
    Hours: ${tickets[nr].FullDate.split('+')[1]}
    Trains: ${tickets[nr].TrainsNumber.replaceAll("+", ", ")}
    Price: ${tickets[nr].Price}`
    let plik = new Blob([str], {
      type: 'text/plain'
    });
    const download = window.URL.createObjectURL(plik);
    const link = document.createElement('a');
    link.href = download;
    link.setAttribute(
      'download',
      `Ticket_${numer}.txt`
    )
    document.body.appendChild(link)
    link.click()
    link.parentNode.removeChild(link)
  }
  
  async function showTrains(){
    console.log(tickets.length)
    if(currentticket == 0){
      document.querySelector('.Less').style.display = "none"
    }
    else{
      document.querySelector('.Less').style.display = "block"
    }
    if (currentticket + 1 >= tickets.length){
      let i = 0
      await Object.values(document.querySelectorAll('.miniformdiff')).map(y => {
                          if (i > 0){
                            y.style.visibility = "hidden"
                          }
                          else{
                            y.style.visibility = "visible"
                            y.querySelector('.Ticket').innerHTML = `Ticket no. ${tickets[currentticket].TicketNumber}`
                            
                            y.querySelector('.Numbers').innerHTML = `${tickets[currentticket].TrainsNumber.replaceAll("+", "<br />")}` 
                            y.querySelector('.Start').innerHTML = `${tickets[currentticket].StartStation}` 
                            y.querySelector('.End').innerHTML = `${tickets[currentticket].EndStation}` 
                            y.querySelector('.Date').innerHTML = `${tickets[currentticket].FullDate.replace("+", "<br />")}` 
                            y.querySelector('.Price').innerHTML = `${tickets[currentticket].Price}`
                            
                            let firstpart = tickets[currentticket + i].FullDate.split("+")[0] + " " + tickets[currentticket + i].FullDate.split("+")[1].split("-")[0]
                            if (tickets[currentticket + i].Returned === '1'){
                              y.querySelector('.OrangeButton').disabled = true
                              y.querySelector('.OrangeButton').style.color = "black"
                              y.querySelector('.OrangeButton').innerHTML = "Ticket returned"
                              y.querySelector('.RedButton').disabled = true
                              y.querySelector('.RedButton').innerHTML = "Ticket returned"
                            }
                            else if (moment(firstpart, 'DD-MM-YYYY HH:mm').diff(moment()) > 0){
                              y.querySelector('.RedButton').disabled = false
                              y.querySelector('.RedButton').innerHTML = "Return ticket"
                            }
                            else{
                              y.querySelector('.RedButton').disabled = true
                              y.querySelector('.RedButton').innerHTML = "Return unviable"
                            }
                          }
                          i += 1
                        })
      document.querySelector('.More').style.display = "none"
      
    }
    else if (currentticket + 2 >= tickets.length){
      let i = 0
      await Object.values(document.querySelectorAll('.miniformdiff')).map(y => {
                          if (i > 1){
                            y.style.visibility = "hidden"
                          }
                          else{
                            y.style.visibility = "visible"
                            y.querySelector('.Ticket').innerHTML = `Ticket no. ${tickets[currentticket + i].TicketNumber}`
                            
                            y.querySelector('.Numbers').innerHTML = `${tickets[currentticket + i].TrainsNumber.replaceAll("+", "<br />")}` 
                            y.querySelector('.Start').innerHTML = `${tickets[currentticket + i].StartStation}` 
                            y.querySelector('.End').innerHTML = `${tickets[currentticket + i].EndStation}` 
                            y.querySelector('.Date').innerHTML = `${tickets[currentticket + i].FullDate.replace("+", "<br />")}` 
                            y.querySelector('.Price').innerHTML = `${tickets[currentticket + i].Price}`
                            
                            let firstpart = tickets[currentticket + i].FullDate.split("+")[0] + " " + tickets[currentticket + i].FullDate.split("+")[1].split("-")[0]
                            if (tickets[currentticket + i].Returned === '1'){
                              y.querySelector('.OrangeButton').disabled = true
                              y.querySelector('.OrangeButton').style.color = "black"
                              y.querySelector('.OrangeButton').innerHTML = "Ticket returned"
                              y.querySelector('.RedButton').disabled = true
                              y.querySelector('.RedButton').innerHTML = "Ticket returned"
                            }
                            else if (moment(firstpart, 'DD-MM-YYYY HH:mm').diff(moment()) > 0){
                              y.querySelector('.RedButton').disabled = false
                              y.querySelector('.RedButton').innerHTML = "Return ticket"
                            }
                            else{
                              y.querySelector('.RedButton').disabled = true
                              y.querySelector('.RedButton').innerHTML = "Return unviable"
                            }
                          }
                          i += 1
                        })
      document.querySelector('.More').style.display = "none"
    }
    else if (currentticket + 3 >= tickets.length){
      let i = 0
      await Object.values(document.querySelectorAll('.miniformdiff')).map(y => {
                          if (i > 2){
                            y.style.visibility = "hidden"
                          }
                          else{
                            y.style.visibility = "visible"
                            y.querySelector('.Ticket').innerHTML = `Ticket no. ${tickets[currentticket + i].TicketNumber}`
                            
                            y.querySelector('.Numbers').innerHTML = `${tickets[currentticket + i].TrainsNumber.replaceAll("+", "<br />")}` 
                            y.querySelector('.Start').innerHTML = `${tickets[currentticket + i].StartStation}` 
                            y.querySelector('.End').innerHTML = `${tickets[currentticket + i].EndStation}` 
                            y.querySelector('.Date').innerHTML = `${tickets[currentticket + i].FullDate.replace("+", "<br />")}` 
                            y.querySelector('.Price').innerHTML = `${tickets[currentticket + i].Price}`
                            
                            let firstpart = tickets[currentticket + i].FullDate.split("+")[0] + " " + tickets[currentticket + i].FullDate.split("+")[1].split("-")[0]
                            
                            if (tickets[currentticket + i].Returned === '1'){
                              y.querySelector('.OrangeButton').disabled = true
                              y.querySelector('.OrangeButton').style.color = "black"
                              y.querySelector('.OrangeButton').innerHTML = "Ticket returned"
                              y.querySelector('.RedButton').disabled = true
                              y.querySelector('.RedButton').innerHTML = "Ticket returned"
                            }
                            else if (moment(firstpart, 'DD-MM-YYYY HH:mm').diff(moment()) > 0){
                              y.querySelector('.RedButton').disabled = false
                              y.querySelector('.RedButton').innerHTML = "Return ticket"
                            }
                            else{
                              y.querySelector('.RedButton').disabled = true
                              y.querySelector('.RedButton').innerHTML = "Return unviable"
                            }
                          }
                          i += 1
                        })
      document.querySelector('.More').style.display = "none"
    }
    else{
      let i = 0
      document.querySelector('.More').style.display = "block"
      await Object.values(document.querySelectorAll('.miniformdiff')).map(y => {
                            y.style.visibility = "visible"
                            y.querySelector('.Ticket').innerHTML = `Ticket no. ${tickets[currentticket + i].TicketNumber}`
                            
                            y.querySelector('.Numbers').innerHTML = `${tickets[currentticket + i].TrainsNumber.replace("+", "<br />")}` 
                            y.querySelector('.Start').innerHTML = `${tickets[currentticket + i].StartStation}` 
                            y.querySelector('.End').innerHTML = `${tickets[currentticket + i].EndStation}` 
                            y.querySelector('.Date').innerHTML = `${tickets[currentticket + i].FullDate.replace("+", "<br />")}` 
                            y.querySelector('.Price').innerHTML = `${tickets[currentticket + i].Price}`
                            
                            let firstpart = tickets[currentticket + i].FullDate.split("+")[0] + " " + tickets[currentticket + i].FullDate.split("+")[1].split("-")[0]
      
                            if (tickets[currentticket + i].Returned === '1'){
                              y.querySelector('.OrangeButton').disabled = true
                              y.querySelector('.OrangeButton').style.color = "black"
                              y.querySelector('.OrangeButton').innerHTML = "Ticket returned"
                              y.querySelector('.RedButton').disabled = true
                              y.querySelector('.RedButton').innerHTML = "Ticket returned"
                            }
                            else if (moment(firstpart, 'DD-MM-YYYY HH:mm').diff(moment()) > 0){
                              y.querySelector('.RedButton').disabled = false
                              y.querySelector('.RedButton').innerHTML = "Return ticket"
                            }
                            else{
                              y.querySelector('.RedButton').disabled = true
                              y.querySelector('.RedButton').innerHTML = "Return unviable"
                            }
        
                            i += 1
                        })
    }
  }
  
  
  useEffect(async () => {
    sessionStorage.setItem("Prev", "/en/TicketHistory")
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.smallPad').classList.add('noyPad')
      document.querySelector('.smallPad').classList.remove('smallPad')
      document.querySelector('.miniform').classList.add('my-4')
      Object.values(document.querySelectorAll('.H6')).map(y => {
          y.style.fontSize = '14px'
        })
      Object.values(document.querySelectorAll('.ms-2')).map(y => {
          y.classList.remove('ms-2')
        })
      Object.values(document.querySelectorAll('.Laptop')).map(y => {
          y.classList.remove('mx-5')
          y.classList.add('mx-2')
          y.classList.remove('mt-4')
          y.classList.add('mt-2')
        })
      Object.values(document.querySelectorAll('.col-10')).map(y => {
          y.classList.add('col-9')
          y.classList.remove('col-10')
        })
      Object.values(document.querySelectorAll('.Laptop2')).map(y => {
          y.classList.add('col-3')
          y.classList.remove('col-2')
        })
      Object.values(document.querySelectorAll('.Laptop3')).map(y => {
          y.classList.remove('col-2')
          y.classList.add('col-3')
        })
    }
    
    
    let show = true;
    await axios.get("https://css-server-user-ticket.glitch.me/tickets", {
                     params: {
                       Login: sessionStorage.getItem("Login")
                     }
                     }).then(async (response) => {
                      console.log(response.data.tickets);
                      if (response.data === "Empty"){
                        show = false
                        Object.values(document.querySelectorAll('.miniformdiff')).map(y => {
                          y.style.visibility = "hidden"
                        })
                        document.querySelector('.More').style.visibility = "hidden"
                      }
                      else{
                        document.querySelector('.NoTickets').style.display = "none"
                        tickets = response.data.tickets.reverse()
                      }
                    
                  }).catch((error) => {
                      console.log(error)
                      window.location.href = "/en/400badrequest"
                  });
    await showTrains();  
  }, [])
  
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
              <a href="https://centralna-siec-szyn.glitch.me/TicketHistory">
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
            <div className="row mx-5">
              <div className="miniform">
                <h1 className='text-center NoTickets'>You haven't bought any ticket yet!</h1>
                <div className="row Laptop mx-5 mt-4">
                  <div className="miniformdiff row text-black" style={{minHeight: '0px'}}>
                    <div className="col-10 mt-2">
                      <div className="row justify-content-between">
                        <h5 className="w-25 ps-5" />
                        <h5 className="w-50 text-center Ticket"></h5>
                        <div className style={{width: '3%'}} />
                      </div>
                      <div className="row mt-2 ms-2 text-center justify-content-center">
                        <div className="col-2 Laptop3 px-2">
                          <h5 style={{fontSize: '18px'}}>Train no.</h5>
                          <h6 className="fst-italic H6 Numbers"></h6>
                        </div>
                        <div className="col-3 px-3">
                          <h5 style={{fontSize: '18px'}}>Origin</h5>
                          <h6 className="fst-italic H6 Start"></h6>
                        </div>
                        <div className="col-2 px-2">
                          <h5 style={{fontSize: '18px'}}>Destination</h5>
                          <h6 className="fst-italic H6 End"></h6>
                        </div>
                        <div className="col-2 px-2">
                          <h5 style={{fontSize: '18px'}}>Date</h5>
                          <h6 className="fst-italic H6 Date"></h6>
                        </div>
                        <div className="col-2 px-1">
                          <h5 style={{fontSize: '18px'}}>Price</h5>
                          <h6 className="fst-italic H6 Price"></h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 Laptop2 text-center">
                      <button className="button OrangeButton px-3 w-75 py-2 Smalltext" style={{marginTop: '10%', marginBottom: '1%'}} onClick={() => {
                          Download(currentticket)
                        }}>Download ticket</button>
                      <button className="button RedButton px-3 w-75 py-2 Smalltext" style={{marginBottom: '10%'}} onClick={() => {
                          sessionStorage.setItem("TicketNumber", tickets[currentticket].TicketNumber)
                          window.location.href = '/en/ReturnTicket'
                        }}>Return ticket</button>
                    </div>
                  </div>
                </div>
                <div className="row Laptop mx-5 mt-4">
                  <div className="miniformdiff row text-black" style={{minHeight: '0px'}}>
                    <div className="col-10 mt-2">
                      <div className="row justify-content-between">
                        <h5 className="w-25 ps-5" />
                        <h5 className="w-50 text-center Ticket"></h5>
                        <div className style={{width: '3%'}} />
                      </div>
                      <div className="row mt-2 ms-2 text-center justify-content-center">
                        <div className="col-2 Laptop3 px-2">
                          <h5 style={{fontSize: '18px'}}>Train no.</h5>
                          <h6 className="fst-italic H6 Numbers"></h6>
                        </div>
                        <div className="col-3 px-3">
                          <h5 style={{fontSize: '18px'}}>Origin</h5>
                          <h6 className="fst-italic H6 Start"></h6>
                        </div>
                        <div className="col-2 px-2">
                          <h5 style={{fontSize: '18px'}}>Destination</h5>
                          <h6 className="fst-italic H6 End"></h6>
                        </div>
                        <div className="col-2 px-2">
                          <h5 style={{fontSize: '18px'}}>Date</h5>
                          <h6 className="fst-italic H6 Date"></h6>
                        </div>
                        <div className="col-2 px-1">
                          <h5 style={{fontSize: '18px'}}>Price</h5>
                          <h6 className="fst-italic H6 Price"></h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 Laptop2 text-center">
                      <button className="button OrangeButton px-3 w-75 py-2 Smalltext" style={{marginTop: '10%', marginBottom: '1%'}} onClick={() => {
                          Download(currentticket + 1)
                        }}>Download ticket</button>
                      <button className="button RedButton px-3 w-75 py-2 Smalltext" style={{marginBottom: '10%'}} onClick={() => {
                          sessionStorage.setItem("TicketNumber", tickets[currentticket + 1].TicketNumber)
                          window.location.href = '/ReturnTicket'
                        }}>Return ticket</button>
                    </div>
                  </div>
                </div>
                <div className="row Laptop mx-5 mt-4">
                  <div className="miniformdiff row text-black" style={{minHeight: '0px'}}>
                    <div className="col-10 mt-2">
                      <div className="row justify-content-between">
                        <h5 className="w-25 ps-5" />
                        <h5 className="w-50 text-center Ticket"></h5>
                        <div className style={{width: '3%'}} />
                      </div>
                      <div className="row mt-2 ms-2 text-center justify-content-center">
                        <div className="col-2 Laptop3 px-2">
                          <h5 style={{fontSize: '18px'}}>Train no.</h5>
                          <h6 className="fst-italic H6 Numbers"></h6>
                        </div>
                        <div className="col-3 px-3">
                          <h5 style={{fontSize: '18px'}}>Origin</h5>
                          <h6 className="fst-italic H6 Start"></h6>
                        </div>
                        <div className="col-2 px-2">
                          <h5 style={{fontSize: '18px'}}>Destination</h5>
                          <h6 className="fst-italic H6 End"></h6>
                        </div>
                        <div className="col-2 px-2">
                          <h5 style={{fontSize: '18px'}}>Date</h5>
                          <h6 className="fst-italic H6 Date"></h6>
                        </div>
                        <div className="col-2 px-1">
                          <h5 style={{fontSize: '18px'}}>Price</h5>
                          <h6 className="fst-italic H6 Price"></h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 Laptop2 text-center">
                      <button className="button OrangeButton px-3 w-75 py-2 Smalltext" style={{marginTop: '10%', marginBottom: '1%'}} onClick={() => {
                          Download(currentticket + 2)
                        }}>Download ticket</button>
                      <button className="button RedButton px-3 w-75 py-2 Smalltext" style={{marginBottom: '10%'}} onClick={() => {
                          sessionStorage.setItem("TicketNumber", tickets[currentticket + 2].TicketNumber)
                          window.location.href = '/ReturnTicket'
                        }}>Return ticket</button>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-3 text-center">
                      <button className="button OrangeButton Return px-4 py-2 my-4" onClick={() => {
                          window.location.href = "/en/UserAccount"
                        }}>Back to account page</button>
                    </div>
                    <div className="col-3 More text-center">
                      <button className="button OrangeButton More px-4 py-2 my-4" onClick={() => {
                          currentticket += 3
                          showTrains()
                        }}>Show next</button>
                    </div>
                    <div className="col-3 Less text-center" style={{display: 'none'}}>
                      <button className="button OrangeButton Less px-4 py-2 my-4" onClick={() => {
                          currentticket -= 3
                          showTrains()
                        }}>Show previous</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}
