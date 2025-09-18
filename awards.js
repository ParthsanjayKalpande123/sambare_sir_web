 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

        document.addEventListener('DOMContentLoaded', function() {
            // Set current year in footer
            document.getElementById('current-year').textContent = new Date().getFullYear();

             const awards = [
        {
          id: 1,
          title: "Certified Internal Auditor",
          organization: "PCCOE, Pune",
          year: 2023,
          description: "Completed 2-day internal auditor workshop at PCCOE.",
          icon: "fas fa-certificate"
        },
        {
          id: 2,
          title: "NEP 2020 Orientation & Sensitization Programme",
          organization: "UGC-MMTTC, SPPU, Pune",
          year: 2024,
          description: "Completed 2-week orientation & sensitization program on NEP 2020.",
          icon: "fas fa-chalkboard-teacher"
        },
        {
          id: 3,
          title: "Academia-Industry Synergy FDP",
          organization: "Dept. AI & DS, VIT Pune",
          year: 2025,
          description: "One-week FDP focused on bridging academia and industry partnerships.",
          icon: "fas fa-handshake"
        },
        {
          id: 4,
          title: "AI Bootcamp",
          organization: "CDAC, Pune in association with PCCOE",
          year: 2025,
          description: "Completed a 5-day hands-on bootcamp on Artificial Intelligence applications.",
          icon: "fas fa-robot"
        },
        {
          id: 5,
          title: "NPTEL Certification: Systems and Usable Security",
          organization: "NPTEL Online",
          year: 2025,
          description: "Completed 4-week online course on system and usable security principles.",
          icon: "fas fa-shield-alt"
        },
        {
          id: 6,
          title: "FDP on Sustainable AI Application Development",
          organization: "Dept. of IT, VIIT Pune with IEEE Computer Society",
          year: 2025,
          description: "Completed 1-week FDP exploring sustainable development with AI.",
          icon: "fas fa-leaf"
        },
        {
  id: 7,
  title: "FDP on Data Visualization in Power BI",
  organization: "Ajeenkya DY Patil School of Engineering, SPPU, Pune",
  year: 2023,
  description: "Completed a 5-day FDP on visualizing data effectively using Microsoft Power BI.",
  icon: "fas fa-chart-pie"
},
{
  id: 8,
  title: "FDP on Mastering Salesforce Basics",
  organization: "Ajeenkya DY Patil School of Engineering, SPPU, Pune",
  year: 2024,
  description: "Completed a 5-day FDP focused on CRM success using Salesforce fundamentals.",
  icon: "fas fa-cloud"
},
{
  id: 9,
  title: "National Workshop on Curriculum Design for NEP 2020",
  organization: "National Level Workshop",
  year: 2025,
  description: "Participated in curriculum design workshop aligning with NEP 2020 guidelines.",
  icon: "fas fa-university"
},
{
  id: 10,
  title: "FDP on Qualitative & Quantitative Indicators in Engineering",
  organization: "PICT, Pune",
  year: 2022,
  description: "Completed one-week FDP on quality assurance and performance indicators in engineering institutions.",
  icon: "fas fa-tasks"
}

      ];
            const awardsListDiv = document.getElementById('awards-list');

            awards.forEach(award => {
                const awardCardHtml = `
                    <div class="col-12 col-md-6 d-flex">
                        <div class="card award-card fade-in-card"> <!-- Added fade-in-card class -->
                            <div class="card-body d-flex flex-column">
                                <div class="award-header">
                                    <div class="award-icon-wrapper">
                                        <i class="${award.icon} award-icon"></i>
                                    </div>
                                    <div class="award-title-group">
                                        <h2 class="award-title">${award.title}</h2>
                                        <p class="award-organization">${award.organization}</p>
                                    </div>
                                </div>
                                <p class="award-year">${award.year}</p>
                                <p class="award-description flex-grow-1">${award.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                awardsListDiv.insertAdjacentHTML('beforeend', awardCardHtml);
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
