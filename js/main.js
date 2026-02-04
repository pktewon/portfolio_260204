document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Smooth Scroll for navigation --- 
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- 2. Scroll Trigger Animation with Intersection Observer --- 
    const animatedSections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, { threshold: 0.1 });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // --- 4. Tab Interface (from original file) --- 
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = document.querySelector(button.dataset.tab);
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            tabContents.forEach(content => content.classList.remove('active'));
            if(targetTab) targetTab.classList.add('active');
        });
    });

    // --- 5. Back to Top Button (from original file) --- 
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- 6. Mobile Menu Toggle (from original file) --- 
    const menuToggleBtn = document.querySelector('.menu-toggle-btn');
    const nav = document.querySelector('nav');
    if (menuToggleBtn && nav) {
        menuToggleBtn.addEventListener('click', () => {
            nav.classList.toggle('is-open');
        });
    }
});
