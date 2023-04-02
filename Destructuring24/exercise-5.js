const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, firstName: name, lastName: surname, age: old} = person;

// const { id, name, surname, old } = person; //undefine version
console.log(id, name, surname, old);