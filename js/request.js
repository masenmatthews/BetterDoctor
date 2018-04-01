export class Request {
  doctorLookup(name, searchRequest) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${name}&location=45.5231%2C-122.6756%2C10&user_location=45.5231%2C-122.6756&skip=0&limit=10&user_key=efae18ff8264be586e0528ee22d4acec`)
  .then(function(response) {
    if(response.data.length === 0 {
      $('#doctorName').text('There are no results that fit your criteria. Please try again.')
    } else {
      searchRequest(response);
    }
  }
}

  symptomLookup(symptom, searchRequest) { $.get(`https://api.betterdoctor.com/2016-03-01/specialties?query=${symptom}&location=45.5231%2C-122.6756%2C10&user_location=45.5231%2C-122.6756&skip=0&limit=10&user_key=efae18ff8264be586e0528ee22d4acec`)    .then(function(response) {
    if(response.data.length === 0 {
      $('#doctorName').text('There are no results that fit your criteria. Please try again.')
    } else {
      searchRequest(response);
    }
  }
}
