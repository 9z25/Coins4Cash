const axios = require("axios");
let id = "";
let body = "";
let url = "https://freshmintrecords.com:4002/ob/listings/"
let opt = "";
let options = {
    headers: {
        Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
    },
};
const Image = module.exports;

module.exports.getListing = (pID,slug) => {
    url = "https://freshmintrecords.com:4002/ob/listings/";
    if (slug) {
    	url = "https://freshmintrecords.com:4002/ob/listing/" + slug;
    } else if (pID) url = "https://freshmintrecords.com:4002/ob/listings/" + pID;
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
                "Cache-Control": "no-cache"
        },
        method: "GET",
        mode: "cors",
        crossDomain: true,
    });
}


module.exports.getExternalListing = (pID,slug) => {
    url = "https://freshmintrecords.com:4002/ob/listings/";

    
    if (pID) {
    	url = url + pID;
    } else if (pID && slug) {
    	url = url + pID + "/" + slug;
    	console.log(pID + "/" + slug);
    }
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            "Access-Control-Allow-Origin": "*",
                "Cache-Control": "no-cache"
        },
        method: "GET",
        mode: "cors",
        crossDomain: true,
    });
}

module.exports.postListing = (json) => {
    if (json !== null) {
        url = "https://freshmintrecords.com:4002/ob/listings/";
        return axios(url, {
            responseType: "json",
            headers: {
                Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "no-cache"
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
    url = "https://freshmintrecords.com:4002/ob/listings/";
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

module.exports.patchListing = (json) => {
    url = "https://freshmintrecords.com:4002/ob/listings/";
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
        },
        method: "PATCH",
        mode: "cors",
        data: json,
        crossDomain: true,
    });
}

module.exports.getInventory = (json) => {
    if (json !== null) {
        url = "https://freshmintrecords.com:4002/ob/inventory/";
        return axios(url, {
            responseType: "json",
            headers: {
                Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "no-cache"
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
        url = "https://freshmintrecords.com:4002/ob/inventory/";
        return axios(url, {
            responseType: "json",
            headers: {
                Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "no-cache"
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