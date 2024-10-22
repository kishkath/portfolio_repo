// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation (if you have any form)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Message sent successfully!');
        form.reset(); // Clear the form
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
}

// Theme Toggle (Light/Dark Mode)
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Theme';
toggleButton.classList.add('theme-toggle');
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        toggleButton.textContent = 'Switch to Light Theme';
    } else {
        toggleButton.textContent = 'Switch to Dark Theme';
    }
});

// Add the dark-theme styles
const style = document.createElement('style');
style.innerHTML = `
    .dark-theme {
        background-color: #1e1e1e;
        color: #f0f0f0;
    }
    .dark-theme header, .dark-theme footer {
        background-color: #333;
    }
    .dark-theme .project-card {
        background-color: #2a2a2a;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    }
    .theme-toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);

// Show/Hide Contact Details based on Dropdown Selection
document.getElementById('contactDropdown').addEventListener('change', function() {
    const contactDetails = document.getElementById('contactDetails');
    if (this.value === 'yes') {
        contactDetails.style.display = 'flex'; // Show contact details
    } else {
        contactDetails.style.display = 'none'; // Hide contact details
    }
});

