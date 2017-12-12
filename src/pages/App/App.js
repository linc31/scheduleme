import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import userService from '../../utils/userService';
import NavBar from './../../components/NavBar/NavBar'
import { Route, Switch, Link} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import DoctorPage from '../DoctorPage/DoctorPage';
import PatientPage from '../PatientPage/PatientPage';
import Login from './../../components/Login/Login';
import ScheduleView from './../../components/ScheduleView/ScheduleView';
import SignupPage from '../SignupPage/SignupPage';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  // Callback Methods
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.props.history.push('/auth/google');
  }

  // Lifecycle Methods
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div className="App">
        <NavBar />
          <Switch>
              <Route exact path='/' render={() =>
                <HomePage />
              }/>
              <Route exact path='/doctor' render={(props) =>
                <DoctorPage />
              }/>
              <Route exact path='/patient' render={(props) =>
                <PatientPage />
              }/>
              <Route exact path='/signup' render={(props) => 
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
              <Route exact path='/auth' render={(props) =>
                <Login 
                  handleLogin={this.handleLogin}
                  />
              }/>
          </Switch>
      </div>
    );
  }
}

export default App;
