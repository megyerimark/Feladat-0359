//  File: app.js
// Author: Megyeri Márk Máté
// Copyright: 2022, Megyeri Márk Máté
// Group: Szoft V
// Date: 2022-10-19
// Github: https://github.com/megyerimark/
//  



const oldalElem =document.querySelector("#oldal") as HTMLInputElement;
const szamitGomb = document.querySelector("#submit") as HTMLInputElement;
const eredmeny = document.querySelector("#result") as HTMLInputElement;



function szamolatlo(oldal: number): Number{
    return Math.sqrt(2) * oldal;
    
}




szamitGomb.addEventListener('click' ,()=>{
    let oldal =Number( oldalElem.value);
    let atlo = szamolatlo(oldal);
    // alert(atlo);
    eredmeny.innerHTML=String(atlo);
});