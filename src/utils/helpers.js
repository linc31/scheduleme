import tokenService from './tokenService';
// var axios = require("axios");
import axios from 'axios';



var helper = {

getAllPatients() {
  return axios.get('/api/patients/getAllPatients')
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
  return axios.get('/api/schedules/getPatientSchedules')
  .then(function(res){
    return res;
  })
},

addPatientSchedule(patient_id, firstName, lastName, status) {
  return axios.post('/api/schedules/addPatientSchedule', {
    patient_id: patient_id,
    firstName: firstName,
    lastName: lastName,
    status: status
  }, {
    headers: { Authorization: "Bearer " + tokenService.getToken() }
  })
  .then(function(res) {
    console.log(res)
  })
  .catch(function(err){
    console.log(err)
  })
},

updatePatientSchedule(ptSchedule) {
  return axios.put('/api/schedules/updateSchedule/' + ptSchedule._id, {
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
  }, {
    headers: { Authorization: "Bearer " + tokenService.getToken() }
  })
  .then(function(res) {
    console.log('coming from axios ADD PATIENT', res)
  })
  .catch(function(err){
    console.log(err)
  })
},

updatePatient(id, firstName, lastName, addressOne, city, state, zip, email, phone, status) {
  return axios.put('/api/patients/updatePatient/' + id, {
    firstName: firstName,
    lastName: lastName,
    addressOne: addressOne,
    city: city,
    state: state,
    zip: zip,
    email: email,
    phone: phone,
    status: status
  }, {
    headers: { Authorization: "Bearer " + tokenService.getToken() }
  })
  .then(function(res) {
  })
  .catch(function(err){
    console.log(err)
  })
},

updatePatientName(patient_id, firstName, lastName) {
  return axios.put('/api/patients/updatePatientName' + patient_id, {
    firstName: firstName,
    lastName: lastName
  }, {
    headers: { Authorization: "Bearer " + tokenService.getToken() }
  })
  .then(function(res) {
  })
  .catch(function(err){
    console.log(err)
  })
},

removePatient(id) {
  return axios.delete('/api/patients/removePatient/' + id, {
    headers: { Authorization: "Bearer " + tokenService.getToken() }
  }).then(function(res) {
    console.log('axios DELETE PATIENT', res)
  })
  .catch(function(err){
    console.log(err)
  })
}, 

removePatientSchedule(patient_id) {
  return axios.put('/api/schedules/removePatientSchedule/' + patient_id);
  }
}

export default helper;