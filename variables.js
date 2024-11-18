// alert("test");

//declaracion de variable simple
let producto = "PS5 Pro";
//declaracion de variable multiple en una sola linea
let price = "", dimensions = 0;

//cambio de valor
producto = "PS5";

//10producto = "TEST!!"; no permite variables que comience por numero

//let return = true; // las palabras reservada no se pueden usar como variables

let pokemon = "Oshawott";

function showPokemon(nombrePokemon){
    pokemon = "Snivy";

    console.log(nombrePokemon);
}

showPokemon(pokemon);
alert(producto);

//ejercicio

let firstName = "Jon";
let lastName ="Snow";
let age = 24;

// conseguir "Soy Jon Snow y tengo 24 años"
console.log("Soy " + firstName + " " + lastName + " y tengo " + age + " años");

// otra opcion

function frase(f,l,a){
    console.log(`Soy ${f} ${l} y tengo ${a} años.`);
}

//frase(firstName,lastName,age);

//age = age + 6;
age += 6;
console.log("Soy " + firstName + " " + lastName + " y tengo " + age + " años");

//age = age - 6;
age -= 6;
console.log("Soy " + firstName + " " + lastName + " y tengo " + age + " años");

//age = age * 6;
age *= 6;
console.log("Soy " + firstName + " " + lastName + " y tengo " + age + " años");

//age = age / 6;
age /= 6;
console.log("Soy " + firstName + " " + lastName + " y tengo " + age + " años");

//age = age + 1;
age++;
console.log("Soy " + firstName + " " + lastName + " y tengo " + age + " años");

//ejercicio sumar 25 y dividir entre 5 la edad

age += 25;
age /=5;
console.log("Soy " + firstName + " " + lastName + " y tengo " + age + " años");