var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(Object.assign({}, { itemName : item, itemPrice : Math.floor(Math.random() * 100)}));
  return `${item} has been added to your cart.`;
}

const item = "bananas";
// console.log(addToCart(item));
// console.log(cart);

const item2 = "pancake batter";
// console.log(addToCart(item2));
// console.log(cart);




function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    
  }
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
