///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const juliaData1 = [3, 5, 2, 12, 7];
const  kateData1 = [4, 1, 15, 8, 3];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2  = [10, 5, 6, 1, 4];
//1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// const juliaCopy = [...juliaData1];
// juliaCopy.pop();
// juliaCopy.shift();
// console.log(juliaCopy);

//2. Create an array with both Julia's (corrected) and Kate's data
// const dogAges = [...juliaCopy, ...kateData1];
// console.log(dogAges);

//3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

const logDogAges = function (dogAges1, dogAges2) {
    //1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
    const copyDogAges1 = dogAges1.slice();
    copyDogAges1.splice(0,1);
    copyDogAges1.splice(-2);
    // console.log(copyDogAges1);

//2. Create an array with both Julia's (corrected) and Kate's data
    const combinedDogAges = [...copyDogAges1, ...dogAges2];
    console.log(combinedDogAges);

    //3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years
    // old") or a puppy ("Dog number 2 is still a puppy 🐶")
    combinedDogAges.forEach((dogAge,i) => {
        const ageStatus = dogAge > 3 ? 'an adult':'still a puppy'
        console.log(`Dog number ${i+1} is ${ageStatus}, and is ${dogAge}`);
    });
};

//4. Run the function for both test datasets
logDogAges([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
logDogAges([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);
