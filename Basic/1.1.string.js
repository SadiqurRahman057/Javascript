// string length
var fullName= "Sadiqur Rahman"
console.log(fullName.length)
console.log("sadiq".length)

// string is immutable - 
fullName[0]="M" //like this we cant change a string single position
// console.log(fullName)

// string slicing
console.log(fullName[3])
console.log(fullName[fullName.length - 1]);   // last letter
console.log(fullName.slice(0,4))

// trim()
var nameWithSpace = "   Sadiq      "
console.log(nameWithSpace)
console.log(nameWithSpace.length)
nameWithoutSpace = nameWithSpace.trim()
console.log(nameWithoutSpace);
console.log(nameWithoutSpace.length);

// uppercase()
var lwrName= "sadiqur"
console.log(lwrName.toUpperCase())


// lowercase()
var uprName = "SADIQUR"
console.log(uprName.toLowerCase())

// quoto inside a string
var message = "He said \"You can learn javascript with me\". I replied, \"Sure I will\""
console.log(message)


const myStr = 'Finn exclaims to Jake, "Algebraic!"';
console.log(myStr)

// const myStr1 = "This is \\backslash"

// const myStr2 = "\nThis is \nnewline\n"
// const myStr3 = "This is \rcarriage return"    // reset position. start position is where it has mentioned.
// const myStr4 = "\nThis is \ttab"
// const myStr5 = "\nThis is \bword boundary"   // zero with between both side character. word character in one side
// const myStr6 = "\nThis is \fform feed."

// console.log(myStr1, myStr2, myStr3 , myStr4 , myStr5 , myStr6);

// string Concatenate - for practice
// let str1 = "Hello";
// let str2 = "There.";
// let myNewStr= str1 + " " + str2;
// console.log(myNewStr);

// myNewStr = "Hello " + "There 2.";
// console.log(myNewStr);

// myNewStr += " Some more."
// console.log(myNewStr)

// let myName = "Sadiqur Rahman"
// let myNewStr2 = "My name is " + myName + " and I am learning Javascript"
// console.log(myNewStr2)

// // const msg1 = "Message 1."  cannot concat constant variable
// let msg1 = "Message 1."
// msg1+= " Message2"
// console.log(msg1)

// const someAdjective = "awesome!";
// let myStr8 = "Learning to code is ";
// myStr8 += someAdjective;
// console.log(myStr8)