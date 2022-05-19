// let vs var
// let es la forma moderna de declarar variables
// var es legacy

var x = 1;

if(x === 1){
    let x = 2;
    console.log(x);
}

var x = 10;

console.log(x);

const nombre = 'Pablo';
//nombre = "asdfasdf";

const person = {
    name: 'Pablo',
    age: 25
};

person.name = 'Juan';

person.phone = 345345;

console.log(person.phone);

Object.freeze(person);
person.name = 'Pedro';

console.log(person.name);


