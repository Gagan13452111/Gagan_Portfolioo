// 1. Smooth Scrolling for Sidebar Navigation
document.querySelectorAll('.sidebar-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const contentArea = document.querySelector('.content-area');

        if (targetElement && contentArea) {
            // Calculate the position relative to the top of the content area
            const targetPosition = targetElement.offsetTop - contentArea.offsetTop;
            
            // Scroll the content area to the target section
            contentArea.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 2. Contact Form Submission (Simulation)
const contactForm = document.getElementById('contact-form-v2');
const formMessage = document.getElementById('form-message-v2');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    // Simple client-side simulation for presentation
    formMessage.style.color = 'var(--primary-color)';
    formMessage.textContent = `Sending message...`;

    setTimeout(() => {
        formMessage.textContent = `✅ Message received successfully! I will respond shortly.`;
        contactForm.reset();
        
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
        
    }, 2000); 
});