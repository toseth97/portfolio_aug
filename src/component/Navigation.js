import React from 'react'

const Navigation = () => {
  return (
    <main className="parent Nav_main">
        <div className="container_flex Nav_submain">
            <h2>Tobiloba</h2>
            <ul className="Nav_ul">
                <li className='Nav_li'><a href="#Projects" >Projects</a></li>
                <li className='Nav_li'><a href="https://www.tobiloba.com" >About</a></li>
                <li className='Nav_li'><a href="https://www.tobiloba.com" >Contact</a></li>
            </ul>
        </div>
    </main>
  )
}

export default Navigation