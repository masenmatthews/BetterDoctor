export class Request {
  constructor(name, issue) {
  this.name = name;
  this.issue = issue;
}

  findByName(name){
    let name = this.name;
    const key = process.exports.apiKey
    $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?first_name=Mary&last_name=Smith&location=or-portland&user_location=45.5231%2C%20122.6765&skip=0&limit=10&user_key=efae18ff8264be586e0528ee22d4acec`,
    type: 'GET',
    data: {
      format: 'json'
    }
  }


  findByIssue(issue){
    let issue = this.issue;
    const key = process.exports.apiKey


  }
}
