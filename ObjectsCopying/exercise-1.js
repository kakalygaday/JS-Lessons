const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// const person2 = person1;

let person2 = Object.assign({}, person1);
person2.firstName = "Simon";

// By modifying the object person2, also the object person1 would be modified. => incorrect(or I cannot see that)

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
