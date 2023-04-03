const isLogged = true;
const firstPromise = new Promise((resolve, reject) => {
if (isLogged) {
    const rand = Math.random();
    resolve(rand);
} else {
    reject('Not logged in');
}
});

const secondPromise = number => {
return new Promise((resolve, reject) => {
    if (number > 0.5) {
    resolve({ name: 'John', age: 24 });
    } else {
    reject('Number is not greater than 0.5');
    }
});  
};

firstPromise
  .then(secondPromise)
  .then(finalResult => console.log(finalResult))
  .catch(err => console.log(err));