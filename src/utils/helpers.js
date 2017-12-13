var axios = require("axios");

var helper = {

getAllPatients() {
  return axios.get('/api/patients/getAllPatients');
  console.log('coming from axios GET ALL PATIENTS')
  .then(function(res) {
    res.json(res);
  })
},

getCurrentUser() {
  return axios.get('/user');
},

getPatient(id) {
  return axios.get('/api/patients/getPatient' + id)
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
  })
  .then(function(res) {
    console.log('coming from axios ADD PATIENT', res)
  })
  .catch(function(err){
    console.log(err)
  })
},

updatePatient(firstName, lastName, addressOne, city, state, zip, email, phone, status) {
  return axios.put('/api/patients/updatePatient/', {
    firstName: firstName,
    lastName: lastName,
    addressOne: addressOne,
    city: city,
    state: state,
    zip: zip,
    email: email,
    phone: phone,
    status: status
  })
  .then(function(res) {
    console.log('axios UPDATE PATIENT', res)
  })
  .catch(function(err){
    console.log(err)
  })
},

updatePatientName(patient_id, firstName, lastName) {
  return axios.put('/api/patients/updatePatientName' + patient_id, {
    firstName: firstName,
    lastName: lastName
  })
},

removePatient(id) {
  return axios.put('/api/patients/removePatient/' + id);
},

removePatientSchedule(patient_id) {
  return axios.put('/removePatientSchedule/' + patient_id);
}
}

export default helper;