import React from 'react'
import Project_list from './Project_list'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'He-code E-commerce',
            description: 'Order from the comfort of your home with ease',
            live: 'https://first-ecommerce-theta.vercel.app/',
            github: 'https://github.com/toseth97/first_ecommerce'
        },
        {
            id: 2,
            title: 'Income Statement',
            description: 'Track you spending vs Income',
            live: 'https://inc-statement.vercel.app/',
            github: 'https://github.com/toseth97/incStatement'
        },
        {
            id: 3,
            title: 'Shoplify',
            description: 'Helps take a note of your purchase list',
            live: 'https://shoplify-mauve.vercel.app/',
            github: 'https://github.com/toseth97/shoplify'
        }
    ]

  return (
    <main className='parent Projects'>
        <div className='container_flex'>
            {projects.map(current => {
                return <Project_list current = {current} />
            })}
        </div>
    </main>
  )
}

export default Projects