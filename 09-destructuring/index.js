// Provide an example of array destructuring and object destructuring in JavaScript to
// extract product names from an array of products and their details from a product
// object in an online shopping system.

const products = [
   "Laptop",'Mobile','Tablet','Smartwatch'
];

const [product1, product2, product3, product4] = products;

console.log(product1); 
console.log(product2);
console.log(product3);
console.log(product4); 


const productDetails={
    id: 1,
    name: 'Laptop',
    price: 50000,
    category: 'Electronics'
}

const {id,name,price,category}=productDetails;
console.log(id);
console.log(name);
console.log(price);
console.log(category);



