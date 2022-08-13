"use strict"
let fruits = ["mango","banana","apple","lichi"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
let fruits3= []
let fruits2 = ["mango","banana","apple","lichi"];
for(let i=0;i<fruits.length;i++){
    fruits3.push(fruits2[i].toUpperCase())
}
console.log(fruits3);

let fruits4=[]
let i=0
while(fruits.length>i){
    console.log(fruits[i])
    fruits4.push(fruits[i])
    i++;
    
}
console.log(fruits4)

i= 0;
do{
    console.log(fruits[i])
    i++;
}while(i<fruits.length)


// for of loop

console.log(fruits)
for(let fruit of fruits){
    console.log(fruit)
}

// for in loop

console.log(fruits2)
for(let index in fruits2){
    console.log(fruits2[index])
}