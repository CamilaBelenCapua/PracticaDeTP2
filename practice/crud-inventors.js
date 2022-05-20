// PERSISTIDO EN EL JSON inventors.json
import fs from 'fs'
const inventors = JSON.parse(fs.readFileSync('./inventors.json', 'utf-8'));

// TODO: getInventors()
function getInventors(){
    return inventors;
}

// TODO: getInventor(id)
function getInventor(id){
    return  inventors.filter(inventor => inventor._id=== id);
}

// TODO: insertInventor(inventor)
function insertInventor(inventor){
    if(inventor){
        inventors.push(inventor);
        fs.writeFileSync('./inventors.json', JSON.stringify(inventors)); //guardo el archivo con lo agregado
    }
}

// TODO: updateInventor(inventor)
function updateInventor(inventor){
   const inventorEncontrado = inventors.filter(inventorArray => inventorArray._id === inventor._id); 
   inventorEncontrado[0].first = inventor.first;
   inventorEncontrado[0].last =inventor.last;
   inventorEncontrado[0].year = inventor.year;
   fs.writeFileSync('./inventors.json', JSON.stringify(inventors));
}

// TODO: deleteInventor(id)
function deleteInventor(id){
    const inventor = inventors.filter(inventor => inventor._id === id);   
    if(inventor){
        inventors.pop(inventor);
        fs.writeFileSync('./inventors.json', JSON.stringify(inventors)); 
    }
}

console.log(getInventors());
console.log(getInventor(2));

const inventorInsert = {"_id": 13, "first": "Camila", "last": "Capua", "year": 2005};
insertInventor(inventorInsert);
console.log(getInventors());

const inventorUpdate = {"_id": 1, "first": "Juan", "last": "Perez", "year": 1570}
updateInventor(inventorUpdate);
console.log(getInventors());

deleteInventor(13);
console.log(getInventors());

