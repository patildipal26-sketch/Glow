document.addEventListener("DOMContentLoaded", function(){

/* ---------------- CART SYSTEM ---------------- */

let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");
const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");

const cartPanel = document.getElementById("cartPanel");
const cartButton = document.getElementById("cartButton");
const closeCart = document.getElementById("closeCart");

const buttons = document.querySelectorAll(".card button");

/* Open Cart */

if(cartButton){
cartButton.addEventListener("click", function(){
cartPanel.classList.add("open");
});
}

/* Close Cart */

if(closeCart){
closeCart.addEventListener("click", function(){
cartPanel.classList.remove("open");
});
}

/* Add Products to Cart */

buttons.forEach(button => {

button.addEventListener("click", function(){

let productName = this.parentElement.querySelector("h3").innerText;

cartCount++;
cartDisplay.innerText = cartCount;

emptyCart.style.display = "none";

/* create cart item */

let item = document.createElement("li");

/* product name */

let name = document.createElement("span");
name.innerText = productName;

/* remove button */

let removeBtn = document.createElement("button");
removeBtn.innerText = " Remove";

/* remove function */

removeBtn.addEventListener("click", function(){

item.remove();

cartCount--;
cartDisplay.innerText = cartCount;

if(cartCount === 0){
emptyCart.style.display = "block";
}

});

/* add elements */

item.appendChild(name);
item.appendChild(removeBtn);

cartItems.appendChild(item);

});

});

/* WISHLIST */

let wishlistCount = 0;

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

const wishlistDisplay = document.getElementById("wishlist-count");
const wishlistItems = document.getElementById("wishlistItems");
const emptyWishlist = document.getElementById("emptyWishlist");

const wishlistPanel = document.getElementById("wishlistPanel");
const wishlistButton = document.getElementById("wishlistButton");
const closeWishlist = document.getElementById("closeWishlist");

wishlistButton.addEventListener("click",function(){
wishlistPanel.classList.add("open");
});

closeWishlist.addEventListener("click",function(){
wishlistPanel.classList.remove("open");
});

wishlistButtons.forEach(btn=>{

btn.addEventListener("click",function(){

let card=this.parentElement;
let productName=card.querySelector("h3").innerText;

wishlistCount++;

wishlistDisplay.innerText=wishlistCount;

emptyWishlist.style.display="none";

let item=document.createElement("li");

item.innerText=productName;

let removeBtn=document.createElement("button");
removeBtn.innerText="Remove";

removeBtn.addEventListener("click",function(){

item.remove();
wishlistCount--;

wishlistDisplay.innerText=wishlistCount;

if(wishlistCount===0){
emptyWishlist.style.display="block";
}

});

item.appendChild(removeBtn);

wishlistItems.appendChild(item);

});

});


/* ---------------- NEWSLETTER ---------------- */

const subscribeBtn = document.querySelector(".newsletter button");
const emailInput = document.querySelector(".newsletter input");

if(subscribeBtn){

subscribeBtn.addEventListener("click", function(){

let email = emailInput.value.trim();

if(email === ""){
alert("Please enter your email.");
}
else if(!email.includes("@")){
alert("Please enter a valid email.");
}
else{
alert("Thanks for subscribing ✨");
emailInput.value = "";
}

});

}


/* ---------------- HERO BUTTON SCROLL ---------------- */

const heroBtn = document.querySelector(".hero button");

if(heroBtn){

heroBtn.addEventListener("click", function(){

document.querySelector(".products").scrollIntoView({
behavior: "smooth"
});

});

}


/* ---------------- PRODUCT SEARCH ---------------- */

const searchBar = document.getElementById("searchBar");

if(searchBar){

searchBar.addEventListener("keyup", function(){

let value = searchBar.value.toLowerCase();
let products = document.querySelectorAll(".card");

products.forEach(product => {

let name = product.querySelector("h3").innerText.toLowerCase();

if(name.includes(value)){
product.style.display = "block";
}
else{
product.style.display = "none";
}

});

});

}


/* ---------------- DARK MODE ---------------- */

const toggleBtn = document.getElementById("modeToggle");

if(toggleBtn){

toggleBtn.addEventListener("click", function(){
document.body.classList.toggle("dark-mode");
});

}


/* ---------------- PRODUCT IMAGE ZOOM ---------------- */

const images = document.querySelectorAll(".card img");

images.forEach(img => {

img.addEventListener("mouseenter", function(){
this.style.transform = "scale(1.1)";
this.style.transition = "0.3s";
});

img.addEventListener("mouseleave", function(){
this.style.transform = "scale(1)";
});

});

});

/* Scroll Reveal */

function reveal(){

let reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let revealPoint = 100;

if(elementTop < windowHeight - revealPoint){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll", reveal);

/* Cursor Glow */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function(e){

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});