// Write a function to filterstudents with marks greater than 80 from an array of
// student objects.

const Students = [{

    name: 'A',
    id: 1, 
    marks:35
},
{
    name: 'B',
    id: 2, 
    marks: 60
},
{
    name: 'C',
    id: 3, 
    marks: 90
},
{
    name: 'D',
    id: 4, 
    marks: 34
}
]


function filterStudents(students){
    return students.filter(student=>student.marks>80)
}

console.log(filterStudents(Students))