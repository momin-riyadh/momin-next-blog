interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
  github_url?: string,
}

const projectsData: Project[] = [
  {
    title: 'Portfolio Template',
    description: `A portfolio template for your personal website, built with documentation, working contact form and mobile first, technology stacks are node express javascript and ejs template engine`,
    imgSrc: '/static/images/portfolio.jpg',
    href: 'https://portfolio-af2r.onrender.com',
    github_url: 'https://github.com/momin-riyadh/express-ejs'
  },
  {
    title: 'Admin Dashboard',
    description: `A sleek and intuitive frontend admin dashboard template, featuring responsive design, customizable components, and seamless integration with popular frameworks, ensuring a seamless user experience.`,
    imgSrc: '/static/images/portfolio/admin-dashboard.png',
    href: 'https://admin-dashboard-od19.onrender.com',
    github_url: 'https://github.com/momin-riyadh/admin-dashboard'
  }
]

export default projectsData
