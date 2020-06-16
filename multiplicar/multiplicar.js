const fs = require('fs');

let listarTabla= (base,limite)=>{   
        if (!Number(base) || !Number(limite)) {
            console.log(`Uno de los valores no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
        }
}


let crearArchivo= (base,limite)=> {
    return new Promise((resolve, reject)=>{

        if (!Number(base) || !Number(limite)) {
            reject(`Uno de los valores no es un numero`);
            return;
        }
        data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        // console.log(data);
        
        fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else 
                resolve(`tabla-${base}al${limite}.txt`)
        });

    });
}

module.exports={
    listarTabla,
    crearArchivo
}

