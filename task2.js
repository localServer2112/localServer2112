// JavaScript Task 2
// Deadline: Apr 9, 2020 12:00 AM
// Description
// First create an array of objects called data with the following values:

// 1. Principal- 2500, time- 1.8

// 2. Principal- 1000, time- 5

// 3. Principal- 3000, time- 1

// 4. Principal- 2000, time- 3
let data = [
    {
        Principal:2500,
        time:1.8,
    },
    {
        Principal:1000,
        time:5,   },
    {
        Principal:3000,
        time:1,
    },
    {
        Principal:2000,
        time:3,
    },

];

// NB: Each individual object should have 'principal' and 'time' as keys.

 

// Write a function called "interestCalculator" that takes an array as a single argument and does the following: 
const interestCalculator = (array_arg) =>{
    let interestData =[];
    array_arg.forEach(array_element => {
    let _principal = array_element['Principal'];
    let _time = array_element['time'];
    let _rate = 0;
    let _interest = 0;

    // If the principal is greater than or equal to 2500 and the time is greater than 1 and less than or equal to 3, then rate = 3
    if (_principal >= 2500 && (_time >1 || _time <=3 )) {
        _rate = 3;
    } else 
    // * If the principal is greater than or equal to 2500 and the time is greater than or equal to 3, then rate = 4
    if (_principal >= 2500 && _time >= 3){
        _rate = 4;
    } else
    // * If the principal is less than 2500 or the time is less than or equal to 1, then rate = 2
    if(_principal < 2500 || _time <= 1){
        _rate = 2;
    } else
    // * Otherwise, rate = 1;
    {
        _rate = 1;
    }
    _interest =  (_principal * _rate * _time) / 100;
    interestData.push({
            principal : _principal,
            time : _time,
            rate : _rate,
            interest : _interest,
        })   
});
console.log(interestData);
return interestData;
}
interestCalculator(data); 

// Determine the rate applicable using the conditions: 

 

// * If the principal is greater than or equal to 2500 and the time is greater than 1 and less than or equal to 3, then rate = 3

// * If the principal is greater than or equal to 2500 and the time is greater than or equal to 3, then rate = 4

// * If the principal is less than 2500 or the time is less than or equal to 1, then rate = 2

// * Otherwise, rate = 1;

 

// Calculates the interest for each individual object using the formula: (principal * rate * time) / 100. 

 

// The function should return an array of objects called 'interestData' and each individual object should have 'principal', 'rate', 'time' and 'interest' as keys with their corresponding values. 

 

// Log the 'interestData' array to console BEFORE your return statement.

 

// Finally, call/execute the function and pass the 'data' array you created. 

 