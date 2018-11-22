function spend(addr,amt,feeLevel) {
var spend = queue.loadSpend();
var c = prompt("specify amount in currency of your country");
spend.address = addr;
spend.amount = c * .00000001;
spend.feeLevel = "NORMAL";
spend.memo = "This is some test bitcoin!";
var data = JSON.stringify(spend);
var json = JSON.parse(data);
    coinAjax.wallet("SPEND", spend).then((res) => {
alert(res);
    })
}


//getPersonal Listings for Map
function getPersonalListingsOnMap() {
    coinAjax.listing("GET").then((response) => {
        var res = JSON.stringify(response);
        if (res.charAt(0) == "<") {
            return;
        }
        var listings = JSON.parse(res);
        if (listings.length > 10) listings.slice(0, 10);
        listings.forEach(function(i) {
            var button = document.createElement("BUTTON");
            button.setAttribute("href", "#");
            button.setAttribute("id", i.slug);
            button.setAttribute("class", "w3-button w3-black");

            var h = document.createElement("p");
            var t = document.createTextNode(i.title);
            var u = document.createTextNode(i.price.amount + i.price.currencyCode);
            var v = document.createTextNode(i.description);
            var v1 = document.createTextNode(i.shipsTo.toString());
            document.getElementById("coin-catalog").appendChild(h);


            h.appendChild(button);
            button.appendChild(t);
            button.appendChild(document.createElement("br"));
            button.appendChild(u);
            button.appendChild(document.createElement("br"));
            button.appendChild(v);
            if (i.thumbnail != null) {
                coinAjax.img("GET", i.thumbnail.small).then(function(res) {
                    var imm = document.createElement("IMG");
                    pic = res;

                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(pic);
                    imm.setAttribute("src", imageUrl);
                    imm.setAttribute("width", "304");
                    imm.setAttribute("height", "228");

                    button.appendChild(imm);
                });
            }
            button.addEventListener("click", function() {
                items(id);
            });

        })
    }).catch((err) => {
        alert(JSON.stringify(err));
    });
}
//add listing
function addListing(i) {

}

//show catalog items on personal store screen
function myStore() {
    var slug;
    coinAjax.listing("GET").then((res) => {
        var checkRes = JSON.stringify(res);
        if (checkRes.charAt(0) == "<") {
            return;
        }
        var listings = JSON.parse(checkRes);
        if (listings.length > 10) listings.slice(0, 10);
        listings.forEach(function(i) {
            var button = document.createElement("BUTTON");
            button.setAttribute("href", "#");
            button.setAttribute("id", i.slug);
            button.setAttribute("class", "w3-button w3-black");

            var h = document.createElement("p");
            var t = document.createTextNode(i.title);
            var u = document.createTextNode(i.price.amount + i.price.currencyCode);
            var v = document.createTextNode(i.description);
            var v1 = document.createTextNode(i.shipsTo.toString());
            document.getElementById("service-catalog").appendChild(h);
            slug = i.slug

            h.appendChild(button);
            button.appendChild(t);
            button.appendChild(document.createElement("br"));
            button.appendChild(u);
            button.appendChild(document.createElement("br"));
            button.appendChild(v);

            if (i.thumbnail != null) {
                coinAjax.img("GET", i.thumbnail.small).then(function(res) {
                    var imm = document.createElement("IMG");
                    pic = res;

                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(pic);
                    imm.setAttribute("src", imageUrl);
                    imm.setAttribute("width", "304");
                    imm.setAttribute("height", "228");
                    button.appendChild(imm);
                });
            }
                openInventoryItem(button,slug);


        })

    })
}

function openInventoryItem(button,slug){
    button.addEventListener("click",(e) => {
        itemFunc(slug,undefined,"INVENTORY");
    })
}


