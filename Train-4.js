const products = [

  { id: 1, title: "Laptop", price: 1200, category: "electronics", available: true },

  { id: 2, title: "Keyboard", price: 80, category: "electronics", available: false },

  { id: 3, title: "Desk", price: 300, category: "furniture", available: true }

];
const updatedProducts = products.map(product => 
    product.id===3
    ? { ...product, price:100 }
    :product
);
console.log(updatedProducts)