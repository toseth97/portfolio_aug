import React from 'react'

const WebLink = (current) => {
    const item = current.current
    const color = item.color
    const linear = `linearGradient(color, "#232135")`
    const gitColor = item.id !== 3? "#FFFFFF" : "#000000"
    console.log(color)
  return (
    <div className='Web_Items' style={{padding:"2rem 1.5rem",
        borderWidth:"2px",
        borderStyle:"solid",
        boxSizing:"content-box",
        borderImage:`linear-gradient(#260B3C, #a053df)`
    
    
    }}>
        <i style={{color: `${color}`}} className={item.img}></i>
        <h3>{item.Name}</h3>
        <a href="" target="_blank">
            <button style={{backgroundColor:`${color}`, border: "none", width: "100%", padding:".5rem 1rem", borderRadius:"10px", color:`${gitColor}`}} >Let's Connect</button>
        </a>
    </div>
  )
}

export default WebLink