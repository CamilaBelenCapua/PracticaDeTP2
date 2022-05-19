const inventors = [
    {first: 'Albert', last: 'Enstien', year: 1876},
    {first: 'Issac', last: 'Newton', year: 1643},
    {first: 'Galileo', last: 'Galilei', year: 1564},
];

// agregar elemento al final del array
inventors.push({first:'Pablo', last:'Fernandez', year: 1976});

// saca del final
const ultimoInventor = inventors.pop();

// saca del preincipio
const primerInventor = inventors.shift();

inventors.splice(3, 2);

// slice()