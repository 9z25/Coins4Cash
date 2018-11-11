/*
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("signin-button").addEventListener("click", function(event) {
    event.preventDefault()
    blockstack.redirectToSignIn()
  })
  document.getElementById("signout-button").addEventListener("click", function(event) {
    event.preventDefault()
    blockstack.signUserOut(window.location.href)
  })

  function showProfile(profile) {
    var person = new blockstack.Person(profile)
    document.getElementById("heading-name").innerHTML = person.name() ? person.name() : "Nameless Person"
    if(person.avatarUrl()) {
      document.getElementById("avatar-image").setAttribute("src", person.avatarUrl())
    }
    document.getElementById("section-1").style.display = "none"
    document.getElementById("section-2").style.display = "block"
  }

  if (blockstack.isUserSignedIn()) {
    var profile = blockstack.loadUserData().profile
      showProfile(profile)
  } else if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn().then(function(userData) {
      window.location = window.location.origin
    })
  }
})
*/
document.addEventListener("DOMContentLoaded", function(event) {
    function isJSON(str) {
        try {
            return (JSON.parse(str) && !!str);
        } catch (e) {
            return false;
        }
    }
    var _ = undefined;
    //load Welcome screen
    var old = alert;

    alert = function() {
        console.log(new Error().stack);
        old.apply(window, arguments);
    };

    coinAjax.profile('GET').then((res) => {
        var profile = res;
        document.forms.profilefrm.name.value = profile.name;
        document.forms.profilefrm.location.value = profile.location;
        document.forms.profilefrm.about.value = profile.about;
        document.forms.profilefrm.shortDesc.value = profile.shortDescription;
        document.forms.profilefrm.nsfw.checked = profile.nsfw;
        document.forms.profilefrm.vendor.checked = profile.vendor;
        document.forms.profilefrm.moderator.checked = profile.moderator;

        if (profile.contactInfo !== undefined) {
            if (profile.contactInfo.website === undefined) document.forms.profilefrm.website.value = '';
            else document.forms.profilefrm.website.value = profile.contactInfo.website;
            if (profile.contactInfo.email === undefined) document.forms.profilefrm.contactInfo.email.value = '';
            else document.forms.profilefrm.email.value = profile.contactInfo.email;
            if (profile.contactInfo.phoneNumber === undefined) document.forms.profilefrm.phone.value = '';
            else document.forms.profilefrm.phone.value = profile.contactInfo.phoneNumber;
        } else {
            return;
        }

    });

    document.getElementById("section-1").style.display = "block";
    document.getElementById("section-2").style.display = "none";
    document.getElementById("section-3").style.display = "none";
    document.getElementById("coins-gps").style.display = "none";
    document.getElementById("store").style.display = "none";
    document.getElementById("add_item_block").style.display = "none";
    document.getElementById("store-list").style.display = "none";
    document.getElementById("store-view").style.display = "none";
    document.getElementById("item-view").style.display = "none";
    document.getElementById("purchase-view").style.display = "none";
    document.getElementById("sales-view").style.display = "none";


    //sign in button on Welcome screen, click and show login input
    document.getElementById("signin-button").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "block";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none"
        document.getElementById("add_item_block").style.display = "none"
        document.getElementById("store-list").style.display = "none"
        document.getElementById("store-view").style.display = "none"
        document.getElementById("item-view").style.display = "none"
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";

    });

    //Enter button for login credentials, checks to see username (alias) is not empty and then runs SQL query
    document.getElementById("enter").addEventListener("click", function(event) {
        var alias = document.forms.frm.alias.value;
        var pass = document.forms.frm.pass.value;
        if (alias === "") {
            alert("105, Please enter a name" + alias);
        } else {

            document.getElementById("section-1").style.display = "none";
            document.getElementById("section-2").style.display = "none";
            document.getElementById("section-3").style.display = "block";
            document.getElementById("coins-gps").style.display = "none";
            document.getElementById("store").style.display = "none";
            document.getElementById("add_item_block").style.display = "none";
            document.getElementById("store-list").style.display = "none";
            document.getElementById("store-view").style.display = "none";
            document.getElementById("item-view").style.display = "none";
            document.getElementById("purchase-view").style.display = "none";
            document.getElementById("sales-view").style.display = "none";

            document.getElementById("alias-input").appendChild(document.createTextNode(alias));
            //user = document.getElementById("alias-input");
            //user.value = alias;
            //blockstack.signUserOut(window.location.href)
        }
    });


    // Event listener for enter key, check to see if username is not empty then runs SQL query

    $("alias").keydown(function(event) {
        if (event.which == 13) {

            var alias = document.forms.frm.alias.value;
            var pass = document.forms.frm.pass.value;

            if (alias !== "") { // 13 is enter
                document.getElementById("section-1").style.display = "none";
                document.getElementById("section-2").style.display = "none";
                document.getElementById("section-3").style.display = "block";
                document.getElementById("coins-gps").style.display = "none";
                document.getElementById("store").style.display = "none";
                document.getElementById("add_item_block").style.display = "none";
                document.getElementById("store-list").style.display = "none";
                document.getElementById("store-view").style.display = "none";
                document.getElementById("item-view").style.display = "none";
                document.getElementById("purchase-view").style.display = "none";
                document.getElementById("sales-view").style.display = "none";

                //event.preventDefault()
                //blockstack.signUserOut(window.location.href)
                document.getElementById("alias-input").appendChild(document.createTextNode(alias));
            } else {
                alert("147, Please enter a name " + alias);
            }
        }
    });




    // Trade coins button will show map and options to sell or buy coins
    document.getElementById("trade-coins").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "block";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";
        getPersonalListingsOnMap();


        //initMap();
    });

    // button that takes you back to main menu from the trade coin page
    document.getElementById("return-from-map").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "block";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";

    });
    // Menu item that takes you to personal store
    document.getElementById("store-button").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("store").style.display = "block";
        document.getElementById("sales-view").style.display = "none";
        myStore();
    });


    // add catalog item for your personal store
    document.getElementById("add_catalog_item_button").addEventListener("click", function(event) {
        addListing();
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "block";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";

    });

    // go back to main menu from personal store
    document.getElementById("return-from-storemenu").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "block";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";
    });

    // Checks to see if data is filled, runs SQL insert, then return to store menu
    document.getElementById("create-sc-item").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "block";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";
    });

    // Cancel catalog item creation, return to store menu
    document.getElementById("cancel-sc-item").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "block";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";

    });

    // Store view button that takes to back to store listings
    document.getElementById("return-from-storeview").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "block";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";

    });

    // Main menu button that takes you to list of shops
    document.getElementById("shops").addEventListener("click", function(event) {

        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "block";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";




        //get an JSON array of peer IDs
        coinAjax.getConnectedPeers().then((res) => {
            processStoreJSON(res);
        }).catch((e) => {
            alert("app.js, 316, " + e.statusText.toString());
        });
    });

    // Return to main menu from shop listings
    document.getElementById("return-from-browser").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "block";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";

    });


    // Opens item to buy
    document.getElementById("create-sc-item").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "block";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";
    });

    // Return to store view from specific item
    document.getElementById("leave-item-detail").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "block";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";
    });



    document.getElementById("virtual").addEventListener("click", function(event) {

        //document.getElementById("listview-stores").innerHTML = "<li class="btn btn-primary btn-lg" id="store1">"++"<br>"++"<br>"++"</li>";
    });

    // Purchasing item after clicking buy
    document.getElementById("buy-item").addEventListener("click", function(event) {

    });

    document.getElementById("store-location-track").addEventListener("click", function(event) {

    });

    document.getElementById("post").addEventListener("click", function(event) {

    });


    document.getElementById("save-profile").addEventListener("click", function(event) {
    saveProfile();

    });


    $("#purchases-button").click(() => {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "block";
        document.getElementById("sales-view").style.display = "none";
        alert('test');

        getPurchaseHistory();
    });



    $("#return-from-purchases").click(() => {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "block";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";
    });
    $("#orders-button").click(() => {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "block";

        coinAjax.sales().then((res) => {
            var str = JSON.stringify(res);
            var sli = res.sales.slice(0, 3);

            sli.forEach((i) => {
                listSales(i);
            })
        });
    });
    $("#return-to-store").click(() => {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "block";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";
    });
    $("#return-to-menu").click(() => {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "block";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";
    });

});






