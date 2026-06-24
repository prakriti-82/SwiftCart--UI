import Navbar from "./components/Navbar";
import Product from "./components/Product";
import products from "./data";
import Hero from "./components/Hero";
import Panel from "./components/Panel";
import Footer from "./components/Footer";
import { useState } from "react";
import "./index.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddToCart = () => setCartCount((prev) => prev + 1);
  const handleSearch = (query) => setSearchQuery(query);

  const filtered = searchQuery
    ? products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <>
      <Navbar cartCount={cartCount} onSearch={handleSearch} />
      <Panel />
      <Hero />
      <div className="products">
        {filtered.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
