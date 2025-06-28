// Create a Course class with a parameterized constructor that takes courseName,
// courseCode, and instructor as parameters and assigns them to class attributes.
var Course = /** @class */ (function () {
    function Course(courseName, courseCode, instructor) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }
    return Course;
}());
var course = new Course("JS", "JS1010", "King");
console.log(course);
