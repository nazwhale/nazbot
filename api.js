console.log('The api is starting')

const request = require('request-promise');

function API(choice){
  this.getNews();
}

API.prototype.getNews = function(choice) {
  var url = 'https://content.guardianapis.com/search?';
  var key = 'api-key=79da25fe-82d8-4d99-b194-38059f5cf206';
  var search = 'q=' + choice + '&';
  var complete = url + search + key;

  console.log(complete);
  apiRequest(complete);
}

function apiRequest(complete){
  const options = {
    method: 'GET',
    uri: complete,
    json: true
  }
  request(options)
    .then(function (response){
      data = response
      console.log(data.response.results[0].webTitle);
    })
}
