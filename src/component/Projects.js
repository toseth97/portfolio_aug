import React from 'react'
import ProjectList from './ProjectList'
import WebLink from './WebLink'

const Projects = () => {
    const projects=[
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

    const web = [
        {
            id: 1,
            link: "https://www.instagram.com/toseth_official/",
            Name: "Instagram",
            img: 'bx bxl-instagram-alt',
            color: '#C13584',
        },
        {
            id: 2,
            link: "https://twitter.com/Toseth_official",
            Name: "Twitter",
            img: 'bx bxl-twitter',
            color: "#1DA1F2"
        },
        {
            id: 3,
            link: "https://github.com/toseth97",
            Name: "GitHub",
            img: 'bx bxl-github',
            color: "#FFFFFF"
        },
        {
            id:4,
            link: "https://www.linkedin.com/in/tobiloba-lawal-1097a6132/",
            Name: "LinkedIn",
            img: 'bx bxl-linkedin-square',
            color: "#0077B5"
        }

    ]

  return (
    <main className='Projects' id='Projects'>
        
        <div className='container_main'>
            <h1>My Projects</h1>
            <div className='container projects_item_main'>
                {projects.map(current => {
                    return <ProjectList key={current.id} current={current} />
                })}
            </div>
            <div className='web_section'>
                <h2>Find me @ Web</h2>
                <div className='web'>
                    {web.map(current => {
                        return <WebLink key={current.id} current={current}/>
                    })}
                </div>
            </div>
        </div>
    </main>
  )
}

export default Projects