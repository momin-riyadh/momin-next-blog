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
    },
    {
        title: 'Ticketing Interface',
        description: `The project aimed to create a user-friendly and visually appealing interface for a web application based on the provided Figma design. The design adhered to the established project architecture, ensuring consistency and scalability.`,
        imgSrc: '/static/images/portfolio/tickets.png',
        href: 'https://ticketingmodule.netlify.app/',
        github_url: 'https://github.com/momin-riyadh/tickets'
    }
]

export default projectsData;
