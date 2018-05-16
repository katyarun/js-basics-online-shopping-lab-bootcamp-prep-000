var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(Object.assign({}, { item : Math.floor(Math.floor())}));
  return `${item} has been added to your cart.`;
}

const item = "bananas";
console.log(addToCart(item));
console.log(cart);












function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
