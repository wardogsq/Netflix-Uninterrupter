// ==UserScript==
// @name         Netflix Uninterrupter
// @namespace    wardogsq@hotmail.com
// @version      0.6
// @description  Watch uninterrupted netflix!
// @author       Luke Seraphin
// @match        http://www.netflix.com/WiPlayer*
// @grant		 none
// ==/UserScript==

setInterval(function(){
    var interrupterShow = false;
    if(document.getElementsByClassName('player-autoplay-interrupter')[0]){
    if(document.getElementsByClassName('player-autoplay-interrupter')[0].style.display!="none"){interrupterShow=true;}
        }
    
if(interrupterShow){
var video = document.getElementsByTagName('video')[0];
video.play();
var interrupter = document.getElementsByClassName('player-autoplay-interrupter')[0];
var controls = document.getElementsByClassName('player-controls-wrapper')[0];
var backbutton = document.getElementsByClassName('player-back-to-browsing')[0];
var cinema = document.getElementById('netflix-player');
    try{interrupter.style.display="none";}catch(err){console.log(err);}
try{controls.className = controls.className + " opacity-transparent";}catch(err){console.log(err);}
try{backbutton.className = backbutton.className + " opacity-transparent";}catch(err){console.log(err);}
try{cinema.className = cinema.className + " player-cinema-mode";}catch(err){console.log(err);}
}
            }, 600);