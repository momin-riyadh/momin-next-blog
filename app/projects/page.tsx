import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-6 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-6 md:text-5xl md:leading-6">
            Projects
          </h1>
          <p className="text-lg leading-5 text-gray-500 dark:text-gray-400">
            Where Inspiration Meets Execution: A Showcase
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                github_url={d.github_url}
              />
            ))}
          </div>
        </div>
      </div>

  )
}
