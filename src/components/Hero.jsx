import heroImg from "../assets/Boult_3000x1200-PC._CB543542644_.jpg";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">New Arrivals · Limited Time</p>
        <h1 className="hero-headline">Shop the Best Deals Online</h1>
        <p className="hero-sub">Electronics, Fashion, Home &amp; more — delivered fast.</p>
        <button className="hero-btn">Start Shopping</button>
      </div>
    </div>
  );
};

export default Hero;