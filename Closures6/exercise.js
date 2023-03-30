// function printName(){
//     let helloName = "Hello John";
//     function inner(){
//         // return helloName;
//     }
//     return helloName;
// }
// console.log(printName());

// x = printName()
// console.log(x);

function printName(){
    let helloName = "Hello John";
    function inner(){
        return helloName;
    }
    return inner;
}
console.log(printName()());