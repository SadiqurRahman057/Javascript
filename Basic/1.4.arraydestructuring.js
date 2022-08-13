const myArray = ["value1","value2","value3","value4","value5","value6","value7","value8"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log(myvar1,myvar2)

// using array destructuring

let [myvar1, myvar2] = myArray
console.log(myvar1,myvar2)
let [myvar3, myvar4] = myArray.slice(2)  // using array slicing
let [ , , , , myvar5, myvar6,...myNewArray] = myArray
console.log(myvar1,myvar2,myvar3,myvar4,myvar5,myvar6)
console.log(myNewArray)