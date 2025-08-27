# Development Guide

This document outlines the development workflow, best practices, and guidelines for the portfolio project.

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
portfolio/
├── src/                     # Source files
│   ├── scss/               # SCSS source files
│   │   ├── _config.scss    # Variables, mixins, functions
│   │   ├── _menu.scss      # Navigation styles
│   │   ├── _about.scss     # About page styles
│   │   ├── _mobile.scss    # Responsive design
│   │   └── main.scss       # Main SCSS file
│   ├── js/                 # JavaScript source files
│   ├── img/                # Images and assets
│   └── *.html              # HTML source files
├── dist/                   # Compiled output (auto-generated)
├── scss/                   # Legacy SCSS location (will be removed)
└── package.json            # Project configuration
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development with SCSS watching |
| `npm run sass` | Watch and compile SCSS files |
| `npm run build` | Build production version |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Run all linters |
| `npm run format` | Format code with Prettier |

## 🎨 SCSS Guidelines

### File Organization
- Use partials (files starting with `_`) for modularity
- Keep `_config.scss` for all variables and mixins
- Organize styles by component or page
- Use BEM methodology for class naming

### Best Practices
- Use SCSS variables for colors, fonts, and spacing
- Create reusable mixins for common patterns
- Use functions for calculations and color manipulation
- Keep nesting to a maximum of 3 levels

### Example Structure
```scss
// _config.scss
$primary-color: #444;
$secondary-color: #eece1a;

@mixin ease-out {
  transition: all 0.5s ease-out;
}

// Component file
.component {
  background: $primary-color;
  
  &__element {
    @include ease-out;
    
    &:hover {
      background: $secondary-color;
    }
  }
}
```

## 📱 Responsive Design

### Breakpoints
- **Mobile Small**: ≤500px
- **Mobile Medium**: ≤768px
- **Desktop Large**: 769px - 1170px
- **Desktop XL**: ≥1171px

### Mobile-First Approach
- Start with mobile styles
- Use `min-width` media queries for larger screens
- Test on various devices and screen sizes

## ♿ Accessibility Guidelines

### ARIA Labels
- Use `aria-label` for interactive elements
- Use `aria-expanded` for collapsible content
- Use `aria-current` for current page indicators

### Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Use proper focus management
- Include skip links for main content

### Screen Reader Support
- Use semantic HTML elements
- Provide alternative text for images
- Use proper heading hierarchy

## 🧪 Code Quality

### Linting
- Run `npm run lint` before committing
- Fix all linting errors and warnings
- Use consistent code style

### Formatting
- Run `npm run format` to auto-format code
- Use Prettier configuration for consistency
- Maintain consistent indentation (2 spaces)

### JavaScript Best Practices
- Use ES6+ features when possible
- Use `const` and `let` instead of `var`
- Handle errors gracefully
- Add meaningful comments for complex logic

## 🚀 Deployment Workflow

1. **Development**
   - Make changes in `src/` directory
   - Test locally with `npm run dev`
   - Ensure all tests pass

2. **Building**
   - Run `npm run build` to compile assets
   - Verify output in `dist/` directory
   - Test built version locally

3. **Deployment**
   - Commit and push changes to Git
   - Run `npm run deploy` to deploy to GitHub Pages
   - Verify deployment on live site

## 🔧 Troubleshooting

### Common Issues

**SCSS not compiling**
- Check if `node-sass` is installed
- Verify SCSS syntax
- Check file paths in imports

**Build fails**
- Ensure all dependencies are installed
- Check for syntax errors in source files
- Verify file permissions

**Deployment issues**
- Check GitHub Pages settings
- Verify `gh-pages` dependency
- Check for build errors

### Getting Help
- Check the console for error messages
- Review the README for setup instructions
- Open an issue on GitHub for bugs

## 📚 Resources

- [SCSS Documentation](https://sass-lang.com/documentation)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [GitHub Pages](https://pages.github.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📝 Changelog

### Version 1.1.0
- Added source directory structure
- Improved accessibility features
- Added code quality tools
- Enhanced documentation

### Version 1.0.0
- Initial portfolio website
- Responsive design
- SCSS architecture
- Basic JavaScript functionality 