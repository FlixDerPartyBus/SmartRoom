var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var Gpio = require('onoff').Gpio;
var LED = new Gpio(4, 'out');
var blinkInterval = setInterval(blinkLED, 250);

function blinkLED() {
  if( LED.readSync() === 0) {
    LED.writeSync(1);
  } else {
    LED.writeSync(0);
  }
}

function endBlink() {
  clearInterval(blinkInterval);
  LED.writeSync(0);
  LED.unexport();
}

setTimeout(endBlink, 5000);