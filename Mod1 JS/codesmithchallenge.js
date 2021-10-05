//for...in 3 dots

// const object = {
//     a:1,
//     b:2,
//     c:3,
// }
// for (const property in object) {
//     console.log(`${property}: ${object[property]}`)
// }

// function myFunction() {
//     var person = {fname:"John", lname:"Doe", age:25}; 
    
//     var text = "";
//     var x;
//     for (x in person) {
//       text += person[x] + " ";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

//for var in object
  //You are provided with an object called checkObj. Using a for... in loop, determine if the object contains the property foundNum. If it exists, reassign the value of found to 1.

//   const checkObj = {
//     oddNum: 1,
//     evenNum: 2,
//     foundNum: 5,
//     randomNum: 18
//   };
  
//   let found = 0;
//   // ADD CODE HERE

//   for (let prop in checkObj) {
//       if (prop=checkObj.foundNum)
//       found =1
//   }
//   console.log(found)

//You are provided with an empty array called objToArray. Using a for... in loop, fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2.


  const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = [];
  // ADD CODE HERE

  for (let prop in checkObj){
      if (checkObj[prop]>=2) {
          objToArray.push(checkObj[prop])   
      }
  }
  console.log(objToArray)