//create crypto listing on Coin Modal
$("#create-crypto-listing").on("click", () => {
    var cryptoPost = {
        "listing": {
            "slug": document.forms.coinTradefrm.trade.value + "-for-bch",
            "metadata": {
                "version": 4,
                "contractType": "CRYPTOCURRENCY",
                "format": "MARKET_PRICE",
                "expiry": "2037-12-31T05:00:00.000Z",
                "acceptedCurrencies": [
                    "BTC"
                ],
                "pricingCurrency": "",
                "language": "",
                "escrowTimeoutHours": 1080,
                "coinType": document.forms.coinTradefrm.trade.value,
                "coinDivisibility": 100000000,
                "priceModifier": 0
            },
            "item": {
                "title": document.forms.coinTradefrm.trade.value,
                "description": document.forms.coinTradefrm.trade.value,
                "processingTime": "",
                "price": 0,
                "nsfw": false,
                "tags": document.forms.coinTradefrm.trade.value,
                "images": [{
                    "filename": listing.filename,
                    "tiny": listing.hashes.tiny,
                    "small": listing.hashes.small,
                    "medium": listing.hashes.medium,
                    "large": listing.hashes.large,
                    "original": listing.hashes.original
                }],
                "categories": [
                    "Coins"
                ],
                "grams": 0,
                "condition": "",
                "options": [],
                "skus": [{
                    "productID": "",
                    "surcharge": 0,
                    "quantity": 0
                }]
            },
            "shippingOptions": [],
            "coupons": [],
            "termsAndConditions": "",
            "refundPolicy": ""
        }
    };
    coinAjax.listing("POST", undefined, cryptoPost).then((res) => {
        var button = document.createElement("BUTTON");
        button.setAttribute("href", "#");
        button.setAttribute("id", res.listing.slug);
        button.setAttribute("class", "w3-button w3-black");
        button.addEventListener("click", function() {
            alert("BUY THIS!");
            alert(res.listing.slug);
        });

    })



});




