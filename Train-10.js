const products = [

  { id: 1, title: "Laptop", price: 1200, category: "electronics", available: true },

  { id: 2, title: "Keyboard", price: 80, category: "electronics", available: false },

  { id: 3, title: "Desk", price: 300, category: "furniture", available: true }

];
const sortedPrice = products.sort((a,b) => {
    return b.price - a.price;
});
   