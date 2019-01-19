
var https = require("https");
const express = require("express");
const opn = require("opn");
const fs = require("fs");
var bodyParser = require("body-parser");
const app = express();
var path = require("path");
const port = 5000;
var mustache = require('mustache-express');


app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache-express');

var songs = {
	1 : ''
}

app.get( '/audio/:_songId', function( req, res ) {

    if( req.params._songId == 1 ) {
        res.sendFile(__dirname + '/public/client/audio/openplayer.html');
    } else {
        res.sendFile(__dirname + '/public/client/audio/openplayer1.html');
    }
      });
app.get( '/rlWebsiteDev/', function( req, res ) {
    res.sendFile(__dirname + '/public/client/webserver/index.html');
  });

var router = express.Router();
const axios = require("axios");
Profile = require("./public/models/profile");
Image = require("./public/models/image");
Listing = require("./public/models/listing");
Order = require("./public/models/order");
Wallet = require("./public/models/wallet");
Cases = require("./public/models/cases");

let url = "";
let json;


 
var rootCas = require('ssl-root-cas').create();
//Profile Calls
app.post("/ob/profile/", function(req, res, next) {
	console.log("test 1 : " + req.body);
    if (req.body instanceof Array) {
        let arr = req.body;
        Profile.fetchProfiles(arr).then((obj) => {
            console.log(obj.data);
            res.json(obj.data);
        }).catch((err) => {
            console.log("43, myProfile :: " + err);
        });
    } else {
        var json = req.body;
        Profile.postProfile(json).then((obj) => {
            res.json(obj.data);
        }).catch((err) => {
            console.log("28, " + err);
        });
    }
});

app.get("/ob/profile/", function(req, res, next) {
    Profile.getProfile().then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("43, myProfile :: " + err);
    });

});

app.put("/ob/profile/", function(req, res, next) {

    Profile.putProfile(req.body).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("51, " + err);
    });
});

app.patch("/ob/profile/", function(req, res, next) {
console.log("TEST " + req.body);
    Profile.patchProfile(req.body).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("51, " + err);
    });
});


//get Profile
app.get("/ob/profile/:_id", function(req, res) {
    let id = req.params._id
    Profile.getProfile(id).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("61, getProfile :: " + err);
        res.json;
    });
});

//get array of connected peers
app.get("/ob/peers/", function(req, res) {

    Profile.getPeers().then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("54, getPeers :: " + err);
        res.json('{"result":"failed"}');
    });

});


//calls that have to do with images
app.get("/ob/images/:_hash", function(req, res) {
    let hash = req.params._hash;
    Image.getImg(hash).then((obj) => {
        res.send(obj.data);
    }).catch((err) => {
        console.log("85, getImage :: " + err);
    });
});

app.post("/ob/images/", function(req, res) {
    Image.postImg(req.body).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("93, postImg :: " + err);
    });
});


app.post("/ob/setAvatar/", function(req, res) {
    Image.postImg(req.body).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("102, setAvatar :: " + err);
    });
});

//calls for catalog listings
app.get("/ob/listing/", function(req, res) {

    Listing.getListing().then((obj) => {
        res.send(obj.data);
    }).catch((err) => {
        console.log("111, getListing :: " + err);
    });
});

app.get("/ob/listing/:_id/:_slug", function(req, res) {
    let pID = req.params._id;
    let slug = req.params._slug;
 
    Listing.getListing(pID,slug).then((obj) => {
        res.send(obj.data);
    }).catch((err) => {
        console.log("120, getListing :: " + err);
    });
});

app.get("/ob/listing/:_slug", function(req, res) {
    let pID = req.params._id;
    let slug = req.params._slug
    
    Listing.getListing(undefined,slug).then((obj) => {
        res.send(obj.data);
    }).catch((err) => {
        console.log("120, getListing :: " + err);
    });
});

app.get("/ob/listings/:_id/", function(req, res) {
    let pID = req.params._id;
    Listing.getListing(pID).then((obj) => {
    	res.send(obj.data);
    }).catch((err) => {
    	console.log("151, get listings :: " + err);
    })

});


app.post("/ob/listing/", function(req, res) {
    Listing.postListing(req.body).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("128, postListing :: " + err);
    });
});

app.put("/ob/listing/", function(req, res) {
    Listing.putListing(req.body).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("136, postListing :: " + err);
    });
});

app.patch("/ob/listing/", function(req, res) {
    Listing.patchListing(req.body).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("136, postListing :: " + err);
    });
});

//wallet
app.post("/wallet/spend", function(req, res) {
	console.log(req.method)
	console.log(req.body);
				Wallet.spend(req.body).then((obj) => {
			        res.send(obj.data);
			    }).catch((err) => {
			        console.log("157, sending coins :: " + err);
			    });	
});

app.post("/wallet/bumpfees", function(req, res) {
		Wallet.bumpFee(req.body).then((obj) => {
	        res.send(obj.data);
	    }).catch((err) => {
	        console.log("165, sending coins :: " + err);
	    });	
});

app.post("/wallet/resync", function(req, res) {
		Wallet.resync().then((obj) => {
	        res.send(obj.data);
	    }).catch((err) => {
	        console.log("173, sending coins :: " + err);
	    });

});

