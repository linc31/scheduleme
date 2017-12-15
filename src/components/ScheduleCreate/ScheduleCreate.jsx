import React, {Component} from 'react';
import helpers from '../../utils/helpers';

class ScheduleCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getInitialState = () => {
    return {
      firstName: "",
      lastName: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      selectedPtId: "",
      selectedPtSchedule: "",
      ptSchedules: []
    }
  }

  componentDidMount = () => {
    helpers.getPatientSchedules().then(function(res) {
      if (res !== this.state.ptSchedules) {
        this.setState({ptSchedules: res.data})
      }
    }.bind(this));

    
  }

  handleUserChange = (idx, event) => {
    let updatePatientSchedules = this.state.ptSchedules.map((ptSched, i) => {
      if (idx === i) {
        ptSched[event.target.name] = event.target.value;
        this.setState({selectedPtSchedule: ptSched});
        this.setState({selectedPtId: ptSched._id});
      }
      return ptSched;
    });
    this.setState({ptSchedules: updatePatientSchedules});
    }

  handleAddPatientSchedule = (event) => {
    if (this.state.selectedPtSchedule !== "") {
      helpers.addPatientSchedule(this.state.selectedPtSchedule)
      .then(function(res) {
        var ptName = this.state.selectedPtSchedule.firstName + ' ' + this.state.selectedPtSchedule.lastName + ' ';
        alert(ptName + 'schedule updated');
        this.clearStates();
      }.bind(this));
    }
  }

  handleClearSchedule = (idx, event) => {
    event.preventDefault();
    let updatePatientSchedules = this.state.ptSchedules.map((ptSched, j) => {
      if (idx === j) {
        ptSched.monday = '';
        ptSched.tuesday = '';
        ptSched.wednesday = '';
        ptSched.thursday = '';
        ptSched.friday = '';
        ptSched.saturday = '';
        ptSched.sunday = '';
        this.setState({selectedPtSchedule: ptSched});
      }
      return ptSched;
    });
    this.setState({ptSchedules: updatePatientSchedules});
  }

  clearStates = () => {
    this.setState({
      firstName: '',
      lastName: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: '',
      patient_id: '',
      selectedPtSchedule: '',
      selectedPtId: ''
    })
  }
  

  render(props) {
    return (
      <div className='row'>
        <div className='col m12'>
          <div className='section'>
            <h5>Schedule Editor</h5>
            <table className='highlight'>
              <thead>
                <tr>
                  <th data-field='name'>Name</th>&nbsp;&nbsp;
                  <th data-field='name'>Monday</th>
                  <th data-field='name'>Tuesday</th>
                  <th data-field='name'>Wednesday</th>
                  <th data-field='name'>Thursday</th>
                  <th data-field='name'>Friday</th>
                  <th data-field='name'>Saturday</th>
                  <th data-field='name'>Sunday</th>
                </tr>
              </thead>
          {/* <td> */}
            
            {this.props.patients.map(pt =>
                  <tr key={pt}>
                    {/* <td><Link to={`updatePatient/${pt._id}`}>{pt.isbn}</Link></td> */}
                    <td>{pt.firstName} {pt.lastName}</td>&nbsp;&nbsp;
                  
          {/* </td> */}
          <td className="">
            <div className="input-field schedule">
              <input type='text' className='timepicker' name='monday' type='time' onChange={this.handleUserChange} />
            </div>
          </td>
          <td className="">
          <div className="input-field schedule">
            <input type='text' className='timepicker' name='tuesday' type='time' onChange={this.handleUserChange} />
          </div>
          </td>
          <td className="">
          <div className="input-field schedule">
            <input type='text' className='timepicker' name='wednesday' type='time' onChange={this.handleUserChange} />
          </div>
          </td>
          <td className="">
          <div className="input-field schedule">
            <input type='text' className='timepicker' name='thursday' type='time' onChange={this.handleUserChange} />
          </div>
          </td>
          <td className="">
          <div className="input-field schedule">
            <input type='text' className='timepicker' name='friday' type='time' onChange={this.handleUserChange} />
          </div>
          </td>
          <td className="">
          <div className="input-field schedule">
            <input type='text' className='timepicker' name='saturday' type='time' onChange={this.handleUserChange} />
          </div>
          </td>
          <td className="">
          <div className="input-field schedule">
            <input type='text' className='timepicker' name='sunday' type='time' onChange={this.handleUserChange} />
          </div>
          </td>
          
          <td>
          &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="addSchedule" onClick={this.handleAddPatientSchedule.bind(this)} className="btn btn-small waves-effect waves-light green accent-4">Add</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="clearSchedule" onClick={this.handleClearSchedule.bind(this)} className="btn btn-small waves-effect waves-light blue accent-4">Clear</button>
          </td>
          </tr>
                )}

            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default ScheduleCreate;