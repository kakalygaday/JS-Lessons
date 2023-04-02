// const numberStore = [0, 1, 2, ...newNumber]; //does not work
// const newNumber = 3;
// // numberStore.push(newNumber); // invailed
// console.log(numberStore);

let numberStore = [0, 1, 2,];
const newNumber = 3;
numberStore = [...numberStore, newNumber];
// numberStore = numberStore.concat(newNumber); // another way
console.log(numberStore);


