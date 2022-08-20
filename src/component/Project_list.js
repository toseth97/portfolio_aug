import React from 'react'

const Project_list = (current) => {
    const item = current.current
  return (
    <div className='Project_list'>
        <div className=''>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div>
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