// Implement an anonymousfunction assigned to the variable increaseMarks that
// takes an array of marks as a parameter and increases each mark by 10.

const increaseMarks=function(num){
    return num.map(num=>{
        return num+10;
    })
}

console.log(increaseMarks([10,20,30]))