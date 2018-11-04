$.ajaxTransport("+binary", function(options, originalOptions, jqXHR) {
    // check for conditions and support for blob / arraybuffer response type
    if (window.FormData && ((options.dataType && (options.dataType == 'binary')) || (options.data && ((window.ArrayBuffer && options.data instanceof ArrayBuffer) || (window.Blob && options.data instanceof Blob))))) {
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

                xhr.addEventListener('load', function() {
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

var coinAjax = {

    profile: (opt, profile) => {
        var str = JSON.stringify(profile);
        return fetch('http://localhost:5000/ob/profile', {
            async: false,
            headers: {
                "Content-type": "application/json",
            },
            method: opt,
            mode: "cors",
            body: str,
            crossDomain: true,
        });
    },
    //get list of connected peers
    getConnectedPeers: () => {
        return fetch('http://localhost:5000/ob/peers', {
            async: false,
            headers: {
                "Content-type": "application/json",
            },
            method: "GET",
            mode: "cors",
            crossDomain: true,
        });
    },

    //get shop listings thru ajax call **peer ID hash required**
    getPeerListings: (pID) => {
        return fetch('http://localhost:5000/ob/listings/' + pID, {
            async: false,
            headers: {
                "Content-type": "application/json",
            },
            method: "GET",
            mode: "cors",
            crossDomain: true,
        });
    },

    //load Avatar for store button **image hash required**
    getImg: (img) => {
        return $.ajax({
            async: false,
            url: 'http://localhost:4002/ob/images/' + img,
            headers: {
                'Content-Type': 'image/jpg',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': 'Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==',
            },
            dataType: "binary",
            processData: false,
            method: 'GET',
        });
    },
        postImg: (formData) => {
        return fetch('http://localhost:5000/ob/images/', {
            async: false,
            headers: {
                "Accept": "application/json",
                "Content-type": "multipart/form-data"
            },
            method: "POST",
            body: formData,
            mode: "cors",
            crossDomain: true,
        });
    },

    //get data on store thru ajax call **peer ID has required**
    getStoreData: (pID) => {
        return fetch('http://localhost:5000/ob/getStore/' + pID, {
            async: false,
            headers: {
                "Content-type": "application/json",
            },
            method: "GET",
            mode: "cors",
            crossDomain: true,
        });

    },

    putGPS: (gps) => {
        alert(JSON.stringify(gps) + 'here');
        return fetch('http://localhost:5000/ob/putGPS/', {
            async: false,
            headers: {
                "Content-type": "application/json",
            },
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(gps),
            crossDomain: true,
        })
    },
    putProfile: (profile) => {
        return fetch('http://localhost:5000/ob/putProfile', {
            async: false,
            headers: {
                "Content-type": "application/json",
            },
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(profile),
            crossDomain: true,
        })
    }
}