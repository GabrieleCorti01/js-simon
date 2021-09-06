
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var listaNumeriCasuali = [];
var listaNumeriUtente = [];

let numeriRandom = getRandomNumber();
let numeriUtente = insertNumber();


// faccio partire l'alert per mettere in sovrainpressione i 5 numeri
var alertNumeri = getAlert();

// faccio partire il timer di 30 secondi
setTimeout (insertNumber, 3000);

// inserisco i numeri dal prompt all'array


function insertNumber(){
    for (let i = 0; i < 5; i++){
    numeriUtenteScelti = prompt("Inserisci i numeri che hai visto a schermo!");
    listaNumeriUtente.push(numeriUtenteScelti);
    return numeriUtenteScelti;
    }
}


function getAlert(){
    return alert(listaNumeriCasuali)
}


function getRandomNumber (){
    
    for(let i = 0; i < 5; i++){
        numeri = Math.floor(Math.random() * 10);
        listaNumeriCasuali.push(numeri)
    }
    return numeri;
}
console.log(listaNumeriCasuali)
console.log(listaNumeriUtente)


