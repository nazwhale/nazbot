var url1 = "http://api.wordnik.com:80/v4/word.json/";
var word = "banana";
var url2 = "/phrases?limit=5&wlmi=0&useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

var link = "rainbow";

function setup() {
  noCanvas();
  link = createA('#', word);
  link.mousePressed(askWordnik);
}

function askWordnik(){
  // console.log(url1 + word + url2, gotData);
  loadJSON(url1 + word + url2, gotData);
}

function gotData(data){
  n = Math.floor((Math.random() * data.length));
  chosenWord = data[n].gram2;
  if (chosenWord === word){
    chosenWord = data[n].gram1;
  }
  link.html(chosenWord);
}

function draw() {
}