//get Purchase History data, display on purchase screen.
function getPurchaseHistory() {
    coinAjax.purchase("GET").then((res) => {
        if(!res) return;
        res.purchases.forEach((obj) => {

            var purchase = obj;
            var imm = document.createElement("IMG");
            var pic;
            var button = document.createElement("BUTTON");
            button.setAttribute("href", "#");
            button.setAttribute("id", purchase.orderId);
            button.setAttribute("class", "w3-button w3-black");

            var h = document.createElement("p");
            var t = document.createTextNode(purchase.vendorHandle);
            var u = document.createTextNode(purchase.paymentCoin);
            var v = document.createTextNode(purchase.shippingAddress);
            var x = document.createTextNode(purchase.timestamp);
            var y = document.createTextNode(purchase.status);

            document.getElementById("purchase-history").appendChild(h);

            h.appendChild(button);
            button.appendChild(t);
            var br = document.createElement("br");
            button.appendChild(u);
            var br1 = document.createElement("br")
            button.appendChild(br);
            button.appendChild(v);
            button.appendChild(br1);
            button.appendChild(x);
            var br2 = document.createElement("br");
            button.appendChild(br2);
            button.appendChild(y);

            if (purchase.thumbnail !== undefined) {
                coinAjax.img("GET", purchase.thumbnail).then((res) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(res);
                    imm.setAttribute("src", imageUrl);
                    imm.setAttribute("width", "304");
                    imm.setAttribute("height", "228");
                    button.appendChild(imm);
                }).catch((err) => {
                    alert('592, ' + err);
                })
            }
            button.addEventListener("click", function() {
                var orderId = button.getAttribute("id");
                coinAjax.order("GET", orderId).then((res) => {
                    var str = res;
                    openOrderFunc(str,orderId, "PURCHASED");
                })
            });

        })
    });
}

//render list of sales for sales screen
function listSales(obj) {
    var str = JSON.stringify(obj);
    var sale = JSON.parse(str);
    var imm = document.createElement("IMG");
    var pic;
    var button = document.createElement("BUTTON");
    button.setAttribute("href", "#");
    button.setAttribute("id", sale.orderId);
    button.setAttribute("class", "w3-button w3-black");

    var h = document.createElement("p");
    var t = document.createTextNode(sale.buyerHandle);
    var u = document.createTextNode(sale.paymentCoin);
    var v = document.createTextNode(sale.shippingAddress);
    document.getElementById("sales-content").appendChild(h);

    h.appendChild(button);
    button.appendChild(t);
    var br = document.createElement("br");
    //button.appendChild(h);
    button.appendChild(u);
    var h1 = document.createElement("br")
    button.appendChild(h1);
    button.appendChild(v);

    if (sale.thumbnail !== undefined) {
        coinAjax.img("GET", sale.thumbnail).then((res) => {
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(res);
            imm.setAttribute("src", imageUrl);
            imm.setAttribute("width", "304");
            imm.setAttribute("height", "228");
            button.appendChild(imm);
        }).catch((err) => {
            alert('592, ' + err);
        })

    }
    button.addEventListener("click", function() {
        var orderId = this.getAttribute("id");
        coinAjax.order("GET", orderId).then((res) => {
            var order = res;
            openOrderFunc(order,orderId, "SALE");
        })
    });

}

//Create grab store data for each peer ID in array
function processProfileJSON(pA, purpose) {
    var str = JSON.stringify(pA);
    var arr = JSON.parse(str);
    var sli = arr.slice(0, 3);
    coinAjax.profile("POST", sli).then((res) => {
        var str = JSON.stringify(res);
        var arr = JSON.parse(str);

        for (var i = 0; i < arr.length; i++) {
            payLoad = arr[i].profile;

            var store = JSON.stringify(payLoad);
            listProfile(store, purpose);
        }
    }).catch((e) => {
        alert("app.js, 384, " + JSON.stringify(e));
    });
}

