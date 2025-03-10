document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the formData to your backend
    console.log('Form submitted:', formData);
    
    // Clear form
    this.reset();
    
    // Show success message (you can customize this)
    alert('Thank you for your message! We will get back to you soon.');
});

// Add animation for form inputs
document.querySelectorAll('.form-group input, .form-group textarea').forEach(element => {
    element.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    element.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});