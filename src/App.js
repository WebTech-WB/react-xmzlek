import React from 'react';
import './style.css';

export default function App() {
  return (
    <>
      <div class="top-navbar">
        <div id="ham-btn">☰</div>

        <a href="https://sloppydeals.com/" title="Logo Link" target="_self">
          <h2>Sloppydeals</h2>
        </a>

        <a
          class="cart_icon"
          href="https://sloppydeals.com/carts"
          title="Cart Link With Icon"
          target="_self"
        >
          <i class="fa fa-shopping-cart" />
        </a>

        <input
          id="seacrh-bar"
          placeholder="Search thousands of different products"
        />
      </div>
    </>
  );
}
