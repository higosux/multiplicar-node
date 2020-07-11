// REQUIREDS
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:
        'Comando no existe';
}
// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];