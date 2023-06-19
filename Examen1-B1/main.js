const concesionaria = require('./concesionaria');
const auto = require('./auto');

async function menu() {
    while (true) {
        console.log('--- Menú Principal ---');
        console.log('1. Agregar Concesionaria');
        console.log('2. Listar Concesionarias');
        console.log('3. Actualizar Concesionaria');
        console.log('4. Eliminar Concesionaria');
        console.log('5. Agregar Auto');
        console.log('6. Listar Autos');
        console.log('7. Actualizar Auto');
        console.log('8. Eliminar Auto');
        console.log('0. Salir');

        const opcion = await auto.obtenerDatoConsola('Ingrese una opción: ');

        switch (opcion) {
            case '1':
                await concesionaria.agregarConcesionaria();
                break;
            case '2':
                concesionaria.listarConcesionarias();
                break;
            case '3':
                await concesionaria.actualizarConcesionaria();
                break;
            case '4':
                await concesionaria.eliminarConcesionaria();
                break;
            case '5':
                await auto.agregarAuto();
                break;
            case '6':
                auto.listarAutos();
                break;
            case '7':
                await auto.actualizarAuto();
                break;
            case '8':
                await auto.eliminarAuto();
                break;
            case '0':
                console.log('Saliendo del programa...');
                process.exit();
            default:
                console.log('Opción inválida. Intente nuevamente.');
        }

        console.log('\n');
    }
}

menu();
