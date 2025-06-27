// Demonstrate an example for default parameters and rest parameters in a function that calculates the total cost of items in a customer's shopping cart. Use a default parameter for applying a discount rate and rest parameters for the list of product prices.


const Products = [
{
    name:"MAttress",
    price :2000
},
{
    name:"Bottles",
    price :200
},
{
    name:"Medicines",
    price :250
}
]

function calculateTotalCost(discount=0.2,...prices){
    return prices.reduce((total,price)=>{
        return total+(price-price*discount)
    },0)




}

const price=Products.map(price=>price.price)

console.log(calculateTotalCost(0.2,...price))