var years = "2012-08-03";
var parraf01 = "Ingeniero electrónico, con experiencia en el sector tecnológico por más de";
var parraf02 = "años como desarrollador de software full stack, con conocimientos en lenguaje C# utilizando el framework .Net y .Net Core para el desarrollo y mantenimiento de sitios web, aplicaciones de escritorio, servicios Windows y servicios web (web api, wcf), desarrollo de sitios web con framework frontend basados en componentes como (Angular, Angular js y React js) ejecutados sobre Node.js, conocimientos en bases de datos de tipo SQL server, desarrollo de sitios web con Aps.net MVC, lenguaje de etiquetas html y hojas de estilos css aplicando responsive design con bootstrap o foundation, conocimientos en arquitectura javascript, manejo de software para el control de código como Git y Visual studio team services, conocimientos en desarrollo ágil usando (scrum), experiencia con integración y despliegue continuo en la plataforma azure devops, creación y administración de aplicaciones en la nube con Azure, conocimientos en el desarrollo e implementación del protocolo FIX.";
var parraf03 = "Dentro de mis habilidades resalto la capacidad de liderazgo de equipos de técnicos, mi disposición para el trabajo en equipo, mis cualidades y valores más resaltantes son la honestidad, puntualidad, responsabilidad, proactividad y paciencia.";

jQuery(document).ready(function($) {
    /*======= Skillset *=======*/
    years = getAge(years);
    $('.Parrafo1').append(`${parraf01} ${years} ${parraf02}`);
    $('.Parrafo2').append(parraf03);
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
});

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function downloadHV() {
  var documentDownload = 'HOJADEVIDACAMILONAVARRETE.pdf';
  var urlNew = 'assets/documents/' + documentDownload;
  var anchor = document.createElement('a');

  anchor.href = urlNew;
  anchor.download = documentDownload;

  var evt = document.createEvent('MouseEvents');
  evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
  anchor.dispatchEvent(evt);
}
