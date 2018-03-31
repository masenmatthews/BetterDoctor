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
      $('#first-name').text(`${response.data[i].profile.first_name}`);
      $('#last-name').text(`${response.data[i].profile.last_name}`);

      $('#address').text(`${response.data[i].visit_address.street}`);
      $('#phone').text(`${response.data[i].phone}`);
      $('#website').text(`${response.data[i].website}`);
      }
    },
    error: function() {
      $('#errors').text("Looks like something went wrong! Please try again later.")
    }
    });
  });
// });
