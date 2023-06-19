const readline = require('readline');

async function obtenerDatoConsola(mensaje) {
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

module.exports = {
    obtenerDatoConsola,
};
