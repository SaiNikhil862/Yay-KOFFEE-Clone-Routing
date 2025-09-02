# ☕ Yay KOFFEE Clone - React Routing Project

A modern, responsive coffee shop website clone built with **React** and **React Router**. This project demonstrates advanced routing, component-based architecture, and beautiful UI design with **Tailwind CSS**.

## 🌟 Live Demo

🔗 **[View Live Project](https://sainikhil862.github.io/Yay-KOFFEE-Clone-Routing/)** ✅ **WORKING LINK**

## 📸 Screenshots

![Home Page](https://via.placeholder.com/800x400/F9B94B/3E2723?text=Home+Page)
![Menu Page](https://via.placeholder.com/800x400/3C200B/F9B94B?text=Menu+Page)

## 🚀 Features

- **🏠 Home Page**: Interactive hero section with dynamic content
- **📋 Menu Page**: Product grid with hover effects and pricing
- **📍 Locations**: Store locations and contact information
- **📝 Blog**: Latest news and updates
- **👥 About Us**: Company information and team details

### ✨ Technical Features
- **React Router DOM**: Seamless navigation between pages
- **Active Link Highlighting**: Green underlines for current page navigation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Hover Effects**: Interactive food images with smooth animations
- **Custom Fonts**: UltraRegular font integration
- **Z-Index Layering**: Proper content stacking and visibility
- **Component Architecture**: Modular and reusable components

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SaiNikhil862/Yay-KOFFEE-Clone-Routing.git
   cd Yay-KOFFEE-Clone-Routing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
routingclone/
├── src/
│   ├── components/
│   │   ├── Mainpage.jsx      # Main layout with navigation
│   │   ├── Home.jsx          # Home page component
│   │   ├── Menu.jsx          # Menu page with food items
│   │   ├── Locations.jsx     # Store locations
│   │   ├── Blog.jsx          # Blog posts
│   │   └── AboutUs.jsx       # About page
│   ├── assets/
│   │   ├── images/           # All project images
│   │   └── fonts/            # Custom fonts
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── public/
├── package.json
└── README.md
```

## 🎨 Key Components

### Navigation System
- **Active Link Highlighting**: Current page shows with green underline
- **Hover Effects**: Interactive navigation with smooth transitions
- **Responsive Menu**: Works on all device sizes

### Home Page
- **Hero Section**: Eye-catching banner with call-to-action
- **Image Gallery**: Interactive food images with hover effects
- **Product Grid**: Featured items with proper spacing

### Menu Page
- **Dynamic Menu Items**: Mapped from data array
- **Hover Animations**: Smooth image transitions
- **Pricing Display**: Clear product pricing
- **Grid Layout**: Responsive 3-column layout

## 🎯 Code Highlights

### Active Navigation Links
```jsx
<Link className={`${location.pathname === "/" ? "text-[#BECB73]" : "text-[#e0ceab]"} hover:text-[#BECB73] transition-colors duration-200`} to={"/"}>
  Home
</Link>
```

### Z-Index Layering System
```jsx
<div className='relative z-50'>
  <img className='relative z-10' />
  <h1 className='relative z-20' />
  <div className='relative z-30' />
</div>
```

### Responsive Grid Layout
```jsx
<div className='grid grid-cols-3 bg-[#3C200B] gap-0 px-2 py-4 relative z-40'>
  {menuItems.map((item, index) => (
    <div key={index} className='mx-1'>
      {/* Menu item content */}
    </div>
  ))}
</div>
```

## 🌈 Color Palette

- **Primary**: `#F9B94B` (Golden Yellow)
- **Secondary**: `#3E2723` (Dark Brown)
- **Accent**: `#BECB73` (Light Green)
- **Background**: `#F5F1E6` (Cream)
- **Text**: `#e0ceab` (Light Beige)

## 📱 Responsive Design

- **Desktop**: Full layout with all features
- **Tablet**: Adapted grid system
- **Mobile**: Stacked layout with touch-friendly navigation

## 🚀 Deployment

This project can be deployed on various platforms:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Enable in repository settings

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sai Nikhil**
- GitHub: [@SaiNikhil862](https://github.com/SaiNikhil862)
- Project Link: [Yay KOFFEE Clone](https://github.com/SaiNikhil862/Yay-KOFFEE-Clone-Routing)

## 🙏 Acknowledgments

- React Router documentation
- Tailwind CSS community
- Coffee shop design inspiration
- Open source community

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and ☕ by Sai Nikhil
