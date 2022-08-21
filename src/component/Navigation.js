import React from 'react'

const Navigation = ({handleMobile , mobile}) => {
  return (
    <main className="parent Nav_main">
        <div className="container_flex Nav_submain">
            <a href='#home'><h2>Tobiloba</h2></a>
            <ul className={mobile? "Nav_ul active" : "Nav_ul"}>
                <li className='Nav_li' onClick={handleMobile}><a href="#Projects" >Projects</a></li>
                <li className='Nav_li' onClick={handleMobile}><a href="#about" >About</a></li>
                <li className='Nav_li' onClick={handleMobile}><a href="https://www.tobiloba.com" >Contact</a></li>
            </ul>
            <div className={mobile? "hamburger active": "hamburger"} onClick={handleMobile}>
              <div className='bar'></div>
            </div>
        </div>
    </main>
  )
}

export default Navigation