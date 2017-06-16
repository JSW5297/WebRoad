/**
 * Created by Svend on 16-9-19.
 */
class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello," + person.firstName + " " + person.lastName;
}

var user = new Student("Svend","M.","User");

console.log(greeter(user));

let ff = 'fds';

const FF = 'DSF';