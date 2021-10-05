var prompt = require('prompt-sync')();

var n = prompt("How many times loop should run ");
// for (let i = 10; i>n; i--) 
// console.log(i)
// for (i=1; i<=n; i++) 
// console.log(i)

var addThis=1
var sum= 1

while (addThis<=n)
{
sum+= addThis;
addThis++;
}
console.log(sum)

// let i = 1;
// let sum = 0
// while (i>n) {
// i++;
// i+= sum;

// }

// // ADD CODE HERE
// var addThis = 0
// var sum = 0

// while (addThis>10) {
//   addThis++;
//   sum += addThis;
  
// }

// // Uncomment the line below to check your work!
// console.log(sum);