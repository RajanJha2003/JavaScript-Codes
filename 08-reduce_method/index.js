



const Orders = [
{
    id: 1, 
    product: "Laptop", 
    quantity: 50,
    price: 50000
}
, {
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


function totalSales(orders){
    return orders.reduce((sum,order)=>{
        return sum+(order.quantity*order.price);
    },0)
}

console.log(totalSales(Orders));