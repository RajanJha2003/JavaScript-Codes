// Demonstrate an example of a Promise that simulates fetching product details(e.g.,
// name, price, availability) from an online store'sserver.

const productDetails = {
    name: "Laptop",
    price: 50000,
    availability: true
};


const fetchProductDetails=(product)=>{
    return new Promise((resolve,reject)=>{
        if(product){
            resolve(productDetails)
        }else{
            reject("Product not found")
        }
    })
}

fetchProductDetails(productDetails).then((product)=>{
    console.log("Product Details:", product);
}).catch((error)=>{
    console.error("Error:", error);
})