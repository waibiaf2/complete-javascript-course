'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Function for Displaying the movements
////////////////////////////////////////////////////////////////////////
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (movement, i) {
    const movementType = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${movementType}">${i+1} ${movementType}</div>
                    <div class="movements__date">3 days ago</div>
                    <div class="movements__value">${movement}€</div>
                </div>`
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};



//Function for calculating and displaying balances
////////////////////////////////////////////////////////////////////////
const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc,cur,i, arr) =>{
    return acc+cur;
  });
  account.balance = balance;
  labelBalance.textContent = `${balance}€`;
};

//calcDisplayBalance(account1.movements);

//Function for calculating and displaying balances
////////////////////////////////////////////////////////////////////////
const calcDisplaySummary = function (account) {
  const incomes = account.movements
      .filter(mov => mov > 0)
     .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  
  const out = account.movements
      .filter(mov => mov < 0)
      .reduce((acc,mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`
  
  const interest = account.movements
      .filter(mov => mov > 0)
      .map(deposit => deposit * account.interestRate / 100)
      .filter((int) => {
        //console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest}€`
};


const updateUI = function () {
  //2. Movements
  displayMovements(currentAccount.movements);
  
  //3. Display balance
  calcDisplayBalance(currentAccount);
  
  //4. Display Summary
  calcDisplaySummary(currentAccount);
  console.log(currentAccount);
};

//Creates username for all the accounts in the accounts array.
///////////////////////////////////////////////////////////////////////
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0]).join('');
  });
};
createUserNames(accounts);
// console.log(accounts);

//Event Handler for Logging in
let currentAccount;

btnLogin.addEventListener('click',(e) =>{
  // Prevent form from submitting
  e.preventDefault();
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  // console.log(currentAccount);
  
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //1. Display UI and Message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;
    
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    
    // Update UI
    updateUI();
  }

  //console.log(accounts);
});

//Transfer money from one account to another
btnTransfer.addEventListener('click',(e) =>{
  // terminates form default behaviour of auto submiting.
  e.preventDefault();
  
  const transferAmount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value)
  
  // Check if account has more funds than amount to be transferred
  if (inputTransferTo.value && inputTransferAmount.value && currentAccount.balance > transferAmount){
    console.log(`its true`);
    // add a negative mov to source account
    currentAccount.movements.push(-transferAmount);
    // add a positive mov to the destination account.
    receiverAccount.movements.push(transferAmount);
    //clear the transfer fields
    inputTransferTo.value = inputTransferAmount.value = '';
    
  }else if(!inputTransferTo.value && !inputTransferAmount.value) {
    alert(`Transfer to or amount fields is empty`);
  }
  else{
    alert(`Transaction could not be completed, you have insufficient funds`);
  }
  
  // update the ui
  updateUI();
  console.log(receiverAccount);
})




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Computing the maximum value of movements using reduce method of javascript
const maxValue = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(maxValue);





