import React, { Component } from 'react';
import './App.css';
import NavBar from './../../components/NavBar/NavBar'
import { Route, Switch, Link} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import DoctorPage from '../DoctorPage/DoctorPage';
import PatientPage from '../PatientPage/PatientPage';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
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
          </Switch>
      </div>
    );
  }
}

export default App;
