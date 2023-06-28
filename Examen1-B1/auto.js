const fs = require('fs');
const readline = require('readline');

function obtenerDatoBooleanoConsola(pregunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            rl.close();
            resolve(respuesta.toLowerCase() === 'si');
        });
    });
}

// Función para leer datos desde la consola
function obtenerDatoConsola(mensaje) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(mensaje, (respuesta) => {
            rl.close();
            resolve(respuesta);
        });
    });
}

// Función para leer datos desde un archivo
function leerArchivo(archivo) {
    try {
        const contenido = fs.readFileSync(archivo, 'utf8');
        return JSON.parse(contenido);
    } catch (error) {
        return [];
    }
}

// Función para guardar datos en un archivo
function guardarArchivo(archivo, datos) {
    const contenido = JSON.stringify(datos, null, 2);
    fs.writeFileSync(archivo, contenido, 'utf8');
}

// Función para agregar una concesionaria
async function agregarConcesionaria() {
    console.log('--- Agregar Concesionaria ---');

    const concesionarias = leerArchivo('concesionaria.json');

    const nombre = await obtenerDatoConsola('Ingrese el nombre de la concesionaria: ');
    const direccion = await obtenerDatoConsola('Ingrese la dirección de la concesionaria: ');
    const telefono = await obtenerDatoConsola('Ingrese el teléfono de la concesionaria: ');
    const fechaApertura = await obtenerDatoConsola('Ingrese la fecha de apertura (Formato: dd/mm/aaaa): ');
    const activa = await obtenerDatoBooleanoConsola('¿La concesionaria está activa? (sí/no): ');

    const nuevaConcesionaria = {
        id: concesionarias.length + 1,
        nombre,
        direccion,
        telefono,
        fechaApertura,
        activa,
        autos: [],
    };

    concesionarias.push(nuevaConcesionaria);
    guardarArchivo('concesionaria.json', concesionarias);

    console.log('Concesionaria agregada:', nuevaConcesionaria);
}

// Función para listar las concesionarias
function listarConcesionarias() {
    console.log('--- Listar Concesionarias ---');

    const concesionarias = leerArchivo('concesionaria.json');

    if (concesionarias.length === 0) {
        console.log('No hay concesionarias registradas.');
        return;
    }

    concesionarias.forEach((concesionaria) => {
        console.log('ID:', concesionaria.id);
        console.log('Nombre:', concesionaria.nombre);
        console.log('Dirección:', concesionaria.direccion);
        console.log('Teléfono:', concesionaria.telefono);
        console.log('FechaApertura:', concesionaria.fechaApertura);
        console.log('Activa:', concesionaria.activa);
        console.log('---');
    });
}

// Función para actualizar una concesionaria
async function actualizarConcesionaria() {
    console.log('--- Actualizar Concesionaria ---');

    const concesionarias = leerArchivo('concesionaria.json');

    if (concesionarias.length === 0) {
        console.log('No hay concesionarias registradas.');
        return;
    }

    const id = await obtenerDatoConsola('Ingrese el ID de la concesionaria que desea actualizar: ');

    const concesionaria = concesionarias.find((c) => c.id === parseInt(id));

    if (!concesionaria) {
        console.log('No se encontró ninguna concesionaria con ese ID.');
        return;
    }

    const nombre = await obtenerDatoConsola(`Ingrese el nuevo nombre de la concesionaria [${concesionaria.nombre}]: `);
    const direccion = await obtenerDatoConsola(`Ingrese la nueva dirección de la concesionaria [${concesionaria.direccion}]: `);
    const telefono = await obtenerDatoConsola(`Ingrese el nuevo teléfono de la concesionaria [${concesionaria.telefono}]: `);
    const fechaApertura = await obtenerDatoConsola(`Ingrese la nueva fecha de apertura de la concesionaria [${concesionaria.fechaApertura}]: `);
    const activa = await obtenerDatoConsola(`Ingrese el estado de concesionaria, está activa? (sí/no) [${concesionaria.activa}]: `);

    concesionaria.nombre = nombre || concesionaria.nombre;
    concesionaria.direccion = direccion || concesionaria.direccion;
    concesionaria.telefono = telefono || concesionaria.telefono;
    concesionaria.fechaApertura = fechaApertura || concesionaria.fechaApertura;
    concesionaria.activa = activa || concesionaria.activa;

    guardarArchivo('concesionaria.json', concesionarias);

    console.log('Concesionaria actualizada:', concesionaria);
}

