// const { require } = require('yargs');
const argv = require('./config/yards').argv;
const { listarTabla ,crearArchivo} = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(err=> console.log(err));
    default:
        console.log('Comando no valido');
        break;
}


// let base = '2';
// console.log(argv);
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);

