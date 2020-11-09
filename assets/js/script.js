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

// Démarrage de la session
let closeScreen = document.getElementById('closeScreen');
let startScreen = document.getElementById('startScreen');

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
  }





// $('#myModal').modal('toggle');
// $('#myModal').modal('show');
// $('#myModal').modal('hide');