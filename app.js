import { db } from "./firebase.js";

const searchInput = document.getElementById("searchInput");
const categoryList = document.getElementById("categoryList");
const campaignList = document.getElementById("campaignList");
const productList = document.getElementById("productList");
const cartCount = document.getElementById("cartCount");
const whatsappBtn = document.getElementById("whatsappBtn");

let cart = [];

cartCount.textContent = "0 Ürün";

whatsappBtn.addEventListener("click", () => {
    alert("WhatsApp sipariş sistemi bir sonraki adımda eklenecek.");
});

console.log("Yarış Market 1.0 Hazır");
console.log(db);
