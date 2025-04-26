// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartPopup = document.getElementById('cart-popup');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const cartIcon = document.getElementById('cart-icon');
const closeCart = document.getElementById('close-cart');

// Open cart popup
cartIcon.addEventListener('click', () => {
  cartPopup.classList.add('show');
});

// Close cart popup
closeCart.addEventListener('click', () => {
  cartPopup.classList.remove('show');
});

// Add to Cart buttons
document.querySelectorAll('.menu-item').forEach(item => {
  const button = document.createElement('button');
  button.innerText = "Add to Cart";
  button.classList.add('btn');
  item.appendChild(button);

  button.addEventListener('click', () => {
    const burgerName = item.querySelector('h3').innerText;
    const price = Math.floor(Math.random() * 100) + 100; // Random price 100-200
    cart.push({ name: burgerName, price: price });
    saveCart();
    updateCart();
    alert(`${burgerName} added to your cart!`);
  });
});

// Update cart display
function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - $${item.price} 
      <button onclick="removeItem(${index})" style="background:red;color:white;border:none;border-radius:5px;padding:2px 5px;cursor:pointer;">X</button>
    `;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.innerText = total;
  cartCount.innerText = cart.length;
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Reservation form
document.querySelector('.reservation-form form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Reservation submitted successfully!");
  this.reset();
});

// Contact form
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Your message has been sent!");
  this.reset();
});

// Initialize
updateCart();
