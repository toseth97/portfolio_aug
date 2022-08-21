import React from 'react'

const Project_list = (current) => {
    const item = current.current
  return (
    <div className='Project_list'>
        <div>
            <h2>{item.title}</h2>
            <p className='project_description'>{item.description}</p>
            <div className='project_links'>
                <a target='_blank' href={item.live}>
                    <button> Live </button>
                </a>
                <a target='_blank' href={item.github}>
                    <button> GitHub </button>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Project_list