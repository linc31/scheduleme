import React, {Component} from 'react';
import helpers from '../../utils/helpers';
import NavBar from '../../components/NavBar/NavBar';


class DoctorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getInitialState = () => {
    return {
      username: "",
      picture: ""
    }
  }

  componentDidMount = () => {
    helpers.getCurrentUser().then(function(res) {
      if (res !== this.state.username) {
        this.setState({picture: res.data.picture,
        username: res.data.username})
      }
    }.bind(this));
  }

  render(props) {
    return (
      <div>
      something here
    </div>
    );
  }
};

export default DoctorPage;