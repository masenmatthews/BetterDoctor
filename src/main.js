import { Input } from './../js/input.js';
import { Request } from './../js/request.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("form#name-input").submit(function(event) {
    let name = $('#name').val();
    $('#name').val("");
    success: function(response) {
      $('.first-name').text(`${response.main.first_name}`);
      $('.last-name').text(`${response.main.last_name}`);
      $('.address').text(`${response.main.address}`);
      $('.phone').text(`${response.main.phone}`);
      $('.website').text(`${response.main.website}`);
  });

  $("form#issue-input").submit(function(event) {
    let issue = $('#issue').val();
    $('#issue').val("");
    success: function(response) {

  });
});
