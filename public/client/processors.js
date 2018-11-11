//save profile data from profileModal
function saveProfile() {
    var json = {
        "name": document.forms.profilefrm.name.value,
        "location": document.forms.profilefrm.location.value,
        "about": document.forms.profilefrm.about.value,
        "shortDescription": document.forms.profilefrm.shortDesc.value,
        "nsfw": document.forms.profilefrm.nsfw.checked,
        "vendor": document.forms.profilefrm.vendor.checked,
        "moderator": document.forms.profilefrm.moderator.checked,
        "contactInfo": {
            "website": document.forms.profilefrm.website.value,
            "email": document.forms.profilefrm.email.value,
            "phoneNumber": document.forms.profilefrm.phone.value,
        },
    }
    var data = JSON.stringify(json);
    coinAjax.profile("PUT", json).then((res) => {
        var profile = JSON.parse(res);
        document.forms.profilefrm.name.value = profile.name;
        document.forms.profilefrm.location.value = profile.location;
        document.forms.profilefrm.about.value = profile.about;
        document.forms.profilefrm.shortDesc.value = profile.shortDescription;
        document.forms.profilefrm.nsfw.checked = profile.nsfw;
        document.forms.profilefrm.vendor.checked = profile.vendor;
        document.forms.profilefrm.moderator.checked = profile.moderator;
        if (profile.contactInfo == null) {
            document.forms.profilefrm.website.value = "";
            document.forms.profilefrm.email.value = "";
            document.forms.profilefrm.phone.value = "";
        } else {
            document.forms.profilefrm.website.value = profile.contactInfo.website;
            document.forms.profilefrm.email.value = profile.contactInfo.email;
            document.forms.profilefrm.phone.value = profile.contactInfo.phoneNumber;
        }

    });
}

//getPersonal Listings for Map
function getPersonalListingsOnMap() {
    coinAjax.listing("GET").then((res) => {
        var text = document.createTextNode(JSON.stringify(res));
        $("#coin-catalog").append(text);
    })
}

//Create grab store data for each peer ID in array
function processStoreJSON(pA) {
    var str = JSON.stringify(pA);
    var arr = JSON.parse(str);
    var sli = arr.slice(0, 3);
    coinAjax.profile("POST", sli).then((res) => {
        var str = JSON.stringify(res);

        var arr = JSON.parse(str);

        for (var i = 0; i < arr.length; i++) {
            payLoad = arr[i].profile;

            var store = JSON.stringify(payLoad);
            listStore(store);
        }
    }).catch((e) => {
        alert("app.js, 384, " + JSON.stringify(e));
    });
}


//get Purchase History data, display on purchase screen.
function getPurchaseHistory() {
    coinAjax.purchase("GET").then((res) => {
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
            document.getElementById("purchase-history").appendChild(h);

            h.appendChild(button);
            button.appendChild(t);
            var br = document.createElement("br");
            //button.appendChild(h);
            button.appendChild(u);
            var h1 = document.createElement("br")
            button.appendChild(h1);
            button.appendChild(v);

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
                var orderId = this.getAttribute("id");
                coinAjax.order("GET", orderId).then((res) => {
                    var order = JSON.stringify(res);
                    openOrderFunc(order);
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
            var order = JSON.stringify(res);
            openOrderFunc(order);
        })
    });

}

//add listing
function addListing(i) {

}


//render list of connected external stores for stores screen
function listStore(str) {
    var profile = JSON.parse(str);
    var imm = document.createElement("IMG");
    var pic;
    var button = document.createElement("BUTTON");
    button.setAttribute("href", "#");
    button.setAttribute("id", profile.name);
    button.setAttribute("class", "w3-button w3-black");

    var h = document.createElement("p");
    var t = document.createTextNode(profile.name);
    var u = document.createTextNode(profile.shortDescription);
    var v = document.createTextNode(profile.location);
    document.getElementById("return-profile-batch").appendChild(h);

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

    var id = profile.name
    var pic;
    document.getElementById("section-1").style.display = "none";
    document.getElementById("section-2").style.display = "none";
    document.getElementById("section-3").style.display = "none";
    document.getElementById("coins-gps").style.display = "none";
    document.getElementById("store").style.display = "none";
    document.getElementById("add_item_block").style.display = "none";
    document.getElementById("store-list").style.display = "none";
    document.getElementById("store-view").style.display = "block";
    document.getElementById("item-view").style.display = "none";

    var storeName = document.getElementById("store-name");
    storeName.appendChild(document.createTextNode(profile.name));
    var loc = document.createElement("h2");
    loc.appendChild(document.createTextNode(profile.location));
    storeName.appendChild(loc);
    coinAjax.listing("GET", profile.peerID).then((response) => {
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
            button.addEventListener("click", function() {
                items(id);
            });

        })
    }).catch((err) => {
        alert(JSON.stringify(err));
    });
}