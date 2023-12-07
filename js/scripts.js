// Cuenta Regresiva:

var fechaCasamiento = new Date("2023-12-02 19:00:00").getTime();

var x = setInterval(function () {
  var hoy = new Date("2023-12-02 20:00:00").getTime();

  var faltan = fechaCasamiento - hoy;

  var dias = Math.floor(faltan / (1000 * 60 * 60 * 24));
  var horas = Math.floor((faltan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((faltan % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((faltan % (1000 * 60)) / 1000);

  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;

  if (faltan < 0) {
    clearInterval(x);
    document.getElementById("contador").innerHTML = "¡Muchas gracias a todos por la compañía!";
  }
}, 1000);


var audios = document.getElementById("audioPrueba");
var playAudio = () => {
  audios.play().catch((error) => {
    console.log(
      "La reproducción automática no está permitida. Haz clic en la página para reproducir el audio."
    );
    return false;
  });
  $("#btnPlay").addClass("hidden");
  $("#btnPausa").removeClass("hidden");
  $("#btnPausa").addClass("pulse");
};
var pauseAudio = () => {
  audios.pause();
  $("#btnPausa").addClass("hidden");
  $("#btnPlay").removeClass("hidden");
  $("#btnPlay").addClass("vertical_shake");
};

var audios = document.getElementById("audio");

var playAudio = () => {
  audios.play().catch((error) => {
    console.log(
      "La reproducción automática no está permitida. Haz clic en la página para reproducir el audio."
    );
    return false;
  });
  document.getElementById("audioPlay").classList.add("esconder");
  document.getElementById("audioPausa").classList.remove("esconder");
};
var pauseAudio = () => {
  audios.pause();
  document.getElementById("audioPausa").classList.add("esconder");
  document.getElementById("audioPlay").classList.remove("esconder");
};


document.addEventListener("DOMContentLoaded", function(e){
});


