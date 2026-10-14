//Question 1:-
let isBanned = false;
let canLogin = !isBanned;
console.log(canLogin)

// Question 2:-
let isCompleted = false;
let isPending = !isCompleted;
console.log(isPending);

// Question 3:-
let isOn = true;
let isOff = !isOn;
console.log(isOff);

// Question 4:-
let isActive = false;
let canAccessPremium = !isActive;
console.log(canAccessPremium);

// Question 5:-
let isReadOnly = false;
let isRead = !isReadOnly;
console.log(isRead);

///////////////////////////////////// (Additional Questions (Logical NOT !):-

// Question 6:-
let a = 0;
let b = 1;
console.log(!a, !b); // true,false

// Question 7:-
let x = "Hello";
let y = "";
console.log(!x, !y); //false ,true

// Question 8:-
let val = 5;
let result = !val;
console.log(result); //false

// Question 9:-
let a = 10;
let b = 20;
let result = !(a && b);
console.log(result); //false

//Question 10:-
let x = 0;
let y = 1;
let result = !(x || y);
console.log(result); //false
////////////////////////////////////////// Logical or ||:-

// Question 1:-
let passwordCorrect = true;
let otpValid = false;
let loginAllow = (passwordCorrect || otpValid);

console.log(loginAllow)

// Question 2:-
let isMember = false;
let hasCoupon =true;
let discountApplies = (isMember || hasCoupon);
console.log(discountApplies);


//Question 3:-
let age = 16;
let height = 155;

let entryAllowed = (age>18 || height > 150);
console.log(entryAllowed);


// Question 4:-
let emailGiven = true;
let phoneGiven = false;
let validEmail = (emailGiven || phoneGiven);
console.log(validEmail)

// Question 5:-
let score = 900;
let timeBonus = true;
let gameOpen = (score>1000 || timeBonus);
console.log(gameOpen)

///////////////////////////////////////// Additional Questions (Logical OR ||):-


// Question 6:-
let a = 0;
let b = false;
let c = "";
let d = null;
let e = 42;
let result = a || b || c || d || e;
console.log(result); //42

// Question 7:-
let x = "Hello" || 0;
let y = 0 || "Hi";
console.log(x, y);  //Hello,Hi

// Question 8:-
let a = 10;
let b = 20;
let result = (a < 5) || (b > 15);
console.log(result); //true

// Question 9:-
let val = 5;
let condition = val || (val = 0);
console.log(condition);
console.log(val); //5

// Question 10:-
let x = "" || 0 || false || null || undefined || "OK";
console.log(x); //OK
// // Question 1:-
// let storedUserName = "admin";
// let storedPassword = 1234;

// let inputUserName = "admin";
// let inputPassword = 1234;

// let isValid = (storedUserName === inputUserName)  && (storedPassword === inputPassword);
// console.log("Are credentials Valid?:-", isValid )

// // Question 2:-
// let isLoggedIn = true;
// let hasPermission = true;

// let canAccess = (isLoggedIn && hasPermission);
// console.log("canAccessPage:-", canAccess)

// // Question 3:-
// let inStock = true;
// let price = 800;

// let canBuy = (inStock && (price<1000));

// console.log("canBuy:-", canBuy)

// // Question 4:-
// let studentMarks = 75;
// let studentAttendence =  80;

// let requireMarks = 65;
// let requiredAttendence = 70;
// let isPass =("isPass:-",studentMarks>65 && studentAttendence>70);
// console.log(isPass);

// // Question 5:-
// let isWeekend = true;
// let isHoliday = false;

// let partyHappen = (isWeekend && isHoliday);
// console.log(partyHappen);

// ////////////////////////////////////////// Additional Question:-

// // Question 6:-
// let a = 0;
// let b = 10;
// let result = a && b;
// console.log(result); //0

// // Question 7:-
// let x = 5;
// let y =10;
// let result = (x > 3 && y) || 0;
// console.log(result); // 10

// // Question 8:-
// let p ="Hello"
// let q = "";
// let r = "world";
// let result = p && q && r;
// console.log(result) //world

// // Question 9:-
// let val = 5;
// let condition = val && (val = 0);
// console.log(condition); // 0
// console.log(val);  // 0


// Question 10:-
let x = 10;
let y = 20;
let result = (x&&y) && (x > y);
console.log(result) // false
