import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{textAlign: "center"}}>
      <p>Task Tracker &copy; 2022</p>
      <Link to='/about' style={{color:'blue'}}>About</Link>
    </div>
  )
}

export default Footer
