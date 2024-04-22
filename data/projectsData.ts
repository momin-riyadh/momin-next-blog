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
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
