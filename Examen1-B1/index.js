const fs = require('fs');
const readline = require('readline');
const Concesionaria = require('./concesionaria');
const Auto = require('./auto');

function cargarConcesionaria() {
    if (fs.existsSync('concesionaria.json')) {
        const datosJSON = fs.readFileSync('concesionaria.json');
        const datos = JSON.parse(datosJSON);

        const concesionaria = new Concesionaria(
            datos.nombre,
            datos.ubicacion,
            datos.telefono,
            datos.abierto
        );

        datos.autos.forEach((auto) => {
            concesionaria.agregarAuto(
                new Auto(
                    auto.nombre,
                    auto.marca,
                    auto.modelo,
                    auto.año,
                    auto.precio
                )
            );
        });

        return concesionaria;
    } else {
        return new Concesionaria('', '', '', false);
    }
}

function obtenerDatoConsola(mensaje) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(mensaje, (dato) => {
            rl.close();
            resolve(dato);
        });
    });
}

async function main() {
    let concesionaria = cargarConcesionaria();

    while (true) {
        console.log('----------- MENÚ -----------');
        console.log('1. Agregar auto');
        console.log('2. Listar autos');
        console.log('3. Actualizar auto');
        console.log('4. Eliminar auto');
        console.log('5. Guardar datos');
        console.log('6. Salir');
        console.log('----------------------------');

        const opcion = await obtenerDatoConsola('Ingrese una opción: ');

        if (opcion === '1') {
            const nombreConcesionaria = await obtenerDatoConsola('Ingrese el nombre de la concesionaria: ');
            const ubicacion = await obtenerDatoConsola('Ingrese la ubicación de la concesionaria: ');
            const telefono = await obtenerDatoConsola('Ingrese el teléfono de la concesionaria: ');
            const abierto = await obtenerDatoConsola('¿La concesionaria está abierta? (true/false): ');

            concesionaria = new Concesionaria(nombreConcesionaria, ubicacion, telefono, abierto === 'true');
        } else if (opcion === '2') {
            concesionaria.listarAutos();
        } else if (opcion === '3') {
            const nombreAuto = await obtenerDatoConsola('Ingrese el nombre del auto a actualizar: ');

            const nuevosDatos = {};
            nuevosDatos.nombre = await obtenerDatoConsola('Ingrese el nuevo nombre del auto: ');
            nuevosDatos.marca = await obtenerDatoConsola('Ingrese la nueva marca del auto: ');
            nuevosDatos.modelo = await obtenerDatoConsola('Ingrese el nuevo modelo del auto: ');
            nuevosDatos.año = await obtenerDatoConsola('Ingrese el nuevo año del auto: ');
            nuevosDatos.precio = await obtenerDatoConsola('Ingrese el nuevo precio del auto: ');

            concesionaria.actualizarAuto(nombreAuto, nuevosDatos);
        } else if (opcion === '4') {
            const nombreAuto = await obtenerDatoConsola('Ingrese el nombre del auto a eliminar: ');

            concesionaria.eliminarAuto(nombreAuto);
        } else if (opcion === '5') {
            concesionaria.guardarDatos();
        } else if (opcion === '6') {
            console.log('Saliendo del programa...');
            break;
        } else {
            console.log('Opción inválida. Por favor, ingrese una opción válida.');
        }
    }
}

main();
