const axios = require("axios");
let id = "";
let body = "";
let url = "http://localhost:4002/ob/listings/"
let opt = "";
let options = {
    headers: {
        Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
    },
};
const Image = module.exports;

module.exports.getListing = (hash) => {
    url = "http://localhost:4002/ob/listings/";
    if (hash) url = url + hash;
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true,
    });
}

module.exports.postListing = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/listings/";
        return axios(url, {
            responseType: "json",
            headers: {
                Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
                "Access-Control-Allow-Origin": "*",
            },
            method: "POST",
            mode: "cors",
            data: json,
            crossDomain: true
        });
    } else {
        return;
    }
}


module.exports.putListing = (json) => {
    url = "http://localhost:4002/ob/listings/";
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
        },
        method: "PUT",
        mode: "cors",
        data: json,
        crossDomain: true,
    });
}

module.exports.getInventory = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/inventory/";
        return axios(url, {
            responseType: "json",
            headers: {
                Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
                "Access-Control-Allow-Origin": "*",
            },
            method: "GET",
            mode: "cors",
            data: json,
            crossDomain: true
        });
    } else {
        return;
    }
}


module.exports.setInventory = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/inventory/";
        return axios(url, {
            responseType: "json",
            headers: {
                Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
                "Access-Control-Allow-Origin": "*",
            },
            method: "POST",
            mode: "cors",
            data: json,
            crossDomain: true
        });
    } else {
        return;
    }
}