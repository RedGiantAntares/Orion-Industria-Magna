# Orion Industria Magna Website - Documentation

## Overview

This documentation provides instructions on how to use, modify, and deploy the Orion Industria Magna website. The website is designed for a Star Citizen organization focused on mining, salvaging, and transport operations.

## Website Structure

The website is built using HTML, CSS, and JavaScript with a responsive design that works on desktop and mobile devices. The file structure is organized as follows:

```
orion-industria-magna/
├── website/
│   ├── css/
│   │   ├── style.css       # Main stylesheet
│   │   ├── responsive.css  # Responsive design styles
│   │   └── animations.css  # Animation effects
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   ├── images/             # All website images
│   └── index.html          # Main HTML file
├── assets/                 # Original image files
└── documentation.md        # This documentation file
```

## Features

The website includes the following features:

1. **Responsive Design**: Works on all device sizes (desktop, tablet, mobile)
2. **Navigation Menu**: Easy navigation with smooth scrolling
3. **Operations Tabs**: Interactive tabs for mining, salvaging, and transport operations
4. **Fleet Showcase**: Information about the organization's ships
5. **Recruitment Form**: Form for potential members to join the organization
6. **Modern Styling**: Professional and futuristic design matching Star Citizen's aesthetic

## How to Use

### Viewing the Website Locally

1. Extract the zip file to a location on your computer
2. Open the `website` folder
3. Double-click on `index.html` to open it in your web browser

### Hosting the Website Online

To make the website available online, you'll need to upload the contents of the `website` folder to a web hosting service. Here are general steps:

1. Sign up for a web hosting service (e.g., GitHub Pages, Netlify, AWS, etc.)
2. Follow the hosting provider's instructions to upload the website files
3. Typically, you'll upload the contents of the `website` folder to the root directory of your hosting space

## Customization Guide

### Modifying Content

To update the website content:

1. Open `index.html` in a text editor
2. Find the section you want to modify
3. Update the text between the HTML tags
4. Save the file and refresh your browser to see the changes

### Changing Images

To replace images:

1. Prepare your new image (recommended formats: PNG or JPG)
2. Name it the same as the image you want to replace
3. Place it in the `website/images/` folder, overwriting the existing file
4. If using a different filename, update the corresponding `<img>` tag in `index.html`

### Updating Styles

To modify the website's appearance:

1. Open the CSS files in the `website/css/` folder
2. `style.css` contains the main styling
3. `responsive.css` contains styles for different screen sizes
4. `animations.css` contains animation effects
5. Make your changes and save the files

### Modifying the Recruitment Form

The recruitment form is set up to simulate form submission. To connect it to an actual form processing service:

1. Open `index.html` and locate the form element (`<form id="recruitment-form">`)
2. Add an `action` attribute with the URL of your form processing service
3. Update the form handling in `main.js` if necessary

## Logo and Branding

The website includes the following logo variations:

- `logo-main.png`: Main logo with full organization name
- `logo-horizontal.png`: Horizontal version for the header
- `logo-icon.png`: Icon-only version for favicon and small applications

## Browser Compatibility

The website is compatible with modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Additional Resources

The project includes design files that were used during development:

- `website-plan.md`: Overall website structure and plan
- `wireframes.md`: Layout wireframes for key pages
- `content-plan.md`: Content organization and structure
- `color-palette.md`: Color scheme details
- `typography-guide.md`: Font information and usage guidelines
- `logo-design-brief.md`: Logo design specifications

## Support

For questions or assistance with the website, please contact the developer who provided this website to you.

---

© 2025 Orion Industria Magna. All rights reserved.

