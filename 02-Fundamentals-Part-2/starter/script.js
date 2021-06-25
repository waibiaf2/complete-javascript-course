///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*const bills = [125, 555, 44];
const tips = [];
const totals = [];

const calcTip = function (bills) {
    for (const bill of bills) {
        if (bill >= 50 && bill <= 300) {
            tips.push(bill * .15);
        } else {
            tips.push(bill * .2);
        }
    }
};

const calcTotal = function (bills, tips) {
    for (let i = 0; i < bills.length; i++) {
        totals.push(bills[i]+tips[i]);
    }
};

calcTip(bills);
calcTotal(bills, tips);
console.log(tips);
console.log(totals)*/

/*
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]

console.log(bills, tips, totals);
*/


//OBJECTS
/////////////////////////////////////////////////////////////

//Object literal syntax
/*
const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
}

console.log(jonas);
console.log(jonas.firstName);
*/

/*let interestedIn = prompt('What do want to know about Jonas? Choose between firstName, lastName, age, and friends ');*/


/*if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('We currently have no information on that? Please choose from: firstName, lastName, age, and friends ');
   interestedIn = prompt('What do want to know about Jonas? Choose between firstName, lastName, age, and friends ');
    console.log(jonas[interestedIn]);
}*/

/*
jonas.location = 'Kampala';

console.log(jonas);
//Challenge
//Jonas has 3 friends and his best friend is called micheal

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);
*/

/*const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    birthYear: 1990,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicence: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ?  'a' : 'no'} driver's licence"`;
    }
}

console.log(jonas.getSummary());*/



///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*class Person {
    constructor(fullName, mass, height) {
        this.fullname = fullName;
        this.mass = mass;
        this.height = height
    }
    calcBMI() {
        return this.mass/this.height**2;
    }
}*/

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         return this.mass / this.height ** 2;
//     }
// }
//
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         return this.mass / this.height ** 2;
//     }
// }
//
// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
// }


//Loops
/////////////////////////////////////////////////////////
for (let i = 0; i < 10; i++) {
    //console.log(`Lifting weights repitition ${i}`);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//Continues and break
const jonas = [
    'Jonas',
    'Schmedtmann',
    1990,
    'teacher',
    ['Micheal','Peter', 'Steve'],
    ['soccer','music','reading']
]

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') break;
    console.log(jonas[i], typeof jonas[i]);
}

for (let i = jonas.length; i <= 0; i--) {
    console.log(jonas[i], i);
}

console.log(jonas);

//calculate the amplitude

//1) Understand the problem
//- What is temp amplitude? Answer: difference between highest and lowest temp
//-how to compute max and minx temperatures
//- What is a sensor error? And what to do?

//2) Break up into sub-problems
//-How to ignore errors?
//-Find max value in temp array
//-Find min value in temp array
//-Subtract min from max (amplitude) and return it.

const temperatures = [3, -2, -6, -1,'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue
        if(curTemp > max) max = curTemp
        if(curTemp < min) min = curTemp
    }
    console.log(min, max);
    return max - min;
};

calcTempAmplitude([3, 7, 4,23,-2,'error',66,1,100]);
const tempAmplitude = calcTempAmplitude(temperatures);
console.log(tempAmplitude);

//Problem 2
//Function should now receive 2 arrays of temps








