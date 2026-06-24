⚡ SwiftCart
A modern, fully responsive Indian e-commerce storefront built with React 19 and Vite. SwiftCart is an original UI project focused on clean component architecture, mobile-first responsiveness, and a distinctive teal-and-navy design system.

🖥️ Live Demo
✨ Features
🔍 Live Search — filter products instantly from the navbar
🛒 Cart Counter — tracks items added across the product grid
📱 Mobile Responsive — hamburger menu, 2-column product grid, fluid hero
⚡ SVG Wordmark Logo — no image dependency, scales perfectly at all sizes
🎨 Original Design System — teal + deep navy palette, Inter typeface
🗂️ Reusable Components — Navbar, Panel, Hero, Product, Footer
🚀 Vite — lightning-fast dev server and build
🛠️ Tech Stack
Technology	Version
React	19.x
Vite	8.x
react-icons	5.x
CSS (custom)	—
Google Fonts (Inter)	—
📁 Project Structure
swiftcart/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Product & hero images
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with search, cart, mobile menu
│   │   ├── Panel.jsx        # Horizontal scrollable category bar
│   │   ├── Hero.jsx         # Full-width banner with gradient overlay
│   │   ├── Product.jsx      # Individual product card
│   │   └── Footer.jsx       # Multi-column footer with back-to-top
│   ├── App.jsx              # Root component, state management
│   ├── data.js              # Product data array
│   ├── index.css            # Global styles & design tokens
│   └── main.jsx             # React entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
🚀 Getting Started
Prerequisites
Node.js 18+
npm or yarn
Installation
# Clone the repository
# installation of clone repo SwiftCart--UI
https://github.com/prakriti-82/SwiftCart--UI.git

# Install dependencies
npm install

# Start the development server
npm run dev
Open http://localhost:5173 in your browser.

Build for Production
npm run build
Preview Production Build
npm run preview
🎨 Design Tokens
Token	Value	Usage
Primary	#0f3460	Navbar, footer background
Accent	#0e9384	Search button, panel, card CTA
Highlight	#5eead4	Logo accent, hover states
CTA	#f97316	Hero button
Surface	#f0fdfa	Page background
📱 Responsive Breakpoints
Breakpoint	Layout
> 768px	Full desktop navbar, 3+ column product grid
≤ 768px	Hamburger menu, 2-column product grid
≤ 380px	Single column product grid
🧩 Components Overview
Navbar
Sticky header with the SwiftCart SVG wordmark, category search bar, cart counter, and a hamburger-driven mobile drawer. Accepts cartCount and onSearch props.

Panel
Horizontally scrollable category navigation bar. Hides the scrollbar on all browsers while remaining touch-scrollable on mobile.

Hero
Full-width banner section using a background image with a left-to-right gradient overlay. Height scales fluidly between 240px and 560px using clamp().

Product
Card component displaying image, title, price (formatted in Indian locale), and an Add to Cart button. Accepts title, price, image, and onAddToCart props.

Footer
Four-column link grid with a Back to Top button and a branded bottom bar. Collapses to a single centered column on mobile.

🙋‍♀️ Author
Prakriti — @prakriti-82

📄 License
This project is open source and available under the MIT License