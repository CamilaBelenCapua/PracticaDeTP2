const inventors = [
    {first: 'Albert', last: 'Enstien', year: 1876},
    {first: 'Issac', last: 'Newton', year: 1643},
    {first: 'Galileo', last: 'Galilei', year: 1564},
];

for (let index = 0; index < inventors.length; index++) {
    //const element = inventors[index];
    //console.log(inventors[index]);
}

//forof es lo mas parecido al foreach de c# o java
for (const inventor of inventors) {
    //console.log(inventor.year);
    if(inventor.year < 1870){
        //console.log("Nombre: " + inventor.first );
    }
}

// Itera sobre las propiedades de un objeto
for (const key in inventors) {
    //console.log(key);
}

// forEach es una funcion del objeto Array
inventors.forEach(inventor => console.log(inventor.first));

// while (condition) {
    
// }

// do {
    
// } while (condition);