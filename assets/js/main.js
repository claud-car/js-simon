$(document).ready(function() {
  var numeripc= [];
  var numeriUtente = [];
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
  setTimeout(e,10000);
  function e(){
    $('#numeri-pc').addClass('active');
    $('.show-hide').removeClass('show-after-none');
    //inserisco timer per far partire il prompt per l'utente e paragono i numeri
      setTimeout(prova1,100);
      function prova1(){
        for (var i = 0; i < 5; i++) {
          var numeriUtente= parseInt(prompt("Scrivi un numero alla volta e indovina i numeri visualizzati prima"));
          if (isNaN(numeriUtente)){
            console.log("Dammi un numero");
          } else if (numeriUtente > 100 || numeriUtente < 1){
            console.log("dammi un numero da 1 a 100");
          } else if (numeripc.includes(numeriUtente)){
            punteggio.push(numeriUtente);
          }
        }
        document.getElementById('result-pc').innerHTML += "I numeri erano: " + numeripc + ",";
        document.getElementById('score-user').innerHTML += "I numeri che hai indovinato sono " + punteggio.length + " : ";
        document.getElementById('result-user').innerHTML += punteggio + ".";
        $('.show-hide').addClass('hide-after-game');
        $('.final-game').addClass('flex-active');
      }
  }

})


//funzione per generare numeri da 1 a 100
function generator(){
  return Math.floor(Math.random() * 100) + 1;
}
