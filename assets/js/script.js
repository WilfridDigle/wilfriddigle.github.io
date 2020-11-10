// Horloge

window.onload=function() {
    horloge('div_horloge');
  }
function horloge(el) {
    if(typeof el=="string") { el = document.getElementById(el); }
    function actualiser() {
      var date = new Date();
      var str = date.getHours();
      str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
      el.innerHTML = str;
    }
    actualiser();
    setInterval(actualiser,1000);
}

// Les ondblclick
function experience() {
    $('#experience').modal('toggle');
}
function formation() {
    $('#formation').modal('toggle');
}
  function cvPapier() {
    $('#cvpapier').modal('toggle');
}
function justePrix() {
  $('#justePrix').modal('toggle');
}

// Démarrage de la session
let closeScreen = document.getElementById('closeScreen');
let startScreen = document.getElementById('startScreen');
$('#welcome').hide();

function disappearStartScreen() {
  if(getComputedStyle(startScreen).display != "none"){
    startScreen.style.display = "none";
  }
}

function fadeOut(){
  startScreen.classList.add("animate__animated", "animate__fadeOut");
  setTimeout(disappearStartScreen, 2000);
}

closeScreen.onclick = function chargement(){
    setTimeout(fadeOut, 2000);
    $('#closeScreen').hide();
    $('#welcome').show();
  }




// Le Juste Prix !
// var minNumber = 1; // le minimum
// var maxNumber = 99; // le maximum
// var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
// $('#newGame').hide();
// $('#proposition, #try').hide();
// console.log(randomnumber);

// var clickValue=0;
// function compteur(){
//     clickValue = clickValue+1;
// }
// $('#play').click(function play() {
//     $('#proposition, #try').show();
//     $('#play').hide();
// });

// $('#try').click(function justPrice() {
//     compteur();
//     var proposition = document.getElementById('proposition').value;
//     if (proposition != '' && proposition >= 0 && proposition <= 100) {
//         if (proposition > randomnumber) {
//             $("#player").attr('src', 'assets/wav/cest_moins.wav');
//             $("#player")[0].play();
//             $('#result').html('C\'est moins que ' + proposition + ' !');
//         }
//         else if (proposition < randomnumber) {
//             $("#player").attr('src', 'assets/wav/cest_plus.wav');
//             $("#player")[0].play();
//             $('#result').html('C\'est plus que ' + proposition + ' !');
//         }
//         else if (proposition == randomnumber) {
//             $("#player").attr('src', 'assets/wav/bien_joue.wav');
//             $("#player")[0].play();
//             $('#result').css('color', 'green');
//             $('#result').html('C\'était effectivement ' + randomnumber + ', bien joué !');
//             $('#essais').html('Vous avez fait ' + clickValue + ' essai(s)');
//             $('#proposition, #try').hide();
//             $('#newGame').show();
//         }
//     }
//     else if (proposition == '') {
//         $('#result').html('Veuillez entrer une valeur');
//     }
//     else {
//         $("#player").attr('src', 'assets/wav/tabuses.wav');
//         $("#player")[0].play();
//         $('#result').html('On a dit entre 0 et 100 !');
//     }
// }
// );

// $('#myModal').modal('toggle');
// $('#myModal').modal('show');
// $('#myModal').modal('hide');