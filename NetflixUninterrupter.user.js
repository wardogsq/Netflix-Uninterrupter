// ==UserScript==
// @name         Netflix Uninterrupter
// @namespace    wardogsq@hotmail.com
// @version      0.1
// @description  Watch uninterrupted netflix!
// @author       Luke Seraphin
// @match        http://www.netflix.com/WiPlayer*
// @grant		 none
// ==/UserScript==

setInterval(function(){
//if(document.getElementsByClassName('player-autoplay-interrupter')[0]!="undefined"){
if(document.getElementsByClassName('player-autoplay-interrupter')[0].style.display!="none"){
var video = document.getElementsByTagName('video')[0];
video.play();
var interrupter = document.getElementsByClassName('player-autoplay-interrupter')[0];
//interrupter.remove(interrupter.selectedIndex);
interrupter.style.display="none";
}}, 10000);

//document.getElementsByClassName('fade-overlay')[0].style.display="none";