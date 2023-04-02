function repeatHello(callback){
    let myVar = setInterval(callback, 1000);
    setTimeout(() => clearInterval(myVar), 1000);
}
repeatHello(() => console.log("Hello"));
