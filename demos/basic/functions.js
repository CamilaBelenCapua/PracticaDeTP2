// Tipos de declaración de funciones hay en JS

function add(a,b){
    return a + b;
}

add(4,5);

// asignando a una variable
// const square = function(x){
//     return x*x;
// }

//console.log(square(5));

// Arrow Function
const getSum = (a,b) => {
    return a + b;
};

// const getSquare = x => x*x;
// console.log(getSquare(4));

//let y = 4;

console.log(((x,y) => x + y)(4,6));

function resta(a,b){
    console.log('si se ejecuta');
    return a - b;    
}

resta(5,8);