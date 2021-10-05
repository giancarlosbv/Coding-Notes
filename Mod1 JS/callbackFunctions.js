// let inner = (str) => console.log("a message from inner function  "+ str)
// let sum = (num1, num2) => console.log("the sum of "+num1+" and " +num2 +" is "+(num1+num2))
// let outer= (n1,n2,callback)=>{
//    console.log("numbers printed from outer function : "+ n1 + " "+n2);
//    callback(n1,n2)
// } 
// let a=100;
// inner("inner function called independently")
// outer(a,20,sum);
// // console.log();


numbers = [1,2,3,4]
prod = 1
sum = 0

let addNum = (array)=>{
for(i=0;i<numbers.length;i++){
   sum+= numbers[i]
   }
   return sum
}
let multiply = (array) => {
   for(i=0;i<numbers.length;i++){
      prod *= numbers[i]
      }
      return prod
   }

   function addValues(fun1,fun2) {
      return fun1+fun2
   }

// console.log(addNum(numbers))
// console.log(multiply(numbers))

console.log(addValues(addNum(numbers),multiply(numbers)))


// let prod = (num1,num2) => num1*num2