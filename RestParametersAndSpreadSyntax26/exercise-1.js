function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

const arr = [1,2,3,4,5];
console.log(sum(...arr)); //spread operator



function sum(...args) { // rest operator
    return args.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));

