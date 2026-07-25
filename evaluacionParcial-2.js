/* Ejercicio 1*/
console.log("")
console.log("Ejercicio 1")
console.log("")
let nombreProducto1 = "Pantalla";
let precioProducto1 = 125;
let stockProducto1 = true;

let nombreProducto2 = "teclado";
let precioProducto2 = 20;
let stockProducto2 = false;

console.log(nombreProducto1, precioProducto1, stockProducto1);
console.log(nombreProducto2, precioProducto2, stockProducto2);

/* Ejercicio 2*/
console.log("")
console.log("Ejercicio 2")
console.log("")
let precio = 50;
let descuento = 15;

let ahorro = precio * descuento / 100;
let precioFinal = precio - ahorro;

console.log("Precio final:", precioFinal);
console.log("Ahoro:", ahorro);

/* Ejercicio 3 */ 
console.log("")
console.log("Ejercicio 3")
console.log("")
function edadPersona(edad) {
    if (edad < 18) {
        console.log("menor de edad");
    } else if (edad > 65) {
        console.log("adulto mayor");
    } else {
        console.log("adulto");
    }
}

edadPersona(45); 

/* Ejercicio 4 */
console.log("")
console.log("Ejercicio 4")
console.log("")
let suma = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + " es par");
    } else {
        console.log(i + " es impar");
    }

    suma = suma + i;
}

console.log("Suma total: " + suma);

/* Ejercicio 5 */
console.log("")
console.log("Ejercicio 5")
console.log("") 

function mayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

console.log("El numero mayor es: " + mayor(85716578126578165, 487149578297462897875));