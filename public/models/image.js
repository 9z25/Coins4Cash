const axios = require("axios");
let id = "";
let body = "";
let url = "http://localhost:4002/ob/images/"
let opt = "";
let options = {
    headers: {
        Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
    },
};
const Image = module.exports;

module.exports.getImg = (hash) => {
    url = "http://localhost:4002/ob/images/";
    if (hash) url = url + hash;
    return axios(url, {
        responseType: "arraybuffer",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true,
    });
}

module.exports.postImg = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/images/";
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

module.exports.setAvatar = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/avatar/";
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