// Implement an anonymousfunction assigned to the variable multiplyByTwo that
// Take number as a parameter and multiplies each element by 2.

const multiplyByTwo=function(num){
    let newNum='';
    while(num!=0){
        temp=num%10;
        newNum=temp*2+newNum;
        num = Math.floor(num/10);
    }

    return newNum;
}

console.log(multiplyByTwo(25))