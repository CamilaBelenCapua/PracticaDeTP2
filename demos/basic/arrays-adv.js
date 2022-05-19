const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  // TODO 1: Función para mostrar por consola en formato tabular
  function printInventors(inventors){
     console.log(`Nombre      Apellido    Año`);
     console.log('---------------------------');

   //   inventors.forEach(
   //      function(inventor){
   //       console.log(`${inventor.first}       ${inventor.last}    ${inventor.year}`);
   //   });
      inventors.forEach(
         inventor => console.log(`${inventor.first.padEnd(12,' ')}${inventor.last.padEnd(12,' ')}${inventor.year}`)
      );
  }
  //printInventors(inventors);

  // TODO 2: Mostrar por consola los inventores nacidos antes del 1800
  function filterInventors(inventors){
      printInventors(
         inventors.filter(inventor => inventor.year < 1800)
      );
  }
  
  // TODO 3: Mostrar por consola los inventores cuyo apellido empiece con C
  function getInventorsGeginOf(inventors){
      printInventors(
         inventors.filter(inventor => inventor.last.startsWith("C"))
      );
  }

  // TODO 4: Mostrar por consola los inventores convirtiendo el apellido en mayusculas
  function mapInventors(inventors){
     printInventors(
       inventors.map(inventor => ({
          first: inventor.first, 
          last: inventor.last.toUpperCase(),
          year: inventor.year
       })) 
     );
  }

  //mapInventors(inventors);
  // TODO 5: Mostrar aplicando 3 y 4
   
//   printInventors(
//      inventors      
//       .map(inventor => ({
//          first: inventor.first, 
//          last: inventor.last.toUpperCase(),
//          year: inventor.year
//       }))
//       .filter(inventor => inventor.last.startsWith("C"))      
//   )

  // TODO 6: Buscar el inventor Kepler y retornar el objeto
  console.log(
   inventors.find(inventor => inventor.last === 'Kepler')
  );
  
  // TODO 7: Hay algun inventor nacido en 1858 ?
console.log(
   inventors.some(inventor => inventor.year === 1858)
);

  // TODO 8: Todos los inventores nacieron despues de 1500 ?
console.log(
   inventors.every(inventor => inventor.year > 1500)
);

  // TODO 9: Mostrar por consola los inventores ordenados ascendetemente por fecha de nacimiento
printInventors(
   inventors.sort((InventorA, InventorB) => InventorB.year - InventorA.year)
);

  // TODO 10: Ordenar los inventores por apellido
printInventors(
   inventors.sort((InventorA, InventorB) => InventorA.last > InventorB.last? 1:-1)
);
  // TODO 11: Converir el array al formato:
  /**
     * [{name: 
     *      {
     *          first: 'first name',
     *          last: 'last name'
     *      }
     * }, 
     * year: year
     * ]
     * 
  */ 
console.log(
   inventors.map( inventor => ({
      name: { 
         first: inventor.first,
         last: inventor.last
      },
      year: inventor.year  
   }))
);
