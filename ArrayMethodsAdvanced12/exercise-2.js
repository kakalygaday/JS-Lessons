function nicknameMap(persons) {
  return persons.map((personsAnotherFunction) => personsAnotherFunction.name + "-" + personsAnotherFunction.age)
}


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
//------------------------------------------another way-------
// let nicknames = persons.map((AnotherFunction) => AnotherFunction.name + "-" + AnotherFunction.age);
//------------------------------------------another way-------
// let nicknames = persons.map((AnotherFunction) => {
//   return AnotherFunction.name + "-" + AnotherFunction.age
// });
//------------------------------------------another way-------
// let nicknames = persons.map(AnotherFunction);
// function AnotherFunction(anyParameter){
//   return anyParameter.name + "-" + anyParameter.age;
// }

const nicknames = nicknameMap(persons);
// console.log(persons);
console.log(nicknames);

