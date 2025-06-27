// Show the uses of try/catch when processing a payment during the checkout process, handling possible errors like payment failure or network issues.

let balance=5000;

const processPayment=(amount)=>{
    return new Promise((resolve,reject)=>{
        if(balance>=amount){
            balance-=amount;
            resolve(`Payment of ${amount} is successful.Remaining balance ${balance}`)
        }else{
            reject(new Error("Insufficient balance"))
        }
    })

}

 const checkout=async(amount)=>{
    try {
        const payment=await processPayment(amount);
        console.log(payment)
    } catch (error) {
        console.log(error)
    }
}
checkout(2000);
checkout(40000)