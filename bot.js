console.log('The bot is starting');

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'MNPFeaNb38Kk2z9NFwWUc34hC',
  consumer_secret:      'n2Op84uQ7TUvC8Wofo4PVpy4Nl0hlSKPwfg3RPNpNJvipxqazO',
  access_token:         '279013572-hGwD0NZPn7JzQ4ZZnne5EFkvzGPZTrp9KX34WZae',
  access_token_secret:  '9trbdlgcglyW3qANPAwQsn5G5RfZTjwbBswy4OyaGePWr',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var params = {
  q: 'bread since:2017-04-21',
  count: 3
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
};
