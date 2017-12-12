import React, {Component} from 'react';
import ScheduleView from '../../components/ScheduleView/ScheduleView';
import schedulesAPI from '../../utils/schedulesAPI';

class PatientPage extends Component {
  constructor() {
    super();
    this.state = {
      scores: []
    }
  }
  componentDidMount() {
    schedulesAPI.index().then(scores =>
      this.setState({scores})
    );
  }
  render() {
    return (
      <div className='PatientPage'>
        <h1>Patient PAGEEEEE</h1>
        <div>
          {/* <ScheduleView /> */}
        </div>
      </div>
    )
  }
}

export default PatientPage;