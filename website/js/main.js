// Orion Industria Magna - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavigation();
  initScrollEffects();
  initTabs();
  initGallery();
  initRecruitmentForm();
  initAnimations();
});

// Navigation functionality
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  // Sticky header on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      
      // Change icon based on menu state
      const icon = mobileMenuToggle.querySelector('i');
      if (navList.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        navList.classList.remove('active');
        
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
  
  // Active nav link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Scroll effects
function initScrollEffects() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal');
  
  function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', checkReveal);
  window.addEventListener('load', checkReveal);
}

// Tabs functionality
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show corresponding content
      const targetId = this.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });
}

// Gallery functionality
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imageSrc = this.querySelector('img').getAttribute('src');
      const caption = this.querySelector('.gallery-caption').textContent;
      
      // Create lightbox
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
      
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <span class="lightbox-close">&times;</span>
          <img src="${imageSrc}" alt="${caption}" class="lightbox-image">
          <div class="lightbox-caption">${caption}</div>
        </div>
      `;
      
      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden';
      
      // Close lightbox on click
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
          document.body.removeChild(lightbox);
          document.body.style.overflow = '';
        }
      });
      
      // Close lightbox on escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          if (document.querySelector('.lightbox')) {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
          }
        }
      });
    });
  });
  
  // Gallery filters
  const filterButtons = document.querySelectorAll('.gallery-filter');
  
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Filter gallery items
        const filterValue = this.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
}

// Recruitment form functionality
function initRecruitmentForm() {
  const recruitmentForm = document.getElementById('recruitment-form');
  
  if (recruitmentForm) {
    recruitmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      let isValid = true;
      const requiredFields = recruitmentForm.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      if (!isValid) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
      }
      
      // Simulate form submission
      const submitButton = recruitmentForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
      
      // Simulate API call with timeout
      setTimeout(() => {
        showFormMessage('Your application has been submitted successfully! We will contact you soon.', 'success');
        recruitmentForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }, 1500);
    });
    
    // Function to show form messages
    function showFormMessage(message, type) {
      let messageElement = document.querySelector('.form-message');
      
      if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.classList.add('form-message');
        recruitmentForm.appendChild(messageElement);
      }
      
      messageElement.textContent = message;
      messageElement.className = `form-message ${type}`;
      
      // Auto-hide message after 5 seconds
      setTimeout(() => {
        messageElement.classList.add('fade-out');
        setTimeout(() => {
          if (messageElement.parentNode) {
            messageElement.parentNode.removeChild(messageElement);
          }
        }, 500);
      }, 5000);
    }
  }
}

// Animations
function initAnimations() {
  // Laser beam animation for mining images
  const miningLasers = document.querySelectorAll('.mining-laser');
  
  miningLasers.forEach(laser => {
    laser.classList.add('laser-beam');
  });
  
  // Floating animation for space objects
  const spaceObjects = document.querySelectorAll('.space-object');
  
  spaceObjects.forEach(object => {
    object.classList.add('float');
  });
  
  // Typing animation for hero subtitle
  const heroSubtitle = document.querySelector('.hero-subtitle');
  
  if (heroSubtitle) {
    heroSubtitle.classList.add('typing');
  }
  
  // Counter animation for statistics
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    
    let current = 0;
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    // Start counter animation when element is in viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(counter);
  });
}