//render list of connected external stores for stores screen
function listProfile(str, purpose) {
    var profile = JSON.parse(str);
    var imm = document.createElement("IMG");
    var pic;
    var button = document.createElement("BUTTON");
    button.setAttribute("href", "#");
    button.setAttribute("id", profile.name);
    button.setAttribute("class", "w3-button w3-black");

    var h = document.createElement("p");
    var t = document.createTextNode(profile.peerID);
    var u = document.createTextNode(profile.shortDescription);
    var v = document.createTextNode(profile.location);
    if (purpose == "SHOPS") document.getElementById("return-profile-batch").appendChild(h);
    if (purpose == "CONTACTS") document.getElementById("contact-list").appendChild(h);

    h.appendChild(button);
    button.appendChild(t);
    var br = document.createElement("br");
    //button.appendChild(h);
    button.appendChild(u);
    var h1 = document.createElement("br")
    button.appendChild(h1);
    button.appendChild(v);

    if (profile.avatarHashes !== undefined) {
        coinAjax.img("GET", profile.avatarHashes.small).then((res) => {
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(res);
            imm.setAttribute("src", imageUrl);
            imm.setAttribute("width", "304");
            imm.setAttribute("height", "228");
            button.appendChild(imm);
        }).catch((err) => {
            alert('592, ' + err);
        })

    }
    button.addEventListener("click", function() {
        openStoreFunc(profile, button)
    });

}

//open external store and show catalog listings screen
function openStoreFunc(profile) {

    let pid = profile.peerID;
    let slug;
    var pic;
    var json;
    $( "store-view" ).data(pid)
    document.getElementById("section-1").style.display = "none";
    document.getElementById("section-2").style.display = "none";
    document.getElementById("section-3").style.display = "none";
    document.getElementById("coins-gps").style.display = "none";
    document.getElementById("store").style.display = "none";
    document.getElementById("store-list").style.display = "none";
    document.getElementById("store-view").style.display = "block";

    coinAjax.friends("ISFOLLOWING",undefined,pid).then((res) => {
        if(res.isFollowing === true){
               $('#follow-profile').bootstrapToggle('on');
           } else {
              $('#follow-profile').bootstrapToggle('off');
           }
    })

    var storeName = document.getElementById("store-name");
    storeName.appendChild(document.createTextNode(profile.name));
    var loc = document.getElementById("loc");
    loc.appendChild(document.createTextNode("Located in: " + profile.location));
    storeName.appendChild(loc);
    coinAjax.listing("GET",pid).then((response) => {
        var res = JSON.stringify(response);
        if (res.charAt(0) == "<") {
            return;
        }
        var listings = JSON.parse(res);
        if (listings.length > 10) listings.slice(0, 10);
        listings.forEach(function(i) {
            slug = i.slug

            var button = document.createElement("BUTTON");
            button.setAttribute("href", "#");
            button.setAttribute("id", slug);
            button.setAttribute("class", "w3-button w3-black");
            
            var h = document.createElement("p");
            var t = document.createTextNode(i.title);
            var u = document.createTextNode(i.price.amount + i.price.currencyCode);
            var v = document.createTextNode(i.description);
            var v1 = document.createTextNode(i.shipsTo.toString());
            document.getElementById("item-list").appendChild(h);


            h.appendChild(button);
            button.appendChild(t);
            button.appendChild(document.createElement("br"));
            button.appendChild(u);
            button.appendChild(document.createElement("br"));
            button.appendChild(v);
            if (i.thumbnail != null) {
                coinAjax.img("GET", i.thumbnail.small).then(function(res) {
                    var imm = document.createElement("IMG");
                    pic = res;

                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(pic);
                    imm.setAttribute("src", imageUrl);
                    imm.setAttribute("width", "304");
                    imm.setAttribute("height", "228");

                    button.appendChild(imm);
                });
            }
openExternalItem(button,slug,pid);
        })
    }).catch((err) => {
        alert(JSON.stringify(err));
    });
}

function openExternalItem(button,slug,pID){
    button.addEventListener("click",(e) => {
        $("#store-name").html("");
        $("#loc").html("");
        $("#item-list").html("");
        itemFunc(slug,pID,"EXTERNAL");
    })
}

function getCases(){
    coinAjax.case("GET").then((res) => {
    document.getElementById("case-data").innerHTML = JSON.stringify(res);
});
}

function openDispute(oID){
    coinAjax.case("POST",oID).then((res) => {
        alert(res);
    })
}

$("#search-stores").on("click",(e) =>{
    var txt = $("#search").val();
    coinAjax.profile("GET",undefined,txt).then((res) => {
        openStoreFunc(res);
    })
})