// var prompt = require('prompt-sync')();
// var given = prompt("Enter String ")

// const { SSL_OP_COOKIE_EXCHANGE } = require("constants")

// function palindrome(given) {

// var lowerStr = given.toLowerCase();
// var reverseStr = lowerStr.split('').reverse().join(''); 
// if(reverseStr == lowerStr)
// return given + " is a palindrome"
// else return given + " is not a palindrome"
// }

// console.log(palindrome(given))


// var arr= ["apples","bananas","pear","mango","peach","watermelon"]

// // function longestCharacter(arr){

// len=arr.length
// for(i=0;i<len-1;i++)
// {
//     for(j=i+1;j<len;j++)
//     {
//         if (arr[i].length > arr[j].length)
//         {
//             temp= arr[j]
//             arr[j]= arr[i]
//             arr[i]= temp
            
//             } 
//         }
//     }
//     char = arr.slice(arr.length-1)
//     return console.log(char + " is the longest word and has " + char.length + " letters")
// }
// longestCharacter(arr)


// // findLongestWord(arr)
// function findLongestWord(str) {
//     var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
//     return longestWord[0].length;
//   }
  
//   findLongestWord("The quick brown fox jumped over the lazy dog");