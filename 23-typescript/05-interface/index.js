var Student = /** @class */ (function () {
    function Student(name, studentId) {
        this.attendanceMarked = false;
        this.name = name;
        this.studentId = studentId;
    }
    Student.prototype.markAttendance = function () {
        this.attendanceMarked = true;
        if (this.attendanceMarked) {
            console.log("Attendance marked for student: ".concat(this.name, " (ID: ").concat(this.studentId, ")"));
        }
    };
    return Student;
}());
var student1 = new Student("Alice", 101);
student1.markAttendance();
console.log("Attendance Status: ".concat(student1.attendanceMarked));
