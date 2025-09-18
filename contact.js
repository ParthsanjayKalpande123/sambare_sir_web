<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

        document.addEventListener('DOMContentLoaded', function() {
            // Set current year in footer
            document.getElementById('current-year').textContent = new Date().getFullYear();

            // Contact Form Submission (Placeholder)
            const contactForm = document.getElementById('contact-form');
            const formStatus = document.getElementById('form-status');

            contactForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default form submission

                const fullName = document.getElementById('fullName').value;
                const emailAddress = document.getElementById('emailAddress').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;

                // In a real application, you would send this data to a server
                // using fetch() or XMLHttpRequest (e.g., to a backend API,
                // a serverless function, or a third-party form service).
                console.log('Contact Form Submitted:', { fullName, emailAddress, subject, message });

                // Simulate a successful submission
                formStatus.textContent = 'Your message has been sent successfully! I will get back to you soon.';
                formStatus.classList.remove('text-danger');
                formStatus.classList.add('text-success');
                formStatus.style.display = 'block';

                // Clear the form
                contactForm.reset();

                // Hide status message after a few seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 7000);
            });

            // JavaScript for fade-in animation on scroll
            const fadeInSections = document.querySelectorAll('.fade-in-section');

            const observerOptions = {
                root: null, // viewport as the root
                rootMargin: '0px',
                threshold: 0.1 // 10% of the item must be visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            }, observerOptions);

            fadeInSections.forEach(section => {
                observer.observe(section);
            });
        });
