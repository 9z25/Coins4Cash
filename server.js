var http = require("http");
const express = require('express');
const opn = require('opn');
var bodyParser = require('body-parser');
const app = express();
const port = 5000;
var router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const options = {
    hostname: `localhost`,
    port: 4002,
    auth: `Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==`,
    path: `/ob/peers/`,
    method: `PUT`,
    headers: {
        'Content-Type': `application/json`
    }
};

app.get('/ob/getStore/:_id', function(req, res) {
	console.log('TEST TEST');
	let id = req.params._id


const options3 = {
    hostname: `localhost`,
    port: 4002,
    auth: `Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==`,
    path: `/ob/profile/` + 'Qmd9hFFuueFrSR7YwUuAfirXXJ7ANZAMc5sx4HFxn7mPkc',
    method: `GET`,
    headers: {
        'Content-Type': `application/json`
    }
};

    wok = new Promise(function(resolve, reject) {
        var request = http.get(options3, (resp) => {
        	console.log('test 1 and 2');
        	console.log('BE SURE TO CHECK HERE' + JSON.stringify(options3));
        	//reqPeers.setHeader('Content-Type','application/json');
        	//reqPeers.setHeard('Authorization','Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==')
            //response.setEncoding('utf8');
            var data = '';
            resp.on('data', (chunk) => {
            	console.log("CHUCK + " + chunk);
            	let respData = JSON.parse(chunk);
            	if(respData.success === false){
            		console.log('Could not find store');
            		return;
            	}
                data += chunk;
            });

            resp.on('end', () => {
                if (data) {
                	console.log("HERE IT IS :: " + JSON.stringify(data));
                    resolve(data);
                }
            });

        }).on('error', (e) => {
            if (e) {
            	console.log(e.message);
                reject(e.message);
            }
        });

        //request.write(coord);
        //request.end();
    });

    wok.then((data) => {
    	//console.log('IT"S HARD WOK TO GET PEELS!! :: ' + data);
        json = JSON.parse(data);
sendGetResponse(data);

    }).catch((e) => {
        console.log('sumting went wong wit gettin sto data, wook here => ' + e);
    });
    
        //res.write('you posted:\n' + json.GPS);

 function sendGetResponse(json){
var parse = JSON.parse(json);
console.log("FIGHT !! " + JSON.stringify(parse));
res.setHeader('Content-Type', 'application/json');
res.send(parse);
res.end();

}
});



app.get('/ob/profile/', function(req, res) {


const options2 = {
    hostname: `localhost`,
    port: 4002,
    auth: `Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==`,
    path: `/ob/profile/`,
    method: `GET`,
    headers: {
        'Content-Type': `application/json`
    }
};

    wok = new Promise(function(resolve, reject) {
        var request = http.get(options2, (resp) => {
        	//reqPeers.setHeader('Content-Type','application/json');
        	//reqPeers.setHeard('Authorization','Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==')
            //response.setEncoding('utf8');
            var data = '';
            resp.on('data', (chunk) => {
            	//console.log("CHUCK + " + chunk);
                data += chunk;
            });

            resp.on('end', () => {
                if (data) {
                    resolve(data);
                }
            });

        }).on('error', (e) => {
            if (e) {
            	//console.log(e.message);
                reject(e.message);
            }
        });

        //request.write(coord);
        //request.end();
    });

    wok.then((data) => {
        json = JSON.parse(data);
sendGetResponse(data);

    }).catch((e) => {
        console.log('sumting went wong wit my sto data, wook here => ' + e);
    });
    
        //res.write('you posted:\n' + json.GPS);

 function sendGetResponse(json){
var parse = JSON.parse(json);
res.setHeader('Content-Type', 'application/json');
res.send(parse);
res.end();

}
});

app.get('/ob/peers/', function(req, res) {
console.log('getCall, roger that');

const options1 = {
    hostname: `localhost`,
    port: 4002,
    auth: `Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==`,
    path: `/ob/peers/`,
    method: `GET`,
    headers: {
        'Content-Type': `application/json`
    }
};

    wok = new Promise(function(resolve, reject) {
        var request = http.get(options1, (resp) => {
        	//reqPeers.setHeader('Content-Type','application/json');
        	//reqPeers.setHeard('Authorization','Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==')
            //response.setEncoding('utf8');
            var data = '';
            resp.on('data', (chunk) => {
            	if(chunk.toString() === '403 - Forbidden'){
            		console.log('Restricted access...')
            		reject(chunk);
            		return;
            	}
            	console.log("CHUNK + " + chunk);
                data += chunk;
            });

            resp.on('end', () => {
                if (data) {
                	console.log("HERE IT IS :: " + JSON.parse(data));
                    resolve(data);
                }
            });

        }).on('error', (e) => {
            if (e) {
            	console.log(e.message);
                reject(e.message);
                return;
            }
        });

        //request.write(coord);
        //request.end();
    });

    wok.then((data) => {
    	console.log('IT"S HARD WOK TO GET PEELS!! :: ' + data);
        json = JSON.parse(data);
sendGetResponse(data);

    }).catch((e) => {
        console.log('sumting went wong wit peelIDs, wook here => ' + e);
    });
    
        //res.write('you posted:\n' + json.GPS);

 function sendGetResponse(json){
res.setHeader('Content-Type', 'application/json');
var peerList = JSON.parse(json);
console.log(typeof peerList);
res.send(peerList);
res.end();

}
});


app.use('/ob/putGPS/', function(req, res, next) {
    //console.log('REQUEST BODY :: ' + JSON.stringify(req.body));
    //console.log(req.body);

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
                	//console.log('get set :: ' + str);
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
    	//console.log('IT"S HARD WOK!! :: ' + str);
        json = JSON.parse(str);
sendPostResponse(str);

    }).catch((e) => {
        //console.log('sumting went wong, wook here => ' + e);
    });
    
        //res.write('you posted:\n' + json.GPS);

 function sendPostResponse(json){
var parse = JSON.parse(json);
//console.log("FIGHT !! " + parse.GPS);
res.setHeader('Content-Type', 'application/json');
//console.log(parse.GPS);
//console.log(res.status);
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