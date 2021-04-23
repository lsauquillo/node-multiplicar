const argv = require('yargs')
.option('b', {
  alias: 'base',
  describe: 'base de la tabla',
  type: 'number',
  demandOption: true
})
.option('l', {
  alias: 'listar',
  describe: 'lista la tabla en consola',
  type: 'boolean',
  default: false
})
.option('h', {
  alias: 'hasta',
  describe: 'limite de la tabla',
  type: 'number',
  default: 10
})
.check((argv, option)=>{
  if(isNaN(argv.base)){
    throw "La base tiene que ser un número";
  }else{
    return true;
  }
  
})
.argv;

module.exports = argv;