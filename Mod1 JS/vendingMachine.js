// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
 //a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
    
    //whenever using a function in an object, the NAME OF THE FUNCTION is the property
// /////////////////////////////////////////////////////////////////////
var prompt = require('prompt-sync')();
var userIn = (prompt("Choose 1-3 "))

const vendingMachine = {
  
    snacks: [              //curly braces can hold objects inside arrays
        {item: "A1", name: "chips", price: 1.50}, 
        {item: "A2", name: "fruit snacks", price:1.25,}, 
        {item: "A3", name: "gum", price: .75
    }],
    shakeSnacks: [              //replica of snacks, but with ill-gotten gains (shaking)
        {item: "A1", name: "chips", price: 0.00}, 
        {item: "A2", name: "fruit snacks", price:0.00,}, 
        {item: "A3", name: "gum", price: 0.00
    }],
    //objects dont like variables
    
    vend: function () { 
        items = vendingMachine.snacks;
        shake = vendingMachine.shakeSnacks
        notVending = false;
        while(!notVending){

        switch (userIn) {
            case "1":
                return items[0]
            case "2":
                return items[1]
            case "3":
                return items[2]
            case "shake":
                return shake           
        
            default:
              console.log("Try again (1-3)")
              break;
          }
        console.clear()
        }
        }
    }

console.log(vendingMachine.vend(userIn))