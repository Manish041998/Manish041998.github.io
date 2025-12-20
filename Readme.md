# Sai Manish - Cybersecurity Portfolio Website

A high-tech, modern portfolio website showcasing cybersecurity expertise with advanced animations, 3D effects, and terminal-styled sections.

## 🚀 Features

- ✨ Smooth scroll animations with AOS library
- 🎨 3D parallax effects and card tilting
- 💻 Terminal/command-line inspired sections
- 🌌 Particle.js animated background
- 📱 Fully responsive design
- 📧 Contact form with email integration
- 🎯 Cybersecurity-themed dark design with neon accents

## 📋 Setup Instructions

### 1. Upload to GitHub

1. Go to your repository: https://github.com/Manish041998/Manish041998.github.io
2. Upload all the files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `CNAME` (already exists with: getsmandy.in)

### 2. Configure Contact Form

The contact form currently uses **Formspree** (free service). To activate it:

#### Option A: Using Formspree (Recommended - Free & Easy)

1. Go to: https://formspree.io/
2. Sign up with your email (saimanish041998@gmail.com)
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
5. In `index.html`, find this line (around line 536):
   ```html
   <form id="contact-form" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Replace `YOUR_FORM_ID` with your actual Formspree form ID

**Example:**
```html
<form id="contact-form" class="contact-form" action="https://formspree.io/f/xyzabc123" method="POST">
```

#### Option B: Using EmailJS (Alternative)

If you prefer EmailJS instead:

1. Go to: https://www.emailjs.com/
2. Sign up and create a service
3. Get your User ID, Service ID, and Template ID
4. Replace the form in `index.html` with EmailJS implementation
5. Add EmailJS SDK to the HTML

#### Option C: Using Netlify Forms (If hosting on Netlify)

Simply add `netlify` attribute to the form:
```html
<form id="contact-form" class="contact-form" netlify>
```

### 3. GitHub Pages Setup

1. Go to your repository Settings
2. Scroll to "Pages" section
3. Under "Source", select `main` branch
4. Click "Save"
5. Your site will be live at: https://getsmandy.in (since you have CNAME configured)

### 4. Custom Domain (Already Configured)

Your CNAME file already points to `getsmandy.in`. Make sure your domain registrar has these settings:

**DNS Records:**
- Type: `A` Record
  - Host: `@`
  - Value: `185.199.108.153`
  - Value: `185.199.109.153`
  - Value: `185.199.110.153`
  - Value: `185.199.111.153`

- Type: `CNAME` Record
  - Host: `www`
  - Value: `manish041998.github.io`

## 🎨 Customization

### Colors
Edit the `:root` variables in `styles.css`:
```css
--bg-primary: #0a0e27;
--accent-cyan: #00d9ff;
--accent-purple: #8b5cf6;
--accent-green: #00ff41;
```

### Content
All content is in `index.html` - simply update the text in each section.

### Contact Information
Update your contact details in the Contact section (around line 520):
- Email: saimanish041998@gmail.com (already set)
- LinkedIn: https://www.linkedin.com/in/saim-721384221 (already set)
- GitHub: https://github.com/Manish041998 (already set)

## 📚 Libraries Used

- **Particles.js** - Animated particle background
- **AOS (Animate On Scroll)** - Scroll animations
- **Font Awesome** - Icons
- **Google Fonts** - Orbitron, Fira Code, Inter

## 🔧 File Structure

```
portfolio-website/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── CNAME              # Custom domain configuration
└── README.md          # This file
```

## 🌐 Live Site

Once deployed:
- Primary URL: https://getsmandy.in
- GitHub Pages URL: https://manish041998.github.io

## 📱 Mobile Responsive

The site is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 💡 Tips

1. **Performance**: All external libraries are loaded via CDN for faster loading
2. **SEO**: Meta tags are included for better search engine optimization
3. **Accessibility**: Semantic HTML and proper ARIA labels used throughout
4. **Browser Support**: Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## 🐛 Troubleshooting

### Contact Form Not Working?
- Make sure you've set up Formspree and replaced `YOUR_FORM_ID`
- Check browser console for any errors
- Verify your email in Formspree dashboard

### Animations Not Working?
- Ensure all CDN links are loading properly
- Check browser console for JavaScript errors
- Clear browser cache and reload

### Site Not Updating?
- GitHub Pages can take 5-10 minutes to update
- Clear browser cache
- Try incognito/private mode

## 📧 Contact

For any questions or issues:
- Email: saimanish041998@gmail.com
- LinkedIn: https://www.linkedin.com/in/saim-721384221

---

**Built with** 💙 **by Sai Manish**

*Defending the Digital Frontier* 🛡️
