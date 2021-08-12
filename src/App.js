import React from 'react';
import './style.css';

function open_menu() {
  var x = document.getElementById();
  x.style.width = '90vw';
  x.style.display = 'block';
}

function close() {
  x.style.width = 0;
}

export default function App() {
  return (
    <>
      <div class="top-navbar">
        <h2 id="ham-btn">☰</h2>

        <a
          id="logo-link"
          href="https://sloppydeals.com/"
          title="Logo Link"
          target="_self"
        >
          <h4>
            Sloppydeals<sup>Lite</sup>
          </h4>
          <h6>Explore More</h6>
        </a>

        <a
          class="wishlist-link"
          href="https://sloppydeals.com/user/wishlists"
          title="Wishlist"
          target="_self"
        >
          <img src="https://img.icons8.com/material/30/ffffff/like--v1.png" />
        </a>

        <a
          class="cart-link"
          href="https://sloppydeals.com/carts"
          title="Cart"
          target="_self"
        >
          <img
            id="cart-icon"
            src="https://img.icons8.com/ios-filled/30/ffffff/shopping-cart.png"
          />
        </a>

        <input
          id="seacrh-bar"
          placeholder="Search thousands of different products"
        />
      </div>
    </>
  );
}
