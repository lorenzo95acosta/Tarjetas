// // Instagram parallax
// $(".parallax-instagram").parallax({
//   imageSrc: "assets/img/instagram.jpg",
// });

// // Portada parallax
// $(".parallax-portada").parallax({
//   imageSrc: "assets/img/portada.jpg",
// });

// // ----------------------

// Cuenta Regresiva:

var fechaCasamiento = new Date("2023-12-02 19:00:00").getTime();

var x = setInterval(function () {
  var hoy = new Date().getTime();

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
    document.getElementById("contador").innerHTML = "¡Llegó el día!";
  }
}, 1000);


document.addEventListener("DOMContentLoaded", function(e){
    console.log("DOM funciona")
  });