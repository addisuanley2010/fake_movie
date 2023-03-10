import React from 'react'
import '../../App.css'

const Footer = () => {
  return (
    <div className='foot'>
       <h4>
      {"Copyright © "}
      <a href="hwww.addisu.netlify.app">
        Addisu Anley
      </a>
     &nbsp; {new Date().getFullYear()}.
    </h4>  
    </div>
  )
}

export default Footer

