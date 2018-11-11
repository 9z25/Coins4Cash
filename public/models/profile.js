const axios = require("axios")
let id = "";
let body = "";
let url = "http://localhost:4002/ob/profile/"
let opt = "";
let options = {
    headers: {
        Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
    },
};
const Profile = module.exports;

module.exports.getPeers = () => {

    url = "http://localhost:4002/ob/peers/"
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.fetchProfiles = (arr) => {

    url = "http://localhost:4002/ob/fetchprofiles?async="
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
        },
        method: "POST",
        mode: "cors",
        data: arr,
        crossDomain: true
    });
}

module.exports.getBalance = () => {
    url = "http://localhost:4002/wallet/balance"
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}


module.exports.getExchangeRate = () => {
    url = "http://localhost:4002/ob/exchangerate/USD"
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}


module.exports.postProfile = (json) => {
    if (JSON.stringify(json).charAt(0) == "{") {
        url = "http://localhost:4002/ob/profile";
    } else {
        console.log("good");
        url = "http://localhost:4002/ob/fetchprofiles?async=";
    }
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
        },
        method: "POST",
        mode: "cors",
        data: json,
        crossDomain: true
    });

}

module.exports.getProfile = (pID) => {
    url = "http://localhost:4002/ob/profile/";
    if (pID) url = url + pID;
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.putProfile = (json) => {
    url = "http://localhost:4002/ob/profile/";
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
        },
        method: "PUT",
        mode: "cors",
        data: json,
        crossDomain: true
    });
}

module.exports.getModerators = (peerID) => {
    url = "http://localhost:4002/ob/moderators?async=&include=";
    if (peerID) url = "http://localhost:4002/ob/moderators/" + peerID;
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}