// Modern header enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navigation
    const nav = document.querySelector('.main-nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (nav) {
            if (currentScrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
        
        lastScrollY = currentScrollY;
    });

    // Add typing effect to the tagline (optional enhancement)
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const text = tagline.textContent;
        const parts = text.split(' • ');
        let currentIndex = 0;
        
        // Only apply typing effect on larger screens
        if (window.innerWidth > 768) {
            tagline.style.opacity = '0.8';
            
            setInterval(() => {
                currentIndex = (currentIndex + 1) % parts.length;
                tagline.style.transition = 'opacity 0.3s ease';
                tagline.style.opacity = '0.5';
                
                setTimeout(() => {
                    tagline.textContent = parts[currentIndex];
                    tagline.style.opacity = '0.85';
                }, 300);
            }, 3000);
        }
    }

    // Add subtle parallax effect to header background
    const header = document.querySelector('.main-header');
    if (header && window.innerWidth > 768) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < window.innerHeight) {
                header.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Add mouse movement effect to header gradient
    const headerContent = document.querySelector('.main-header-content');
    if (headerContent && window.innerWidth > 768) {
        header.addEventListener('mousemove', function(e) {
            const rect = header.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / centerX;
            const moveY = (y - centerY) / centerY;
            
            headerContent.style.transform = `translate(${moveX * 10}px, ${moveY * 10}px)`;
        });
        
        header.addEventListener('mouseleave', function() {
            headerContent.style.transform = 'translate(0, 0)';
        });
    }
});
