// Define an abstract class Institute with an abstract method getInstitutionType().
// Create a class School implementing the interface Management with methodslike
// addStudent(), removeStudent().
// Combine these in a real-time use case to manage different types of institutionslike
// School and College.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Institute = /** @class */ (function () {
    function Institute(name, location) {
        this.name = name;
        this.location = location;
    }
    return Institute;
}());
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School(name, location) {
        var _this = _super.call(this, name, location) || this;
        _this.students = [];
        return _this;
    }
    School.prototype.getInstitutionType = function () {
        return "School";
    };
    School.prototype.addStudent = function (studentName, studentId) {
        this.students.push({ name: studentName, id: studentId });
        console.log("Student added");
    };
    School.prototype.removeStudent = function (studentId) {
        this.students = this.students.filter(function (student) { return student.id !== studentId; });
        console.log("Stduent removed");
    };
    return School;
}(Institute));
var College = /** @class */ (function (_super) {
    __extends(College, _super);
    function College(name, location) {
        var _this = _super.call(this, name, location) || this;
        _this.students = [];
        return _this;
    }
    College.prototype.getInstitutionType = function () {
        return "College";
    };
    College.prototype.addStudent = function (studentName, studentId) {
        this.students.push({ name: studentName, id: studentId });
        console.log("Student added");
    };
    College.prototype.removeStudent = function (studentId) {
        this.students = this.students.filter(function (student) { return student.id !== studentId; });
        console.log("Stduent removed");
    };
    return College;
}(Institute));
var school = new School("SFIT", "Borivali");
school.addStudent("Rajan", 101);
school.addStudent("King", 102);
school.removeStudent(102);
console.log(school.getInstitutionType());
console.log(school.students);
var college = new College("SFIT", "Borivali");
college.addStudent("Rajan", 101);
college.addStudent("King", 102);
college.removeStudent(102);
console.log(college.getInstitutionType());
console.log(college.students);
