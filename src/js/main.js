// DOM Elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// State
let showMenu = false;

// Initialize the application
function init() {
  // Set current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Add event listeners
  addEventListeners();
  
  // Add keyboard navigation support
  addKeyboardSupport();
}

// Add event listeners
function addEventListeners() {
  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
    menuBtn.addEventListener("keydown", handleMenuKeydown);
  }
  
  // Close menu when clicking outside
  document.addEventListener("click", handleOutsideClick);
  
  // Close menu on escape key
  document.addEventListener("keydown", handleEscapeKey);
}

// Add keyboard navigation support
function addKeyboardSupport() {
  navItems.forEach((item, index) => {
    const link = item.querySelector('.nav-link');
    if (link) {
      link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          link.click();
        }
      });
    }
  });
}

// Toggle menu function
function toggleMenu() {
  try {
    showMenu = !showMenu;
    
    // Update ARIA attributes
    updateMenuAccessibility();
    
    // Toggle classes
    toggleMenuClasses();
    
    // Focus management
    manageFocus();
    
  } catch (error) {
    console.error('Error toggling menu:', error);
  }
}

// Update accessibility attributes
function updateMenuAccessibility() {
  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', showMenu.toString());
  }
  
  // Announce menu state to screen readers
  const announcement = showMenu ? 'Navigation menu opened' : 'Navigation menu closed';
  announceToScreenReader(announcement);
}

// Toggle menu classes
function toggleMenuClasses() {
  const action = showMenu ? "add" : "remove";
  
  menuBtn?.classList[action]("close");
  menu?.classList[action]("show");
  menuNav?.classList[action]("show");
  menuBranding?.classList[action]("show");
  
  navItems.forEach(item => {
    item.classList[action]("show");
  });
}

// Manage focus when menu opens/closes
function manageFocus() {
  if (showMenu) {
    // Focus first menu item when opening
    const firstNavItem = menuNav?.querySelector('.nav-link');
    if (firstNavItem) {
      firstNavItem.focus();
    }
  } else {
    // Return focus to menu button when closing
    if (menuBtn) {
      menuBtn.focus();
    }
  }
}

// Handle menu button keyboard events
function handleMenuKeydown(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
}

// Handle outside clicks
function handleOutsideClick(e) {
  if (showMenu && !menu?.contains(e.target) && !menuBtn?.contains(e.target)) {
    closeMenu();
  }
}

// Handle escape key
function handleEscapeKey(e) {
  if (e.key === 'Escape' && showMenu) {
    closeMenu();
  }
}

// Close menu function
function closeMenu() {
  if (showMenu) {
    showMenu = false;
    updateMenuAccessibility();
    toggleMenuClasses();
    manageFocus();
  }
}

// Announce to screen readers (accessibility helper)
function announceToScreenReader(message) {
  // Create a temporary element for screen reader announcements
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    if (announcement.parentNode) {
      announcement.parentNode.removeChild(announcement);
    }
  }, 1000);
}

// Error handling for missing elements
function validateElements() {
  const requiredElements = [
    { element: menuBtn, name: 'Menu button' },
    { element: menu, name: 'Menu container' },
    { element: menuNav, name: 'Menu navigation' },
    { element: menuBranding, name: 'Menu branding' }
  ];
  
  const missingElements = requiredElements.filter(({ element }) => !element);
  
  if (missingElements.length > 0) {
    console.warn('Missing required elements:', missingElements.map(({ name }) => name));
  }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Validate elements after initialization
setTimeout(validateElements, 100); 