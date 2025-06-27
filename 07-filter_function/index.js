// Write a Function to Filter Employees Earning More Than a Certain Amount from an
// Array of Employee Objects.

const Employees = [{

    name: 'A',
    id: 1, 
    sal: 50000
},
{
    name: 'B',
    id: 2, 
    sal: 60000
},
{
    name: 'C',
    id: 3, 
    sal: 30000
}]


const filterEmployees=(employees,salary)=>{
    return employees.filter((employee)=>employee.sal>salary)

}

console.log(filterEmployees(Employees, 40000))