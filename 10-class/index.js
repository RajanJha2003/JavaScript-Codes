

// Create a class named Product with the following attributes: name, productId, price,
// and a displayDetails method. Provide code to access and display these detailsfor a
// product.

class Product{
    constructor(name,productId,price){
        this.name=name;
        this.productId=productId;
        this.price=price;
    }

    displayDetails(){
        console.log(`Product Name: ${this.name}`);
        console.log(`Product ID: ${this.productId}`);
        console.log(`Price: ${this.price}`);
    }
}

const p1=new Product("Laptop",101,50000);
console.log(p1.displayDetails())