var date = new Date();
var hour = date.getHours();

num1 = 9
num2 = 8

if (num1>num2) {
    console.log("num1 is larger")
} else if (
    num2>num1
    ) {
        console.log("num2 is larger")
    } else if (
        num1 == num2
        ){
            console.log("they are equal")
        }

grade = "87"

if (grade>=90) {
    console.log("You got an A")
} else if (grade>=80) {
    console.log("You got a B")
} else if (grade>=70) {
    console.log("You got a C")
} else if (grade>=55) {
    console.log("You got a D")
} else {
    console.log("You got a F")
}


if (hour>=5 && hour<12){
    console.log("Good morning")
} else if (hour>=12 && hour<=16){
    console.log("Good Afternoon")
} else {console.log("Hey There")}

console.log(hour)