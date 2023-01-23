import * as React from "react";
import { useEffect } from 'react';
import "../styles/notfound.css";


export default function NotFound() {
  
  function myURL() {
      document.location.href = '/';
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
        <p className="text_lost">Przeszukaliśmy dla Ciebie nawet kosmos, <br />ale nie znaleźliśmy strony, której szukasz.</p>
      </div>
      <div className="window_group">
        <div className="window_404">
          <div className="stars" />
          </div>
        </div>
    </div>
  );
}
