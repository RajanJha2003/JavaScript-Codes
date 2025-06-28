// Define an abstract class Person with abstract methods getDetails() and getRole().
// Create two derived classes Student and Teacher that implement these methodsto
// return their respective details and roles.

abstract class Person{
    name:string;
    age:number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    abstract getDetails():string;
    abstract getRole():string;
}

class Student extends Person{
    studentId:number;

    constructor(name:string,age:number,studentId:number){
        super(name,age);
        this.studentId=studentId;
    }
    getDetails(): string {
       return `Name: ${this.name}, Age: ${this.age}, Student ID: ${this.studentId}`;

    }
    getRole(): string {
        return "Student"
 
    }
    
}


class Teacher extends Person{
    subject:string;

    constructor(name:string,age:number,subject:string){
        super(name,age);
        this.subject=subject;
    }
    getDetails(): string {
       return `Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;

    }
    getRole(): string {
        return "Teacher"
 
    }
    
}

const student1 = new Student("Alice", 20, 101);
const teacher1 = new Teacher("Mr. Smith", 40, "Mathematics");

console.log(student1.getDetails());
console.log(student1.getRole());

console.log(teacher1.getDetails());
console.log(teacher1.getRole());
