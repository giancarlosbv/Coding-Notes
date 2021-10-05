var prompt = require('prompt-sync')();

var number = prompt("what number should I square ");
var num1 = Number(prompt("First number to add "));
var num2 = Number(prompt("Second number to add "));



// var num1=10
// var num2=12

var greeting = greet()  

console.log(greeting)

console.log(add(num1,num2)) // arguments

console.log(square(number))

   //invoking or calling a function

function greet()
{
    return "Hello!! "
}

function square(number) {
    return number*number;
}

function add(n1, n2)  //parameters
{
    var sum
    sum = n1+n2
    return sum
}



//console.log(sum)


//longest string element in an array as a function