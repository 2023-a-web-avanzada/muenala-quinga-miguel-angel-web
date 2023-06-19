const fs = require('fs');
const readline = require('readline');

// Ruta del archivo de la concesionaria
const concesionariaFilePath = './concesionaria.json';

// Función para leer el archivo JSON de la concesionaria
function leerConcesionaria() {
    try {
        const contenido = fs.readFileSync(concesionariaFilePath, 'utf-8');
        return JSON.parse(contenido);
    } catch (error) {
        return [];
    }
}

// Función para escribir en el archivo JSON de la concesionaria
function escribirConcesionaria(concesionaria) {
    fs.writeFileSync(concesionariaFilePath, JSON.stringify(concesionaria, null, 2));
}

// Operación CREATE: Agregar una nueva concesionaria
async function agregarConcesionaria() {
    const concesionaria = await obtenerDatosConcesionaria();
    const autos = [];
    concesionaria.autos = autos;
    const concesionarias = leerConcesionaria();
    concesionarias.push(concesionaria);
    escribirConcesionaria(concesionarias);
    console.log('Concesionaria agregada con éxito');
}

// Operación READ: Obtener la lista de concesionarias
function obtenerConcesionarias() {
    const concesionarias = leerConcesionaria();
    return concesionarias;
}

// Operación UPDATE: Actualizar los datos de una concesionaria
async function actualizarConcesionaria() {
    const concesionarias = leerConcesionaria();
    const datos = await obtenerDatosIndice('concesionaria');
    const indice = datos.indice;

    if (indice >= 0 && indice < concesionarias.length) {
        const nuevaConcesionaria = await obtenerDatosConcesionaria();
        concesionarias[indice] = nuevaConcesionaria;
        escribirConcesionaria(concesionarias);
        console.log('Concesionaria actualizada con éxito');
    } else {
        console.log('Índice inválido');
    }
}

// Operación DELETE: Eliminar una concesionaria
async function eliminarConcesionaria() {
    const concesionarias = leerConcesionaria();
    const datos = await obtenerDatosIndice('concesionaria');
    const indice = datos.indice;

    if (indice >= 0 && indice < concesionarias.length) {
        concesionarias.splice(indice, 1);
        escribirConcesionaria(concesionarias);
        console.log('Concesionaria eliminada con éxito');
    } else {
        console.log('Índice inválido');
    }
}

// Función para obtener los datos de una concesionaria desde la consola
async function obtenerDatosConcesionaria() {
    const nombre = await obtenerDatoConsola('Ingrese el nombre de la concesionaria: ');
    const direccion = await obtenerDatoConsola('Ingrese la dirección de la concesionaria: ');
    const telefono = await obtenerDatoConsola('Ingrese el teléfono de la concesionaria: ');
    const fechaApertura = await obtenerDatoConsola('Ingrese la fecha de apertura (Formato: dd/mm/aaaa): ');
    const activa = await obtenerDatoBooleanoConsola('¿La concesionaria está activa? (sí/no): ');

    return {
        nombre,
        direccion,
        telefono,
        fechaApertura,
        activa,
    };
}

// Función para obtener un dato desde la consola
function obtenerDatoConsola(pregunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            rl.close();
            resolve(respuesta);
        });
    });
}

// Función para obtener un dato booleano desde la consola
function obtenerDatoBooleanoConsola(pregunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            rl.close();
            resolve(respuesta.toLowerCase() === 'sí');
        });
    });
}

// Función para obtener el índice de una concesionaria desde la consola
function obtenerDatosIndice(entidad) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(`Ingrese el índice de la ${entidad}: `, (respuesta) => {
            rl.close();
            resolve({ indice: Number(respuesta) });
        });
    });
}

// Función para mostrar el menú de opciones
function mostrarMenu() {
    console.log('--- MENÚ ---');
    console.log('1. Agregar una concesionaria');
    console.log('2. Ver la lista de concesionarias');
    console.log('3. Actualizar una concesionaria');
    console.log('4. Eliminar una concesionaria');
    console.log('5. Salir');
    console.log('--------------');
}

// Función para realizar las operaciones CRUD según la opción seleccionada
async function realizarOperacion(opcion) {
    switch (opcion) {
        case '1':
            await agregarConcesionaria();
            break;
        case '2':
            const concesionarias = obtenerConcesionarias();
            console.log('Concesionarias:');
            console.log(concesionarias);
            break;
        case '3':
            await actualizarConcesionaria();
            break;
        case '4':
            await eliminarConcesionaria();
            break;
        case '5':
            console.log('Saliendo del programa...');
            process.exit();
        default:
            console.log('Opción inválida');
            break;
    }

    mostrarMenu();
    const nuevaOpcion = await obtenerDatoConsola('Seleccione una opción: ');
    realizarOperacion(nuevaOpcion);
}

// Ejecución del programa
function ejecutarPrograma() {
    mostrarMenu();
    obtenerDatoConsola('Seleccione una opción: ').then((opcion) => {
        realizarOperacion(opcion);
    });
}

ejecutarPrograma();
