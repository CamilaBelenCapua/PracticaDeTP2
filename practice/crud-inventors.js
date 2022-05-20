// PERSISTIDO EN EL JSON inventors.json
import fs from 'fs'
const inventors = JSON.parse(fs.readFileSync('./inventors.json', 'utf-8'));

// TODO: getInventors()
function getInventors(){
    return inventors;
}

// TODO: getInventor(id)
function getInventor(id){
    return  inventors.filter(inventor => inventor.id === id);
}

// TODO: insertInventor(inventor)
function insertInventor(inventor){
    if(inventor){
        inventors.push(inventor);
        fs.writeFileSync('./inventors.json', inventors); //guardo el archivo con lo agregado
    }
}

// TODO: updateInventor(inventor)
function updateInventor(inventor){
   const inventorEncontrado = inventors.filter(inventorArray => inventorArray.id === inventor.id); 
   
   inventorEncontrado.first = inventor.first;
   inventorEncontrado.last = inventor.first;
   inventorEncontrado.year = inventor.first;
   fs.writeFileSync('./inventors.json', inventors);
}

// TODO: deleteInventor(id)
function deleteInventor(id){
    const inventor = inventors.filter(inventor => inventor.id === id);   
    if(inventor){
        inventors.pop(inventor);
        fs.writeFileSync('./inventors.json', inventors); 
    }
}