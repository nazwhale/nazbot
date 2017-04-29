console.log('The replier bot is starting');

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'MrK3BSEa5uNk1VoIeoKGNQrRX',
  consumer_secret:      '9GQB9ZtRVaaOVqEh0QxbkeQvSJ3eSYi7b4hw4239pRRmImM2pf',
  access_token:         '857958484209532928-p8xOY4LHFsSofNZnj3yQd9Ix8bTpPA7',
  access_token_secret:  'KoQk0ZDKK0ib1LCjleD4sxqJHe1vL9YwS7QGxI2lOZvRn',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});


// Set up a user stream
var stream = T.stream('user');

// Anytime someone follows me. (see twitter API.streaming docs)
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
  // var fs = require('fs');
  // var json = JSON.stringify(eventMsg, null, 2);
  // fs.writeFile("tweet.json", json);

  var replyto = eventMsg.in_reply_to_screen_name;
  var text = eventMsg.text;
  var from = eventMsg.user.screen_name;

  console.log(replyto + ' ' + from);

  if (replyto === 'thenazbot') {
    // make use of what's in text variable. poem using wordnick api etc.
    var newtweet = '@' + from + ' thanks for the tweet boopboop #nazbot';
    tweetIt(newtweet);
  }
}


// tweetIt();
// setInterval(tweetIt, 1000*20)

function tweetIt(txt) {

  var r = Math.floor(Math.random()*100);

  var tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
      console.log("Something went wrong!");
    } else {
      console.log("It worked!");
    }
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
