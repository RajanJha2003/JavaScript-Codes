// Define an abstract class Institute with an abstract method getInstitutionType().
// Create a class School implementing the interface Management with methodslike
// addStudent(), removeStudent().
// Combine these in a real-time use case to manage different types of institutionslike
// School and College.

abstract class Institute {
    name: string;
    location: string;

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
    }

    abstract getInstitutionType(): string;
}

interface Management{
     addStudent(studentName: string, studentId: number): void;
    removeStudent(studentId: number): void;
}


class School extends Institute implements Management{

    students:{name:string;id:number}[]=[]

    constructor(name: string, location: string) {
        super(name,location)
    }


    getInstitutionType(): string {
        return "School"
    }
    addStudent(studentName: string, studentId: number): void {
        this.students.push({name:studentName,id:studentId})
        console.log("Student added")
    }
    removeStudent(studentId: number): void {
       this.students=this.students.filter((student)=>student.id!==studentId)
       console.log("Stduent removed")
    }
    
}


class College extends Institute implements Management{

    students:{name:string;id:number}[]=[]

    constructor(name: string, location: string) {
        super(name,location)
    }


    getInstitutionType(): string {
        return "College"
    }
    addStudent(studentName: string, studentId: number): void {
        this.students.push({name:studentName,id:studentId})
        console.log("Student added")
    }
    removeStudent(studentId: number): void {
       this.students=this.students.filter((student)=>student.id!==studentId)
       console.log("Stduent removed")
    }
    
}

const school=new School("SFIT","Borivali");
school.addStudent("Rajan",101);
school.addStudent("King",102);
school.removeStudent(102);
console.log(school.getInstitutionType())
console.log(school.students)


const college=new College("SFIT","Borivali");
college.addStudent("Rajan",101);
college.addStudent("King",102);
college.removeStudent(102);
console.log(college.getInstitutionType())
console.log(college.students)