import * as React from "react";
import { useEffect } from 'react';
import  "../styles/payment.css";


export default function Payment() {
  
  function myURL() {
      document.location.href = '/PaymentSuccess';
  }
  
  useEffect(() => {
    
    setTimeout(myURL, 20000);
  }, []);
  
  return (
    <div className="center">
      <div className="mountains" />
      <div className="frame">
        <div className="train">
          <h1 className="text-end" style={{color: 'white', position: 'relative', bottom: '50px'}}>Przetwarzamy Twoją płatność</h1>
          <div className="engine-front">
            <div className="chimney">
              <div className="smoke" />
              <div className="smoke smoke-2" />
              <div className="smoke smoke-3" />
              <div className="smoke smoke-4" />
            </div>
          </div>
          <div className="engine-body" />
          <div className="compartment">
            <div className="compartment-window" />
          </div>
          <div className="compartment compartment-two">
            <div className="compartment-window" />
          </div>
          <div className="compartment compartment-three">
            <div className="compartment-window" />
          </div>
          <div className="wheel-holder">
            <div className="wheel" />
            <div className="wheel wheel-2">
              <div className="wheel-joint" />
              <div className="wheel-joint wheel-joint-2" />
            </div>
            <div className="wheel wheel-3" />
            <div className="wheel wheel-4" />
            <div className="wheel wheel-5" />
            <div className="wheel wheel-6" />
            <div className="wheel wheel-7" />
            <div className="wheel wheel-8" />
            <div className="wheel wheel-9" />
          </div>
        </div>
      </div>
      <div className="bridge" />
    </div>


  );
}
