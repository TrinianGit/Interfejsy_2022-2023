import * as React from "react";
import { useEffect } from 'react';
import "../../styles/notfound.css";


export default function NotFound() {
  
  function myURL() {
      document.location.href = '/en/';
  }
  
  useEffect(() => {
    let starContainer = document.querySelector(".stars");

    for (let i = 0; i < 100; i++) {
      starContainer.innerHTML += `<div class="star"></div>`;
    }
    
    setTimeout(myURL, 5000);
  }, []);
  
  return (
    <div className="wrapper">
      <div className="text_group">
        <p className="text_404">404</p>
        <p className="text_lost">Even space was searched by us, <br />but the page you're looking for remains unfound.</p>
      </div>
      <div className="window_group">
        <div className="window_404">
          <div className="stars" />
          </div>
        </div>
    </div>
  );
}
