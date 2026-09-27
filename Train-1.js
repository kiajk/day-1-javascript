import {useState} from "react";
// adding useState from js library
const products = [

  { id: 1, title: "Laptop", price: 1200, category: "electronics", available: true },

  { id: 2, title: "Keyboard", price: 80, category: "electronics", available: false },

  { id: 3, title: "Desk", price: 300, category: "furniture", available: true }

];
const newProducts = [
    ...products,
    {
        id:4,
        title:"mouse",
        price:400,
        category:"electronics",
        available:true
    }
]
