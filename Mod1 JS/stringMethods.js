// toLowerCase()
// toUpperCase()
// concat()
// .slice()
// .startsWith()
// .endsWith()
// .replace()
// .replaceAll()
// .lastIndexOf

// var name="John";
// let str = "Hello-how-are-you?";

// myArr1= name.split('')
// myArr = str.split("-")
// console.log(myArr.join(" "))



var prompt = require('prompt-sync')();

// let str1 = "Hello World";
// let str2 = " and all who inhabit it."
// str.toLowerCase();

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str1.concat(str2))
// console.log(str1.slice(0,5))
// console.log(str1.concat(str2))

// if (str1.startsWith("Hello")) {
//     console.log(str1)
// } else {
//     console.log("Undefined")
// }

// if (str1.endsWith("World")) {
//     console.log(str1)
// } else {
//     console.log("Undefined")
// }

// console.log(str1.replace("Hello", "Goodbye"))

//// look for user input in the given string, display total occurrences

// var str = "hello world"


// var str = prompt('Enter String ')
// var input = prompt("Enter character ");

// found= false;
// occ=0
// positions =[]

// for (let i = 0; i < str.length; i++) {
//     if (input == str.charAt([i])) {
//         found = true;
//         occ ++;
//         positions.push(i+1)
//     }    
// }
// console.log('character found in positions: ' + positions + " Occurrences: " + occ)




////in a given string count total number of vowals and consonants found

// let vowels=[]
// let consonants=[]
// var given = prompt("Enter String ")
// var test = "Hello World"

// for (let i=0; i < given.length; i++){
//     if (
//     given[i] == "a"||
//     given[i] == "e"||
//     given[i] == "i"||
//     given[i] == "o"||
//     given[i] == "u")
//     {
//     vowels.push(given[i])
//     } else {
//         consonants.push(given[i])
//     }    
// }
// console.log(vowels)
// console.log("There are " + vowels.length + " vowels and " + consonants.length + " consonants.")


// var lowerStr = given.toLowerCase();
// var reverseStr = lowerStr.split('').reverse().join(''); 
// if(reverseStr == lowerStr){
//         console.log("Palindrome")
//     } else {
//     console.log("Not a palindrome")};

// var test = "racecar"
// var reverseStr = test.reverse()


//// to check if the given string is palindrome

//check a given string for letters, numbers, and special characters
//decimals 32-47 special characters, 91-96, 65-90 letters 97-122 letters 48-57 numbers 58-64 special characters 123-126 special characters
 testStr = "480 West 187th st apt. 3E"

spChar=0
letter=0
number=0


for (let i=0; i<testStr.length; i++){
    char_type = testStr.charCodeAt(i)
   
    if ((char_type <=90 && char_type >=65 ) || (char_type <=122 && char_type >= 97)) {      //characters 0 to 9 are unicode 48-58
    letter++
    } else if (char_type <=57 && char_type >=48) {                                          //characters "A" TO "Z" are unicode 65-90
        number++                                                                            //lowercase are 97-122
    } else { spChar++}
}

console.log()

console.log("There are " + letter + " letters, " + number + " numbers and " + spChar + " special characters.")
// testStr= "i have a dream"


// var input = prompt("Enter a string")                            //capitalize first letter of each word with an array
// splitStr = input.split(" ")
// for (i=0; i<splitStr.length; i++){
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);           //this is what is capitalizing my words
//     }
// console.log(splitStr.join(" "))


// let string = "word";
// let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);



// console.log(splitStr)

// console.log(capitalizedString)