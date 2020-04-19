// // Task:

// // Write a function that takes one parameter (a whole number/integer) and checks if numbers from 1 to the given parameter (inclusive) are divisible by 2,3,5 while replacing with the appropriate words as specified below.

// // * Numbers divisible by 2 are replaced by "yu"

// // * Numbers divisible by 3 are replaced by "gi"

// // * Numbers divisible by 5 are replaced by "oh"

// // * Numbers are unchanged if not divsible by any of the above
 
// // If a number is divisible by more than one of the above, replace and join the words representing their divsiors, separating by hyphen (-).

// // NB: "divisible" in this case means no remainder after division.

 

// // Return an array containing all numbers from 1 to the passed argument(inclusive) where all divisible numbers have been replaced as specified above.

 

// // Call the function and pass 100 as an argument.

// // Call the function and pass it a random number of your choice

 

// // Examples:

// // 4 is only divisible by 2. It would be replaced by "yu"

// // 6 is divisible by 2 and 3. It would be replaced by "yu-gi"

// // 30 is divisible by 2,3,and 5, so it would be replaced by "yu-gi-oh"

// // 49 is not divisible by 2,3 or 5

 

// // Example output:

// // Assuming the function is called with 10 as argument, the output array would be of the form:

// // [1,"yu","gi",4,"oh","yu-gi",7,"yu","gi","yu-oh"]

 

// // Total Obtainable Points: 2

// // Submission: Submit a link to the FILE containing your code on Github

const checkDivisor = (param) => {
    //create an array of the numbers from one to that number
    let list = [];
    let i = 1;

    for (i = 1; i <= Number(param); i++) {
       list.push(i)
    }

    list2 = list.map(num => {

        if (Number(num) % 2 === 0 && Number(num) % 3 === 0 && Number(num) % 5 === 0) {
            return num = 'yu-gi-oh'
        } 

        if (Number(num) % 2 === 0 && Number(num) % 3 === 0) {
            return num = 'yu-gi'
        }

        if (Number(num) % 5 === 0 && Number(num) % 2 === 0) {
            return num = 'yu-oh'
        }

        if (Number(num) % 3 === 0 && Number(num) % 5 === 0) {
            return num = 'gi-oh'
        }

        if (Number(num) % 2 === 0) {
            return num = 'yu' 
        }

        if (Number(num) % 3 === 0) {
            return num = 'gi'
        }

        if (Number(num) % 5 === 0) {
            return num = 'oh'
        } else{
            return num
        }
    });

    return list2;
}

console.log(checkDivisor(10));