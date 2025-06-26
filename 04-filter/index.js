// Write a named function filterEvenNumbers that takes an array of numbers
// as a parameter and returns a new array containing only the even numbers.

const filterEvenNumbers=(num)=>{
    return num.filter(num=>{
        return num%2==0
    })
}

console.log(filterEvenNumbers([1,2,3,4]))