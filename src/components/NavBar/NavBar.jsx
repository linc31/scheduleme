import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <nav>
        <Link to="/">ScheduleME</Link> <br/>
        <Link to="/doctor">DocPage</Link> <br />
        <Link to="/patient">PT Page</Link><br />
        <Link to="/auth/google">Login</Link>
      </nav>
    </div>
  )
}

export default NavBar;