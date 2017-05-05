# NazBot

Visit [NazBot on Twitter](https://twitter.com/thenazbot/with_replies) to see what he's been up to lately.

### Creation

I set up my bot following [this tutorial series](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6byiVX7_Z1rclitVhMBmNFQ) by Daniel Shiffman. It was created in JavaScript using node.js and the Twit NPM package, then deployed on Heroku as a worker (instead of a web app).

The tutorial taught me how to get my bot to reply to tweet events and follow events with a simple message.

After I had this working, I decided to add some more interesting functionality.

### History of NazBot

My first idea was to get my bot to send the tweeter a news article based on the content of their tweet.

I used the Guardian API to search for an article and return the first result. I then interpolated this result in the contents of the tweet reply.

![Screenshot](http://i.imgur.com/X7avU7x.png)
