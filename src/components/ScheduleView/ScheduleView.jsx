import React from 'react';
import helpers from '../../utils/helpers';
  
class ScheduleView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getInitialState = () => {
    return {
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

  render(props) {
    return (
      <div className="row">
        <div className="col s12">
          <div className="section">
            <h5>Week at a glance</h5>
              <table className="bordered highlight">
                  <thead>
                      <tr>
                          <th data-field="name">Name</th>
                          <th data-field="name">Mon</th>
                          <th data-field="name">Tues</th>
                          <th data-field="name">Wed</th>
                          <th data-field="name">Thurs</th>
                          <th data-field="name">Fri</th>
                          <th data-field="name">Sat</th>
                          <th data-field="name">Sun</th>
                      </tr>
                  </thead>
                  <tbody>
                    {this.state.empSchedules.map(function(schedules, i) {
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
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
  }
};


export default ScheduleView;