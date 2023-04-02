// Class definition
class Person {
    constructor(firstName, lastName){
        // this.name = name;
        // this.surname = surname;
        this.firstName = firstName;
        this.lastName = lastName;
    }   
}

const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);
