import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div style={{textAlign: "center"}}>
      <h4>Version 1.0.2</h4>
      <h6>Forked by partlyBlind0ne</h6>
      <Link to='/' style={{color:'blue'}}>Go Back</Link>
   
    </div>
  )
}

export default About
