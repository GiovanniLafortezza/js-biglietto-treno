// Passo 1: chiedere all'utente il numero di km da percorrere
// Passo 2: chiedere l'età del passeggero
// Passo 3: clacolare il prezzo totale del biglietto tenendo presente:
// prezzo biglietto (0.21 £ al km) - 20% di sconto ai minorenni - 40% di sconto per gli over 65

let km = prompt("Inserisci il numero di km da percorrere");
let age = prompt("Inserisci la tua età");

km = parseFloat(km);
age =parseInt(age);

let priceTicket = km * 0.21;
let prezzoPercentuale;

console.log(priceTicket);

if(age < 18)  {
prezzoPercentuale = (priceTicket * 20) / 100;
console.log(prezzoPercentuale);
priceTicket = priceTicket - prezzoPercentuale;


} else if(age >= 65) {
    prezzoPercentuale = (priceTicket * 40) / 100;
    console.log(prezzoPercentuale);
    priceTicket = priceTicket - prezzoPercentuale;
    
} 

priceTicket = priceTicket.toFixed(2);
console.log(priceTicket);

alert("Il prezzo del tuo biglietto è di " + priceTicket + " " + "euro");

