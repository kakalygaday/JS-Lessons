const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
let keys = Object.keys(person);
console.log(keys);
let values = Object.values(person);
console.log(values);
let entries = Object.entries(person);
console.log(entries);
//----------------
for(let i=0; i<keys.length; i++) {
  console.log(keys[i] + ":" + " " + person[keys[i]]);
}
