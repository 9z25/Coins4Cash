var http = require("http");
const express = require('express');
const opn = require('opn');
var bodyParser = require('body-parser');
const app = express();
const port = 5000;
var getGPS = require('./GPS')
var router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const options = {
    hostname: `localhost`,
    port: 4002,
    auth: `Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==`,
    path: `/ob/profile`,
    method: `PUT`,
    headers: {
        'Content-Type': `application/json`
    }
};






app.use('/putGPS', function(req, res, next) {
    console.log('REQUEST BODY :: ' + JSON.stringify(req.body));
    console.log(req.body);

    let coord = JSON.stringify(req.body);
    let gps = JSON.parse(coord);
let json;


    wok = new Promise(function(resolve, reject) {
        var request = http.request(options, (response) => {
            response.setEncoding('utf8');
            var str = '';
            response.on('data', function(chunk) {
                str += chunk;
            });

            response.on('end', () => {
                if (str) {
                	console.log('get set :: ' + str);
                    resolve(str);
                }
            });

        });


        request.on('error', (e) => {
            if (e) {
                reject(e.message);
            }
        });

        request.write(coord);
        request.end();
    });

    wok.then((str) => {
    	console.log('IT"S HARD WOK!! :: ' + str);
        json = JSON.parse(str);
sendPostResponse(str);

    }).catch((e) => {
        console.log('sumting went wong, wook here => ' + e);
    });
    
        //res.write('you posted:\n' + json.GPS);

 function sendPostResponse(json){
var parse = JSON.parse(json);
console.log("FIGHT !! " + parse.GPS);
res.setHeader('Content-Type', 'application/json');
console.log(parse.GPS);
console.log(res.status);
res.send(parse.GPS);
res.end();

}
});




function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
}

app.use(allowCrossDomain)
app.use('/', express.static(__dirname + '/public'))
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
    opn('http://localhost:5000')
})

module.exports = router;