// import { Request } from './../js/request.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// $(document).ready(function() {
   $("#name-submit").submit(function(event) {
     alert("Hello");
     event.preventDefault();
    let name = $('#name').val();
    $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${name}&location=45.5231%2C-122.6756%2C10&user_location=45.5231%2C-122.6756&skip=0&limit=10&user_key=efae18ff8264be586e0528ee22d4acec`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      for (let i = 0; i < response.data.length; i++) {
        let doctorName = response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name;
        let addressLineOne = response.data[i].practices[0].visit_address.street;
        let addressLineTwo = response.data[i].practices[0].visit_address.city + " " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip;
        $('#doctorName').text(`${doctorName}`);
        $('#addressOne').text(`${addressLineOne}`);
        $('#addressTwo').text(`${addressLineTwo}`);
        // $('#phone').text(`${response.data[i].practices[0].phones.number}`);
      // $('#website').text(`${response.data[i].website}`);
      }
    },
    error: function() {
      $('#errors').text("Looks like something went wrong! Please try again later.")
    }
    });
  });
// });
