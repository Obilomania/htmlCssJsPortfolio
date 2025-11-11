const projectData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    image: "/assets/portFolio.png",
    description:
      "A responsive personal portfolio website built with HTML, CSS, and JavaScript to showcase my projects and skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/portfolio",
    liveDemo: "https://myname.netlify.app",
  },
  {
    id: 2,
    title: "To-Do List App",
    image: "/assets/todo.jpg",
    description:
      "A simple task management application that allows users to add, edit, delete, and mark tasks as completed.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/todo-app",
    liveDemo: "https://mytodoapp.netlify.app",
  },
  {
    id: 3,
    title: "Weather App",
    image: "/assets/weather-app-icons.jpg",
    description:
      "A web application that displays current weather information and forecasts using a weather API.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    githubLink: "https://github.com/username/weather-app",
    liveDemo: "https://myweatherapp.netlify.app",
  },
  {
    id: 4,
    title: "Calculator",
    image: "/assets/calculator-app.png",
    description:
      "A functional calculator with basic arithmetic operations and a clean user interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/calculator",
    liveDemo: "https://mycalculator.netlify.app",
  },
  {
    id: 5,
    title: "Rock Paper Scissors Game",
    image: "/assets/rockPaper.jpg",
    description:
      "An interactive game where users can play rock, paper, scissors against the computer.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/rock-paper-scissors",
    liveDemo: "https://myrpsgame.netlify.app",
  },
  {
    id: 6,
    title: "Recipe Book",
    image: "/assets/recipe.jfif",
    description:
      "A digital recipe collection with search functionality and favorite recipes saving.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/recipe-book",
    liveDemo: "https://myrecipebook.netlify.app",
  },
  {
    id: 7,
    title: "Countdown Timer",
    image: "/assets/countdown.png",
    description:
      "A customizable countdown timer for events with days, hours, minutes, and seconds display.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/countdown-timer",
    liveDemo: "https://mycountdown.netlify.app",
  },
  {
    id: 8,
    title: "Quiz App",
    image: "/assets/quiz.png",
    description:
      "An interactive quiz application with multiple-choice questions and score tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/quiz-app",
    liveDemo: "https://myquizapp.netlify.app",
  },
  {
    id: 9,
    title: "Expense Tracker",
    image: "/assets/expense.jfif",
    description:
      "A simple expense tracking application to monitor income and expenses with visual charts.",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js"],
    githubLink: "https://github.com/username/expense-tracker",
    liveDemo: "https://myexpensetracker.netlify.app",
  },
  {
    id: 10,
    title: "Blog Website",
    image: "/assets/blogApp.avif",
    description:
      "A multi-page blog website with article listings, individual post pages, and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/blog-website",
    liveDemo: "https://myblog.netlify.app",
  },
];

// Function to render projects
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");

  if (!projectsGrid) {
    console.error("Projects grid element not found");
    return;
  }

  projectsGrid.innerHTML = projectData
    .map(
      (project) => `
        <div class="project-card" data-id="${project.id}">
            <img src="${project.image}" alt="${
        project.title
      }" class="project-image" onerror="this.src='/assets/placeholder.jpg'">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="technologies">
                    ${project.technologies
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
                <div class="project-links">
                    <a href="${
                      project.githubLink
                    }" class="project-link github-link" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="${
                      project.liveDemo
                    }" class="project-link demo-link" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Initialize projects when DOM is loaded
document.addEventListener("DOMContentLoaded", renderProjects);
