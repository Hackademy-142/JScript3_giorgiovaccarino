// Trasformare gli esercizi svolti fino ad ora in funzioni (generalizzate il più possibile, quando possibile)

//es 1 day 1
let iNumeri = [4, 6, 4 ,6];
function addizione(arr){
    let sum = 0;
    for (i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(addizione(iNumeri));

//es 2 day 1

function etá(an, ac){
    let anni = ac - an;
    
    let to100 = 100 - anni;

    let gino = [anni, to100];

    return gino;
}

let es2 = etá(1994, 2024)

console.log(`Hai ${es2[0]} anni e ti mancano ${es2[1]} anni per averne 100`);

//es 3 day 1
function gatti44(){
    let file = Math.floor(44 / 6);
    let resto = 44 % 6;
    let gattiMancanti = 6 - resto;
    let datiGatti = [file, resto, gattiMancanti]
    return datiGatti;
}

let datiGatti = gatti44();

console.log(`ci sono file ${datiGatti[0]} di gatti e ne mancano ${datiGatti[2]} per una nuova fila con un avanzo di ${datiGatti[1]}`)

//es extra day 1

let temps = [10, -2, 31, 22, 15, -6, 7];

function tempMax (group) {
    let biggest = Math.max(...group);
    return biggest;
}

function tempMin (group) {
    let smallest = Math.min(...group);
    return smallest;
} 

console.log(`la temperatura piú bassa é : ${tempMin(temps)}, e la piú alta é: ${tempMax(temps)}`);


// ESERCIZIO 1
// Scrivere una funzione che prenda come input un numero e generi un array composto da n numeri casuali compresi tra 1 e 10.

// HINT: COME SI AGGIUNGE UN ELEMENTO ALLA FINE DI UN ARRAY?

// Esempio: Input= 5 Output= [5, 9, 1, 6, 10]

function randArray(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(Math.floor(Math.random()*(10)+1));
    }
    return arr; 
}

console.log(randArray(prompt("quanto lo vuoi lungo?"))); 


// ESERCIZIO 2
// Metti un po' d'ordine
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
//  Esempio:

//  Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
//  Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]

//  Variante:
//  Prova ad ordinali in modo crescente.

let M = +prompt("inserisci il limite massimo:");
let m = +prompt("inserisci il limite minimo:");

function randArray2(max, min){
    let arr = [];
    for(let i = 0; i < 10; i++){
        arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return arr; 
}

let array1 = randArray2(M, m);
console.log(array1);
array1.sort(function(a, b){
    return b - a;
});
console.log(array1);


// ESERCIZIO 3
// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

// Esempi:

//  Input : 9
//  Output : 1 cifra

//  Input : 99
//  Output : 2 cifre

function numberLength (num) {
    let len = 0;
    do {
        num = Math.floor(num / 10);
        len++;
    } while (num != 0);
    return len;
}

console.log(numberLength(prompt("inserisci un numero per trovarne il numero di cifre:")));


// ESERCIZIO 4

// Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
//  FALSE altrimenti.
//  Esempi:

//  Input: n = 2, m = 3
//  Output: FALSE

//  Input: n = 2, m = '2'
//  Output: FALSE

//  Input: n = 2, m = 2
//  Output: TRUE

function same(x, y) {
    return (x === y);
}

let ans = same(4, "4");

console.log(ans);


// ESERCIZIO 5
// Scrivi una funzione che dato un numero stampi la tabellina corrispondente.

function table(num){
    let tab = [];
    for (let i=0; i < 10; i++) {
        tab.push(num * (i+1));
    }
    return tab;
}

let number = prompt(`inserisci il numero di cui vuoi vedere la tabellina:`);

console.log(`ecco la tabellina del ${number}: \n${table(number)}`);


// ESERCIZIO 6
// Scrivi due funzioni: dato un array: let numbers = [10, 12, 78, -4, -20, 11]; una che prenda in input un array di numeri e restituisca il maggiore l'altra che restituisca il minore.

//  Suggerimento utilizzare Math.max() e Math.min(); 

let numbers = [10, 12, 78, -4, -20, 11];

function maggiore (group) {
    let biggest = Math.max(...group);
    return biggest;
}

function minore (group) {
    let smallest = Math.min(...group);
    return smallest;
} 

console.log(`the smallest is : ${minore(numbers)}, and the biggest is: ${maggiore(numbers)}`);