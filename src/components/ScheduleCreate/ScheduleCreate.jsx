import React, {Component} from 'react';
import helpers from '../../utils/helpers';
import {Link} from 'react-router-dom';

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

  handleUpdatePatientSchedule = (event) => {
    if (this.state.selectedPtSchedule !== "") {
      helpers.updatePatientSchedule(this.state.selectedPtSchedule)
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
                  <th data-field='name'>Name</th>
                  <th data-field='name'>Monday</th>
                  <th data-field='name'>Tuesday</th>
                  <th data-field='name'>Wednesday</th>
                  <th data-field='name'>Thursday</th>
                  <th data-field='name'>Friday</th>
                  <th data-field='name'>Saturday</th>
                  <th data-field='name'>Sunday</th>
                </tr>
              </thead>
              {/* <tbody>
              {this.state.ptSchedules.map(function(schedules, i) {
              return (
                  <tr key={i}>
                      <td className="fullName">
                          {schedules.firstName} {schedules.lastName}
                      </td>
                      <td className="schedule">
                          {schedules.monday}
                      </td>
                      <td>
                          {schedules.tuesday}
                      </td>
                      <td>
                          {schedules.wednesday}
                      </td>
                      <td>
                          {schedules.thursday}
                      </td>
                      <td>
                          {schedules.friday}
                      </td>
                      <td>
                          {schedules.saturday}
                      </td>
                      <td>
                          {schedules.sunday}
                      </td>
                  </tr>
              );
          }, this)}
          </tbody> */}
          <td>
            <div>
            {this.props.patients.map(pt =>
                  <tr key={pt}>
                    <td><Link to={`updatePatient/${pt._id}`}>{pt.isbn}</Link></td>
                    <td>{pt.firstName}</td>
                    <td>{pt.lastName}</td>
                  </tr>
                )}
            </div>
          </td>
          <td className="">
          <div className="input-field schedule">
          <input type='text' className='timepicker' name='on' type='time' onChange={function(e, value) {}} />
          </div>
      </td>
          <td>
            <div>
              tues 10am
            </div>
          </td>
          <td>
            <div>
              weds 10am
            </div>
          </td>
          <td>
            <div>
              sursday 10am
            </div>
          </td>
          <td>
            <div>
              friyay 10am
            </div>
          </td>
          <td>
            <div>
              satday 10am
            </div>
          </td>
          <td>
            <div>
              sunday 10am
            </div>
          </td>
          <td>
            <button className="addSchedule" onClick={this.handleUpdatePatientSchedule.bind(this)} className="btn btn-small waves-effect waves-light green accent-4">Add</button>
          </td>
          <td>
            <button className="clearSchedule" onClick={this.handleClearSchedule.bind(this)} className="btn btn-small waves-effect waves-light blue accent-4">Clear</button>
          </td>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default ScheduleCreate;