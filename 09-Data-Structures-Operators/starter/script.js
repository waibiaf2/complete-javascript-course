'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const openingHours = {
  thu: {
    open: 12,
        close: 22,
  },
  fri: {
    open: 11,
        close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  }
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
      starterIndex =1,
      mainIndex=1,
      time='20:00',
      address
  }) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngridient, ...othersIngridients) {
    console.log(mainIngridient, othersIngridients);
  }
};

//Maps
///////////////////////////////////////////////////////
let myMap = new Map();
let keyString = 'a string';
let keyObj = {};
let keyFunc = function () {

};

myMap.set(keyString, "value associated with a string");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, 'value associated with keyFunc');

console.log(myMap.size);
console.log(myMap);

for (let [key, value] of myMap) {
  console.log(key + '= ' + value);
}

/*//Sets
///////////////////////////////////////////////
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rosotto', 'Pasta', 'Pizza']);
orderSet.add('Matooke').add('Cassava').add("Posho");
console.log(orderSet.size);
console.log(orderSet.entries());
orderSet.delete("Pasta");
orderSet.delete("Posho");

console.log(orderSet.has("Rosotto"));
console.log(orderSet);
for (const [ent, entValue] of orderSet.entries()) {
    console.log(`${entValue} is this`);
}

for (const entValue of orderSet) {
    console.log(`${entValue} is this`);
}

//Sets help remove duplicate values from an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(...new Set('Waibi Andrew Franklin'));

console.log(0 === -0);*/



// //Looping over objects
// /////////////////////////////////////////////////
//
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days;`;
// for (const day of Object.keys(openingHours)) {
//    openStr += ` ${day},`
// }
// console.log(openStr);
//
// //Properties values...
// const values = Object.values(openingHours);
// console.log(values);
//
// //Object.entries
// const entries = Object.entries(openingHours);
// console.log(entries);
// console.log('Operating Hours');
// for (const [day, {open:openingHours, close:closingHours}] of entries){
//     console.log(`${day}: ${openingHours}:00 to ${closingHours}:00`);
// }






















//Looping using for of ........................................................
/*for (const [i, item] of [...restaurant.starterMenu, ...restaurant.mainMenu].entries()) {
    console.log(`${i} - ${item}`);
}

console.log([...[...restaurant.starterMenu, ...restaurant.mainMenu].entries()]);*/

/*console.log('----------------- for of  loop ----------------------');
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i,el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);*/


/*console.log('-----------------NULLISH COELESSING OPERATOR----------------------------')
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

// Nullish:null or undefined(NOT 0 or '');
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);*/
/*

//Shortcurcuiting
///////////////////////////////////////////////////////////

console.log('-----------------OR----------------------------')
//Can Use any datatype, return any data type or short-circuit evaluation.
console.log('' || 'Jonas'); //if the first value is truethy, it will be return and the second value will not be
console.log(8 || 'Jonas'); //if the first value is truethy, it will be return and the second value will not be
console.log(0 || 'Jonas'); //if the first value is truethy, it will be return and the second value will not be
console.log(undefined || 'Jonas'); //if the first value is truethy, it will be return and the second value will not be
console.log( null || 'Jonas'); //if the first value is truethy, it will be return and the second value will not be
// considered


console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 22;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2)

console.log('-----------------AND----------------------------')
console.log(0 && 'Jonas'); //&& operator shortcuircuits if firs value is falsy, and returns the falsy value.
console.log(2 && 'Jonas'); //Returns first value if its false, doesn't evaluate 2nd

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'garlic', 'onions');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'garlic', 'onions');*/

// restaurant.orderPizza('Matooke', 'Beans', 'Tomatoes', 'Onions');
// restaurant.orderPizza('Pasta');

// //Spread because on RIGHT side
// const arr = [1, 2, ...[9, 7, 9]];
//
//
// //Destructuring
// //REST, because its on the left side.
// const [a,,,b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a);
// console.log(b);
// console.log(others);
//
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza);
// console.log(risotto);
// console.log(otherFood);
//
// //Objects
// const {sat, ...weekDays} = restaurant.openingHours;
// console.log(sat);
// console.log(weekDays);
//
// //Functions
// const add = function(...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   numbers.forEach( num => sum += num);
//   console.log(sum);
// };
//
// add(2, 3);
// add(5, 7, 3, 2);
// add(5, 7, 3, 2,4,5,6,);

/*//Spread operator
//////////////////////////////////////////////////
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr)

const newMenu = ['Matooke', ...restaurant.mainMenu];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);*/

//Join two arrays or more into a single copy
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//Iterables: arrays, strings, maps, sets, NOT Objects
// const str = 'Jonas';
// const strArr = [...str, ' ', '.S'];
// console.log(strArr);


// restaurant.orderDelivery({
//   starterIndex:2,
//   mainIndex:1,
//   time:'15:00',
//   address: 'Plot 55, Bukoto Street Kampala'
// });
//
// restaurant.orderDelivery({
//   address:'Kampala Uganda'
// })

// // Destructuring Objects
// ///////////////////////////////////////////////////////
// // curly braces are used in destructring objects, use exact variable names used in the object
// const { openingHours,name, categories} = restaurant;
// console.log(name);
// console.log(categories);
// console.log(openingHours);
//
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);
//
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
//
// //Mutating variables
// let a = 111;
// let b = 99;
//
// const obj = {a:23,b:18, c: 55};
//
// ({a,b} = obj);
//
// console.log(a, b);
//
// //Nested Objects
// const { fri:{open, close} } = openingHours;
// // console.log(fri);
// console.log(open, close);
//
//


































/*
let [main, ,secondary] = restaurant.categories;
console.log(`The first ingridient ${main}, and the second ${secondary}`);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

//Switching variables....
[main,secondary] = [secondary, main]
console.log(main, secondary);

//recieving two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`The starter is : ${starter},  and the mian course is: ${mainCourse}`);

//Nested array destructuring
const nested = [2, 4, [5, 6]];
const [h,,[i, j]] = nested;
console.log(h, i, j);

// Setting default values
const [p=0, q=0, r = 0] = [8, 9];
console.log(p, q, r);
*/
