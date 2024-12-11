console.log("Iniciando asistente...");

// let nombre = prompt("¿Cuál es tu nombre?");
// console.log("Encantando de conocerte ", nombre, "!");

let currentYear = new Date();
console.log("Valor de año actual", currentYear);

currentYear = currentYear.getFullYear();
console.log("Valor de año actual", currentYear);

let userYear = prompt("¿En qué año naciste?");
console.log("Año de nacimiento del usuario: ", userYear);

let birthday = currentYear - userYear;

console.log("Oh, tienes", birthday, " genial!");

let opcion = prompt("¿Qué actividad quieres hacer? 1 o 2");

if (opcion == 1) {
    console.log("Has elegido la opción 1");

    // let numero1 = Number(prompt("Introduce el 1º número: ")); Opción de Parsa
    // let numero2 = Number(prompt("Introduce el 2º número: "));

    let numero1 = prompt("Introduce el 1º número: ");
    let numero2 = prompt("Introduce el 2º número: ");
    let operacion = prompt("¿Qué operación deseas realizar con esso números? (+, -, *, /");

    let resultado = 0;

    console.log("Operación elegida:", operacion);

    if (operacion === "+") resultado = numero1 + numero2;
    if (operacion === "-") resultado = numero1 - numero2;
    if (operacion === "*") resultado = numero1 * numero2;
    if (operacion === "/") resultado = numero1 / numero2;

    console.log("Resultado de la operación: ", operacion, "entre el nº:", numero1, " y nº 2:", numero2, " es: " + resultado);

    // let resultado = Number(numero1) + Number(numero2);
    // let resultadoPrompt = num1 + num2; Resultado Opción Parsa

    // console.log("La suma de los dos números es ", resultado);
}
else if (opcion == 2) {
    console.log("Has elegido la opción 2");

    let numRandom = Math.floor(Math.random() * 10) + 1;
    console.log("Número aleatorio ", numRandom);

    let intentos = 3
    for (intentos; intentos > 0; intentos--) {
        let numUsuario = prompt("Introduce un número al azar del 1 al 10");
        
        if (numRandom === Number(numUsuario)) {
            alert("¡Felicidades, has acertado!");
            break;

        } else {
            console.log("Nope :(");

        }

    }
    
    if (intentos === 0) {
        alert ("Sorry, no has acertado, el nº era " + numRandom);
    }
}
else {
    alert("Solo tenemos 2 actividades, elige 1 o 2 :(");
}

/*console.log("Introduce dos números");
let numero1 = prompt("Introduce un número");

console.log("Introduce dos números");
let numero2 = prompt("Introduce otro número");

suma = numero1 + numero2;

console.log(numero1 + "+" + numero2 + "=" + suma); */