// While loop

let value1 = 1;
sum = 0;
while (value1<=5){
    console.log(value1);
    sum+=value1
    value1++;
}
console.log(`Current value of value1 is ${value1}`)
console.log(`Sum is ${sum}`)

// another way to solve with formula - faster 
let num = 5;
let total = (num*(num+1))/2 
console.log(total)

// do whille loop

let val= 1;
do{
    console.log(`val = ${val}`)
    val++
}while(val<5)


// For loop
sum= 0
for(let val2 = 1; val2<=5;val2++){
    console.log(val2)
    sum+=val2
}
console.log(sum)




// practice

// let i= 1;
// while(i<=5){
//     console.log(`Hello ${i}`);
//     i+=1;
// }

// for(i =1; i<=5;i++){
//     console.log(`Hello ${i}`);
// }

// odd even check using for loop

// for(i=2;i<=20;i+=2){
//     console.log(`even numbers are: ${i}`)
// }

// with if else:
// for (i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(`${i} is a even number`)
//     }
//     else{
//         console.log(`${i} is a odd number`)
//     }
// }

// break - break the loop
// contine - skip the current block