// Write a named function filterPassedStudents that takes an array of student marks
// and returns a new array containing only the students who passed.

const filterPassedStudents=(marks)=>{
    return marks.filter(mark=>{
        return mark>35;
    })

}

console.log(filterPassedStudents([6,20,50,80,79,67,75, 3]))
