// let num1 = 10;
// let num2 = 20;
// console.log('Before swap: ', num1, num2); // Before swap: 10 20

// // Variable swapping
// let temp = num2;
// num2 = num1;
// num1 = temp;

// console.log('After swap: ', num1, num2); // After swap: 20 10

let [num1, num2] = [10, 20];
console.log('Before swap: ', num1, num2); // Before swap: 10 20
[num1, num2] = [num2, num1];
console.log('After swap: ', num1, num2); // After swap: 20 10

//--------Another way------------
const twoNumbers = [10, 20];
let [firstNumber, secondNumber] = twoNumbers;
[firstNumber, secondNumber] = [secondNumber, firstNumber];
// const temp = firstNumber;
// firstNumber = secondNumber;
// secondNumber = temp;
console.log('After swap: ', firstNumber, secondNumber); // After swap: 20 10