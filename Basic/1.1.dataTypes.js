"use strict"
var age= 22;
var fullName= "Sadiqur Rahman";
console.log(typeof age);
console.log(typeof fullName);

// number to string
var info= age+"";
console.log(typeof info); 
var info2= +"22";
console.log(typeof info2) ;

let num1= "22";
let num2= 22;
console.log(typeof Number(num1));
console.log(typeof String(num2));

let sum= +num1 + +num2;
console.log(sum);

// template String
let aboutMe= "My name is " + fullName + " and my age is " + age;
console.log(aboutMe)
// better way
aboutMe= `My name is ${fullName} and my age is ${age}`;
console.log(aboutMe)

// undefined
let lastName;
console.log(typeof lastName)

// print multiple value at a time
console.log(fullName, age)

// null
let num= null
console.log(num)

