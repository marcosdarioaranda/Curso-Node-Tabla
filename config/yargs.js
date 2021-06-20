const argv = require('yargs')
        .option('b', {
            alias: 'base',
            demandOption: true,
            //default: '/etc/passwd',
            describe: 'Es la base de la tabla de multiplicar',
            type: 'number'
        })
        .option('l', {
            alias: 'listar',
            default: false,
            describe: 'Lista la tabla de multiplicar en consola',
            type: 'boolean'
        })
        .option('h', {
            alias: 'hasta',
            default: true,
            describe: 'Multiplica en la tabla hasta el valor ingresado',
            type: 'number'
        })
        .check((argv, options) => {
           
            if (isNaN (argv.base)) {
              throw 'La base tiene que ser un número';
            } else {
              return true 
            }
          })
      
       .argv;

module.exports = argv;