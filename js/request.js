export class Request {
  constructor(name, issue) {
  this.name = name;
  this.issue = issue;
}

  findByName(name){
    let name = this.name;
    const key = process.exports.apiKey
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=${location}&user_location=${location}&skip=0&limit=10&user_key=${apiKey}`).then(response => {showResults(results)
    }).fail(() => 'Looks like something went wrong! Please try again at a later time.')
  }


  findByIssue(issue){
    let issue = this.issue;
    const key = process.exports.apiKey
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=${location}&user_location=${location}&skip=0&limit=10&user_key=${apiKey}`).then(response => {showResults(results)
    }).fail(() => 'Looks like something went wrong! Please try again at a later time.')
  }
}
