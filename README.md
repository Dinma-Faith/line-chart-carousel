## 📊 Line Chart Carousel

This project is a **carousel chart component** built with **React** and **Chart.js**. Users can toggle between different network speed metrics — **Download**, **Upload**, and **Ping** — using arrow buttons. The charts dynamically slide, with one chart taking up most of the container while the next is slightly visible, hinting at forward navigation.

---

### 🛠 Tech Stack

* **React** (with functional components and hooks)
* **Chart.js** (for line chart rendering)
* **CSS Modules** (for scoped, component-specific styling)
* **Vite** (for fast development and build)

---

### 📁 Project Structure

```
src/
│
├── components/
│   ├── carousel.jsx          # Main carousel layout
│   ├── carousel-slide.jsx     # Single chart display
│   ├── carousel-arrows.jsx    # Navigation arrows
│
├── chart-data/
│   ├── datasets.js           # Mock chart datasets
│   ├── labels.js             # Shared labels across charts
│   └── chart-options.js      # Chart configuration options
│
├── css/
│   ├── carousel.module.css   # Styling for the carousel and arrows
│   └── chart-slide.module.css# Styling for individual chart slides
│
├── icons/
│   ├── arrow-left.svg
│   └── arrow-right.svg
│
└── App.jsx                   # App root, renders Carousel
```

---

### 🚀 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/carousel-charts.git
cd carousel-charts
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the project**

```bash
npm run dev
```

### 🧩 Features

* Interactive chart carousel with navigation arrows
* Responsive layout with appropriate spacing
* Modular component design
* Graceful handling of edge cases (e.g., disabling prev/next buttons when needed)

---

### 📝 License

MIT License
