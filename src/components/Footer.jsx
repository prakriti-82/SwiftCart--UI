const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">

      {/* Back to top */}
      <div
        className="foot-top-btn"
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
      >
        ↑ Back to Top
      </div>

      {/* Link columns */}
      <div className="foot-links">

        <div className="foot-col">
          <h3>About SwiftCart</h3>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Blog</a>
        </div>

        <div className="foot-col">
          <h3>Connect</h3>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter / X</a>
          <a href="#">YouTube</a>
        </div>

        <div className="foot-col">
          <h3>Sell with Us</h3>
          <a href="#">Become a Seller</a>
          <a href="#">Seller Hub</a>
          <a href="#">Advertising</a>
          <a href="#">Global Reach</a>
        </div>

        <div className="foot-col">
          <h3>Help</h3>
          <a href="#">Your Account</a>
          <a href="#">Track Order</a>
          <a href="#">Returns &amp; Refunds</a>
          <a href="#">Contact Us</a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="foot-bottom">
        <span className="foot-logo-text">⚡ SwiftCart</span>
        <span>© {new Date().getFullYear()} SwiftCart India Pvt. Ltd. All rights reserved.</span>
      </div>

    </footer>
  );
};

export default Footer;