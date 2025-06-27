// Create a function findTopper that accepts an array ofstudent marks and returns
// the highest mark.

function findTopper(marks){
    return Math.max(...marks);
}

console.log(findTopper([85, 92, 78, 90, 88])); 