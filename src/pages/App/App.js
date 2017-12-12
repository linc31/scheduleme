import React, { Component } from 'react';
import './App.css';
import userService from '../../utils/userService';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import DoctorPage from '../DoctorPage/DoctorPage';
import PatientPage from '../PatientPage/PatientPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';


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

  // Lifecycle Methods
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
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
                handleSignup={this.handleSignup}
              />
            }/>
              <Route exact path='/login' render={(props) =>
                <LoginPage 
                  {...props}
                  handleLogin={this.handleLogin}
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
