/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// SORT OF DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // let clearTableBody = document.querySelector('tbody');
  let clearTableRow = document.getElementsByTagName('tr').innerHTML = '';
  console.log(clearTableRow);
  // clearTableBody.innerHTML = '';
  

}
// target the tbody and use inner HTML = '' on tbody





function showCart() {
  // DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
  // DONE: Find the table body
  let tbody = document.querySelector('tbody');
  // DONE: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    let tr = document.createElement('tr');
    let deleteLink = document.createElement('td');
    let quantity = document.createElement('td');
    let item = document.createElement('td');
    tbody.appendChild(tr);

    quantity.textContent = `${cart.items[i].quantity}`;
    item.textContent = `${cart.items[i].product}`;
    deleteLink.textContent = 'Delete';

    tr.appendChild(quantity);
    tr.appendChild(item);
    tr.appendChild(deleteLink);

  }
  // : Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  // add an event listener?
  // add an ID to an item that is already in the DOM - target when it is rendered ie during show cart
  // .slice() to remove specific index from the cart, then re-render

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();