console.log('The bot is starting');

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'MrK3BSEa5uNk1VoIeoKGNQrRX',
  consumer_secret:      '9GQB9ZtRVaaOVqEh0QxbkeQvSJ3eSYi7b4hw4239pRRmImM2pf',
  access_token:         '857958484209532928-p8xOY4LHFsSofNZnj3yQd9Ix8bTpPA7',
  access_token_secret:  'KoQk0ZDKK0ib1LCjleD4sxqJHe1vL9YwS7QGxI2lOZvRn',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});


var tweet = {
  status: 'Test: making a bot with the Twitter API'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
  if (err) {
    console.log("Something with wrong!");
  } else {
    console.log("It worked!");
  }
}

// var params = {
//   q: 'bread since:2017-04-21',
//   count: 3
// }

// T.get('search/tweets', params, gotData);

// function gotData(err, data, response) {
//   var tweets = data.statuses;
//   for (var i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text);
//   }
// };
