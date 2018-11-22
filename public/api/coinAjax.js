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
            method: "GET",
            url: "https://freshmintrecords.com:5000/ob/peers/",
            headers: {
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

    profile: (verb, profile, pID) => {
        var json;
        json = JSON.stringify(profile);
        var path = "https://freshmintrecords.com:5000/ob/profile/";
        if (pID) path = "https://freshmintrecords.com:5000/ob/profile/" + pID;
        return $.ajax({
            async: true,
            method: verb,
            url: path,
            contentType: "application/json",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
            },
            dataType: "json",
            processData: false,
            data: json,
            success: (data) => {

            }
        });
    },
    img: (verb, imgHash, json) => {
        path = "https://freshmintrecords.com:5000/ob/images/";
        if (imgHash != undefined) {
            path = "https://freshmintrecords.com:5000/ob/images/" + imgHash;
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
    listing: (verb, guid, json, slug) => {
        path = "https://freshmintrecords.com:5000/ob/listing/";
        if (guid) path = "https://freshmintrecords.com:5000/ob/listings/" + guid;
        if (slug) path = "https://freshmintrecords.com:5000/ob/listing/" + slug;
        if (slug && guid) path = "https://freshmintrecords.com:5000/ob/listing/" + guid + "/" + slug

        return $.ajax({
            async: true,
            url: path,
            contentType: "application/json",
            header: {
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
        path = "https://freshmintrecords.com:5000/ob/exchangerate/";
        return $.ajax({
            async: true,
            url: path,
            header: {
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
        path = "https://freshmintrecords.com:5000/ob/moderator/";
        if (peerID) path = "http://freshmintrecords.com:5000/ob/moderator/" + peerID;
        return $.ajax({
            async: true,
            url: path,
            contentType: "application/json",
            header: {
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: verb,
            success: (data) => {},
            error: (err) => {
                alert("error getting purchase moderator data");
            }
        });
    },
    case: (verb,json, peerID) => {
        path = "https://freshmintrecords.com:5000/ob/cases/";
        if (peerID) path = "http://freshmintrecords.com:5000/ob/moderator/" + peerID;
        return $.ajax({
            async: true,
            url: path,
            contentType: "application/json",
            header: {
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: verb,
            data: JSON.stringify(json),
            success: (data) => {},
            error: (err) => {
                alert("error getting purchase moderator data");
            }
        });
    },
    getEstimate: (json) => {
        path = "https://freshmintrecords.com:4002/ob/estimatetotal/";
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
            path = "https://freshmintrecords.com:5000/ob/purchase/";
        } else if (cmd === "CANCEL") {
            path = "https://freshmintrecords.com:5000/ob/ordercancel/";
        } else if (cmd === "COMPLETE") {
            path = "https://freshmintrecords.com:5000/ob/ordercompletion/";
        }
        return $.ajax({
            async: true,
            url: path,
            contentType: "application/json",
            header: {
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
        path = "https://freshmintrecords.com:5000/ob/order/" + orderId;


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
        path = "https://freshmintrecords.com:5000/ob/sales/";
        return $.ajax({
            async: true,
            url: path,
            contentType: "application/json",
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
    wallet: (proc, json, txid) => {

        var verb;
        if (proc === "ADDR") {
            path = "https://freshmintrecords.com:5000/wallet/addr/";
            verb = "GET";
        } else if (proc === "BALANCE") {
            path = "https://freshmintrecords.com:5000/wallet/balance/"
            verb = "GET";
        } else if (proc === "SEED") {
            path = "https://freshmintrecords.com:5000/wallet/seed/";
            verb = "GET";
        } else if (proc === "SPEND") {
            if (!json) {
                return;
            } else {
                path = "https://freshmintrecords.com:5000/wallet/spend/";
                verb = "POST";
            }
        } else if (proc === "ESTIMATE") {
            path = "https://freshmintrecords.com:5000/wallet/estimatefees/";
            verb = "GET";
        } else if (proc === "BUMP") {
            if (txid) {
                path = "http://freshmintrecords.com:5000/wallet/bumpfees/" + txid;
                verb = "POST";
            } else {
                return;
            }
        } else if (proc === "HISTORY") {
            path = "https://freshmintrecords.com:5000/wallet/history/";
            verb = "GET";
        } else if (proc === "STATUS") {
            path = "https://freshmintrecords.com:5000/wallet/status/";
            verb = "GET";
        } else if (proc === "RESYNC") {
            path = "https://freshmintrecords.com:5000/wallet/resync/";
            verb = "POST";
        } else {
            return;
        }
        if (verb && path) {
            return $.ajax({
            async: true,
            url: path,
            dataType:"json",
            contentType: "application/json",
            header: {
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: verb,
            data: JSON.stringify(json),
            success: (data) => {},
            error: (err) => {
                alert("error getting wallet data");
            }
        });
        }
    },
    friends: (which, json, pid) => {
        var path;
        var verb;
        if (which == "FOLLOWING") {
            path = "https://freshmintrecords.com:5000/ob/following/";
            verb = "GET";
        } else if (which == "FOLLOWERS") {
            path = "https://freshmintrecords.com:5000/ob/followers/";
            verb = "GET";
        } else if (which == "ISFOLLOWING") {
            path = "https://freshmintrecords.com:5000/ob/isfollowing/" + pid;
            verb = "GET";
        }  else if (which == "FOLLOWSME") {
            path = "https://freshmintrecords.com:5000/ob/followsme/" + pid;
            verb = "GET";
        } else if (which == "FOLLOW") {
            path = "https://freshmintrecords.com:4002/ob/follow/" + pid;
            verb = "POST";
        } else if (which == "UNFOLLOW") {
            path = "https://freshmintrecords.com:4002/ob/unfollow/" + pid;
            verb = "POST";
        }
        return $.ajax({
            async: true,
            url: path,
            dataType:"json",
            contentType: "application/json",
            header: {
                "Authorization": "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
            },
            method: verb,
            data: JSON.stringify(json),
            success: (data) => {},
            error: (err) => {
                alert("error getting contacts");
            }
        }); 

    }

}