//calls for wallet
app.get("/wallet/addr", function(req, res) {
	Wallet.getAddr().then((obj) => {
	        res.json(obj.data);
	    }).catch((err) => {
	        console.log("183, getAddr :: " + err);
	    });	
});
app.get("/wallet/balance", function(req, res) {
			Wallet.getBalance().then((obj) => {
	        res.send(obj.data);
	    }).catch((err) => {
	        console.log("190, getBalance :: " + err);
	    });	
});

app.get("/wallet/seed", function(req, res) {
			Wallet.getSeed().then((obj) => {
	        res.send(obj.data);
	    }).catch((err) => {
	        console.log("198, getSeed :: " + err);
	    });	
});

app.get("/wallet/estimatefees", function(req, res) {
			Wallet.estimateFees().then((obj) => {
	        res.send(obj.data);
	    }).catch((err) => {
	        console.log("206, sending coins :: " + err);
	    });	
});

app.get("/wallet/history", function(req, res) {
			Wallet.getHistory().then((obj) => {
	        res.send(obj.data);
	    }).catch((err) => {
	        console.log("214, sending coins :: " + err);
	    });
});

app.get("/wallet/status", function(req, res) {
			Wallet.getStatus().then((obj) => {
	        res.send(obj.data);
	    }).catch((err) => {
	        console.log("222, sending coins :: " + err);
	    });
});

app.get("/ob/exchangerate/", function(req, res) {

    Profile.getExchangeRate().then((obj) => {
        res.status(200).send((obj.data).toString());
    }).catch((err) => {
        console.log("231, getExchangeRate :: " + err);
    });
});


//calls for purchases
app.get("/ob/purchase/", function(req, res) {
    Order.purchaseHistory().then((obj) => {
        res.send(obj.data);
    }).catch((err) => {
        console.log("241, purchase :: " + err);
    });
});

app.post("/ob/purchase/", function(req, res) {
    Order.purchase(req.body).then((obj) => {
        res.send(obj.data);
    }).catch((err) => {
        console.log("248, purchase :: " + err);
    });
});


//calls for moderators
app.get("/ob/order/:_orderId", function(req, res) {
    let orderId = req.params._orderId;
    Order.getOrder(orderId).then((obj) => {
    	console.log(obj.data);
        res.send(obj.data);
    }).catch((err) => {
        console.log("194, getOrder :: " + err);
    });
});

//calls for sales
app.get("/ob/sales/", function(req, res) {
    Order.getSales().then((obj) => {
        res.send(obj.data);
    }).catch((err) => {
        console.log("158, purchase :: " + err);
    });
});

//calls for orders
app.post("/ob/order/", function(req, res) {
    Order.confirm(req.body).then((obj) => {
        res.send(obj.data);
    }).catch((err) => {
        console.log("158, purchase :: " + err);
    });
});

//cases
app.get("/ob/cases/:_params", function(req, res, next) {
	let params = req.params._params;
	if(!params){
		next();
		return;
	} else {
	    Order.getCases(params).then((obj) => {
	        res.json(obj.data);
	    }).catch((err) => {
	        console.log("43, myProfile :: " + err);
	    });
	}
});

app.get("/ob/cases/", function(req, res, next) {
    Order.getCases().then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("43, myProfile :: " + err);
    });

});

app.post("/ob/cases/", function(req, res, next) {
	console.log(req.body);
    Order.openDispute(req.body).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("43, myProfile :: " + err);
    });
});

//followers and following
app.get("/ob/following", function(req, res, next) {

    Profile.getFollowing().then((obj) => {
        res.json(obj.data);
    }).catch((err, e) => {
        console.log("315, myProfile :: " + err);
        console.log("315" + e);
    });

});

app.get("/ob/followers", function(req, res, next) {

    Profile.getFollowers().then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("315, myProfile :: " + err);
    });

});

app.get("/ob/isfollowing/:_peerID", function(req, res, next) {
let pid = req.params._peerID;
    Profile.isFollowing(pid).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("315, myProfile :: " + err);
    });

});

app.get("/ob/followsme/:_peerID", function(req, res, next) {
let pid = req.params._peerID;
    Profile.followsMe(pid).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("315, myProfile :: " + err);
    });

});

app.post("/ob/follow/", function(req, res, next) {
let json = req.body;
    Profile.isFollowing(json).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("315, myProfile :: " + err);
    });

});

app.post("/ob/unfollow/", function(req, res, next) {
let json = req.body;
    Profile.isFollowing(json).then((obj) => {
        res.json(obj.data);
    }).catch((err) => {
        console.log("315, myProfile :: " + err);
    });

});


function allowCrossDomain(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    next()
}
app.use(allowCrossDomain)
app.use("/", express.static(__dirname + "/public"))




var options = {
	ca: fs.readFileSync(__dirname + '\\freshmintrecords_com.ca-bundle'),
	cert: fs.readFileSync(__dirname + '\\freshmintrecords_com.crt'),
	key: fs.readFileSync(__dirname + '\\freshmintrecords_com.pem')
}
https.createServer(options, app).listen(port);
