import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import DoctorPage from '../DoctorPage/DoctorPage';
import PatientPage from '../PatientPage/PatientPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import ScheduleCreate from '../../components/ScheduleCreate/ScheduleCreate';
import CreatePatient from '../../components/CreatePatient/CreatePatient';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: []
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

  // Lifecycle Methods
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
    this.reloadPatients();
    this.reloadSchedules();
  }

  reloadPatients = () => {
    axios.get('/api/patients/getPatients',  {
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    })
    .then(res => {
      console.log('Reload patients', res)
      this.setState({patients: res.data})
    });
  }

  reloadSchedules = () => {
    axios.get('/api/patients/getPatientSchedules',  {
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    })
    .then(res => {
      console.log('Reload patients schedule', res)
      this.setState({schedules: res.data})
    });
  }

  render() {
    return (
      <div>
      <Router>
        <div>
      <div>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        </div>
          <Switch>
              <Route exact path='/' render={() =>
                <HomePage
                  user={this.state.user}
                  handleLogout={this.handleLogout} />
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
                  handleSignup={this.handleSignup} />
              }/>
              <Route exact path='/login' render={(props) =>
                <LoginPage 
                  {...props}
                  handleLogin={this.handleLogin} />
              }/>
              <Route exact path='/create/schedule' render={(props) =>
                <ScheduleCreate 
                reloadPatients={this.reloadPatients}
                patients={this.state.patients}
                />
              }/>
              <Route exact path='/create/patients' render={(props) =>
                <CreatePatient 
                  reloadPatients={this.reloadPatients}
                  patients={this.state.patients}
                />
              }/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
