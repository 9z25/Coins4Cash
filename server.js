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
    path: `/ob/profile/`,
    method: `PUT`,
    headers: {
        'Content-Type': `application/json`
    }
};



app.get('/ob/getStore/:_id', function(req, res) {
    let id = req.params._id


    options.path = `/ob/profile/` + 'QmPUNXvtdhdoSCvRBfo6PDks74Po9dAEJEd9xmkfRK4ZJZ';
    options.method = `GET`;
    wok = new Promise(function(resolve, reject) {
        var request = http.get(options, (resp) => {
            var data = '';
            resp.on('data', (chunk) => {
                console.log("CHUCK + " + chunk);
                let respData = JSON.parse(chunk);
                if (respData.success === false) {
                    console.log('Could not find store');
                    return;
                }
                data += chunk;
            });

            resp.on('end', () => {
                if (data) {
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
        //console.log('storeData!! :: ' + data);
        json = JSON.parse(data);
        sendGetResponse(data);

    }).catch((e) => {
        console.log('something went wrong with gettin store data, look here => ' + e);
    });

    //res.write('you posted:\n' + json.GPS);

    function sendGetResponse(json) {
        var parse = JSON.parse(json);
        console.log("FIGHT !! " + JSON.stringify(parse));
        res.setHeader('Content-Type', 'application/json');
        res.send(parse);
        res.end();

    }
});

/*
//get Profile
app.get('/ob/profile/', function(req, res) {
    options.path = `/ob/profile/`;
    options.method = `GET`;

    wok = new Promise(function(resolve, reject) {
        var request = http.get(options, (resp) => {
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
        console.log('something went wrong with my store data, look here => ' + e);
    });

    //res.write('you posted:\n' + json.GPS);

    function sendGetResponse(json) {
        var parse = JSON.parse(json);
        res.setHeader('Content-Type', 'application/json');
        res.send(parse);
        res.end();

    }
});
*/
app.get('/ob/peers/', function(req, res) {

    options.path = `/ob/peers/`;
    options.method = `GET`;

    wok = new Promise(function(resolve, reject) {
        var request = http.get(options, (resp) => {
            //reqPeers.setHeader('Content-Type','application/json');
            //reqPeers.setHeard('Authorization','Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==')
            //response.setEncoding('utf8');
            var data = '';
            resp.on('data', (chunk) => {
                if (chunk.toString() === '403 - Forbidden') {
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
        console.log('Peers!! :: ' + data);
        json = JSON.parse(data);
        sendGetResponse(data);

    }).catch((e) => {
        console.log('something went wrong wit peerIDs, look here => ' + e);
    });

    //res.write('you posted:\n' + json.GPS);

    function sendGetResponse(json) {
        res.setHeader('Content-Type', 'application/json');
        var peerList = JSON.parse(json);
        console.log(typeof peerList);
        res.send(peerList);
        res.end();

    }
});

app.use('/ob/profile/', function(req, res, next) {
	let body = "";
    options.path = "/ob/profile/";
    options.method = req.method.toString();
    if(req.body){
    body = JSON.stringify(req.body);
}
    let json;
console.log("begin: " + options.method)
console.log(req.body);
console.log(JSON.stringify(req.body));

    wok = new Promise(function(resolve, reject) {
        var request = http.request(options, (response) => {
            response.setEncoding('utf8');
            var str = '';
            response.on('data', function(chunk) {
                str += chunk;
                console.log("response.on :: " + str);
            });

            response.on('end', () => {
                if (str) {
                	console.log("good");
                    resolve(str);
                }
            });

        });


        request.on('error', (e) => {
            if (e) {
            	console.log("bad");
                reject(e.message);
            }
        });

       // if(options.method === "PUT" || options.method === "POST"){
        request.write(body);
        request.end();
   // }
    });

    wok.then((str) => {
        json = JSON.parse(str);
        console.log("send response :" + str)
        sendResponse(str);

    }).catch((e) => {
        console.log('Something went wrong, look here => ' + e);
    });


    function sendResponse(json) {
        var parse = JSON.parse(json);
        console.log("putProfile !! " + parse.GPS);
        res.setHeader('Content-Type', 'application/json');
        res.send(json);
        res.end();

    }
});

app.use('/ob/putGPS/', function(req, res, next) {
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
        //console.log('put GPS!! :: ' + str);
        json = JSON.parse(str);
        sendPostResponse(str);

    }).catch((e) => {
        //console.log('something went wrong, look here => ' + e);
    });

    //res.write('you posted:\n' + json.GPS);

    function sendPostResponse(json) {
        var parse = JSON.parse(json);
        //console.log("putgps response !! " + parse.GPS);
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