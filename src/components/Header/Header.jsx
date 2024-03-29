import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='sticky z-50 top-0 bg-white shadow-lg'>
      <div className='navbar'>
        <ul className='sidebar-container'>
          <li className='image-container'><NavLink to="https://auts.ac.in/" target='_blank' ><img src="https://auts.ac.in/wp-content/uploads/2023/06/webpage-auts-logo-1June23.png" alt="AUTS" /></NavLink></li>
          {/* <li id='AUTS-button'><NavLink to="#">AUTS</NavLink></li> */}
        </ul>
        <ul className='sidebar-container navbarAnchors'>
          <li><NavLink to="/home" >Home</NavLink></li>
          <li><NavLink to="courses" >Your Courses</NavLink></li>
          <li id='AUTS-button'><NavLink to="examination" >Examination</NavLink></li>
          <li><NavLink to="profile" >Profile</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Header