
// Show an example of throw where a function throws an exception if a product'squantity in the inventory falls below a certain threshold (e.g., less than 5 units)

function checkInventory(product) {
    const threshold = 5;
    
    if (product.quantity < threshold) {
        throw new Error(`Warning: Product "${product.name}" has low stock (${product.quantity} units left)!`);
    }
    
    console.log(`Product "${product.name}" has sufficient stock (${product.quantity} units).`);
}

const product = {
    name: "Wireless Mouse",
    quantity: 3
};

try {
    checkInventory(product);
} catch (error) {
    console.log("Error:", error.message);
}
