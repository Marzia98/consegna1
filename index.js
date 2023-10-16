/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


//number:riguarda valori numerici interi o con la vigola;
//string:rappresenta sequenze di caratteri come ad esempio: let testo ='ciao'
//boolean:rappresenta true o false; 
//Array:rappresenta l'ordine dei valori;
// Object: rappresenta un oggetto contenente una serie di coppie chiave-valore;
//null: indica intenzionalmene l'assenza di un valore o indica un riferimento nullo, come ad esempio: let nullo =null; 
//Undefined:è una variabile dichiarata ma non inizializata o una proprietà di un oggetto a cui non è stato assegnato un valore
//Function: si tratta di oggetti speciali  che servono per eseguire azioni specifiche come ad esempio function somma ;
// Biglnt: rappresentare numeri interi molto grandi che superano le capacita dei dati Number  



/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

// let risp = Un oggetto in JavaScript è una struttura di dati che ha il compito di organizzare e archiviare dati di un formato flessibile 


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let result = 12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Marzia Di Maria";


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let ex6result = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());


