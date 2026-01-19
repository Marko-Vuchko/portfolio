# How to Add Your MV Logo

## Quick Instructions

I've already updated the portfolio to use your MV logo! Here's what you need to do:

### Option 1: Use Your PNG/JPG Logo (Recommended)
1. Save your MV logo image as: `images/logo.png`
   - Or `images/logo.jpg` if it's a JPG
2. That's it! The website will automatically use it

### Option 2: Use the SVG I Created
- I've created an SVG version based on your logo description
- It's already saved as `images/logo.svg`
- The website is currently using this SVG
- If you prefer your original PNG, just save it as `images/logo.png` and it will be used instead

## What Changed

✅ **Updated HTML** - Navigation now uses an image logo instead of text
✅ **Updated CSS** - Added logo image styling with hover effects
✅ **Created SVG** - Made an SVG version based on your MV logo design
✅ **Fallback Support** - Will try SVG first, then fallback to PNG if available

## Logo Specifications

For best results, your logo should be:
- **Format**: PNG (with transparency) or SVG
- **Height**: 45-50px is optimal
- **Width**: Auto (maintains aspect ratio)
- **Background**: Transparent recommended

## Current Logo Features

The logo will:
- ✨ Scale smoothly on hover (1.05x)
- 💡 Brighten slightly when hovering
- 📏 Resize when scrolling (45px → 40px)
- 🎨 Maintain aspect ratio automatically
- 📱 Work perfectly on mobile

## File Locations

Your logo can be placed at:
- `images/logo.png` - Primary PNG logo
- `images/logo.svg` - Vector SVG logo (already created)
- `images/logo.jpg` - Alternative JPG format

The code will automatically try them in this order:
1. SVG (currently exists)
2. PNG (if you add it)
3. JPG (alternative)

## Preview Your Logo

1. Open `index.html` in your browser
2. Look at the top-left corner of the navigation
3. Your MV logo should be there!

## Customize Logo Size

If you want to adjust the logo size, edit `css/styles.css`:

```css
.logo-image {
    height: 45px;  /* Change this value */
    width: auto;
}
```

---

**Note**: I created an SVG version based on your logo description (MV letters with teal-to-cyan gradient). If you want to use your exact logo image, simply save it as `images/logo.png` and refresh the page!
