import { Request } from './../js/request.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

    // let request = new Request();
    // request.doctorLookup(name, success);
    let doctorLookupResult = response => {
      for (let i = 0; i < response.data.length; i++) {
        let doctorName = response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name;
        let addressLineOne = response.data[i].practices[0].visit_address.street;
        let addressLineTwo = response.data[i].practices[0].visit_address.city + " " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip;
        let phoneNumber = response.data[i].practices[0].phones[0].number;
        let doctorWebsite = response.data[i].practices[0].website;
        $('#doctorName').text(`${doctorName}`);
        $('#addressOne').text(`${addressLineOne}`);
        $('#addressTwo').text(`${addressLineTwo}`);
        $('#phone').text(`${phoneNumber}`);
        $('#website').text(`${doctorWebsite}`);
      }
    }

    // error: function() {
    //   $('#errors').text("Looks like something went wrong! Please try again later.")
    // }

   // request.symptomLookup(symptom, success);
    let symptomLookupResult = response => {
     for (let i = 0; i < response.data.length; i++) {
       let doctorName = response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name;
       let addressLineOne = response.data[i].practices[0].visit_address.street;
       let addressLineTwo = response.data[i].practices[0].visit_address.city + " " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip;
       let phoneNumber = response.data[i].practices[0].phones[0].number;
       let doctorWebsite = response.data[i].practices[0].website;
       let description = response.data[i].description[0];
       let practiceName = response.data[i].name[0];
       $('#descriptions').text(`${description}`);
       $('#practice-name').text(`${practiceName}`);
       $('#doctorName').text(`${doctorName}`);
       $('#addressOne').text(`${addressLineOne}`);
       $('#addressTwo').text(`${addressLineTwo}`);
       $('#phone').text(`${phoneNumber}`);
       $('#website').text(`${doctorWebsite}`);
       }
     }


   // },
   // error: function() {
   //   $('#errors').text("Looks like something went wrong! Please try again later.")
   // }
   // });


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
