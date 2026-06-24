import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ cartCount = 0, onSearch }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = () => {
    if (onSearch) onSearch(search);
  };

  return (
    <header className="navbar">

      {/* ── Row 1: logo · location · icons ── */}
      <div className="nav-row1">

        {/* Logo (SVG wordmark — no image file needed) */}
        <div className="nav-logo">
          <svg viewBox="0 0 140 36" xmlns="http://www.w3.org/2000/svg" aria-label="SwiftCart">
            <text x="0" y="27" fontFamily="'Segoe UI', Arial, sans-serif"
              fontWeight="800" fontSize="26" fill="#ffffff" letterSpacing="-0.5">
              Swift
            </text>
            <text x="72" y="27" fontFamily="'Segoe UI', Arial, sans-serif"
              fontWeight="400" fontSize="26" fill="#5eead4" letterSpacing="-0.5">
              Cart
            </text>
            {/* small lightning bolt accent */}
            <polygon points="68,4 63,18 68,16 63,32 74,14 68,16" fill="#5eead4" />
          </svg>
        </div>

        {/* Delivery location */}
        <div className="nav-delivery">
          <span className="nav-label">Deliver to</span>
          <span className="nav-value">📍 India</span>
        </div>

        {/* Right-side icons (desktop) */}
        <div className="nav-right">
          <div className="nav-account">
            <span className="nav-label">Hello, Sign in</span>
            <span className="nav-value">Account &amp; Lists</span>
          </div>

          <div className="nav-orders">
            <span className="nav-label">Returns</span>
            <span className="nav-value">&amp; Orders</span>
          </div>

          <div className="nav-cart">
            <FaShoppingCart className="cart-icon" />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
            <span className="nav-value cart-label">Cart</span>
          </div>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ── Row 2: Search bar ── */}
      <div className="nav-search">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="search-category"
          aria-label="Category"
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Smartphones</option>
          <option>Home &amp; Living</option>
          <option>Books</option>
        </select>

        <input
          type="text"
          placeholder="Search SwiftCart..."
          aria-label="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button onClick={handleSearch} aria-label="Search">
          🔍
        </button>
      </div>

      {/* ── Mobile drawer menu ── */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          <div className="nav-mobile-item">Hello, Sign in · Account &amp; Lists</div>
          <div className="nav-mobile-item">Returns &amp; Orders</div>
          <div className="nav-mobile-item">
            <FaShoppingCart style={{ marginRight: 6 }} />
            Cart {cartCount > 0 && `(${cartCount})`}
          </div>
        </div>
      )}

    </header>
  );
}

export default Navbar;