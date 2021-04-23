const fs = require('fs');
const argv = require('process').argv;

require('colors');

const crearTablaConPromesa = (base=0, listar=false, hasta=10) => {
  return new Promise((resolve, reject)=>{
    let salida = '';
    let consola = '';    
  
    for(let i=1; i<=hasta; i++){ 
      salida += `${base} x ${i} = ${base * i}\n`
      consola += `  ${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`  
    }
    if(listar){
    console.log('============'.red);
    console.log('Tabla del', base);
    console.log('============');
    console.log(consola);
    }    
  
    fs.writeFileSync(`./salida/Tabla-del-${base}.txt`, salida);

    resolve(`se ha creado el archivo: Tabla del  ${base}`)
  }
)}

const crearTablaConAsync = async (base, listar, hasta) => {
 
    let salida = '';
    let consola = '';   
  
    for(let i=1; i<=hasta; i++){ 
      salida += `${base} x ${i} = ${base * i}\n`
      consola += `  ${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`  
    }

    if(listar){
      console.log('=============='.green);
    console.log(` Tabla del ${base} `.bgGreen);
    console.log('=============='.green);
    console.log(consola);
    }    
  
    fs.writeFileSync(`./salida/Tabla-del-${base}.txt`, salida);

   return  `Tabla del ${base}`
  
}

  module.exports = {
    crearTablaConPromesa,
    crearTablaConAsync
  }

