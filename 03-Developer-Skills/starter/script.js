// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
1. Inputs: an array of temperatures for a week
2. Print out a string, representing the temperature for each day.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!
1.Create a function
2.Loop over the temperature array, printing the string for each element.

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const temps = [12, 5, -5, 0, 4];
const printForecast = function (temps) {
    let tempString = '';
    for (let i = 0; i < temps.length; i++) {
        //17ºC in 1 days
        tempString += `... ${temps[i]}ºC in ${i+1} days ... `;
    }
    console.log(tempString);
};

printForecast(temps);
