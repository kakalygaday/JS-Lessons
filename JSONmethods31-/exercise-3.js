const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};
const person2 = { ...person1 };
const address = { ...person2.address };
address.city = 'Milan';
person2.address = address;

console.log(person1);
console.log(person2);