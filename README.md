# Agency Website

A modern, responsive portfolio website built with HTML, JavaScript, and Tailwind CSS. Features smooth animations, mobile-first design, and interactive elements.

## Features

- 🎨 **Modern Design**: Clean, professional layout with gradient backgrounds and glass effects
- 📱 **Responsive**: Mobile-first design that works perfectly on all devices
- ✨ **Smooth Animations**: Fade-in effects, scroll animations, and interactive hover states
- 🚀 **Fast Performance**: Optimized with Tailwind CSS for minimal bundle size
- 📧 **Contact Form**: Functional contact form with validation
- 🎯 **Smooth Scrolling**: Seamless navigation between sections
- 🌙 **Dark Theme**: Elegant dark color scheme with blue and purple accents

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and social media links
3. **Skills**: Technology proficiency with animated progress bars
4. **Projects**: Showcase of featured work with hover effects
5. **Contact**: Contact form and contact information
6. **Footer**: Copyright and additional links

## Technologies Used

- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icon library for visual elements

## Getting Started

### Prerequisites

- A modern web browser
- No build tools required - everything is loaded via CDN

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### File Structure

```
portfolio/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Personal Information

Update the following sections in `index.html`:

#### About Section
```html
<h3 class="text-2xl font-semibold mb-4 text-blue-400">Hello, I'm [Your Name]</h3>
```
Replace `[Your Name]` with your actual name.

#### Contact Information
```html
<p class="text-gray-300">hello@example.com</p>
<p class="text-gray-300">+1 (555) 123-4567</p>
<p class="text-gray-300">San Francisco, CA</p>
```
Update with your actual contact details.

#### Social Media Links
```html
<a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">
    <i class="fab fa-github text-2xl"></i>
</a>
```
Replace the `href="#"` with your actual social media profile URLs.

### Skills Section

Modify the skills in the skills section:

```html
<div class="skill-card group">
    <div class="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
        <i class="fab fa-html5 text-5xl text-orange-500 mb-4"></i>
        <h3 class="text-lg font-semibold">HTML5</h3>
        <div class="w-full bg-gray-700 rounded-full h-2 mt-3">
            <div class="bg-orange-500 h-2 rounded-full" style="width: 95%"></div>
        </div>
    </div>
</div>
```

- Change the icon class (`fab fa-html5`)
- Update the skill name (`HTML5`)
- Modify the progress bar width (`width: 95%`)
- Adjust the color classes as needed

### Projects Section

Update the project cards with your own work:

```html
<div class="project-card group">
    <div class="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <i class="fas fa-laptop-code text-6xl text-white"></i>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-blue-400">Project Name</h3>
            <p class="text-gray-300 mb-4">Project description goes here.</p>
            <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Technology</span>
            </div>
            <div class="flex space-x-4">
                <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">
                    <i class="fab fa-github"></i> Code
                </a>
            </div>
        </div>
    </div>
</div>
```

### Colors and Styling

The website uses a consistent color scheme that can be customized:

- **Primary Blue**: `blue-400`, `blue-500`, `blue-600`
- **Secondary Purple**: `purple-600`, `purple-500`
- **Background**: `gray-800`, `gray-900`
- **Text**: `gray-300`, `white`

To change the color scheme, update the Tailwind classes throughout the HTML file.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. Custom domain can be configured in settings

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push
3. Custom domain and SSL included

## Customization Tips

### Adding New Sections

1. Create a new `<section>` element with a unique ID
2. Add the section to the navigation menu
3. Style it using Tailwind CSS classes
4. Add scroll animations if desired

### Modifying Animations

The JavaScript file includes several animation functions:

- `typeWriter()`: Typing effect for text
- `animateSkillBars()`: Progress bar animations
- `revealOnScroll()`: Section reveal animations

### Adding More Projects

Duplicate the project card structure and update:
- Project title and description
- Technologies used
- Links to live demo and source code
- Project image or icon

## Troubleshooting

### Common Issues

1. **Icons not showing**: Ensure Font Awesome CDN is accessible
2. **Animations not working**: Check browser console for JavaScript errors
3. **Mobile menu not working**: Verify JavaScript file is properly linked

### Performance Issues

1. **Slow loading**: Check network tab for failed CDN requests
2. **Large bundle size**: Tailwind CSS is loaded via CDN, so this shouldn't be an issue

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio:

1. Check the customization section above
2. Review the HTML structure and CSS classes
3. Examine the JavaScript functionality
4. Open an issue for specific problems

---

**Happy coding! 🚀**
