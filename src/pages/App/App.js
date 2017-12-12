import React, { Component } from 'react';
import './App.css';
import NavBar from './../../components/NavBar/NavBar'
import { Route, Switch, Link} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import DoctorPage from '../DoctorPage/DoctorPage';
import PatientPage from '../PatientPage/PatientPage';
import Login from './../../components/Login/Login';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleLogin = () => {
    this.props.history.push('/auth/google');
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
