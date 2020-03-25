//Store your name in a varibale. 

//Store your courses in an array. 

//Display your name and courses and do one of the following: 


//1. If the number of courses you are doing is an odd number, find and display all odd numbers from 1-200 (inclusive)
//2. If the number of courses you are doing is an even number, find and display all even numbers from 1-200 (inclusive)

let name = 'Fawale Timilehin';
let course_array = ['HTML','CSS','Javascript']
console.log('My name is : '+name )
console.log("The courses offered are : "+course_array)
console.log("this is all odd numbers from 1 to 200")
for (let i = 0; i < 200; i++) {
    if (i%2 !== 0) {
        console.log(i)
    }
   // i % 2 ? console.log(i) : console.log() // using ternary operator
}