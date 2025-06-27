// Main Portfolio JavaScript

// Skills Data
const skills = [
  {
    id: 1,
    name: "JavaScript",
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
             <rect x="2" y="2" width="20" height="20" fill="#F7DF1E"/>
             <text x="12" y="16" text-anchor="middle" fill="#000" font-family="Arial" font-size="14" font-weight="bold">JS</text>
           </svg>`,
  },
  {
    id: 2,
    name: "React",
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
             <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
             <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" stroke-width="1.5" fill="none"/>
             <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(60 12 12)"/>
             <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(120 12 12)"/>
           </svg>`,
  },
  {
    id: 3,
    name: "Node.js",
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
             <path d="M12 2L2 7v10l10 5 10-5V7z" fill="#339933"/>
             <path d="M12 7L7 10v4l5 2.5L17 14v-4z" fill="#ffffff"/>
           </svg>`,
  },
  {
    id: 4,
    name: "Python",
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
             <path d="M12 2C8.5 2 6 4.5 6 8v8c0 3.5 2.5 6 6 6s6-2.5 6-6V8c0-3.5-2.5-6-6-6z" fill="#3776AB"/>
             <path d="M12 2C15.5 2 18 4.5 18 8v2H6V8c0-3.5 2.5-6 6-6z" fill="#FFD43B"/>
             <circle cx="9" cy="7" r="1" fill="#3776AB"/>
             <circle cx="15" cy="17" r="1" fill="#FFD43B"/>
           </svg>`,
  },
  {
    id: 5,
    name: "MongoDB",
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
             <path d="M12 2C8 2 5 8 5 12s3 10 7 10 7-6 7-10S16 2 12 2z" fill="#47A248"/>
             <path d="M12 2v20" stroke="#white" stroke-width="1"/>
             <ellipse cx="12" cy="8" rx="5" ry="2" fill="#589636"/>
             <ellipse cx="12" cy="16" rx="5" ry="2" fill="#589636"/>
           </svg>`,
  },
  {
    id: 6,
    name: "Java",
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
             <rect x="4" y="4" width="16" height="16" rx="2" fill="#ED8B00"/>
             <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial" font-size="10" font-weight="bold">JAVA</text>
           </svg>`,
  },
  {
    id: 7,
    name: "PostgreSQL",
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
             <circle cx="12" cy="12" r="10" fill="#336791"/>
             <path d="M8 8h8v8H8z" stroke="white" stroke-width="2" fill="none"/>
             <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial" font-size="8">SQL</text>
           </svg>`,
  },
  {
    id: 8,
    name: "Next.js",
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
             <circle cx="12" cy="12" r="10" fill="#000000"/>
             <path d="M8 8l8 8M8 16l8-8" stroke="white" stroke-width="2"/>
             <text x="12" y="20" text-anchor="middle" fill="white" font-family="Arial" font-size="6">NEXT</text>
           </svg>`,
  },
  {
    id: 9,
    name: "Tailwind",
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
             <path d="M12 6C9 6 7 8 6 10c1-1 2-1.5 3-1.5s2 0.5 3 1.5c1-1 2-1.5 3-1.5s2 0.5 3 1.5c-1-2-3-4-6-4z" fill="#06B6D4"/>
             <path d="M6 14c3 0 5-2 6-4-1 1-2 1.5-3 1.5s-2-0.5-3-1.5c-1 1-2 1.5-3 1.5s-2-0.5-3-1.5c1 2 3 4 6 4z" fill="#38BDF8"/>
           </svg>`,
  },
  {
    id: 10,
    name: "Figma",
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
             <rect x="8" y="4" width="4" height="4" fill="#F24E1E"/>
             <rect x="8" y="8" width="4" height="4" fill="#A259FF"/>
             <rect x="8" y="12" width="4" height="4" fill="#0ACF83"/>
             <circle cx="14" cy="6" r="2" fill="#FF7262"/>
             <circle cx="14" cy="10" r="2" fill="#1ABCFE"/>
           </svg>`,
  },
];

// Experience Data
const experiences = [
  {
    id: 1,
    company: "Google",
    role: "Lead Software Engineer",
    period: "Nov 2019 - Present",
    description:
      "Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Led a team of 8 engineers in implementing machine learning models that improved search relevance by 23%. Architected scalable microservices handling 10M+ queries per day with 99.9% uptime.",
    logo: "assets/google.svg",
  },
  {
    id: 2,
    company: "Youtube",
    role: "Software Engineer",
    period: "Jan 2017 - Oct 2019",
    description:
      "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Built real-time video processing pipelines serving 2B+ users globally. Optimized database queries reducing load times by 40% and implemented caching strategies that decreased server costs by $2M annually.",
    logo: "assets/youtube.svg",
  },
];

