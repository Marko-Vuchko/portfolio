# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Open the Portfolio
Simply double-click on `index.html` to open it in your default browser.

**OR** for a better experience, use a local server:

#### Option A: Using VS Code Live Server
1. Open the portfolio folder in VS Code
2. Install "Live Server" extension
3. Right-click on `index.html` → "Open with Live Server"

#### Option B: Using Python
```bash
python -m http.server 8000
```
Then open: http://localhost:8000

#### Option C: Using Node.js
```bash
npx http-server
```

### Step 2: Customize Your Content

#### Edit Personal Information
Open `index.html` and update:
- Line 45-50: Your name and title in hero section
- Line 82-95: Your bio in about section
- Line 103-107: Your statistics (years, projects, clients)
- Line 487-517: Your contact information and social links

#### Update Your Projects
Find the projects section (lines 299-480) and:
- Replace project titles
- Update descriptions
- Change technology tags
- Add your project links

#### Customize Your Skills
Edit skills section (lines 139-294):
- Add/remove skills
- Adjust percentages
- Change icons

### Step 3: Adjust Colors & Branding (Optional)

Open `css/styles.css` and edit the `:root` section (lines 7-50):

```css
:root {
    --color-primary: #00d4ff;      /* Change main accent color */
    --color-secondary: #6c5ce7;     /* Change secondary color */
    --color-bg-dark: #0a0e27;       /* Change background */
}
```

## 📋 What You Get

✅ **Fully Responsive Website** - Works on all devices
✅ **Modern Animations** - GSAP-powered smooth animations
✅ **Interactive Particles** - Dynamic background in hero section
✅ **Typing Effect** - Auto-typing roles animation
✅ **Glass-morphism Design** - Modern UI with blur effects
✅ **Custom Cursor** - Elegant cursor on desktop
✅ **Project Filtering** - Filter between Data Analyst and Engineer projects
✅ **Animated Skills** - Progress bars that animate on scroll
✅ **Counter Animations** - Statistics that count up
✅ **Mobile Menu** - Hamburger menu for mobile devices
✅ **Scroll Animations** - Elements fade in as you scroll
✅ **No Build Required** - Everything works immediately

## 🎨 Key Features

### Animations Include:
- Loading screen animation
- Scroll progress indicator
- Fade-in effects on all sections
- Skill bar animations
- Counter animations for stats
- Project card hover effects
- Smooth scrolling between sections
- Parallax effects
- Magnetic button effects

### Premium Libraries Used:
- **GSAP 3.12.5** - Professional animations
- **ScrollTrigger** - Scroll-based animations
- **Particles.js 2.0** - Particle background
- **Typed.js 2.0** - Typing animation
- **Font Awesome 6.5** - Icons

All loaded via CDN - no installation needed!

## 🔧 Customization Tips

### Change Typing Animation Text
Edit `js/main.js` around line 177:
```javascript
strings: [
    'Your Role 1',
    'Your Role 2',
    'Your Role 3'
]
```

### Adjust Animation Speed
In `js/main.js`, modify the `duration` values in GSAP animations.

### Change Particle Color
In `js/main.js` around line 138, update:
```javascript
color: {
    value: '#00d4ff'  // Change particle color
}
```

### Add More Social Links
Copy a social link button in `index.html` (around line 506) and update:
```html
<a href="#" class="social-link" aria-label="Platform">
    <i class="fab fa-icon-name"></i>
</a>
```

## 📱 Testing on Mobile

1. Open in browser with local server
2. Press F12 to open DevTools
3. Click the device toggle icon (or Ctrl+Shift+M)
4. Select different device sizes to test

## 🌐 Deployment

### Deploy to Netlify (Free)
1. Go to netlify.com
2. Drag and drop your portfolio folder
3. Done! Get instant URL

### Deploy to GitHub Pages (Free)
1. Create GitHub repository
2. Push your code
3. Go to Settings → Pages
4. Select main branch
5. Save and get your URL

### Deploy to Vercel (Free)
1. Go to vercel.com
2. Import your GitHub repo
3. Deploy with one click

## ❓ Common Issues

**Issue**: Animations not working
**Solution**: Make sure you have internet connection (libraries load from CDN)

**Issue**: Particles not showing
**Solution**: Check browser console for errors, ensure particles.js loaded

**Issue**: Custom cursor not visible
**Solution**: Custom cursor only shows on desktop with mouse (not on touch devices)

**Issue**: Mobile menu not closing
**Solution**: Click the hamburger icon again or click a navigation link

## 📧 Need Help?

Check the main README.md for detailed documentation.

## 🎉 You're All Set!

Your portfolio is ready to impress. Good luck with your data career!

---

**Pro Tip**: Bookmark this page for quick reference when customizing.
