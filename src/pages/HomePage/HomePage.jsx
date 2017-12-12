import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const HomePage = (props) => {
  return (
    <NavBar user={props.user} handleLogout={props.handleLogout} />
  )
}

export default HomePage