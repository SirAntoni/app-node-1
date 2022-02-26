const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5, listar=false,hasta=12) => {

    
    try{
        let salida  = '';
       
        for(let i = 1; i <= hasta;i++){
        salida += `${base} x ${i} = ${base*i}\n`;
        };

        if(listar){
            console.clear();
            console.log('================================'.blue);
            console.log(`           Tabla del ${base}`.rainbow);
            console.log('================================'.blue);
            console.log(salida.magenta);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;
    }catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}