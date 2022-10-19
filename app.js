//  File: app.js
// Author: Megyeri Márk Máté
// Copyright: 2022, Megyeri Márk Máté
// Group: Szoft V
// Date: 2022-10-19
// Github: https://github.com/megyerimark/
//  
var oldalElem = document.querySelector("#oldal");
var szamitGomb = document.querySelector("#submit");
function szamolatlo(oldal) {
    return Math.sqrt(2) * oldal;
}
szamitGomb.addEventListener('click', function () {
    var oldal = Number(oldalElem.value);
    var atlo = szamolatlo(oldal);
    alert(atlo);
});