// Función para eliminar una concesionaria
async function eliminarConcesionaria() {
    console.log('--- Eliminar Concesionaria ---');

    const concesionarias = leerArchivo('concesionaria.json');

    if (concesionarias.length === 0) {
        console.log('No hay concesionarias registradas.');
        return;
    }

    const id = await obtenerDatoConsola('Ingrese el ID de la concesionaria que desea eliminar: ');

    const indice = concesionarias.findIndex((c) => c.id === parseInt(id));

    if (indice === -1) {
        console.log('No se encontró ninguna concesionaria con ese ID.');
        return;
    }

    const concesionariaEliminada = concesionarias.splice(indice, 1)[0];

    guardarArchivo('concesionaria.json', concesionarias);

    console.log('Concesionaria eliminada:', concesionariaEliminada);
}

// Función para agregar un auto a una concesionaria
async function agregarAuto() {
    console.log('--- Agregar Auto ---');

    const concesionarias = leerArchivo('concesionaria.json');

    if (concesionarias.length === 0) {
        console.log('No hay concesionarias registradas.');
        return;
    }

    listarConcesionarias();

    const idConcesionaria = await obtenerDatoConsola('Ingrese el ID de la concesionaria a la que pertenece el auto: ');

    const concesionaria = concesionarias.find((c) => c.id === parseInt(idConcesionaria));

    if (!concesionaria) {
        console.log('No se encontró ninguna concesionaria con ese ID.');
        return;
    }

    const marca = await obtenerDatoConsola('Ingrese la marca del auto: ');
    const modelo = await obtenerDatoConsola('Ingrese el modelo del auto: ');
    const anio = await obtenerDatoConsola('Ingrese el año del auto: ');
    const precio = await obtenerDatoConsola('Ingrese el precio del auto: ');

    const nuevoAuto = {
        id: concesionaria.autos.length + 1,
        marca,
        modelo,
        anio: parseInt(anio),
        precio: parseFloat(precio),
    };

    concesionaria.autos.push(nuevoAuto);
    guardarArchivo('concesionaria.json', concesionarias);

    console.log('Auto agregado:', nuevoAuto);
}

// Función para listar los autos de una concesionaria
async function listarAutos() {
    console.log('--- Listar Autos ---');

    const concesionarias = leerArchivo('concesionaria.json');

    if (concesionarias.length === 0) {
        console.log('No hay concesionarias registradas.');
        return;
    }

    listarConcesionarias();

    const idConcesionaria = await obtenerDatoConsola('Ingrese el ID de la concesionaria: ');

    const concesionaria = concesionarias.find((c) => c.id === parseInt(idConcesionaria));

    if (!concesionaria) {
        console.log('No se encontró ninguna concesionaria con ese ID.');
        return;
    }

    if (concesionaria.autos.length === 0) {
        console.log('No hay autos registrados para esta concesionaria.');
        return;
    }

    concesionaria.autos.forEach((auto) => {
        console.log('ID:', auto.id);
        console.log('Marca:', auto.marca);
        console.log('Modelo:', auto.modelo);
        console.log('Año:', auto.anio);
        console.log('Precio:', auto.precio);
        console.log('---');
    });
}

