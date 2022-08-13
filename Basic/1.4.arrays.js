// array- order collection of items, reference type
let fruits = ["mango","apple","orange","banana"];
// console.log(fruits);
console.log(fruits[2]);
let numbers= [1,2,3,4,5];
let mixed= [fruits,numbers];
// console.log(mixed)s;
// console.log(mixed[1]);
// console.log(mixed[1][2]);

// changing element from Array
fruits[2]="pine-apple";
// console.log(fruits);
console.log(Array.isArray(mixed)); // -> return true if its an array

// array method - array is mutable

fruits = ["mango","apple","orange","banana"];
console.log(fruits.length);

// push - can push multiple item at a time.
fruits.push("pine-apple","water-melon");
console.log(fruits);
// console.log(fruits.push())
console.log(fruits.length);

// pop

// fruits.pop()
// console.log(fruits.pop()); // in return it will give the popped item
poppedItem =  fruits.pop();
console.log(fruits);
console.log(fruits.length);
console.log(`Popped fruit is ${poppedItem}`);



// unshift method -> push item from starting

fruits.unshift("pine-apple");
console.log(fruits)

//shift method -> remove item from starting

let removedItem = fruits.shift();
console.log(fruits)
console.log(`removed item is ${removedItem}`)



// constant array element can be changed
const myArray = [18, 64, 99];
myArray[0] = 45
myArray.pop()
console.log(myArray)
myArray.push(46)
console.log(myArray) 



// clone array

let array1 = ["item1","item2"];
let array2 = array1.slice(0)
let array3 = array1.slice(0).concat(["item7","item8"])
console.log(array2) 
console.log(array3) 
console.log(array1===array2)  // separated array

// another way

let arr1 = ["item1","item3"];
let arr2 = [].concat(arr1);
let arr3 = [].concat(arr1,["item4","item6"]);
console.log(arr3)

// using spread operator
let arr4 = ["item4","item5"]
let arr5 = [...arr4]
let arr6 = [...arr4, ...arr2]
console.log(arr5)