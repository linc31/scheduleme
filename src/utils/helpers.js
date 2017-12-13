var axios = require("axios");

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

addPatientSchedule(patient_id, firstName, lastName, status) {
  return axios.post('/addPatientSchedule', {
    patient_id: patient_id,
    firstName: firstName,
    lastName: lastName,
    status: status
  });
},

updatePatientSchedule(ptSchedule) {
  return axios.put('/updateSchedule/' + ptSchedule._id, {
    patientSchedule: ptSchedule
  })
},

addPatient(firstName, lastName, addressOne, city, state, zip, email, phone, status) {
  return axios.post('/api/patients/addPatient', {
    firstName: firstName,
    lastName: lastName,
    addressOne: addressOne,
    city: city,
    state: state,
    zip: zip,
    email: email,
    phone: phone,
    status: status
  });
},

updatePatient(firstName, lastName, addressOne, city, state, zip, email, phone, status) {
  return axios.put('/updatePatient/', {
    firstName: firstName,
    lastName: lastName,
    addressOne: addressOne,
    city: city,
    state: state,
    zip: zip,
    email: email,
    phone: phone,
    status: status
  });
},

updatePatientName(patient_id, firstName, lastName) {
  return axios.put('/updatePatientName' + patient_id, {
    firstName: firstName,
    lastName: lastName
  })
},

removePatient(id) {
  return axios.put('/removePatient/' + id);
},

removePatientSchedule(patient_id) {
  return axios.put('/removePatientSchedule/' + patient_id);
}
}

export default helper;