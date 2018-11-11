const axios = require("axios");
let id = "";
let body = "";
let url = "http://localhost:4002/ob/"
let opt = "";
let options = {
    headers: {
        Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
    },
};
const Order = module.exports;


module.exports.getEstimate = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/estimatetotal/";
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

module.exports.purchaseHistory = () => {
    url = "http://localhost:4002/ob/purchases?limit=&offsetId=";
    return axios(url, {
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

module.exports.purchase = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/purchase/";
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

module.exports.getSales = () => {
    url = "http://localhost:4002/ob/sales?limit=&offsetId=";
    return axios(url, {
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

module.exports.getOrder = (orderId) => {
    if (orderId !== undefined) {
        url = "http://localhost:4002/ob/profile/" + orderId;
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
}

//for offline
module.exports.cancelOrder = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/ordercancel";
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

module.exports.confirm = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/orderconfirmation";
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


module.exports.completeOrder = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/ordercompletion";
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

module.exports.fulfillOrder = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/orderfulfillment";
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


module.exports.refundOrder = (json) => {
    if (json !== null) {
        url = "http://localhost:4002/ob/refund";
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