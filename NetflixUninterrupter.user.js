// ==UserScript==
// @name         Netflix Uninterrupter
// @namespace    wardogsq@hotmail.com
// @version      0.5
// @description  Watch uninterrupted netflix!
// @author       Luke Seraphin
// @match        http://www.netflix.com/WiPlayer*
// @grant		 none
// ==/UserScript==

setInterval(function(){
if(document.getElementsByClassName('player-autoplay-interrupter')[0]!=undefined){
var video = document.getElementsByTagName('video')[0];
video.play();
var interrupter = document.getElementsByClassName('player-autoplay-interrupter')[0];
var controls = document.getElementsByClassName('player-controls-wrapper')[0];
var backbutton = document.getElementsByClassName('player-back-to-browsing')[0];
interrupter.style.display="none";
controls.className = controls.className + " opacity-transparent display-none";
backbutton.className = controls.className + " opacity-transparent display-none";
}
            }, 600);