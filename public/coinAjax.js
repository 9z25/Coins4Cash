$.ajaxTransport("+binary", function(options, originalOptions, jqXHR){
    // check for conditions and support for blob / arraybuffer response type
    if (window.FormData && ((options.dataType && (options.dataType == 'binary')) || (options.data && ((window.ArrayBuffer && options.data instanceof ArrayBuffer) || (window.Blob && options.data instanceof Blob)))))
    {
        return {
            // create new XMLHttpRequest
            send: function(headers, callback){
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
                    
                xhr.addEventListener('load', function(){
            var data = {};
            data[options.dataType] = xhr.response;
            // make callback and send data
            callback(xhr.status, xhr.statusText, data, xhr.getAllResponseHeaders());
                });
 
                xhr.open(type, url, async, username, password);
                
        // setup custom headers
        for (var i in headers ) {
            xhr.setRequestHeader(i, headers[i] );
        }
                
                xhr.responseType = dataType;
                xhr.send(data);
            },
            abort: function(){
                jqXHR.abort();
            }
        };
    }
});

var coinAjax = {
//get list of connected peers
getConnectedPeers: function(){
    var getPeers = $.ajax({
    async: false,
    url: 'http://localhost:4002/ob/peers',
    headers: {
        'Authorization':'Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==',
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
        
    },

    error: function(a,b,c) {
        alert(a + b + c)
    },
  });


//map each segment of array as parameter for getStoreData() func
//peerList.map(getStoreData)
return JSON.parse(getPeers.responseText)
},

//get shop listings thru ajax call **peer ID hash required**
getPeerListings: function(pID){
    var openStore = $.ajax({
    async: false,
    url: 'http://localhost:4002/ob/listings/' + pID,
    headers: {
        'Authorization':'Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==',
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
    },

    error: function(a,b,c) {
        alert(a + b + c)
    },
  });
return JSON.parse(openStore.responseText)
},

//load Avatar for store button **image hash required**
getImg: function (store){

    var getImage = $.ajax({
    async: false,
    url: 'http://localhost:4002/ob/images/' + store.avatarHashes.small,
    headers: {
        'Content-Type':'image/png','X-Requested-With':'XMLHttpRequest',
        'Authorization':'Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==',
    },
    dataType : "binary",
    processData : false,
    method: 'GET',
    //mimeType: 'text/plain; charset=x-user-defined',
    success: function(data){
    },

    error: function(a,b,c) {
    },
  }).done(function( data, textStatus, jqXHR ) {
    var urlCreator = window.URL || window.webkitURL;
   var imageUrl = urlCreator.createObjectURL(data);

   var button = document.createElement("BUTTON");
button.setAttribute("href","#");
button.setAttribute("id",store.name)
button.setAttribute("class", "w3-button w3-black")

var h = document.createElement("p")
var t = document.createTextNode(store.name);
var u = document.createTextNode(store.shortDescription);

document.getElementById("store-list").appendChild(h);
h.appendChild(button);
button.appendChild(t);
   button.appendChild(document.createElement("br"));
   button.appendChild(u);

var imm = document.createElement("IMG")
imm.setAttribute("src",imageUrl)
imm.setAttribute("width", "304");
imm.setAttribute("height", "228");

button.appendChild(imm)

            document.getElementById(store.name).addEventListener('click', function() {
                alert(store.name)
                alert(store.shortDescription)
                alert(store.currencies)
                var listings = coinAjax.getPeerListings(store.peerID)
                items(listings)
                // i can be used anywhere in this scope
            })

  });

},

//get data on store thru ajax call **peer ID has required**
getStoreData: function(pID){
var getProfile = $.ajax({
    async: false,
    url: 'http://localhost:4002/ob/profile/' + pID,
    headers: {
        'Authorization':'Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==',
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
    },

    error: function(a,b,c) {
        alert(a + " :: " + b + " :: " + c)
    }
  })

return JSON.parse(getProfile.responseText)

}
}
