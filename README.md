# GrowthLab - Digital Growth Startup Website

A modern, minimalistic website for a digital growth startup built with pure HTML, CSS, and JavaScript. The site is optimized for GitHub Pages hosting and features a clean green-themed design.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, minimalistic design with smooth animations
- **Green Theme**: Professional color palette (#2ECC71, #27AE60, #ECF0F1, #FFFFFF)
- **Fast Loading**: Optimized for performance with efficient code and assets
- **SEO Friendly**: Semantic HTML structure with proper meta tags
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Interactive Elements**: Smooth scrolling, hover effects, and form validation

## 📁 Project Structure

\`\`\`
├── index.html          # Home page
├── services.html       # Services page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
\`\`\`

## 🎨 Design Features

### Color Palette
- **Primary**: #2ECC71 (Green)
- **Secondary**: #27AE60 (Dark Green)
- **Background**: #ECF0F1 (Light Gray)
- **Text**: #FFFFFF (White) on dark backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 700 (Bold)

### Icons
- **Font Awesome 6.4.0** (loaded via CDN)

## 📱 Pages Overview

### Home Page (index.html)
- Hero section with compelling headline and CTA
- Services preview with icons
- Client testimonials
- Footer with contact information

### Services Page (services.html)
- Detailed service descriptions
- Feature lists for each service
- Individual CTAs for each service

### About Page (about.html)
- Company mission and values
- Team member profiles
- Company statistics

### Contact Page (contact.html)
- Contact form with validation
- Contact methods (email, phone, address)
- FAQ section

## 🛠️ Technical Features

### JavaScript Functionality
- Mobile navigation toggle
- Sticky navigation with scroll effects
- Smooth scrolling for anchor links
- Form validation with error handling
- Intersection Observer for animations
- Counter animations for statistics
- Parallax effects

### CSS Features
- CSS Grid and Flexbox layouts
- CSS animations and transitions
- Mobile-first responsive design
- Custom properties for consistent theming
- Optimized for performance

## 🚀 Deployment to GitHub Pages

### Quick Setup

1. **Fork or Download** this repository
2. **Upload files** to your GitHub repository
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

### Custom Domain (Optional)

1. Add a `CNAME` file to the root directory with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable "Enforce HTTPS" in repository settings

### File Structure for GitHub Pages
\`\`\`
your-repo/
├── index.html          # Required: GitHub Pages entry point
├── services.html
├── about.html
├── contact.html
├── styles.css
├── script.js
└── README.md
\`\`\`

## 🔧 Customization

### Changing Colors
Update the CSS custom properties in `styles.css`:

\`\`\`css
:root {
    --primary-color: #2ECC71;
    --secondary-color: #27AE60;
    --background-color: #ECF0F1;
    --text-color: #333;
}
\`\`\`

### Adding Content
- **Images**: Replace placeholder URLs with your own images
- **Text**: Update content in HTML files
- **Contact Info**: Modify contact details in footer and contact page
- **Services**: Add or modify services in the services section

### Form Integration
The contact form currently shows a success message. To integrate with a backend:

1. **Formspree**: Add `action="https://formspree.io/f/YOUR_FORM_ID"` to the form
2. **Netlify Forms**: Add `netlify` attribute to the form tag
3. **Custom Backend**: Modify the JavaScript form handler

## 📊 Performance Optimization

- **Minified CSS**: Consider minifying CSS for production
- **Image Optimization**: Use WebP format for better compression
- **CDN Usage**: External resources loaded from CDN
- **Lazy Loading**: Images use `loading="lazy"` attribute
- **Efficient JavaScript**: Debounced scroll events and optimized animations

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Fallbacks**: Graceful degradation for older browsers

## 📝 SEO Features

- Semantic HTML structure
- Meta descriptions and titles
- Open Graph tags ready for social sharing
- Structured data markup ready
- Fast loading times
- Mobile-friendly design

## 🔒 Security Considerations

- No server-side code (static site)
- External resources loaded over HTTPS
- Form validation on client-side (add server-side validation for production)
- No sensitive data stored in client-side code

## 📞 Support

For questions or issues:
- Create an issue in the GitHub repository
- Check the browser console for JavaScript errors
- Validate HTML/CSS using W3C validators

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for digital growth startups**

Ready to launch your digital presence? Deploy this site to GitHub Pages and start growing your business online!
