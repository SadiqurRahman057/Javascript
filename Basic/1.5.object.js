"use strict"
const person = {name :"Sadiqur Rahman", age : 23};
console.log(person)
// console.log(typeof person) //object
console.log(person.name)

const university = {
    name: "EWU",
    address: "Aftabnagar",
    totalStudent: "22022",
    department: ["cse",'eee','ice'],
    studentDetails: {
        id : 1, 
        stdName : "sadiq"    
    } 
}
// console.log(university)
// console.log(university.studentDetails)
// console.log(university.studentDetails.stdName)


// add more key value pair
university.current_semester= "summer2022"
// console.log(university)


// bracker notation
console.log(university["name"])

university.studentDetails["coursename"] = "cse347"

// console.log(university)

// reason to use bracket notation

const student = {
    name :"Sadiqur Rahman", 
    age : 23,
    "current semester": "summer2022"
};
// console.log(student)
// console.log(student["current semester"])

const key = "email"
student[key] = "sadiq@gmail.com"
console.log(student)
