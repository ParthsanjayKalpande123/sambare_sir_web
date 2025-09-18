
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('current-year').textContent = new Date().getFullYear();
        const experiences = [
  {
    institution: "Pimpri Chinchwad College of Engineering, Pune",
    role: "Associate Professor & Deputy HoD",
    dates: "Jan 2012 – Present",
    responsibilities: [
      "Subjects Taught: CN, MC, OSA, CO, OSD, SE, SMD, SPM, ASEPM (PG)",
      "Worked as HoD Computer/IT for 10+ years.",
      "Coordinator for NBA, Academics, In-Sem Exams, ARC, and AICTE Eduskill.",
      "Mentored BE/ME projects in IoT, AI/ML, Security.",
      "Handled roles as Training & Placement Coordinator, SIG Incharge, Lab Incharge.",
      "Coordinated Infosys Campus Connect & CSI Chapter."
    ]
  },
  {
    institution: "G.H. Raisoni College of Engineering & Management, Pune",
    role: "HoD, Computer Engineering",
    dates: "Aug 2008 – Jan 2012",
    responsibilities: [
      "UG Subjects: PPL, OS, DS, CN | PG Subjects: Mobile Computing, OSD, INS",
      "Worked as NBA Coordinator, Placement Incharge, Chairman ISTE Chapter.",
      "Guided UG and PG projects; contributed to accreditation processes."
    ]
  },
  {
    institution: "MPSTME, NMIMS, Mumbai",
    role: "Assistant Professor",
    dates: "Sep 2007 – Aug 2008",
    responsibilities: [
      "UG Subjects: CAO, OS | PG Subjects: Network Architecture, Mobile Communication",
      "Involved in curriculum development and project mentoring."
    ]
  },
  {
    institution: "Thakur College of Engineering & Technology, Mumbai",
    role: "HoD, IT & Placement Incharge",
    dates: "Feb 2006 – Aug 2007",
    responsibilities: [
      "Taught: SSOS, CN, Information Security, Software Engineering",
      "Infosys Campus Connect Coordinator and Corporate Training Coordinator."
    ]
  },
  {
    institution: "Saraswati College of Engineering, Navi Mumbai",
    role: "Lecturer",
    dates: "Sep 2005 – Feb 2006",
    responsibilities: [
      "Taught: Data Structures to UG students.",
      "Coordinated labs and supported academic planning."
    ]
  },
  
  {
    institution: "R.A.I.T., Navi Mumbai",
    role: "HoD CS/IT",
    dates: "Jul 2000 – Sep 2005",
    responsibilities: [
      "Subjects Taught: ITC, CO, OS, CN, Information Security, DCE, DS, AT",
      "Served as Project Incharge, Time-Table Coordinator, and Placement Coordinator.",
      "Led CSI Navi Mumbai Chapter as Secretary and supported accreditation."
    ]
  },
  {
    institution: "University of Mumbai",
    role: "BoS Member, Adhoc Committee",
    dates: "2002 – 2004",
    responsibilities: [
      "Worked on syllabus restructuring for Computer/IT departments.",
      "Active in curriculum revisions and university-level committees."
    ]
  },
  {
    institution: "S.S.G.M. College of Engineering, Shegaon",
    role: "Lecturer",
    dates: "Jul 1997 – Jun 2000",
    responsibilities: [
      "Taught: CG, CAO, CN, OS, Robotics, SAD",
      "Handled project evaluations and student assessments."
    ]
  },
  {
    institution: "BITS Pilani",
    role: "Teaching Assistant",
    dates: "Aug 1995 – Jul 1997",
    responsibilities: [
      "Subjects: CO, OOP, CG, System & Compiler Lab (SCL)",
      "Assisted professors in conducting practical and theoretical sessions."
    ]
  },
  {
    institution: "PREC, Loni",
    role: "Lecturer",
    dates: "Mar 1993 – Apr 1995",
    responsibilities: [
      "Taught: Numerical Methods, Unix, Computer Organization",
      "Developed learning material and conducted lab sessions."
    ]
  },
  
];

        const container = document.getElementById('experience-timeline');
        experiences.forEach((exp, index) => {
            const side = index % 2 === 0 ? 'left' : 'right';
            const points = exp.responsibilities.map(point => `
                <li class="responsibility-item">
                    <i class="fas fa-check-circle responsibility-icon"></i>
                    <span>${point}</span>
                </li>`).join('');
            container.insertAdjacentHTML('beforeend', `
                <div class="timeline-container ${side}">
                    <div class="card experience-card h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-start mb-3">
                                <i class="fas fa-graduation-cap card-icon"></i>
                                <div>
                                    <h2 class="card-title h4 fw-bold text-dark mb-1">${exp.institution}</h2>
                                    <h3 class="card-subtitle h6 text-primary d-flex align-items-center">
                                        <i class="fas fa-briefcase role-icon"></i>
                                        ${exp.role}
                                    </h3>
                                </div>
                            </div>
                            <p class="card-text text-muted mb-4 d-flex align-items-center">
                                <i class="far fa-calendar-alt date-icon"></i>
                                ${exp.dates}
                            </p>
                            <ul class="list-unstyled mb-0">
                                ${points}
                            </ul>
                        </div>
                    </div>
                </div>`);
        });
    });
