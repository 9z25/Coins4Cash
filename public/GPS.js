var http = require('http');
var express = require('express');
var router = express.Router();






router.put('/ob/profile/test', function(req, res) {

console.log('test');

var coord = "32.7565312,-117.2250624";
var dataJson = {
	handle: "",
	name: "Mens Clothing Ba3r",
	location: "",
	about: "hey",
	shortDescription: "",
	nsfw: false,
	vendor: false,
	moderator: false,
	currencies: ["TBTC"],
	GPS: coord
};


var textData = JSON.stringify(dataJson);

const options = {
  hostname: `localhost`,
  port: 4002,
  auth: `Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==`,
  path: `/ob/profile`,
  method: `PUT`,
  headers: {
  	'Content-Type': `plain/text`
  }
};

req = http.request(options, (res) => {
	console.log(req.responseText);
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(textData);
req.end();


 res.send('POST handler for /dogs route.')
});



module.exports = router;