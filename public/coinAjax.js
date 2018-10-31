
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
    //get list of connected peers
    getConnectedPeers: function() {
        var guids;
        var getPeers = $.ajax({
            async: false,
            url: 'http://localhost:4002/ob/peers',
            headers: {
                'Authorization': 'Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==',
                'Access-Control-Allow-Origin': '*',
            },
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                guids = data;
            },

            error: function(a, b, c) {
                var msg = JSON.stringify(a);
                alert("getConnectedPeers: " + msg + " :: " + b + " :: " + c);
            },
        });


        //map each segment of array as parameter for getStoreData() func
        //peerList.map(getStoreData)
        //return JSON.parse(getPeers.responseText);
        return guids;
    },

    //get shop listings thru ajax call **peer ID hash required**
    getPeerListings: function(pID) {
        var openStore = $.ajax({
            async: false,
            url: 'http://localhost:4002/ob/listings/' + pID,
            headers: {
                'Authorization': 'Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==',
            },
            method: 'GET',
            dataType: 'json',
            success: function(data) {},

            error: function(a, b, c) {
                var msg = JSON.stringify(a);
                alert("getPeerListings: " + msg + " :: " + b + " :: " + c);
                return;
            },
        }).responseText;
        return JSON.parse(openStore);
    },

    //load Avatar for store button **image hash required**
    getImg: function(img) {
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

    //get data on store thru ajax call **peer ID has required**
    getStoreData: function(pID) {
        var getProfile = $.ajax({
            async: false,
            url: 'http://localhost:4002/ob/profile/' + pID,
            headers: {
                'Authorization': 'Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==',
            },
            method: 'GET',
            dataType: 'json',
            success: function(data) {},

            error: function(a, b, c) {
                var msg = JSON.stringify(a);
                alert("getStoreData: " + msg + " :: " + b + " :: " + c);
            }
        });

        return JSON.parse(getProfile.responseText);

    },

    putGPS: function putData(gps){
        alert('GPS :: ' + JSON.stringify(gps));
        return fetch('http://localhost:5000/putGPS', {
            async: false,
            headers: {
                "Content-type": "application/json",
            },
            method: "PUT",
            mode: "cors",
            body:JSON.stringify(gps),
            crossDomain: true,
        })
    }
}