const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base , listar=false, hasta) =>{

    try {
        let salida = '';
    
    if(listar == true){
        console.log('==========================='.green);
        console.log(`         Tabla-${base}`);
        console.log('==========================='.green);
    }

    for(let i = 1;i<=hasta; i++){

        salida += `${base } ${'X'.blue} ${ i } ${'='.blue} ${ base * i }\n`;
    }

    if(listar == true){
        console.log(salida);
     }
    
     fs.writeFileSync(`./out/Tabla-${ base }.txt`,salida);

    return `Tabla-${base}.txt`;
    } catch (err) {
        throw err; 
    }
    
}

module.exports={
    crearArchivo
}