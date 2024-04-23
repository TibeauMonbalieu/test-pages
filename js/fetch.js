"use strict";

window.addEventListener("load",init);

async function init(){
    // divfeedback = document.getElementById("divFeedBack");

    // fetch("https://api.chucknorris.io/jokes/random")
    // .then(function (resp){
    //     console.log(resp);

    //     resp.json()
    //     .then(data => {
    //         console.log(data);

    //     document.body.innerHTML = `<p>Dit is de Eerste Mop</p>
    //                                     <p>${data.value}</p>`;
    //     });
    // });


    try{
       const resp = await fetch("https://api.chucknorris.io/jokes/random");

       const data = await resp.json();

       document.body.innerHTML = `<p>Dit is de Eerste Mop</p>
                                  <p>${data.value}</p>`;
    }
    catch(e){
        console.log(e);
    
    }
}