//Add Catalog Item client code
$(document).ready(function() {
    $(".digital_good").hide();
    $(".crypto").hide();
    $(".physical_good").show();
    $(".good").show();
    $("#sc_type").change(() => {
        //catalog item type
        if ($("#sc_type").val() == "physical_good") {
            $(".digital_good").hide();
            $(".crypto").hide();
            $(".physical_good").show();
            $(".good").show();
        } else if ($("#sc_type").val() == "digital_good" || $("#sc_type").val() == "service") {
            $(".physical_good").hide();
            $(".good").show();
            $(".digital_good").show();
            $(".crypto").hide();

        } else if ($("#sc_type").val() == "cryptocurrency") {
            $(".physical_good").hide();
            $(".good").hide();
            $(".digital_good").hide();
            $(".crypto").show();
        }
    })
});


//Add photo and create listing on Item screen
$("input[type=file]").on("change", (evt) => {

    var listing = {
        filename: "",
        hashes: {
            tiny: "",
            small: "",
            medium: "",
            large: "",
            original: ""
        }
    };
    var selFile = evt.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function(e) {
        b64 = e.target.result.substring(22);

        var json = [{
            "filename": evt.target.files[0].name,
            "image": b64
        }];
        coinAjax.img("POST", undefined, json).then((res) => {
            var json = res;
            listing.filename = json[0].filename;
            listing.hashes.tiny = json[0].hashes.tiny;
            listing.hashes.small = json[0].hashes.small;
            listing.hashes.medium = json[0].hashes.medium;
            listing.hashes.large = json[0].hashes.large;
            listing.hashes.original = json[0].hashes.original;
        });
    };
    reader.readAsDataURL(selFile);


});




//show personal store
function myStore(){
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

        })
}

//getPersonal Listings for Map
function getPersonalListingsOnMap(){
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

    


//save profile data from profileModal
function saveProfile(){
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

//get Purchase History data, display on purchase screen.
function getPurchaseHistory(){
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
                                coinAjax.order("GET",orderId).then((res) => {
                                    var order = JSON.stringify(res);
                                    openOrderFunc(order);
                                })
                            });})
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
        coinAjax.order("GET",orderId).then((res) => {
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

//open external store and show catalog listings
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





//open order on order screen and display order modal 
function openOrderFunc(order) {
    alert(order);
/*
    var id = order.contract.vendorListings[0].items.list[0].listingHash
    var pic;
    var listings = JSON.parse(order.contract.vendorListings);
    if (listings.length > 10) listings.slice(0, 10);
    listings.forEach(function(i) {
        items.list.forEach((y) =>{
            var title = y.
        });
    });
    var orderName =orderName document.getElementById("store-name");
    orderName.appendChild(document.createTextNode(profile.name));
    var loc = document.createElement("h2");
    loc.appendChild(document.createTextNode(profile.location));
    orderName.appendChild(loc);
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
    */
}




//display itemModal to purchase item 
function items(profile) {
    alert("680, buy");

}