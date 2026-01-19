# Data Analyst & Data Engineer Portfolio

A modern, responsive portfolio website showcasing expertise in data analytics and data engineering. Built with cutting-edge web technologies including HTML5, CSS3, JavaScript, GSAP animations, Particles.js, and Typed.js.

## 🌟 Features

### Design & User Experience
- **Modern Glass-morphism UI** - Sleek, transparent design elements with backdrop blur effects
- **Smooth Animations** - Professional GSAP-powered animations and transitions
- **Interactive Particle Background** - Dynamic particle system in the hero section
- **Custom Cursor** - Elegant custom cursor with interactive effects (desktop only)
- **Scroll Progress Indicator** - Visual feedback for page scroll position
- **Responsive Design** - Fully optimized for all devices (mobile, tablet, desktop)

### Sections
1. **Hero Section**
   - Animated particle background
   - Dynamic typing effect showing multiple roles
   - Gradient text effects
   - Call-to-action buttons with pulse animation

2. **About Section**
   - Professional bio and summary
   - Animated statistics counters (projects, experience, clients)
   - Smooth scroll-triggered animations

3. **Skills Section**
   - Two-column layout: Data Analyst & Data Engineer skills
   - Animated skill progress bars
   - Icon integration for each skill
   - Hover effects with 3D transforms

4. **Projects Section**
   - Filterable project cards (All, Data Analyst, Data Engineer)
   - 6 sample projects with descriptions
   - Hover effects with overlays
   - Technology tags for each project
   - Smooth filter transitions

5. **Contact Section**
   - Email, LinkedIn, and GitHub links
   - Animated contact cards
   - Social media icons
   - Interactive hover states

6. **Footer**
   - Minimalist design
   - Copyright information

### Technical Features
- **Loading Screen** - Elegant loading animation on page load
- **Smooth Scrolling** - Native smooth scroll with easing
- **Active Navigation** - Highlights current section in navigation
- **Mobile Menu** - Hamburger menu with smooth transitions
- **Performance Optimized** - Debounced scroll handlers and efficient animations
- **Accessibility** - WCAG AA compliant, keyboard navigation, reduced motion support
- **Cross-browser Compatible** - Works on all modern browsers

## 🚀 Technologies Used

### Core Technologies
- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with custom properties, Grid, Flexbox
- **JavaScript (ES6+)** - Modern vanilla JavaScript

### Libraries & Frameworks
- **GSAP (GreenSock Animation Platform)** - Professional-grade animations
- **ScrollTrigger** - Scroll-based animation triggers
- **Particles.js** - Interactive particle background
- **Typed.js** - Typing animation effects
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins & Inter font families

### Features & Techniques
- CSS Grid & Flexbox for responsive layouts
- CSS Custom Properties (CSS Variables)
- Glass-morphism design (backdrop-filter)
- CSS Gradients and animations
- Intersection Observer API
- RequestAnimationFrame for smooth animations
- Debouncing and throttling for performance

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Complete stylesheet with animations
├── js/
│   └── main.js         # All JavaScript functionality
├── images/             # Placeholder for images
└── README.md           # Project documentation
```

## 🎨 Color Scheme

The portfolio uses a sophisticated dark theme with electric blue and purple accents:

- **Primary**: `#00d4ff` (Electric Blue)
- **Secondary**: `#6c5ce7` (Purple)
- **Background Dark**: `#0a0e27`
- **Background Light**: `#1a1f3a`
- **Text**: `#e4e4e7`
- **Text Dim**: `#a1a1aa`

## 🛠️ Setup & Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Quick Start

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open with a local server** (recommended)
   
   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   Using Node.js (with http-server):
   ```bash
   npx http-server
   ```
   
   Using VS Code Live Server:
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

3. **Open in browser**
   - Navigate to `http://localhost:8000` (or the port shown)
   - Or simply open `index.html` directly in your browser

### No Installation Required
All libraries are loaded via CDN, so no package installation is needed. The website will work immediately after opening the HTML file.

## 🎯 Customization Guide

### Updating Personal Information

1. **Edit index.html**
   - Replace placeholder text in the hero section
   - Update about section with your bio
   - Modify skills lists with your expertise
   - Add your actual projects
   - Update contact information and social links

2. **Edit css/styles.css**
   - Adjust color scheme in `:root` CSS variables
   - Modify spacing, fonts, or animations as needed

3. **Edit js/main.js**
   - Update the Typed.js strings array with your roles
   - Adjust animation timings if desired

### Adding Projects

To add a new project, copy this structure in the `projects-grid`:

```html
<div class="project-card" data-category="analyst">
    <div class="project-image">
        <div class="project-overlay">
            <a href="#" class="project-link">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
    <div class="project-content">
        <div class="project-category">Data Analyst</div>
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">
            Your project description here.
        </p>
        <div class="project-tech">
            <span class="tech-tag">Tech1</span>
            <span class="tech-tag">Tech2</span>
        </div>
    </div>
</div>
```

### Adding Skills

To add a new skill, copy this structure:

```html
<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">
            <i class="fas fa-icon-name"></i>
            Skill Name
        </span>
        <span class="skill-percentage">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="90"></div>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

The layout automatically adapts to different screen sizes with optimized navigation, grids, and spacing.

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators for interactive elements
- Sufficient color contrast (WCAG AA)
- Reduced motion support for users who prefer it
- Screen reader friendly

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

**Note**: Some advanced features like backdrop-filter may have limited support in older browsers.

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them!

## 📧 Contact

For questions or suggestions regarding this portfolio template:
- Update the contact section with your information
- Replace social media links with your profiles

## 🙏 Credits

- **GSAP** - Animation library by GreenSock
- **Particles.js** - Particle effects by Vincent Garreau
- **Typed.js** - Typing animation by Matt Boldt
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins and Inter typefaces

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch and folder
4. Save and wait for deployment

### Netlify
1. Drag and drop the portfolio folder to Netlify
2. Or connect your GitHub repository
3. Your site will be live instantly

### Vercel
1. Import your GitHub repository
2. Vercel will automatically detect and deploy
3. Get a production URL instantly

---

**Built with ❤️ and data** | © 2026 Data Analyst & Engineer Portfolio
