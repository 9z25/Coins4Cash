$.ajaxTransport("+binary", function(options, originalOptions, jqXHR) {
    // check for conditions and support for blob / arraybuffer response type
    if (window.FormData && ((options.dataType && (options.dataType == "binary")) || (options.data && ((window.ArrayBuffer && options.data instanceof ArrayBuffer) || (window.Blob && options.data instanceof Blob))))) {
        return {
            // create new XMLHttpRequest
            send: function(headers, callback) {
                // setup all variables
                var xhr = new XMLHttpRequest(),
                    url = options.url,
                    type = options.type,
                    async = options.async || true,
                        // blob or arraybuffer. Default is blob
                        dataType = options.responseType || "blob",
                        data = options.data || null,
                        username = options.username || null,
                        password = options.password || null;

                xhr.addEventListener("load", function() {
                    var data = {};
                    data[options.dataType] = xhr.response;
                    // make callback and send data
                    callback(xhr.status, xhr.statusText, data, xhr.getAllResponseHeaders());
                });

                xhr.open(type, url, async, username, password);

                // setup custom headers
                for (var i in headers) {
                    xhr.setRequestHeader(i, headers[i]);
                }

                xhr.responseType = dataType;
                xhr.send(data);
            },
            abort: function() {
                jqXHR.abort();
            }
        };
    }
});
var path;
var coinAjax = {

    //get list of connected peers
    getConnectedPeers: () => {
        return $.ajax({
            async: true,
            type: "GET",
            url: "http://localhost:5000/ob/peers/",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            },
            dataType: "json",
            processData: false,
            success: (data) => {},
            error: (err) => {
                alert("61, " + err);
            }

        });
    },

    profile: (opt, profile, pID) => {
        var json;
        json = JSON.stringify(profile);
        var path = "http://localhost:5000/ob/profile/";
        if (pID) path = "http://localhost:5000/ob/profile/" + pID;
        return $.ajax({
            async: true,
            type: opt,
            url: path,
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            },
            dataType: "json",
            processData: false,
            data: json,
            sucess: (data) => {}
        });
    },
    img: (verb, imgHash, json) => {
        path = "http://localhost:5000/ob/images/";
        if (imgHash != undefined) {
            path = "http://localhost:5000/ob/images/" + imgHash;
            return $.ajax({
                async: true,
                url: path,
                headers: {
                    "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
                },
                contentType: false,
                method: verb,
                dataType: "binary",
                success: (data) => {},
                error: (err) => {
                    alert("error getting image");
                }
            });

        } else {
            return $.ajax({
                async: true,
                url: path,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
                },
                contentType: false,
                method: verb,
                data: JSON.stringify(json),
                success: (data) => {},
                error: (err) => {
                    alert("error getting image");
                }
            });
        }
    },
    listing: (verb, guid, json) => {
        path = "http://localhost:5000/ob/listing/";
        if (guid) path = "http://localhost:5000/ob/listing/" + guid;
        return $.ajax({
            async: true,
            url: path,
            header: {
                "Content-Type": "application/json",
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: verb,
            data: JSON.stringify(json),
            success: (data) => {},
            error: (err) => {
                alert("error getting listing");
            }
        });
    },
    exchangeRate: () => {
        path = "http://localhost:5000/ob/exchangerate/";
        return $.ajax({
            async: true,
            url: path,
            header: {
                "Content-Type": "application/json",
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: "GET",
            success: (data) => {},
            error: (err) => {
                alert("error getting exchangeRate");
            }
        });
    },
    moderator: (verb, peerID) => {
        path = "http://localhost:5000/ob/moderator/";
        if (peerID) path = "http://localhost:5000/ob/moderator/" + peerID;
        return $.ajax({
            async: true,
            url: path,
            header: {
                "Content-Type": "application/json",
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: verb,
            success: (data) => {},
            error: (err) => {
                alert("error getting purchase moderator data");
            }
        });
    },
    getEstimate: (json) => {
        path = "http://localhost:4002/ob/estimatetotal";
        return $.ajax({
            async: true,
            url: path,
            header: {
                "Content-Type": "application/json",
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: verb,
            data: JSON.stringify(json),
            success: (data) => {},
            error: (err) => {
                alert("error getting estimate");
            }
        });
    },
    purchase: (verb, json, cmd) => {
        if (cmd === undefined) {
            path = "http://localhost:5000/ob/purchase";
        } else if (cmd === "CANCEL") {
            path = "http://localhost:5000/ob/ordercancel";
        } else if (cmd === "COMPLETE") {
            path = "http://localhost:5000/ob/ordercompletion";
        }
        return $.ajax({
            async: true,
            url: path,
            header: {
                "Content-Type": "application/json",
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: verb,
            data: JSON.stringify(json),
            success: (data) => {},
            error: (err) => {
                alert("error getting purchase");
            }
        });
    },
    order: (verb, orderId, json, cmd) => {
        alert("order");
path = "http://localhost:5000/ob/order/" + orderId;


        return $.ajax({
            async: true,
            url: path,
            header: {
                "Content-Type": "application/json",
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: verb,
            data: JSON.stringify(json),
            success: (data) => {},
            error: (err) => {
                alert("error getting orde11r");
            }
        });
    },
    sales: (verb, orderId, json) => {
        path = "http://localhost:5000/ob/sales/";
        return $.ajax({
            async: true,
            url: path,
            header: {
                "Content-Type": "application/json",
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: verb,
            data: JSON.stringify(json),
            success: (data) => {},
            error: (err) => {
                alert("error getting sales");
            }
        });
    },
    wallet: (proc,json,txid) => {
        var verb;
         if (proc === "ADDR") {
            path = "http://localhost:5000/wallet/addr/";
            verb = "GET";
        } else if (proc === "BALANCE") {
            path = "http://localhost:5000/wallet/balance/"
            verb = "GET";
        } else if (proc === "SEED") {
            path = "http://localhost:5000/wallet/seed/";
            verb = "GET";
        } else if (proc === "SPEND") {
            if(!json) {
                return;
            } else {
            path = "http://localhost:5000/wallet/spend/";
            verb = "POST";
        }
        } else if (proc === "ESTIMATE") {
            path = "http://localhost:5000/wallet/estimatefees/";
            verb = "GET";
        } else if (proc === "BUMP") {
            if(txid) path = "http://localhost:5000/wallet/bumpfees/" + txid;
            verb = "POST";
            else return;
        } else if (proc === "HISTORY") {
            path = "http://localhost:5000/wallet/history/";
            verb = "GET";
        } else if (proc === "STATUS") {
            path = "http://localhost:5000/wallet/status/";
            verb = "GET";
        }  else if (proc === "RESYNC") {
            path = "http://localhost:5000/wallet/resync/";
            verb = "POST";
        } else {
            return;
        }
        if((verb) && (path)){
            return $.ajax({
            async: true,
            url: path,
            header: {
                "Content-Type": "application/json",
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: verb,
            success: (data) => {},
            error: (err) => {
                alert("error getting wallet data");
            }
        });
        }
    }
}