// Definimos una variable para almacenar las notas
const notas = [];

// Función para mostrar la cantidad de notas
function mostrarCantidadNotas() {
    console.log(`Cantidad de notas: ${notas.length}`);
}

// Función para mostrar la lista de notas
function mostrarListaNotas() {
    console.log("Lista de notas:");
    notas.forEach((nota, index) => {
        console.log(`${index + 1}. ${nota}`);
    });
}

// Función para agregar una nueva nota
function agregarNota(nuevaNota) {
    notas.push(nuevaNota);
    console.log(`Nota agregada: "${nuevaNota}"`);
}

// Función para editar una nota existente
function editarNota() {
    const indiceNota = prompt("Ingrese el índice de la nota que desea editar:");

    if (isNaN(indiceNota) || indiceNota < 1 || indiceNota > notas.length) {
        console.log("Índice inválido. Intente nuevamente.");
        editarNota(); // Solicitamos el índice nuevamente
        return;
    }

    const nuevoTexto = prompt("Ingrese el nuevo texto de la nota:");
    notas[indiceNota - 1] = nuevoTexto;
    console.log(`Nota editada. Nueva nota: "${nuevoTexto}"`);
}

// Función para eliminar una nota existente
function eliminarNota() {
    const indiceNota = prompt("Ingrese el índice de la nota que desea eliminar:");

    if (isNaN(indiceNota) || indiceNota < 1 || indiceNota > notas.length) {
        console.log("Índice inválido. Intente nuevamente.");
        eliminarNota(); // Solicitamos el índice nuevamente
        return;
    }

    const notaEliminada = notas.splice(indiceNota - 1, 1);
    console.log(`Nota eliminada: "${notaEliminada}"`);
}

// Menú de acciones
function mostrarMenu() {
    console.log("\n--- Menú de acciones ---");
    console.log("1. Mostrar cantidad de notas");
    console.log("2. Mostrar lista de notas");
    console.log("3. Agregar nueva nota");
    console.log("4. Editar nota existente");
    console.log("5. Eliminar nota existente");
    console.log("6. Salir");
}

// Función principal
function main() {
    console.log("Bienvenido a la aplicación de notas.");

    while (true) {
        mostrarMenu();
        const opcion = prompt("Ingrese el número de la acción deseada:");

        switch (opcion) {
            case "1":
                mostrarCantidadNotas();
                break;
            case "2":
                mostrarListaNotas();
                break;
            case "3":
                const nuevaNota = prompt("Ingrese la nueva nota:");
                agregarNota(nuevaNota);
                break;
            case "4":
                editarNota();
                break;
            case "5":
                eliminarNota();
                break;
            case "6":
                console.log("¡Gracias por usar Notas!");
                return;
            default:
                console.log("Opción inválida. Intente nuevamente.");
        }
    }
}

// Ejecutamos la función principal
main();
