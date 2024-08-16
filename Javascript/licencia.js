const firstName = "Andre";
let age = 50;

console.log(`Hola, ${firstName}`);
console.log(`Tu edad es ${age}`);

// Si es que la persona es mayor de edad
// Si es que la edad sea mayor o igual a 18 años

if (age < 18) {
    // execute if condition is true
    console.log("Aun no puedes sacar tu licencia debido a que eres menor de edad");
} else if (age >= 80) {
    console.log("A tu edad ya no esta permitido manejar, debido al decreto supremo");
} else {
    // execute if condition is false
    console.log("Sí cuentas con la edad requerida para sacar tu licencia de manejo");
}
