//physical-data-box by Arif Basaran & David Bueno
//runs with node.js, RC522(RFID Card R/W), serialport, open, exec.

var SerialPort = require("serialport").SerialPort;
// #1 change the direction to your arduino
var serialport = new SerialPort("/dev/tty.wchusbserial1420",{baudrate: 9600});
var open = require('open');
const exec = require('child_process').exec;

serialport.on('open', function(){

  console.log('Serial Port Opend');
  var puffer = "";
  serialport.on('data', function(data){
	//console.log(data.toString());

	puffer += data.toString();
	var newLineIndex = puffer.indexOf("\n");
	if(newLineIndex > 1){
		var kartennummer = 	puffer.substring(0,newLineIndex);
		puffer = puffer.substring(newLineIndex +1);
		console.log("%d / %d", kartennummer, puffer.length);

		/*	Schach Figur */
		if(kartennummer == 298648480){
			open('/Applications/Chess.app');
		}

		/*	Würfel */
		if(kartennummer == 75648490){
			open('/Users/Desktop/DeepHouse.app');
		}

		/*	Holz Münze */
		if(kartennummer == 74648490){
			open('/Users/Desktop/HipHop.app');
		}

		/*	Regenschirm */
		if(kartennummer == 104648490){
			open('/Applications/Weather°.app');
		}

		var newLineIndex;
		while ((newLineIndex = puffer.indexOf("\n")) > -1) {
			puffer = puffer.substring(newLineIndex +1);
			console.info("a")
		}
	}
  });
});

