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

  });
  $("form#issue-input").submit(function(event) {
    let issue = $('#issue').val();
    $('#issue').val("");

  });
});
