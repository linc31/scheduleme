import React, {Component} from 'react';
import helpers from '../../utils/helpers';
import axios from 'axios';
import {Link} from 'react-router-dom';
  
class CreatePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getInitialState = () => {
    return {
      firstName: "",
      lastName: "",
      addressOne: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      phone: "",
      status: "",
      allPatients: [],
      selectedPts: "",
      patient_id: ""
    }
  }

  handleUserChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (e) => {
    const newPatient = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    this.clearForm();
  }

  handleAddForm = (event) => {
    event.preventDefault(); 
    helpers.addPatient(this.state.firstName, this.state.lastName, this.state.addressOne, this.state.city, this.state.state, this.state.zip, this.state.email, this.state.phone, this.state.status)
    
    // helpers.addPatientSchedule(this.state.patient_id, this.state.firstName, this.state.lastName)
    
    .then((res) => {
      this.props.reloadPatients();
    })
    .then(res => {
      this.handleSubmit();
      this.clearStates();
    })
    // alert('Patient added', 3000);
  }

  handleUpdateForm = (event) => {
    event.preventDefault();
    helpers.updatePatient(this.state.selectedPts, this.state.firstName, this.state.lastName, this.state.addressOne, this.state.city, this.state.state, this.state.zip, this.state.email, this.state.phone, this.state.status)
    .then(function(res) {
      this.clearStates();
    }.bind(this))
    .then(function(res) {
      this.props.reloadPatients();
    }.bind(this));
    // alert('Patient added', 3000);
    this.clearForm();
  }
    // .then(function(res) {
    // }.bind(this))

    // helpers.updatePatientName(this.state.patient_id, this.state.firstName, this.state.lastName)
  //   .then(function(res) {
  //     this.clearStates();
  //   }.bind(this));
  //   // Materialize.toast('Patient updated', 3000);
  //   this.clearForm();
  // }

  handleRemoveForm = (event) => {
    event.preventDefault();
    helpers.removePatient(this.state.selectedPts).then(function(res) {
    }.bind(this));
    helpers.removePatientSchedule(this.state.patient_id).then(function(res) {
      this.clearStates();
    }.bind(this));
    // Materialize.toast('Patient removed', 3000);
    this.clearForm();
  }

  clickPatient = (event) => {
    this.setState({selectedPts: event.target.id}, function() {
      for (var i = 0; i < this.state.allPatients.length; i++) {
        if (this.state.allPatients[i]._id === this.state.selectedPts) {
          this.setState({
            firstName: this.state.allPatients[i].firstName,
            lastName: this.state.allPatients[i].lastName,
            addressOne: this.state.allPatients[i].addressOne,
            city: this.state.allPatients[i].city,
            state: this.state.allPatients[i].state,
            zip: this.state.allPatients[i].zip,
            email: this.state.allPatients[i].email,
            phone: this.state.allPatients[i].phone,
            status: this.state.allPatients[i].status,
            patient_id: this.state.selectedPts
          });
          // this.activeButtons();
        } 
      }
    })
  }

  newPatient = () => {
    this.clearForm();
    this.clearStates();
    // this.activeButtons();
  }

  clearForm = () => {
    var elements = document.getElementsByTagName(
      'input');
      for (var i = 0; i < elements.length; i++) {
        if ((elements[i].type === 'text') || (elements[i].type === 'number') || (elements[i].type === 'email')) {
          elements[i].value = '';
          elements[i].classList.remove('valid');
        }
      }
  }

  clearStates = () => {
    this.setState({
      firstName: "",
      lastName: "",
      addressOne: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      phone: "",
      status: "",
      selectedPts: ""
    })
  }

  // Restrict access to update or remove an empty form
  activeButtons = () => {
    if (this.state.selectedPts === "") {
      this.refs.addPatient.setAttribute('class', 'highlight')
      this.refs.updatePatient.setAttribute('class', 'highlight')
    }
  }

  render(props) {
    return (
      <div className='row'>
        <div className='col m3'>
          <table className='highlight' ref='allPatients'>
            <thead>
              <tr>
                <th data-field='name'>Patients</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td onClick={this.newPatient}>
                  <strong>New Patient<i className='material-icons'>add</i></strong>
                </td>
              </tr>
                {this.props.patients.map(pt =>
                  <tr key={pt}>
                    <Link to={`updatePatient/${pt._id}`}> 
                      <td>{pt.firstName}</td>
                      <td>{pt.lastName}</td>
                    </Link>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
        <div className='col m9'>
          <div className='row'>
            <form className='col m12' onSubmit={this.handleAddForm}>
              <div className='row'>
                <div className='input-field col m6 s12'>
                  <input 
                    placeholder='First Name'
                    name='firstName'
                    type='text'
                    className='validate'
                    value={this.state.firstName}
                    onChange={this.handleUserChange}
                    required />
                </div>
                <div className='input-field col m6 s12'>
                  <input 
                    placeholder='Last Name'
                    name='lastName'
                    type='text'
                    className='validate'
                    value={this.state.lastName}
                    onChange={this.handleUserChange}
                    required />
                </div>
              </div>
              <div className='row'>
                <div className='input-field col m12 s12'>
                  <input 
                    placeholder='Address'
                    name='addressOne'
                    type='text'
                    className='validate'
                    value={this.state.addressOne}
                    onChange={this.handleUserChange}
                    required />
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s4'>
                  <input
                      placeholder='City'
                      name='city'
                      type='text'
                      className='validate'
                      value={this.state.city}
                      onChange={this.handleUserChange}
                      required />
                </div>
                <div className='input-field col s4'>
                  <input
                      placeholder='State'
                      name='state'
                      type='text'
                      className='validate'
                      value={this.state.state}
                      onChange={this.handleUserChange}
                      required />
                </div>
                <div className='input-field col s4'>
                  <input
                      placeholder='Zip'
                      name='zip'
                      type='text'
                      className='validate'
                      value={this.state.zip}
                      onChange={this.handleUserChange}
                      required />
                </div>
              </div>
              <div className='row'>
                <div className='input-field col m6 s12'>
                  <input 
                    placeholder='Email'
                    name='email'
                    type='text'
                    className='validate'
                    value={this.state.email}
                    onChange={this.handleUserChange}
                    required />
                </div>
                <div className='input-field col m6 s12'>
                  <input 
                    placeholder='Phone'
                    name='phone'
                    type='text'
                    className='validate'
                    value={this.state.phone}
                    onChange={this.handleUserChange}
                    required />
                </div>
              </div>
              <div className='row'>
                <div className='input-field col m12 s12'>
                  <input 
                    placeholder='Patient Status'
                    name='status'
                    type='text'
                    className='validate'
                    value={this.state.status}
                    onChange={this.handleUserChange}
                    required />
                </div>
              </div>
              <div className='row'>
                <div className='col s4'>
                    <button ref='addPatient' className='btn btn-large waves-effect waves-light green accent-4' onSubmit={this.handleAddForm} type='submit' value='Submit' >Add
                        <i className='material-icons right'>person_add</i>
                    </button>
                </div>
                <div className='col s4'>
                    <button ref='updatePatient' className='btn btn-large waves-effect waves-light blue accent-3' onClick={this.handleUpdateForm}>Update
                        <i className='material-icons right'>edit</i>
                    </button>
                </div>
                <div className='col s4'>
                    <button ref='removePatient' className='btn btn-large waves-effect waves-light red accent-3' onClick={this.handleRemoveForm}>Remove
                        <i className='material-icons right'>person_outline</i>
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};


export default CreatePatient;