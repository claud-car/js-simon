// La pagina espone 5 numeri generati casualmente.
//  Da li parte un timer di 30 secondi.
//  Dopo 30 secondi l'utente deve inserire, uno alla volta,
//  i numeri che ha visto precedentemente, tramite il prompt().
//   Dopo che sono stati inseriti i 5 numeri, il software dice
//    quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.

//genero 5 numeri casuali da 1 a 100
//timer di 30 secondi per memorizzare i numeri
//chiedere all'utente quali numeri erano
//paragonare i numeri dell'utente e i numeri del software se sono uguali,o quanti
//ne ha indovinati

$(document).ready(function() {
  var numeripc= [];
  var numeriUtente = [];
  var numeriRichiesti= [];
  var punteggio = [];
  //ciclo per generare i 5 numeri
  while (numeripc.length < 5) {
    var numero = generator();
    if (!numeripc.includes(numero)) {
      numeripc.push(numero);
    }
  }
  //Stampo i numeri in html
  document.getElementById('numeri-pc').innerHTML += "[ " + numeripc + " ].";

  //inseriscoTimeout per far memorizzare all'utente i numeri
  setTimeout(e,2000);
  function e(){
    $('#numeri-pc').addClass('active');
    $('.show-after-none').removeClass('show-after-none');
    //inserisco timer per far partire il prompt per l'utente
      setTimeout(prova1,100);
      function prova1(){
        while (numeriUtente.length < 5) {
          var numeriRichiesti= parseInt(prompt("Scrivi un numero alla volta e indovina i numeri visualizzati prima"));
          if (isNaN(numeriRichiesti)) {
            console.log("Inserisci solo dei numeri");
          } else if (numeriRichiesti > 100 || numeriRichiesti < 1){
            console.log("dammi un numero da 1 a 100");
          } else {
            numeriUtente.push(numeriRichiesti);
          }
        }
        //Paragono i numeri tra pc e numeriUtente
        setTimeout(prova2,100);
        function prova2(){
          // var punteggio = numeriUtente.length;
          // console.log(numeripc);
          // console.log(numeriUtente);
          // console.log(punteggio);
          for (var i = 5; i < numeriUtente.length; i++) {
            if (numeripc.includes(numeriUtente) ){
              punteggio.push(numeriUtente)
            }
          }
          console.log(punteggio);
        }
      }
  }




})



// for (var i = 0; i < 5; i++) {
//   var numeriRichiesti= parseInt(prompt("Scrivi un numero alla volta e indovina i numeri visualizzati prima"));
//   if (isNan(numeriRichiesti)) {
//     console.log("Inserisci solo dei numeri");
//   } else if (numeriRichiesti > 100 || numeriRichiesti < 1){
//     console.log("dammi un numero da 1 a 100");
//   } else {
//     numeriUtente.push(numeriRichiesti);
//   }
// }







//funzione per generare numeri da 1 a 100
function generator(){
  return Math.floor(Math.random() * 100) + 1;
}
