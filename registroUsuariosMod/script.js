// Implementa las siguientes funcionalidades (2 puntos):
// Al enviar el formulario, muestra un mensaje con los datos ingresados (puede ser en un alert, o añadiendo los datos debajo del formulario).

let formulario = document.getElementById("registerForm");
let nombre = document.getElementById("name");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let generoM = document.getElementById("generoM");

let generoF = document.getElementById("generoF");
let generoO = document.getElementById("generoO");
let movies = document.getElementById("movies");
let sports = document.getElementById("sports");
let music = document.getElementById("music");
let tech = document.getElementById("tech");
let country = document.getElementById("country");
let comments = document.getElementById("comments");

let contenido = document.getElementById("profile_preview");

formulario.onsubmit = function (event) {
    event.preventDefault();
    //Mostrar un alert si el nombre o email están vacíos
    nombre.value;
    email.value;

    // La función trim solo funciona con cadena de textos. Trim quita los espacios en blanco.
    if (String(nombre.value).trim() === '') {
        
        alert("El nombre no puede estar vacío.");
        nombre.className+= '';

    } else if (String(email.value).trim() === '') {
        
        alert("El email no puede estar vacío."); 
    }

    birthdate.value;
    //Si ninguna de las tres variables de genero están marcadas, seleccionar una por defecto.
    generoM.checked;
    generoF.checked;
    generoO.checked;

    if (generoM.checked === false && generoF.checked === false && generoO.checked === false) {
        generoM.checked = true;
    }

    /* if (!generoM.checked && !generoF.checked && !generoO.checked) {
        generoM.checked = true;
    } Es otra opción válida */

    movies.checked;
    sports.checked;
    music.checked;
    tech.checked;
    country.children;
    comments.value;
}