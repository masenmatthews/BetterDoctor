import { Request } from './../js/request.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

    let doctorLookupResult = response => {
      for (let i = 0; i < response.data.length; i++) {
        let doctorName = response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name;
        let addressLineOne = response.data[i].practices[0].visit_address.street;
        let addressLineTwo = response.data[i].practices[0].visit_address.city + " " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip;
        let phoneNumber = response.data[i].practices[0].phones[0].number;
        let doctorWebsite = response.data[i].practices[0].website;
        let acceptsNewPatients = response.data[i].practices[0].accepts_new_patients;
        if (doctorName === undefined) {
          $('#errors').text('There was an issue retrieving data. Please try again later!');
        } else {
          $('#doctorName').text(`${doctorName}`);
        }
        if (acceptsNewPatients === true) {
          $('#acceptsPatients').text('Currently accepting new patients');
        } else {
          $('#acceptsPatients').text('Not currently accepting new patients');
        }
        if (doctorWebsite === undefined) {
          $('#website').text('No website listed');
        } else {
          $('#website').text(`${doctorWebsite}`);
        }
          $('#addressOne').text(`${addressLineOne}`);
          $('#addressTwo').text(`${addressLineTwo}`);
          $('#phone').text(`${phoneNumber}`);
        }
      }

    let symptomLookupResult = response => {
     for (let i = 0; i < response.data.length; i++) {
       let doctorName = response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name;
       let practiceName = response.data[i].specialties[i].name;
       let description = response.data[i].specialties[i].description;
       let addressLineOne = response.data[i].practices[0].visit_address.street;
       let addressLineTwo = response.data[i].practices[0].visit_address.city + " " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip;
       let phoneNumber = response.data[i].practices[0].phones[0].number;
       let doctorWebsite = response.data[i].practices[0].website;
       let acceptsNewPatients = response.data[i].practices[0].accepts_new_patients;
       $('#doctorName').text(`${doctorName}`);
       $('#addressOne').text(`${addressLineOne}`);
       $('#addressTwo').text(`${addressLineTwo}`);
       $('#phone').text(`${phoneNumber}`);
       $('#practice').text(`${practiceName}`);
       $('#description').text(`${description}`);
       if (acceptsNewPatients === true) {
         $('#acceptsPatients').text('Currently accepting new patients');
       } else {
         $('#acceptsPatients').text('Not currently accepting new patients');
       }
       if (doctorWebsite === undefined) {
         $('#website').text('No website listed');
       } else {
         $('#website').text(`${doctorWebsite}`);
       }
     }
   }

   $(document).ready(() => {
     let request = new Request;
     $("#name-submit").submit(function(event) {
       let name = $('#name').val();
       event.preventDefault();
       request.doctorLookup(name, doctorLookupResult)
     })
     $("#symptom-submit").submit(function(event) {
       let symptom = $('#symptom').val();
       event.preventDefault();
       request.symptomLookup(symptom, symptomLookupResult);
     })
  });
