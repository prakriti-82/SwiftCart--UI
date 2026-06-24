⚡ SwiftCart

A modern, fully responsive e-commerce UI built with React 19 + Vite.
SwiftCart focuses on clean component architecture, mobile-first design, and a distinctive teal–navy design system inspired by real-world Indian e-commerce platforms.

🔗 Live Demo

https://inspiring-alpaca-452db7.netlify.app

✨ Features
🔍 Live Search — instantly filter products from the navbar
🛒 Cart System — dynamic cart counter across components
📱 Fully Responsive UI — optimized for mobile, tablet, and desktop
⚡ SVG Logo System — scalable, lightweight branding (no image assets)
🎨 Custom Design System — teal + deep navy color palette with Inter font
🧩 Reusable Components — modular and maintainable architecture
🚀 Vite Powered — fast development and optimized production build
🛠️ Tech Stack
Technology	Version
React	19.x
Vite	8.x
react-icons	5.x
CSS	Custom
Fonts	Inter (Google Fonts)
📁 Project Structure
swiftcart/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Panel.jsx
│   │   ├── Hero.jsx
│   │   ├── Product.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
🚀 Getting Started
1. Clone the repository
git clone https://github.com/prakriti-82/SwiftCart--UI.git
cd SwiftCart--UI
2. Install dependencies
npm install
3. Start development server
npm run dev

Open: http://localhost:5173

🏗️ Build for Production
npm run build

Preview build:

npm run preview
🎨 Design System
Token	Color	Usage
Primary	#0f3460	Navbar, footer
Accent	#0e9384	Buttons, UI highlights
Highlight	#5eead4	Hover states, logo accents
CTA	#f97316	Hero buttons
Surface	#f0fdfa	Background
📱 Responsive Behavior
Desktop (>768px) → Multi-column grid, full navbar
Tablet (≤768px) → 2-column grid, hamburger menu
Mobile (≤380px) → Single-column layout
🧩 Component Overview
Navbar — Sticky header with search, cart counter, and mobile menu
Panel — Scrollable category navigation bar
Hero — Gradient overlay banner with responsive scaling
Product — Card with image, price, and add-to-cart action
Footer — Multi-column layout with back-to-top support
👩‍💻 Author

Prakriti
GitHub: @prakriti-82

📄 License

This project is licensed under the MIT License.