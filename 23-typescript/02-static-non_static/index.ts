// Create a class School that contains:
// a. Static member: totalStudents to track the total number of students.
// b. Non-static member: studentList to store individualstudent details.

// c. Methods to increment the static member and add student details to the non-
// static list.

class School{
    static totalStudents:number=0;
    studentList: { name: string; studentId: number; grade: string; address: string }[] = [];

    addStudent(name: string, studentId: number, grade: string, address: string):void{
        const student={name,studentId,grade,address};
        this.studentList.push(student);
        School.totalStudents++;

    }

    static displayTotalStudents():void{
        console.log(`Total student ${School.totalStudents}`)

    }

}

const school=new School();
school.addStudent("Rajan",101,"A","Kandivali");
School.displayTotalStudents();
console.log(school.studentList)
