// Demonstrate an example of async and await to simulate fetching and displaying a
// customer's order history from an online shopping system.


const Orders=[
    {
        id: 1, 
        product: "Laptop", 
        quantity: 50,
        price: 50000
    },
    {
        id: 2, 
        product: "Mobile", 
        quantity: 68,
        price: 20000
    },
    {
        id: 3, 
        product: "Tablet", 
        quantity: 40,
        price: 30000
    }
]



function fetchOrderHistory(product){
    return new Promise((resolve,reject)=>{
        if(product){
            resolve(Orders)
        }else{
            reject("Order history not found")
        }
    })
}


async function fetchOrders(){
    try {
        const orderHistory=await fetchOrderHistory(Orders);
        console.log("Order History:", orderHistory);
    } catch (error) {
        console.error("Error:", error);
        
    }
}

fetchOrders();