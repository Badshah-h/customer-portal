document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeUI(newTheme);
    });
    
    function updateThemeUI(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        
        // Modern, clean styling for the toggle button with #D39931 background
        themeToggle.classList.remove('btn-custom');
        themeToggle.classList.add('btn', 'rounded-circle', 'p-2');
        themeToggle.style.width = '40px';
        themeToggle.style.height = '40px';
        themeToggle.style.display = 'inline-flex';
        themeToggle.style.alignItems = 'center';
        themeToggle.style.justifyContent = 'center';
        themeToggle.style.backgroundColor = '#D39931';
        themeToggle.style.border = 'none';
        themeToggle.style.color = '#ffffff'; // White color for the icon
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Simple counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Animation speed in milliseconds
    
    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText;
            const time = value / speed;
            
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        }
        
        // Set initial data-target
        const targetValue = counter.innerText;
        counter.innerText = '0';
        counter.setAttribute('data-target', targetValue);
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter.parentElement);
    });
});
// Fade in elements on scroll
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade(); // Initial check
});