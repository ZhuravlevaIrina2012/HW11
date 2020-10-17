class Employee {
    constructor(id, firstName, lastName, age, salary) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = +age;
        this._salary = +salary;
    }


    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = +value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = +value;
    }

    fullInfo(){
        return `ID: ${this._id}, ${this._firstName} ${this._lastName}, age: ${this._age}, salary: ${this._salary}`;
    }
}