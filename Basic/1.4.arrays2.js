const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
  
arr[3];
arr[3][0];
arr[3][0][1];

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
  
const myData = myArray[0][0];


const myArray2 = [["John", 23], ["dog", 3]];
myArray2.shift();

// Only change code below this line
myArray2.unshift("Paul", 35)
console.log(myArray2)


for(let item in myArray2){
    // console.log(myArray2[item])
    for(let sub_item in item){
        console.log(item[sub_item])
    }
}