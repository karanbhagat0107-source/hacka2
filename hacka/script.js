// Smooth scrolling to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// CTA button click tracking (for analytics)
document.querySelectorAll('.cta-button.primary').forEach(button => {
    button.addEventListener('click', () => {
        // Replace with your analytics/tracking code
        console.log('CTA Button Clicked - Ready for purchase!');
        // window.location.href = 'https://your-checkout-link.com';
    });
});