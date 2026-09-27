const products = [

  { id: 1, title: "Laptop", price: 1200, category: "electronics", available: true },

  { id: 2, title: "Keyboard", price: 80, category: "electronics", available: false },

  { id: 3, title: "Desk", price: 300, category: "furniture", available: true }

];
const result = products.some(product => product.available === false);
// Using some function beacuse the question asks if there
//  is one available on this bet so we use some 
