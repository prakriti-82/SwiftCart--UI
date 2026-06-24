const Panel = () => {
  const links = [
    "☰ Browse All",
    "Today's Deals",
    "Electronics",
    "Fashion",
    "Smartphones",
    "Home & Living",
    "Books",
    "Sports & Outdoors",
    "Beauty",
    "Toys",
    "Grocery",
    "New Arrivals",
    "Sell on SwiftCart",
    "SwiftCart Pay",
    "Help",
  ];

  return (
    <nav className="panel" aria-label="Category navigation">
      <div className="panel-container">
        {links.map((link, i) => (
          <span key={i} className={`panel-item${i === 0 ? " panel-item--bold" : ""}`}>
            {link}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Panel;
