import React from 'react';
// import {Link} from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
    }
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  render() {
    return (
      <div>
        <div>
          <a id="google" className="btn waves-effect waves-light btn-large loginButtons" href="/auth/google"><i className="fa fa-google"></i></a>
        </div>
      </div>
    )
  }
}

export default Login;