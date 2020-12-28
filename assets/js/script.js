

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
function contact() {
    var wildPokemonBattle = document.getElementById('wildPokemonBattle');
    wildPokemonBattle.volume = 0.01;
    wildPokemonBattle.currentTime = 0;
    wildPokemonBattle.play();


    $('nav').css('pointer-events', 'none');
    $('#battleEffect1, #battleEffect2, #battleEffect3, #battleEffect4, #battleEffect5').css('display', 'block');
    setTimeout(function(){
  $('#contact').modal('toggle');
  $('#game').css('display', 'block');
  $('#game').removeClass("animate__animated animate__fadeOut");
  $('#choiceMenu').css('display', 'block');
  $('.choiceText').css('display', 'block');
  $('.fuite').css('visibility', 'hidden');
  $('.contactText').css('visibility', 'hidden');
  $('#arrowFuir').css('visibility', 'hidden');
  $('#arrowContacter').css('visibility', 'hidden');
  $('#paperPlane').css('visibility', 'hidden');
  $('#paperPlane').removeClass("animate__animated animate__fadeOut");
  $('#paperPlane').css('transform', 'translate3d(0, 0, 0)');

  $('.link').click(function(e) {
    e.preventDefault();
    setTimeout(function(url) { window.location = url }, 3700, this.href);
});

$('#fuir').mouseover(function() {
    var select = document.getElementById('select');
    select.currentTime = 0;
    select.play();

    $('#arrowFuir').css('visibility', 'visible');
    $('#arrowContacter').css('visibility', 'hidden');
});

$('#contacter').mouseover(function() {
    var select2 = document.getElementById('select2');
    select2.currentTime = 0;
    select2.play();

    $('#arrowContacter').css('visibility', 'visible');
    $('#arrowFuir').css('visibility', 'hidden');
});

function paperPlane() {
    $('#paperPlane').css('visibility', 'visible');
    $('#paperPlane').css('transition', 'transform 1s ease-in-out');
    $('#paperPlane').css('transform', 'translate3d(230px, -150px, 0)');
    setTimeout(function(){
        $('#paperPlane').addClass("animate__animated animate__fadeOut");
    }, 800);
};



$('#contacter').click(function() {
    $('#choiceMenu').css('display', 'none');
    $('.choiceText').css('display', 'none');
    $('.contactText').css('animation-play-state', 'running');
    $('.contactText').on('webkitAnimationEnd', function() {
        this.style.webkitAnimationPlayState = "paused";
    });
    $('.contactText').css('visibility', 'visible');
    setTimeout(function(){
        var throwPlane = document.getElementById('throwPlane');
        throwPlane.volume = 0.05;
        throwPlane.play();

    }, 900);
    setTimeout(function(){
        $('#player').attr('src', 'assets/img/sacha2onfloor.png');
    }, 1100);
    setTimeout(function(){
        $('#player').attr('src', 'assets/img/sacha3onfloor.png');
    }, 1400);
    setTimeout(paperPlane, 1450);
    setTimeout(function(){
        $('#player').attr('src', 'assets/img/sacha4onfloor.png');
    }, 1500);
    setTimeout(function(){
        $('#player').attr('src', 'assets/img/sacha5onfloor.png');
    }, 1600);
    setTimeout(function(){
        $('#player').attr('src', 'assets/img/sachaonfloor.png');
    }, 1900);
    setTimeout(function(){
        $('#game').addClass("animate__animated animate__fadeOut");
        $('#battleEffect1, #battleEffect2, #battleEffect3, #battleEffect4').css('display', 'none');
        $('#battleEffect5').fadeOut("slow");
    }, 2500);
    setTimeout(function(){
        $('#contact').modal('hide');
        $('nav').css('pointer-events', 'auto');
        wildPokemonBattle.pause();
    }, 4500);

});

$('#fuir').click(function() {
    $('#choiceMenu').css('display', 'none');
    $('.choiceText').css('display', 'none');
    $('.fuite').css('animation-play-state', 'running');
    $('.fuite').on('webkitAnimationEnd', function() {
        this.style.webkitAnimationPlayState = "paused";
    });
    $('.fuite').css('visibility', 'visible');
    setTimeout(function(){
        var runAway = document.getElementById('runAway');
        runAway.volume = 0.05;
        runAway.play();
    }, 500);
    setTimeout(function(){
        $('#game').addClass("animate__animated animate__fadeOut");
        $('#battleEffect1, #battleEffect2, #battleEffect3, #battleEffect4').css('display', 'none');
        $('#battleEffect5').fadeOut("slow");
    }, 1500);
    setTimeout(function(){
      $('#contact').modal('hide');
      $('nav').css('pointer-events', 'auto');
      wildPokemonBattle.pause();
  }, 3500);
});





}, 3000);
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
  var audioElement = document.getElementById('playerXP');
  audioElement.volume=0.10;
  $("#playerXP").attr('src', 'assets/wav/WindowsXPStartup.wav');
  $("#playerXP")[0].play();
  startScreen.classList.add("animate__animated", "animate__fadeOut");
  setTimeout(disappearStartScreen, 2000);
}

closeScreen.onclick = function chargement(){
    setTimeout(fadeOut, 2000);
    $('#closeScreen').hide();
    $('#welcome').show();
  }



// $('#myModal').modal('toggle');
// $('#myModal').modal('show');
// $('#myModal').modal('hide');