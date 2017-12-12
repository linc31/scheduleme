var axios = require('axios');

var helper = {

  getAllPatients() {
    return axios.get('/getAllPatients');
  },

  getCurrentUser() {
    return axios.get('/user');
  },

  getPatient(id) {
    return axios.get('/getPatient' + id)
  },

  getPatientSchedules() {
    return axios.get('/getPatientSchedules')
    .then(function(res){
      return res;
    })
  },

}

module.exports = helper;