import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  let nav = props.user ?
  <div>
    <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
  </div>
  :
  <div>
    <Link to='/login' className='NavBar-link'>LOG IN</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
  </div>;

  return (
    <div>
      <nav>
        {nav}
        <Link to="/">ScheduleME</Link> <br/>
        <Link to="/doctor">DocPage</Link> <br />
        <Link to="/patient">PT Page</Link><br />
      </nav>
    </div>
  )
}

export default NavBar;