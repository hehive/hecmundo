const temperature = 50;

if (temperature < 0) {
    console.log("Mejor quedarse en casa, abrigarse y alimentarse bien");
} else if (temperature >= 0 && temperature < 10) { // la temperatura esta entre 0 y 10
    console.log("Puedes salir pero bien abrigado");
} else if (temperature >= 10 && temperature < 20) { // la temperatura esta entre 10 y 20
    console.log("Es un buen dia para salir a caminar");
} else if (temperature >= 20 && temperature < 30) { // la temperatura esta entre 20 y 30
    console.log("Puedes salir pero ponte bloqueador");
} else {
    console.log("Mejor no salir e hidratarse con frecuencia");
}