import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
      <h1 className="text-2xl font-extrabold leading-6 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-6 md:text-5xl md:leading-6">
        {children}
      </h1>
  )
}
