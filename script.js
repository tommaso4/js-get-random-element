
function getRandom(min, max) {

  // TODO: restituire un valore inter random compreso tra min e max

  var delta = max - min + 1;
  var rnd = Math.floor(Math.random() * delta) + min;

  return rnd;
}

function getRandomElement(arr) {

  // TODO: restituisce un elemento random dell'array arr

  var rndInd = getRandom(0, arr.length - 1);
  var rndElem = arr[rndInd];

  return rndElem;
}

function getRandomElementWOSkipped(arr, skipped) {
  var trovato= false;
  do {
    trovato=false;
    var elemento1=getRandomElement(arr);
    for(var i =0;i < skipped.length; i++){
      if (skipped[i]==elemento1) {
        trovato=true;
      }
    }
    console.log(elemento1,trovato,skipped);
  } while (trovato==true);
  return elemento1;
}

var values  = [ 1, 2, 3, 4, 5, 6,  7 ];
var skipped = [ 5, 6, 7, 8, 9, 10, 11 ];

var rndElem = getRandomElementWOSkipped(values, skipped);
document.getElementById("log").innerHTML = rndElem;
