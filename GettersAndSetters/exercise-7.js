class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get firstName(){
    return this._firstName;
    }
  set firstName(x){
    this._firstName = x;
    }
  get lastName(){
    return this._lastName;
    }
  set lastName(x){
    this._lastName = x;
    }
  get age(){
    return this._age;
    }
  set age(x){
    this._age = x;
  }

  get fullName(){
    return this._firstName + " " + this._lastName;
  }
  // get fullName(){
  //   return this._firstName + " " + this._lastName + " " + this._age;
  // }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
// person.age = 28;
console.log(person.fullName);