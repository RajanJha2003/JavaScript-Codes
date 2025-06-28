
// Create an interface Attendance with a method markAttendance().
// Implement this interface in the Student class, and define how attendance is marked
// for a student.
interface Attendance{
    markAttendance():void;
}

class Student implements Attendance{
    name: string;
    studentId: number;
    attendanceMarked: boolean = false;

    constructor(name:string,studentId:number){
        this.name=name;
        this.studentId=studentId;
    }
    markAttendance(): void {
        this.attendanceMarked=true;
        if(this.attendanceMarked){
            console.log(`Attendance marked for student: ${this.name} (ID: ${this.studentId})`);
        }
    }
    
}

const student1 = new Student("Alice", 101);

student1.markAttendance();
console.log(`Attendance Status: ${student1.attendanceMarked}`);
