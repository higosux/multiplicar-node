// REQUIREDS
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log("=====================================".white);
    console.log(`=========Tabla de ${base}===========`.white);
    console.log("=====================================".white);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} =  ${base * i}`);

    }

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`No es un número: ${base}`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} =  ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}