// Projects Data
const projects = [
  {
    id: 1,
    title: "Crypto Screener Application",
    description:
      "A powerful tool for tracking and analyzing cryptocurrency trends in real-time. Built with React, Node.js, and WebSocket for live price updates. Features advanced charting, portfolio tracking, and AI-powered market predictions with 85% accuracy rate.",
    image: "assets/project1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Stock Market Dashboard",
    description:
      "An interactive dashboard to monitor stock prices and market trends efficiently. Developed using Next.js, PostgreSQL, and TradingView APIs. Includes real-time alerts, technical analysis tools, and machine learning-based stock recommendations with 78% success rate.",
    image: "assets/project1.png",
    link: "#",
  },
];

// Custom Cursor
class CustomCursor {
  constructor() {
    this.cursor = document.getElementById("customCursor");
    this.cursorSize = 32;
    this.init();
  }

  init() {
    if (!this.cursor) return;

    document.addEventListener("mousemove", (e) => {
      this.cursor.style.left = `${e.clientX - this.cursorSize / 2}px`;
      this.cursor.style.top = `${e.clientY - this.cursorSize / 2}px`;
    });

    // Add hover effects for text elements
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
    textElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        this.cursor.classList.add("large");
      });
      el.addEventListener("mouseleave", () => {
        this.cursor.classList.remove("large");
      });
    });

    document.body.classList.add("custom-cursor-enabled");
  }
}

// Typewriter Effect
class TypeWriter {
  constructor(element, texts, speed = 100) {
    this.element = element;
    this.texts = texts;
    this.speed = speed;
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.start();
  }

  start() {
    this.type();
  }

  type() {
    const currentText = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.element.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.speed;
    if (this.isDeleting) typeSpeed /= 2;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typeSpeed = 1000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Navbar functionality
class Navbar {
  constructor() {
    this.navbar = document.getElementById("navbar");
    this.mobileMenu = document.getElementById("mobileMenu");
    this.init();
  }

  init() {
    // Handle scroll effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.navbar.classList.add("shadow");
      } else {
        this.navbar.classList.remove("shadow");
      }
    });
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("open");
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 110;
    const elementPosition = section.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  // Close mobile menu if open
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.remove("open");
}

// Intersection Observer for scroll animations
class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, this.observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale"
    );
    animatedElements.forEach((el) => observer.observe(el));
  }
}

// Skills rendering
function renderSkills() {
  const skillsGrid = document.getElementById("skillsGrid");
  if (!skillsGrid) return;

  skillsGrid.innerHTML = skills
    .map(
      (skill, index) => `
        <div class="skill-card animate-on-scroll animate-delay-${index + 1}">
            <div class="skill-icon">${skill.icon}</div>
            <p>${skill.name}</p>
        </div>
    `
    )
    .join("");
}

// Experience rendering
function renderExperience() {
  const experienceGrid = document.getElementById("experienceGrid");
  if (!experienceGrid) return;

  experienceGrid.innerHTML = experiences
    .map(
      (exp, index) => `
        <div class="experience-card animate-on-scroll animate-delay-${
          index + 1
        }">
            <div class="experience-header">
                <div class="experience-title">
                    <img src="${exp.logo}" alt="${exp.company}">
                    <h3>${exp.role} at ${exp.company}</h3>
                </div>
                <span class="experience-period">${exp.period}</span>
            </div>
            <p class="experience-description">${exp.description}</p>
        </div>
    `
    )
    .join("");
}

// Projects rendering
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
        <div class="project-card ${
          index % 2 === 1 ? "reverse" : ""
        } animate-on-scroll animate-delay-${index + 1}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            
            <div class="project-content">
                <h2 class="project-number">${String(project.id).padStart(
                  2,
                  "0"
                )}</h2>
                <p class="project-title">${project.title}</p>
                <p class="project-description">${project.description}</p>
                <a href="${
                  project.link
                }" class="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    `
    )
    .join("");
}

// Form handling
function handleContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Here you would typically send the form data to a server
    alert("Thank you for your message! I will get back to you soon.");
    form.reset();
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize components
  new CustomCursor();
  new Navbar();
  new ScrollAnimations();

  // Initialize typewriter effect
  const typewriterElement = document.getElementById("typewriter");
  if (typewriterElement) {
    new TypeWriter(typewriterElement, ["I am Sathish Kumar"], 50);
  }

  // Render dynamic content
  renderSkills();
  renderExperience();
  renderProjects();

  // Initialize form handling
  handleContactForm();

  // Debug: Log if sections are rendered
  console.log(
    "Skills rendered:",
    document.querySelectorAll(".skill-card").length
  );
  console.log(
    "Experience rendered:",
    document.querySelectorAll(".experience-card").length
  );
  console.log(
    "Projects rendered:",
    document.querySelectorAll(".project-card").length
  );

  // Add initial animation classes
  setTimeout(() => {
    const elements = document.querySelectorAll(
      ".animate-fade-in-left, .animate-fade-in-right, .animate-fade-in-down"
    );
    elements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateX(0) translateY(0)";
    });
  }, 500);
});

// Utility function to pad numbers
function padNumber(num) {
  return String(num).padStart(2, "0");
}

// Performance optimization - debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add debounced scroll listener for navbar
window.addEventListener(
  "scroll",
  debounce(() => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("shadow");
    } else {
      navbar.classList.remove("shadow");
    }
  }, 10)
);
