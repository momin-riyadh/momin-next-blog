interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
  github_url?: string,
}

const projectsData: Project[] = [
  {
    title: "Note Taking Web App",
    description: `A comprehensive Note Taking App. This application allows users to create, edit, and delete notes, providing a seamless experience for managing personal notes. The app features a user-friendly interface, responsive design, and efficient data handling using sqlite and local storage.`,
    imgSrc: "/static/images/portfolio/note-app.png",
    href: "https://note-app-client-bh6b.onrender.com/",
    github_url: "https://github.com/momin-riyadh/note-app"
  },
  {
    title: "Job Portal - A Dynamic Employment Platform",
    description: `A comprehensive job portal template built with modern HTML5, CSS3, and JS designed to streamline the job search and recruitment process. This responsive platform features an intuitive interface with dedicated sections for job listings, candidate profiles, employer dashboards, and advanced search functionality.`,
    imgSrc: "/static/images/portfolio/job-portal.png",
    href: "https://newjob-portal.netlify.app",
    github_url: "https://github.com/momin-riyadh/job-portal"
  },
  {
    title: "Admin Dashboard",
    description: `A sleek and intuitive frontend admin dashboard template, featuring responsive design, customizable components, and seamless integration with popular frameworks, ensuring a seamless user experience.`,
    imgSrc: "/static/images/portfolio/admin-dashboard.jpg",
    href: "https://admin-dashboard-od19.onrender.com",
    github_url: "https://github.com/momin-riyadh/admin-dashboard"
  },
  {
    title: "Ticketing Interface",
    description: `The project aimed to create a user-friendly and visually appealing interface for a web application based on the provided Figma design. The design adhered to the established project architecture, ensuring consistency and scalability.`,
    imgSrc: "/static/images/portfolio/ticket.jpg",
    href: "https://ticketingmodule.netlify.app/",
    github_url: "https://github.com/momin-riyadh/tickets"
  },
  {
    title: "Frontend Mentor",
    description: `Frontend Mentor is a platform that provides real-world coding challenges to help developers improve their front-end skills.
The challenges cover various aspects of front-end development, including HTML, CSS, JavaScript, and modern front-end frameworks/libraries.
`,
    imgSrc: "/static/images/portfolio/frontend-mentor.jpg",
    href: "https://www.frontendmentor.io/profile/momin-riyadh",
    github_url: "https://github.com/momin-riyadh/"
  },
  {
    title: "Portfolio Template",
    description: `A portfolio template for your personal website, built with documentation, working contact form and mobile first, technology stacks are node express javascript and ejs template engine`,
    imgSrc: "/static/images/portfolio.jpg",
    href: "https://portfolio-af2r.onrender.com",
    github_url: "https://github.com/momin-riyadh/express-ejs"
  }

];

export default projectsData;
