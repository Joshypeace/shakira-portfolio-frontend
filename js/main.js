document.addEventListener('DOMContentLoaded', function() {
    // Create animated stars background
    function createStars() {
        const container = document.getElementById('stars-container');
        const starCount = 100;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random properties for each star
            const size = Math.random() * 3;
            const duration = Math.random() * 5 + 5;
            const delay = Math.random() * 5;
            const xPos = Math.random() * 100;
            const yPos = Math.random() * 100;
            
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${xPos}%`;
            star.style.top = `${yPos}%`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;
            star.style.setProperty('--duration', `${duration}s`);
            
            container.appendChild(star);
        }
    }
    
    createStars();

    // Mobile menu toggle with smooth transition
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('hidden');
        } else {
            // Wait for transition to complete before hiding
            setTimeout(() => {
                if (!mobileMenu.classList.contains('show')) {
                    mobileMenu.classList.add('hidden');
                }
            }, 500);
        }
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 500);
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.add('opacity-0', 'invisible');
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ScrollReveal animations with more customization
    ScrollReveal().reveal('.skill-card', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        scale: 0.9,
        opacity: 0,
        viewFactor: 0.2
    });
    
    ScrollReveal().reveal('.project-card', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        scale: 0.9,
        opacity: 0,
        viewFactor: 0.2
    });
    
    ScrollReveal().reveal('#about div', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        scale: 0.95,
        opacity: 0,
        viewFactor: 0.3
    });
    
    ScrollReveal().reveal('#contact form', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        scale: 0.95,
        opacity: 0,
        viewFactor: 0.3
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active nav link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-purple-400');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-purple-400');
            }
        });
    });

    // Add floating animation to hero section elements
    const heroElements = document.querySelectorAll('#home h1, #home h2, #home p');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add('floating');
    });

    // Add glow effect to social icons on hover
    const socialIcons = document.querySelectorAll('footer a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.querySelector('i').classList.add('glow');
        });
        icon.addEventListener('mouseleave', () => {
            icon.querySelector('i').classList.remove('glow');
        });
    });
});


// BRAIDS PAGE

   document.querySelectorAll('.nav-pill').forEach(pill => {
            pill.addEventListener('click', function() {
                document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

//   ==================VIDEO================//
  document.addEventListener("DOMContentLoaded", function () {
      const videos = document.querySelectorAll("video");

      videos.forEach((video) => {
        video.addEventListener("play", () => {
          videos.forEach((v) => {
            if (v !== video) {
              v.pause();
            }
          });
        });
      });
    });


    // API INTERGRATION
//     document.getElementById('appointment-form').addEventListener('submit', async function (e) {
//   e.preventDefault();

//   const data = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     phone: document.getElementById('phone').value,
//     service: document.getElementById('service').value,
//     date: document.getElementById('date').value,
//     message: document.getElementById('message').value
//   };

//   try {
//     const res = await fetch('http://localhost:5500/api/appointment', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     });

//     const result = await res.json();
//     alert(result.message);
//   } catch (err) {
//     console.error(err);
//     alert("Could not book appointment. Try again later.");
//   }
// });
