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
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper blue-grey'>
        <Link className='brand-logo center' to="/">ScheduleME</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/create/patients">Manage Patients<i className="material-icons right">group</i></a></li>
        <li><a href="/create/schedule">Schedule<i className="material-icons right">insert_invitation</i></a></li>
      </ul>
        {nav}
        {/* <Link to="/doctor">DocPage</Link> */}
        </div>
      </nav>
    </div>
  )
}

export default NavBar;