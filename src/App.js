import React from 'react';
import './style.css';

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
          <h4>Sloppydeals<sup>Lite</sup></h4>
          <h6>Explore More</h6>
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
