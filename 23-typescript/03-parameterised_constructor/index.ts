// Create a Course class with a parameterized constructor that takes courseName,
// courseCode, and instructor as parameters and assigns them to class attributes.

class Course {
    courseName: string;
    courseCode: string;
    instructor: string;

    constructor(courseName: string, courseCode: string, instructor: string) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }
}


const course=new Course("JS","JS1010","King");
console.log(course)