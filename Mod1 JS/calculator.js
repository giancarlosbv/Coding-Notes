var prompt = require('prompt-sync')();

let endOfProgram = false;
while(!endOfProgram){
    
var menuInput = Number(prompt("***************\nMENU \n \n \n1. Add \n2. Subtract \n3. Multiply \n4. Divide \n5. Average \n6. Exit \n ***************\n Please enter your choice(1-6): "))

// if(menuInput>6||menuInput<1){
//     Number(prompt("please enter 1-6"))
// }


switch (menuInput) {
    case 1:
      console.log(add())
      prompt("press ENTER to continue")
      break;
    case 2:
        console.log(subtract())
        prompt("press ENTER to continue")
      break;
    case 3:
        console.log(multiply())
        prompt("press ENTER to continue")
      break;

    case 4:
        console.log(divide())
        prompt("press ENTER to continue")
        break;
    case 5:
        console.log(average())
        prompt("press ENTER to continue")
        break;
    case 6:
        endOfProgram=true;
        break;
    

    default:
      console.log("invalid choice")
      break;
  }
console.clear()
}



function add(n1, n2)  //parameters
{
    num1 = Number(prompt("First number"));
    num2 = Number(prompt("Second number"));
    var sum
    sum = num1+num2
    return sum
}
function subtract(n1, n2)  //parameters
{
    var num1 = Number(prompt("First number"));
    var num2 = Number(prompt("Second number"));
    var diff
    diff = num1-num2
    return diff
}
function multiply(n1, n2)  //parameters
{
    var num1 = Number(prompt("First number"));
    var num2 = Number(prompt("Second number"));
    var prod
    prod = num1*num2
    return prod
}
function divide(n1, n2)  //parameters
{
    var num1 = Number(prompt("First number"));
    var num2 = Number(prompt("Second number"));
    var divis
    divis = num1/num2
    return divis
}
function average(n1, n2)  //parameters
{
    var num1 = Number(prompt("First number"));
    var num2 = Number(prompt("Second number"));
    var average
    average = (num1+num2)/2
    return average
}






// //let endOfProgram = false;

// while(!endofProgram)