// Función para actualizar un auto de una concesionaria
async function actualizarAuto() {
    console.log('--- Actualizar Auto ---');

    const concesionarias = leerArchivo('concesionaria.json');

    if (concesionarias.length === 0) {
        console.log('No hay concesionarias registradas.');
        return;
    }

    listarConcesionarias();

    const idConcesionaria = await obtenerDatoConsola('Ingrese el ID de la concesionaria: ');

    const concesionaria = concesionarias.find((c) => c.id === parseInt(idConcesionaria));

    if (!concesionaria) {
        console.log('No se encontró ninguna concesionaria con ese ID.');
        return;
    }

    if (concesionaria.autos.length === 0) {
        console.log('No hay autos registrados para esta concesionaria.');
        return;
    }

    const idAuto = await obtenerDatoConsola('Ingrese el ID del auto que desea actualizar: ');

    const auto = concesionaria.autos.find((a) => a.id === parseInt(idAuto));

    if (!auto) {
        console.log('No se encontró ningún auto con ese ID.');
        return;
    }

    const marca = await obtenerDatoConsola(`Ingrese la nueva marca del auto [${auto.marca}]: `);
    const modelo = await obtenerDatoConsola(`Ingrese el nuevo modelo del auto [${auto.modelo}]: `);
    const anio = await obtenerDatoConsola(`Ingrese el nuevo año del auto [${auto.anio}]: `);
    const precio = await obtenerDatoConsola(`Ingrese el nuevo precio del auto [${auto.precio}]: `);

    auto.marca = marca || auto.marca;
    auto.modelo = modelo || auto.modelo;
    auto.anio = anio ? parseInt(anio) : auto.anio;
    auto.precio = precio ? parseFloat(precio) : auto.precio;

    guardarArchivo('concesionaria.json', concesionarias);

    console.log('Auto actualizado:', auto);
}

// Función para eliminar un auto de una concesionaria
async function eliminarAuto() {
    console.log('--- Eliminar Auto ---');

    const concesionarias = leerArchivo('concesionaria.json');

    if (concesionarias.length === 0) {
        console.log('No hay concesionarias registradas.');
        return;
    }

    listarConcesionarias();

    const idConcesionaria = await obtenerDatoConsola('Ingrese el ID de la concesionaria: ');

    const concesionaria = concesionarias.find((c) => c.id === parseInt(idConcesionaria));

    if (!concesionaria) {
        console.log('No se encontró ninguna concesionaria con ese ID.');
        return;
    }

    if (concesionaria.autos.length === 0) {
        console.log('No hay autos registrados para esta concesionaria.');
        return;
    }

    const idAuto = await obtenerDatoConsola('Ingrese el ID del auto que desea eliminar: ');

    const indice = concesionaria.autos.findIndex((a) => a.id === parseInt(idAuto));

    if (indice === -1) {
        console.log('No se encontró ningún auto con ese ID.');
        return;
    }

    const autoEliminado = concesionaria.autos.splice(indice, 1)[0];

    guardarArchivo('concesionaria.json', concesionarias);

    console.log('Auto eliminado:', autoEliminado);
}

// Función para mostrar el menú de opciones
async function mostrarMenu() {
    console.log('--- MENÚ ---');
    console.log('1. Agregar concesionaria');
    console.log('2. Listar concesionarias');
    console.log('3. Actualizar concesionaria');
    console.log('4. Eliminar concesionaria');
    console.log('5. Agregar auto');
    console.log('6. Listar autos');
    console.log('7. Actualizar auto');
    console.log('8. Eliminar auto');
    console.log('9. Salir');

    const opcion = await obtenerDatoConsola('Seleccione una opción: ');

    switch (opcion) {
        case '1':
            await agregarConcesionaria();
            break;
        case '2':
            listarConcesionarias();
            break;
        case '3':
            await actualizarConcesionaria();
            break;
        case '4':
            await eliminarConcesionaria();
            break;
        case '5':
            await agregarAuto();
            break;
        case '6':
            await listarAutos();
            break;
        case '7':
            await actualizarAuto();
            break;
        case '8':
            await eliminarAuto();
            break;
        case '9':
            console.log('Hasta luego!');
            process.exit(0);
        default:
            console.log('Opción inválida.');
            break;
    }

    mostrarMenu();
}

// Inicio del programa
mostrarMenu();
