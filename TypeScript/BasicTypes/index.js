/**
 * Created by Svend on 16-9-19.
 */
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user = new Student("Svend", "M.", "User");
console.log(greeter(user));
var ff = 'fds';
var FF = 'DSF';
//# sourceMappingURL=index.js.map