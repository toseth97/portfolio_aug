import React from 'react'

const WebLink = (current) => {
    const item = current.current
    const color = item.color
    const gitColor = item.id !== 3? "#FFFFFF" : "#000000"
    console.log(color)
  return (
    <div className='Web_Items' style={{padding:"2rem 1rem",
        borderWidth:"2px",
        borderStyle:"solid",
        boxSizing:"content-box",
        borderImage:`linear-gradient(225deg, ${color}, #2b6777)`,
        borderImageSlice: "1"
    
    
    }}>
        <i style={{color: `${color}`}} className={item.img}></i>
        <h3>{item.Name}</h3>
        <a href={item.link} target="_blank">
            <button className='lets_connect' style={{backgroundColor:`${color}`, border: "none", width: "100%", padding:".5rem 1rem", borderRadius:"10px", color:`${gitColor}`}} >Let's Connect</button>
        </a>
    </div>
  )
}

export default WebLink