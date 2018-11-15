const axios = require("axios");
let id = "";
let body = "";
let url = "http://localhost:4002/wallet/"
let opt = "";
let uri = ""
let options = {
    headers: {
        Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
    },
};
const Wallet = module.exports;


module.exports.getAddr = () => {
	uri = url + "address";
    return axios(uri, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.getBalance = () => {
	uri = url + "balance";
    return axios(uri, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.getSeed = () => {
	uri = url + "mnemonic";
    return axios(uri, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.spend = (json) => {
	uri = url + "spend";
    return axios(uri, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        method: "POST",
        mode: "cors",
        data: json,
        crossDomain: true
    });
}

module.exports.estimateFees = () => {
	uri = url + "fees";
    return axios(uri, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}


module.exports.bumpFee = (txid) => {
	if(!txid) {
		return;
	} else {
	uri = url + txid;
    return axios(uri, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        mode: "cors",
        crossDomain: true
    });
}
}

module.exports.getHistory = () => {
	uri = url + "transactions/btc";
    return axios(uri, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.getStatus = () => {
	uri = url + "status";
    return axios(uri, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.resync = () => {
	uri = url + "resyncblockchain";
    return axios(uri, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        mode: "cors",
        crossDomain: true
    });
}