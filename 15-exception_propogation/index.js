

// Show an example of exception propagation when adding an item to a shopping cart if the product is out of stock in the online store's inventory.


const inventory = [
    { productId: 1, name: "Laptop", price: 50000, stock: 5 },
    { productId: 2, name: "Smartphone", price: 20000, stock: 0 },
    { productId: 3, name: "Headphones", price: 3000, stock: 10 }
];


const getProductById=(productId)=>{
    const product=inventory.find((product)=>product.productId==productId)
    if(!product){
        throw new Error("Product not found")
    }
    
    return product;
}

const checkStock=(product)=>{
    if(product.stock<=0){
        throw new Error("Product out of stock")
    }

}

const addToCart=(productId)=>{
    const product=getProductById(productId);
    checkStock(product);
    console.log(`Product ${product.name} added to cart`)
}

try {
    addToCart(3);
} catch (error) {
    console.log("Error:", error.message);
}