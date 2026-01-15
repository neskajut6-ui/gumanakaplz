// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple alert for demo; replace with actual submission logic (e.g., send to server)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear form
    this.reset();
});