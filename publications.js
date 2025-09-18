<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

        document.addEventListener('DOMContentLoaded', function() {
            // Set current year in footer
            document.getElementById('current-year').textContent = new Date().getFullYear();

            const publications = [
        {
          title: "A Brief Review of Handover schemes in Wireless communication",
          authors: "Ms. Madhuri R. Pawar, Prof. Santosh S. Sambare",
          journal: "International Journal of Computer Science and Information Technologies (IJCSIT)",
          year: 2012,
          volume: "3",
          issue: "1",
          pages: "3269–3278",
          link: "",
          type: "Journal Article",
          icon: "fas fa-journal-whills"
        },
        {
          title: "Seamless Handoff in Next Generation Wireless System",
          authors: "Poonam Bhilare, S. S. Sambare",
          journal: "IJCSIT",
          year: 2011,
          volume: "2",
          issue: "6",
          pages: "2525-2530",
          link: "",
          type: "Journal Article",
          icon: "fas fa-journal-whills"
        },
        {
          title: "QoS based Vertical Handoff Algorithm for Next Generation of Wireless Network",
          authors: "Ravindra C. Sanap, S. S. Sambare",
          journal: "IJCA",
          year: 2013,
          volume: "82",
          issue: "11",
          pages: "",
          link: "",
          type: "Journal Article",
          icon: "fas fa-journal-whills"
        },
        {
          title: "Survey of different Clustering Algorithms used to Increase the Lifetime of Wireless Sensor Networks",
          authors: "Satyajit Shinge, S. S. Sambare",
          journal: "International Journal of Computer Applications",
          year: 2014,
          volume: "108",
          issue: "10",
          pages: "",
          link: "",
          type: "Journal Article",
          icon: "fas fa-journal-whills"
        },
        {
          title: "AI-Driven Traffic Management Systems In Smart Cities: A Review",
          authors: "Ravina D Chavan, Dr. G. B. Sambare",
          journal: "Educational Administration: Theory and Practice",
          year: 2024,
          volume: "30",
          issue: "5",
          pages: "105-116",
          link: "https://doi.org/10.53555/kuey.v30i5.2780",
          type: "Journal Article",
          icon: "fas fa-journal-whills"
        },
        {
          title: "Gmail Phishing Detector Extension: A Machine Learning-based Chrome Extension for Real-Time Phishing Detection",
          authors: "Dr. G. B. Sambare, Gauri Pawar et.al.",
          conference: "ICT4SD 2025 (Proceedings by Springer)",
          location: "Goa, India",
          year: 2025,
          link: "",
          type: "Conference Paper",
          icon: "fas fa-microphone"
        },
        {
          title: "Survey of Interactive Document Query Systems Using RAG and LangChain",
          authors: "Dr. G. B. Sambare, Vedant Sonawane, et. al.",
          conference: "IEEE ICOCT 2025",
          location: "",
          year: 2025,
          link: "",
          type: "Conference Paper",
          icon: "fas fa-microphone"
        },
        {
          title: "Design an Algorithm for making Handover decision in 5G Networks Using Network Slicing",
          authors: "Dr. G. B. Sambare, Kshitij Magare",
          conference: "IEEE I2ITCON",
          location: "",
          year: 2025,
          link: "",
          type: "Conference Paper",
          icon: "fas fa-microphone"
        },
        {
          title: "Real-time Fire Detection System using YOLOv8 and Raspberry Pi",
          authors: "Dr. G. B. Sambare, Rutuja Adagale, et. al.",
          conference: "IEEE International Conference on Smart Technologies",
          location: "Pune, India",
          year: 2023,
          link: "",
          type: "Conference Paper",
          icon: "fas fa-microphone"
        },
        {
          title: "Cyber Security Issues in IoT Enabled Smart Cities",
          authors: "Dr. G. B. Sambare, et. al.",
          journal: "International Journal of Engineering Research & Technology (IJERT)",
          year: 2021,
          volume: "10",
          issue: "4",
          pages: "1-5",
          link: "",
          type: "Journal Article",
          icon: "fas fa-journal-whills"
        }
      ];
            const publicationsListDiv = document.getElementById('publications-list');

            publications.forEach(pub => {
                let details = '';
                let iconClass = pub.icon; // Use the specific icon defined in the data

                if (pub.type === "Journal Article") {
                    details = `${pub.journal}, ${pub.volume ? `Vol. ${pub.volume}, ` : ''}${pub.issue ? `No. ${pub.issue}, ` : ''}pp. ${pub.pages}, ${pub.year}.`;
                } else if (pub.type === "Conference Paper") {
                    details = `${pub.conference}, ${pub.location}, ${pub.year}.`;
                } else if (pub.type === "Book Chapter") {
                    details = `In: ${pub.book} (Ed.), ${pub.publisher}, ${pub.year}.`;
                }

                const publicationCardHtml = `
                    <div class="col-12 col-md-6 col-lg-6 d-flex">
                        <div class="card publication-card fade-in-card"> <!-- Added fade-in-card class -->
                            <div class="card-body">
                                <h2 class="pub-title">${pub.title}</h2>
                                <p class="pub-authors">
                                    <i class="fas fa-users pub-icon"></i> ${pub.authors}
                                </p>
                                <p class="pub-details">
                                    <i class="${iconClass} pub-icon"></i> ${details}
                                </p>
                                ${pub.link ? `
                                <a href="${pub.link}" target="_blank" class="pub-link">
                                    <i class="fas fa-external-link-alt"></i> View Publication
                                </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;
                publicationsListDiv.insertAdjacentHTML('beforeend', publicationCardHtml);
            });

            // JavaScript for fade-in animation on scroll
            const fadeInCards = document.querySelectorAll('.fade-in-card');

            const observerOptions = {
                root: null, // viewport as the root
                rootMargin: '0px',
                threshold: 0.2 // 20% of the item must be visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            }, observerOptions);

            fadeInCards.forEach(card => {
                observer.observe(card);
            });
        });
    