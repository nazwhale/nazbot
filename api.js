var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

console.log('The api is starting')
getNews("cheerios");

function getNews(choice) {
  var url = 'https://content.guardianapis.com/search?';
  var key = 'api-key=79da25fe-82d8-4d99-b194-38059f5cf206';
  var search = 'q=' + choice + '&';
  var completeURL = url + search + key;
  apiRequest(completeURL);
}

function apiRequest(completeURL){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', completeURL, false);
  xhr.send();
  var apiData = JSON.parse(xhr.responseText);
  console.log(apiData.response.results[0].webTitle);
}





  // var apiData = JSON.stringify(xhr);
  // var api2 = JSON.parse(apiData);



  // var data = xmlhttp.responseText;

  // var fs = require('fs');

  // // var json = JSON.stringify(data, null, 2);
  // fs.writeFile("guardianRequest.json", hash);

  // // console.log(data.response.results[0].webTitle);
  // console.log(data);
  // console.log("!!!");
  // console.log(hash[0]);
  // // console.log(data.slice(1,-1).response);
// }
