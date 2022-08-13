let winningNumber= 20;
// prompt used to take input in browser
// it will take input as a String. add + in front to make it integer
let num = +prompt("Guess a number: ");

if(num === winningNumber){
    console.log("You are correct");
}
else if(num<winningNumber-2){
    console.log("too low");
}
else if(num>winningNumber+2){
    console.log("too high");
}
else{
    console.log("You are very close.");
}