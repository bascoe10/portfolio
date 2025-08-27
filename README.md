# Portfolio Website

A responsive personal portfolio website built with HTML, SCSS, and vanilla JavaScript. This project demonstrates modern frontend development practices including responsive design, CSS Grid, Flexbox, and smooth animations.

## 🚀 Live Demo

- **Portfolio**: [https://abass.dev](https://abass.dev)
- **GitHub Pages**: [https://bascoe10.github.io/portfolio](https://bascoe10.github.io/portfolio)

## ✨ Features

- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Modern CSS**: Built with SCSS featuring mixins, variables, and functions
- **Interactive Menu**: Animated hamburger menu with smooth transitions
- **Grid Layouts**: CSS Grid for responsive project galleries and about sections
- **Smooth Animations**: CSS transitions and transforms for enhanced UX
- **Cross-browser Compatible**: Works on all modern browsers

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **SCSS**: Advanced CSS preprocessing
- **Vanilla JavaScript**: No framework dependencies
- **Node.js**: Build process and dependency management
- **GitHub Pages**: Hosting and deployment

## 📁 Project Structure

```
portfolio/
├── scss/                    # SCSS source files
│   ├── _config.scss        # Variables, mixins, and functions
│   ├── _menu.scss          # Navigation menu styles
│   ├── _about.scss         # About page styles
│   ├── _mobile.scss        # Responsive design rules
│   └── main.scss           # Main SCSS file (imports all partials)
├── dist/                   # Compiled output (deployed to GitHub Pages)
│   ├── css/                # Compiled CSS
│   ├── js/                 # JavaScript files
│   ├── img/                # Images and assets
│   └── *.html              # HTML pages
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bascoe10/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   npm run sass
   ```
   This will watch your SCSS files and compile them to CSS in real-time.

4. **Open in browser**
   - Navigate to the `dist/` folder
   - Open `index.html` in your browser
   - Or use a local server like Live Server in VS Code

## 📝 Available Scripts

- **`npm run sass`**: Compiles SCSS to CSS with watch mode
- **`npm run deploy`**: Deploys the `dist/` folder to GitHub Pages

## 🎨 Customization

### Colors and Theme
Edit `scss/_config.scss` to customize:
- Primary and secondary colors
- Background images
- Typography settings

### Layout
Modify the grid layouts in:
- `scss/_about.scss` for the about page
- `scss/main.scss` for the projects grid

### Responsive Breakpoints
Adjust media queries in `scss/_mobile.scss` for different screen sizes.

## 📱 Responsive Breakpoints

- **Mobile Small**: ≤500px
- **Mobile Medium**: ≤768px  
- **Desktop Large**: 769px - 1170px
- **Desktop XL**: ≥1171px

## 🚀 Deployment

The project is automatically deployed to GitHub Pages from the `dist/` folder. To deploy:

1. Make your changes
2. Run `npm run sass` to compile SCSS
3. Commit and push your changes
4. Run `npm run deploy` to update the live site

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Traversy Media**: Original tutorial inspiration
- **Font Awesome**: Icons
- **GitHub Pages**: Hosting platform

## 📞 Contact

- **Portfolio**: [https://abass.dev](https://abass.dev)
- **GitHub**: [@bascoe10](https://github.com/bascoe10)
- **LinkedIn**: [Abass Sesay](https://www.linkedin.com/in/abass-sesay-73046b70/)
- **Twitter**: [@bascoe10](https://twitter.com/bascoe10)

