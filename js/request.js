import $ from 'jquery';

export class Request {
  doctorLookup(name, doctorLookup) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5231%2C-122.6756%2C10&user_location=45.5231%2C-122.6756&skip=0&limit=10&user_key=${process.env.exports.apiKey}`).then(response => {
    if (response.data.length === 0) {
      $('#errors').text('Your search criteria did not return any results. Please try using a different entry.')
    } else {
      doctorLookup(response);
    }
  })
}

    symptomLookup(symptom, symptomLookup) { $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=45.5231%2C-122.6756%2C10&user_location=45.5231%2C-122.6756&skip=0&limit=10&user_key=${process.env.exports.apiKey}`).then(response => {
    if (response.data.length === 0) {
      $('#errors').text('Your search criteria did not return any results. Please try using a different entry.')
    } else {
        symptomLookup(response);
      }
    })
  }
}
