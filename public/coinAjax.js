var coinAjax = {
//get list of connected peers
getConnectedPeers: function(){
   var getPeers = $.ajax({
    url: 'http://localhost:4002/ob/peers',
    headers: {
        'Authorization':'Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==',
    },
    async: false,
    method: 'GET',
    dataType: 'json',
    success: function(data){
        
    },

    error: function(a,b,c) {
      alert('process error' + JSON.stringify(a) +" :: " + b + " :: " + c)
    }
})

   return JSON.stringify(getPeers.responseText)
},

//map each segment of array as parameter for getStoreData() func
//peerList.map(getStoreData)


//get shop listings thru ajax call **peer ID hash required**
getPeerListing: function(pID){
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
      alert('process error' + JSON.stringify(a) +" :: " + b + " :: " + c)
    },
  });
return JSON.parse(openStore.responseText)
}

//load Avatar for store button **image hash required**
getImg: function (imgHash){
var getImage = $.ajax({
    async: false,
    url: 'http://localhost:4002/ob/images/' + imgHash,
    headers: {
        'Authorization':'Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==',
    },
    method: 'GET',
    dataType: 'img',
    success: function(data){
    },

    error: function(a,b,c) {
      alert('process error' + JSON.stringify(a) +" :: " + b + " :: " + c)
    },
  });

var content = Base64.btoa(getImage.responseText)

return content

}

//get data on store thru ajax call **peer ID has required**
getStoreData: function(pID){

var loadcoinAjax = $.ajax({
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
      alert('process error' + JSON.stringify(a) +" :: " + b + " :: " + c)
    },
  })

return JSON.parse(loadcoinAjax.responseText)

}
