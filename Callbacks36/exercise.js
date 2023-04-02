function repeatHello(callback){
    let myVar = setInterval(callback, 5000);
    setTimeout(() => clearInterval(myVar), 5000);
}
repeatHello(() => console.log("Hello"));

// I only use arrow version of callback function. Other function will be more harder
// and lines of codes be required for same result.

