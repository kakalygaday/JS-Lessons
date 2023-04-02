const number = 15;
let promiseFunction = new Promise((resolve, reject) => {
    if(number > 10){
        resolve(number + ' ' + 'is greater than 10');
    }else{
        reject('Error: Number is smaller than 10');
    }
});

promiseFunction
    .then((val) => console.log(val))
    .catch((err) => console.log(err))
