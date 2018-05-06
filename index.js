var cart = [];
var cartItem;
var itemName;
var itemPrice = 0;
var totalCost;


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var min = 1;
  var max = 100;
  var price = Math.floor(Math.random() * (max - min)) + min;
  cartItem = {itemName: item, itemPrice: price};
  cart.push(cartItem);
  return item + " has been added to your cart.";
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
  } else {
    var allItems = [];
    let i = 0;
    do {
      allItems.push(" " + `${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
      i++;
    } while (i < cart.length - 1);
    return "In your cart, you have" + allItems + ", and " + getCart()[cart.length - 1].itemName + " at $" + getCart()[cart.length - 1].itemPrice + ".";
  }
}

function total() {
  var totalPrice = 0;
  for(var j = 0; j < cart.length; j++) {
    totalPrice = totalPrice + parseInt(cart[j].itemPrice);
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
var cart = [];
var cartItem;
var itemName;
var itemPrice = 0;
var totalCost;


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var min = 1;
  var max = 100;
  var price = Math.floor(Math.random() * (max - min)) + min;
  cartItem = {itemName: item, itemPrice: price};
  cart.push(cartItem);
  return item + " has been added to your cart.";
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
  } else {
    var allItems = [];
    let i = 0;
    do {
      allItems.push(" " + `${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
      i++;
    } while (i < cart.length - 1);
    return "In your cart, you have" + allItems + ", and " + getCart()[cart.length - 1].itemName + " at $" + getCart()[cart.length - 1].itemPrice + ".";
  }
}

function total() {
  var totalPrice = 0;
  for(var j = 0; j < cart.length; j++) {
    totalPrice = totalPrice + parseInt(cart[j].itemPrice);
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
