// Demonstrate array methods(map, filter, reduce):
// a. Use map to convert marksto grades.
// b. Use filter to extract students who scored above 75.
// c. Use reduce to calculate the total marks of all students.

const students=[
    {
        id:1,
        name:"Rajan",
        score:100
    },
    {
        id:2,
        name:"King",
        score:95
    },
    {
        id:3,
        name:"Unknown",
        score:10
    },
]

const marksToGrade=(marks)=>{
     let grade=''
    return marks.map((student)=>{
        if(student.score>90) grade='A'

        else if(student.score>75) grade='B'

        else if(student.score>60) grade='C'

        else if(student.score>35) grade  ='D'

        else grade= 'F'

        return {student,grade}
    })

}

console.log(marksToGrade(students))

const filterStudents=(num,limit)=>{
    return num.filter(student=>student.score>limit)
}

console.log(filterStudents(students,50))

const totalMarks=(num)=>{
    return num.reduce((sum,student)=>{
        return sum+student.score
    },0)
}

console.log(totalMarks(students))