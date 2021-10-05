// var y=10
// console.log('Value of y with post   increment ' + (y++))
// console.log("Value of y " + y)
// console.log('Value of y with pre    increment ' + (++y))
var prompt = require('prompt-sync')();

var name = prompt("Enter name ");

found= false;
 array =[12, 32, 4, 9, 5,-1, 100, -5, 5];
for (let i = 0; i < array.length; i++) {
    if (num == array[i]) {
        console.log("number found in " + (i+1)+ " position");
        found = true;
        break;
        
    }    
}

if(!found)
{
    console.log("number not found..")
}

// found= false;
// array =["John", "Joe", "Jill","Jack"];
// for (let i = 0; i < array.length; i++) {
//     if (name === array[i]) {
//         console.log("name found in " + (i+1)+ " position");
//         found = true;
//         break;
        
//     }    


// }

// if(!found)
// {
//     console.log("number not found..")
// }

// array = [12, 32, 4, 9, 5, -1, 100, -5];
// found = false;
// num = -5;
// for (let i = 0; i < array.length; i++) {
//   if (num == array[i]) {
//     console.log('Number found in ' + (i + 1) + ' position');
//     found = true;
//     break;
//   }
// }
// if (!found) {
//   console.log('Number not found');
// }
