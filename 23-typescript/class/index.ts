

// Define a class named Student with the following attributes:
// a. name, studentId, grade, address.
// b. Include a method displayInfo() that prints all the student’s details.

class Student{
    name:string;
    studentId:Number;
    grade:string;
    address:string;

    constructor(name:string,studentId:Number,grade:string,address:string){
        this.name=name;
        this.studentId=studentId;
        this.grade=grade;
        this.address=address;
    }

    displayInfo():void{
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Grade: ${this.grade}`);
        console.log(`Address: ${this.address}`);

    }
}

const student=new Student("Rajan",39,"A","Kandivali");
student.displayInfo();