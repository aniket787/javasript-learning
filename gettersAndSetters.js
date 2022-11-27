// getter and setter

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person("Aniket", "gaikwad", 22);
console.log(person1.fullName())
console.log(person1.firstName)

// methods can be called
// properties cannot be called