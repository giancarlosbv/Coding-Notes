// What is an efficient way to create an array for first 50 integers?
numbers = []
for (i=0; i<50;i++){
    numbers.push(i+1)
}
// console.log(numbers)
//You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Kanye pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.

var shoppingList = [

    "cool ranch doritos",
  
    "kings hawaiian sweet bread",
  
    "peanut butter oreos",
  
    "fruit loops cereal"
  
  ];

  shoppingList.push("Hendricks gin")
//   console.log(shoppingList)

// Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
speakYoda = () => {talk = yoda.reverse()
console.log(talk)}

// speakYoda()

// People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = waitList[0]

// console.log(nowServing)

// Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

var shoe = ["just", "do", "it"];
var showString = shoe.join(" ")
console.log(showString)