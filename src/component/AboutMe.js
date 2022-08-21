import React from 'react'

const AboutMe = () => {
  return (
    <main className='parent about' id='about'>
        <div className='about_submain'>
            <div className='know_me'>
                <h2>Get To Know Me</h2>
                <p>
                    Hi, My name is Tobiloba, a front-end developer from Nigeria. I am on my road map to being a fullstack MERN developer.
                    
                </p>
                <p>
                    My first attempt to becoming a web developer was in 2017, I quit few weeks after I started because I wasn't patient enough, and I thought I couldn't do it.
                    Late 2021 (October), I just feel in love with coding and I start seeing coding challenges as an opportunity to do more and not as a obstacle. I love solving issues with code......this has been my motivation so far. Of course... I CAN !!!
                </p>
                <p>
                    
                </p>
            </div>
            <div className='know_me'>
                <h2>
                    My Skills
                </h2>
                <div className='skills'>
                    <i className='bx bxl-html5 html skill_icon'></i>
                    <i className='bx bxl-css3 css skill_icon' ></i>
                    <i className='bx bxl-javascript js skill_icon' ></i>
                    <i className='bx bxl-react react skill_icon' ></i>
                    <i className='bx bxl-firebase firebase skill_icon' ></i>
                </div>
            </div>
        </div>
    </main>
  )
}

export default AboutMe