import React from 'react'
import Typewriter from 'typewriter-effect';




const Home = () => {
 

  return (
    <main className="parent Home_main">
      <div className="container_flex Home_submain">
        <div className="row_1">
          <h1>Hi, I am Tobiloba !  
            <span >
            <img className='hand_emoji' src='./hand_emoji.png' alt='hand_emoji' />
            
            </span> 
          </h1>
          <div className='typewriter'>
            <Typewriter
              options={{
                strings: ['Front-End Developer','Making Your Product Wonderful' ,'Follow Me On Twitter','Student @ ALX SE' ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          < div className='cv_button'>
            <a href=''>
              <button className='default_button linearGradient'>Hire Me</button>
            </a>
            <a href=''>
              <button className='default_button linearGradient_border'>View Resume</button>
            </a>
          </div>

        </div>
        <div className="row_2">
          <div className="blobby">
            <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(168.73480987548828, 16.117652893066406)">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:"rgb(34,155,241)"}}></stop> 
                  <stop offset="100%" style={{stopColor: "rgb(94, 88, 233)"}}></stop>
                </linearGradient>
              </defs>
              <path  className='blob' fill="url(#gradient)">
                <animate className='blob' attributeName='d' dur="10000ms" repeatCount="indefinite"

                values="

                M391.5,307.5Q365,365,307.5,420Q250,475,177.5,435Q105,395,71.5,322.5Q38,250,97,203Q156,156,203,100Q250,44,297,100Q344,156,381,203Q418,250,391.5,307.5Z;

                M429.5,310Q370,370,310,377Q250,384,198,369Q146,354,131.5,302Q117,250,95.5,162Q74,74,162,97.5Q250,121,320,115.5Q390,110,439.5,180Q489,250,429.5,310Z;

                M419.98217,305.01447Q360.02894,360.02894,305.01447,373.82739Q250,387.62584,178.51111,390.30181Q107.02221,392.97779,104.30619,321.48889Q101.59018,250,108.64367,182.84858Q115.69717,115.69717,182.84858,76.65142Q250,37.60566,329.97106,63.83177Q409.94212,90.05788,444.93876,170.02894Q479.9354,250,419.98217,305.01447Z;

                M363,295Q340,340,295,388Q250,436,205,388Q160,340,99.5,295Q39,250,95,200.5Q151,151,200.5,136.5Q250,122,295,141Q340,160,363,205Q386,250,363,295Z;

                M386,305Q360,360,305,421Q250,482,200.5,415.5Q151,349,117.5,299.5Q84,250,119,202Q154,154,202,89.5Q250,25,318,69.5Q386,114,399,182Q412,250,386,305Z;

                M393.5,315.5Q381,381,315.5,386Q250,391,186,384.5Q122,378,95.5,314Q69,250,81,171.5Q93,93,171.5,82Q250,71,303,107.5Q356,144,381,197Q406,250,393.5,315.5Z
                " >
                </animate>
              </path></g>
          </svg>
          </div>
          
        </div>
      </div>
    </main>
  )
}

export default Home