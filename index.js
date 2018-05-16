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
    for (let i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        console.log(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
      } else { 
      console.log(`${cart[i].itemName} at $${cart[i].itemPrice},`);
      }
    }
    
  }
}
addToCart(item);
addToCart(item2);
viewCart();




function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
