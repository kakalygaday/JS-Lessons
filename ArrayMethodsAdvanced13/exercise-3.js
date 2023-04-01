function calculateAverageAge(persons) {
  // ...
  const allAges = persons.reduce((all, person) => all + person.age, 0);
  return allAges / persons.length;
}


// let allAges = 0
// persons.forEach(person => {
//   allAges += person.age
// })

// const allAges = persons.reduce((all, person) => {
//   return all + person.age
// }, 0)



const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
// console.log(persons);
console.log(Math.round(average)); 