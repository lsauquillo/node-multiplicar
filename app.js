
const {crearTablaConPromesa, crearTablaConAsync} = require('./helpers/tabla.js');
const argv = require('./config/yargs');
require('colors');

// process.stdout.write('\x1Bc'); //limpia la terminal en linux
console.log('\x1Bc'); // Clear screen console

// const base = 4;

// const [ , , arg3] = process.argv;
// console.log(arg3);
// const [ , base] =  arg3.split('=');
// console.log(base);

// crearTablaConPromesa(base)
// .then((nombreArchivo)=>{
  // console.log(nombreArchivo, 'se ha creado.');
// });

// crearTablaConAsync(base)
// .then((nombreArchivo)=>{
  // console.log( 'se ha creadola tabla del', nombreArchivo);
// });

//  console.log(argv);

crearTablaConAsync(argv.b, argv.l, argv.h)
.then((nombreArchivo)=>{
  console.log( 'se ha creado la tabla del', nombreArchivo.red);
});