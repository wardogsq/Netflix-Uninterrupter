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
if(document.getElementsByClassName('player-autoplay-interrupter')[0]){
document.getElementsByClassName('button continue-playing')[0].click();
}
}, 600);