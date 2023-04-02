function isAdult({age}) {
  return person.age >= 18;
}
// ------or with another way------------
// function isAdult(person) {
//   const {age} = person;
//   return person.age >= 18;
// }

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));