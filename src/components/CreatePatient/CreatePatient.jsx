import React, {Component} from 'react';
import helpers from '../../utils/helpers';
  
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
  }

  handleUpdateForm = (event) => {
    event.preventDefault();
    helpers.updatePatient(this.state.selectedPts, this.state.firstName, this.state.lastName, this.state.addressOne, this.state.city, this.state.state, this.state.zip, this.state.email, this.state.phone, this.state.status)
    .then(function(res) {
      this.props.reloadPatients();
    }.bind(this))
    .then(function(res) {
      this.clearStates();
    }.bind(this));
    this.clearForm();
  }
 
  handleRemoveForm = (event) => {
    event.preventDefault();
    helpers.removePatient(this.state.selectedPts)
      .then((res) => {
        this.props.reloadPatients();
      })
      .then(res => {
        this.handleSubmit();
        this.clearStates();
      })
    }

  clickPatient = (event, id) => {
    this.setState({selectedPts: event.target.id}, function() {
      for (var i = 0; i < this.props.patients.length; i++) {
        console.log('patients id', id)
        this.setState({selectedPts:id})
        if (this.props.patients[i]._id === id) {
          this.setState({
            firstName: this.props.patients[i].firstName,
            lastName: this.props.patients[i].lastName,
            addressOne: this.props.patients[i].addressOne,
            city: this.props.patients[i].city,
            state: this.props.patients[i].state,
            zip: this.props.patients[i].zip,
            email: this.props.patients[i].email,
            phone: this.props.patients[i].phone,
            status: this.props.patients[i].status,
            patient_id: this.state.selectedPts
          });
          // this.props.reloadPatients();
        } 
      }
    })
  }

  newPatient = () => {
    this.clearForm();
    this.clearStates();
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
                {this.props.patients.map((pt) =>
                  <tr>
                    <td key={pt._id} onClick={(e) => { this.clickPatient(e, pt._id) }}>
                      {pt.firstName} {pt.lastName}</td>
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