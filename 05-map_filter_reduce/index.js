// Demonstrate array method (map, filter, reduce)
// a. Map to square each number.
// b. Filterto extract odd number.
// c. Reduce to calculate the sum of all elements.

const squareNumbers=(num)=>{
    return num.map(num=>{
        return num*num;
    })
}
console.log(squareNumbers([1,2,3,4]))

const extractOdd=(num)=>{
    return num.filter(num=>num%2!=0)
}

console.log(extractOdd([1,2,3,4]))

const sumOfNumbers=(num)=>{
    return num.reduce((sum,n)=>sum+n)
}

console.log(sumOfNumbers([1,2,3,4]))