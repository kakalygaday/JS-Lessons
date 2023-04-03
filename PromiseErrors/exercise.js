const isLogged = true;
function firstPromise(trueValue) {
    return new Promise((resolve, reject) => {
        if (trueValue) {
            let rand = Math.random();
            resolve(rand);
        } else {
            reject(new Error('Not logged in'));
        }
    });
}

function secondPromise(number){
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve({ name: 'John', age: 24 });
        } else {
            reject(new Error('Number is not greater than 0.5'));
        }
    });  
};

firstPromise(isLogged)
  .then(secondPromise)
  .then((finalResult) => console.log(finalResult))
  .catch((err) => console.error(err))
  .finally(() => console.log("Complete"));