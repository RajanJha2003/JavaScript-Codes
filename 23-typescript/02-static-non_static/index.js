// Create a class School that contains:
// a. Static member: totalStudents to track the total number of students.
// b. Non-static member: studentList to store individualstudent details.
// c. Methods to increment the static member and add student details to the non-
// static list.
var School = /** @class */ (function () {
    function School() {
        this.studentList = [];
    }
    School.prototype.addStudent = function (name, studentId, grade, address) {
        var student = { name: name, studentId: studentId, grade: grade, address: address };
        this.studentList.push(student);
        School.totalStudents++;
    };
    School.displayTotalStudents = function () {
        console.log("Total student ".concat(School.totalStudents));
    };
    School.totalStudents = 0;
    return School;
}());
var school = new School();
school.addStudent("Rajan", 101, "A", "Kandivali");
School.displayTotalStudents();
console.log(school.studentList);
