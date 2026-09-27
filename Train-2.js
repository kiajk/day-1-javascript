const products = [

  { id: 1, title: "Laptop", price: 1200, category: "electronics", available: true },

  { id: 2, title: "Keyboard", price: 80, category: "electronics", available: false },

  { id: 3, title: "Desk", price: 300, category: "furniture", available: true }

];
const updatedProducts = products.map(product =>
  product.id === 2 
    ? { ...product, available: true } //if product id=2 put availability to true/else return product
    : product
);
console.log(updatedProducts)
// using map,Ternary Operator
// ,spread for changing id=2 availability