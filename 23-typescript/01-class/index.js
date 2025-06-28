// Define a class named Student with the following attributes:
// a. name, studentId, grade, address.
// b. Include a method displayInfo() that prints all the student’s details.
var Student = /** @class */ (function () {
    function Student(name, studentId, grade, address) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }
    Student.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name));
        console.log("Student ID: ".concat(this.studentId));
        console.log("Grade: ".concat(this.grade));
        console.log("Address: ".concat(this.address));
    };
    return Student;
}());
var student = new Student("Rajan", 39, "A", "Kandivali");
student.displayInfo();
