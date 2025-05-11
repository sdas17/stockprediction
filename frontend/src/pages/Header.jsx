import React from 'react'
import Button from '../assets/resuable/Button'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
  <>
  <nav className="navbar container pt-3 pb-2">
  <a className="navbar-brand" href="#">Navbar</a>
    <div style={{display:"flex"}}>
      <Link><Button text="Login" classample="btn btn-success"/></Link>
      &nbsp;
      <Link  to="/register"><Button text="Register" classample="btn btn-light"/></Link>
    </div>
  </nav>
  </>
  )
}

export default Header