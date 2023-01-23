import * as React from "react";
import { useEffect } from 'react';
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css';


export default function MapShow() {
  
  let logmain
  useEffect(() => {
    if (window.screen.width <= 1800){
      document.querySelector('.LogoImg').style.height = '72px'
      document.querySelector('.site-navbar').classList.add('pt-3')
      document.querySelector('.site-navbar').classList.remove('pt-5')
      document.querySelector('.py-5').classList.add('py-4')
      document.querySelector('.py-5').classList.remove('py-5')
    }
  },[])
  
  if(sessionStorage.getItem("LoggedIn") === '1'){
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/UserAccount" className="mb-0">My Account</a></h2>
  }
  else{
    logmain = <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/Login?#" className="mb-0">Log in</a></h2>
  }
  
  let blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  let redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  let greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  async function buildMap()  {
        if (window.screen.width <= 1800){
          document.getElementById('trainmap').innerHTML = "<div id='map' style='width: 712px; height: 400px; border-radius: 10px'></div>";
        }
        else{
          document.getElementById('trainmap').innerHTML = "<div id='map' style='width: 890px; height: 500px; border-radius: 10px'></div>";
        }
        
        
        let osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        osmAttribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
                            ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        osmLayer = new L.TileLayer(osmUrl, {maxZoom: 18, attribution: osmAttribution});
    
        let map = new L.Map('map');

        let markerArray = [];
        let markers = L.layerGroup().addTo(map);
        
        let toLine = []
    
        let addressPoints = JSON.parse(sessionStorage.getItem("Latlong"))

        let marker = L.marker(new L.LatLng(addressPoints[0].lat, addressPoints[0].lon), {icon: greenIcon});
        toLine.push([addressPoints[0].lat, addressPoints[0].lon])
        markers.addLayer(marker);

        markerArray.push(marker);
        
        
        for (let i = 1; i < addressPoints.length - 1; i++) {
            marker = L.marker(new L.LatLng(addressPoints[i].lat, addressPoints[i].lon), {icon: blueIcon});
            markers.addLayer(marker);
            toLine.push([addressPoints[i].lat, addressPoints[i].lon])
            markerArray.push(marker); //add each markers to array

            if(i == addressPoints.length - 1){//this is the case when all the markers would be added to array
                
            }
        }

        marker = L.marker(new L.LatLng(addressPoints[addressPoints.length - 1].lat, addressPoints[addressPoints.length - 1].lon), {icon: redIcon});
        markers.addLayer(marker);
        toLine.push([addressPoints[addressPoints.length - 1].lat, addressPoints[addressPoints.length - 1].lon])
        markerArray.push(marker);
        let pathLine = L.polyline(toLine).addTo(map)
        let group = L.featureGroup(markerArray); //add markers array to featureGroup
        map.fitBounds(group.getBounds());  
        map.addLayer(osmLayer);
    }

    useEffect(() => {
      buildMap()
    },[])
  
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
          <a href="https://centralna-siec-szyn.glitch.me/MapShow">
                  <div className="flag poland">
                  </div>
              </a>
          <div>
            {logmain}
            <h2 className="mb-0 fs-2 px-4 float-end"><a href="/en/Contact" className="mb-0">Contact</a></h2>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="container-fluid px-5">
    <div className="px-5 py-5">
      <div className="Pillultrablack">
        <div className="row text-center align-items-center justify-content-center smallPad py-4 mx-5">
          <div className="miniform py-5">
            <div className="row justify-content-center" id="trainmap">
          
          </div>
          <div className="row justify-content-center mt-4">
            <button className="button col-2 py-2 OrangeButton" id="WT" onClick={() => {
                  window.location.href = '/en/RouteMenu'
            }}>Back</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}
