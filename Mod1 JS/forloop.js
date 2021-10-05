// for (let i = 10; i>0; i--) 
// console.log(i)
// for (i=1; i<=10; i++)
// console.log(i)

// var i=10
// while(i<0)
// {console.log}

// for (let i=0; i<=10; i++)
// console.log(i*3)

// for (i=1; i<=9; i+=2){
// console.log(i)}

// for (i=0; i<=10; i+=2){
// console.log(i)}

// var i = 0;
// while (i <= 10) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }; i++;

// }

// let countDown = 10;
// // ADD CODE HERE
// for (let countDown=10; countDown>=0; countDown--){
//   countDown
// }

// // Uncomment the below line to check your work
// console.log(countDown) // -> should print 0;


// const synonyms = ['fantastic', 'wonderful', 'great'];
// const greetings = [];


// for (let i=0;  i<3; i++) {
//     greetings.push("Have a " + synonyms[i] + " day!") ;
//   };

// for (let i=0; i<3; i++) {
//     console.log(greetings[i]);
// }


// nested for loops

// for(r=1; r<=5; r++) 
// {
//     for (c=1; c<=5; c++)
//     {
//         // process.stdout.write(r.toString())
//         process.stdout.write('a')
//     }
//     console.log()
// }

// console.log("--------------")

// for(r=5; r>=1; r--)
// {
//     for(c=r; c>=1; c--)
//     {
//         process.stdout.write(r.toString())
//     }
//     console.log()
// }
// //third grid done
// console.log("------------")

// for (r=5;r>=1;r--)
// {
//     for(c=1; c<=r; c++)
//     {
//         process.stdout.write(c.toString())
//     }
//     console.log()
// }
// //fourth grid done
// console.log("-------------")





// for (r=1; r<=5; r++)
// {
//     for (c=1; c<=5; c++)
//     {
//         process.stdout.write(r.toString())
//     }
//     console.log()
// }
// // first grid done
// console.log("-------------")

// for (r=1;r<=5;r++)
// {
//     for (c=1; c<=r; c++)
//     {
//         process.stdout.write(c.toString())
//     }
//     console.log()
// }
// //second grid done
// console.log("------------------")

// const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];


// const bios = [];

// // Loop through your arrays and store the following strings in the bios array:
// // 'My name is Jon Snow and I am from The Wall'
// // 'My name is Arya Stark and I am from Winterfell'
// // 'My name is Jamie Lannister and I am from Kings Landing'

// // ADD CODE HERE
// for (i=0; i<=3; i++){
//   bios.push("My name is " + firstNames[i] + " " + lastNames[i] + " and I am from " + places[i])
// }
// for (i=0;i<3;i++)
// {
//   console.log(bios[i])
// }
 
//first attempt at prime number stuff
// for (i=2;i<=20;i++){
//   for (j=1; j<i; j++) {
//     if (j%1===0) {
//       process.stdout.write(i.toString()+" ")
//     }
//   }
//     if (i%2==0)
//   {process.stdout.write(i.toString()+" is even")
//   } else {
//     process.stdout.write(i.toString()+ " is odd")
//   }
//   // process.stdout.write(i.toString())
//   console.log()

// }


// {
//   if (i%2==0)
// {console.log("It's even!")
// } else {
//     console.log("It's odd!")
// }
// }

// for (j=2; j<i; j++) {
//   if (j%1===0) {
//     process.stdout.write(i.toString()+" is prime")
//   }
// }
// function isPrime(num) {
//   for ( var i = 2; i < num; i++ ) {
//   if ( num % i === 0 ) {
//   return false;
//   }
//   }
//   return true;
//   }

//end of my attempt at prime

//taj prime number program

// for (i=1;i<=20;i++)
// {
//   counter= 0
//     for (let j = 1; j <= i; j++)
//       if (i % j == 0)
//         counter++

//   if (i % 2 == 0)
//   {
//     if (counter <= 2)
//       {console.log(i + ' is Even and Prime')
//       continue;}
//     else 
//       {console.log(i+ ' is Even')
//       continue;}
//     }

//     else 
//     {
//       if (counter >2 )
//         {console.log(i + ' is Odd')
//         continue;}
//       else 
//         {console.log(i+ ' is Odd and Prime')
//       continue;}
//     }
//   }


  const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for (i=0;i<increaseByTwo.length;i++) {
 increaseByTwo[i] += 2;
}
console.log(increaseByTwo);
