"use strict";

var fs = require('fs');

var argv = require('process').argv;

require('colors');

var crearTablaConPromesa = function crearTablaConPromesa() {
  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var listar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var hasta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  return new Promise(function (resolve, reject) {
    var salida = '';
    var consola = '';

    for (var i = 1; i <= hasta; i++) {
      salida += "".concat(base, " x ").concat(i, " = ").concat(base * i, "\n");
      consola += "  ".concat(base, " ").concat('x'.green, " ").concat(i, " ").concat('='.green, " ").concat(base * i, "\n");
    }

    if (listar) {
      console.log('============'.red);
      console.log('Tabla del', base);
      console.log('============');
      console.log(consola);
    }

    fs.writeFileSync("./salida/Tabla-del-".concat(base, ".txt"), salida);
    resolve("se ha creado el archivo: Tabla del  ".concat(base));
  });
};

var crearTablaConAsync = function crearTablaConAsync(base, listar, hasta) {
  var salida, consola, i;
  return regeneratorRuntime.async(function crearTablaConAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          salida = '';
          consola = '';

          for (i = 1; i <= hasta; i++) {
            salida += "".concat(base, " x ").concat(i, " = ").concat(base * i, "\n");
            consola += "  ".concat(base, " ").concat('x'.green, " ").concat(i, " ").concat('='.green, " ").concat(base * i, "\n");
          }

          if (listar) {
            console.log('=============='.green);
            console.log(" Tabla del ".concat(base, " ").bgGreen);
            console.log('=============='.green);
            console.log(consola);
          }

          fs.writeFileSync("./salida/Tabla-del-".concat(base, ".txt"), salida);
          return _context.abrupt("return", "Tabla del ".concat(base));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  crearTablaConPromesa: crearTablaConPromesa,
  crearTablaConAsync: crearTablaConAsync
};