var years = "2012-08-02";
var parraf01 = "Ingeniero electrónico, con experiencia en el sector tecnológico por más de";
var parraf02 = "años como Desarrollador de software full stack y soporte técnico, con conocimientos en lenguaje C# utilizando el framework .Net para el desarrollo y mantenimiento de aplicaciones de escritorio, servicios Windows y servicios web (web api, wcf), conocimientos con bases de datos de tipo SQL server y Oracle, conocimientos en desarrollo de sitios web con Aps.net MVC, lenguaje de etiquetas Html, hojas de estilos Css aplicando responsive design con bootstrap y foundation, conocimientos en arquitectura javascript, conocimiento en framework frontend basados en componentes como Angular6 y React js ejecutados sobre Node.js, conocimiento en el manejo de software para el control de código Git y Visual studio team services, conocimientos en desarrollo ágil (scrum), conocimientos en creación y administración de aplicaciones en la nube con Azure, conocimientos en el desarrollo e implementación del protocolo FIX, conocimientos en Matlab, LabView, Packet tracer, Multisim para el desarrollo de sistemas de telecomunicaciones, automatización y técnicas digitales.";
var parraf03 = "Dentro de mis habilidades resalto la capacidad analítica, numérica para la resolución de problemas, disposición para el trabajo en equipo, mis cualidades y valores más resaltantes son la honestidad, la puntualidad responsabilidad, emprendimiento y paciencia, me gusta dar mi punto de vista para ser proactivo en el trabajo.";

jQuery(document).ready(function($) {
    /*======= Skillset *=======*/
    years = getAge(years);
    $('.Parrafo1').append(parraf01 +" "+years+" "+parraf02);
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
