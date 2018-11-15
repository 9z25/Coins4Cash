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

  //new draft
    function showProfile(profile) {

        document.getElementById("heading-name").innerHTML = person.name() ? person.name() : "Nameless Person";
        if (person.avatarUrl()) {
            document.getElementById("avatar-image").setAttribute("src", person.avatarUrl());
        }
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "block";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none"
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";

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

    var queue = new Queue();
    queue.image.filename = "test123";
    console.log(queue.image.filename);

    coinAjax.profile('GET').then((res) => {
        var profile = res;
        var queue = new Queue();
        queue.profile.peerID = profile.peerID;
        queue.profile.handle = profile.handle;
        queue.profile.name = profile.name;
        queue.profile.location = profile.location;
        queue.profile.about = profile.about;
        queue.profile.shortDescription = profile.shortDescription;
        queue.profile.nsfw = profile.nsfw;
        queue.profile.vendor = profile.vendor;
        queue.profile.moderator = profile.moderator;


        if (queue.profile.contactInfo !== undefined) {
            if (profile.contactInfo.website === undefined) document.forms.profilefrm.website.value = '';
            else document.forms.profilefrm.website.value = queue.profile.contactInfo.website;
            if (profile.contactInfo.email === undefined) document.forms.profilefrm.contactInfo.email.value = '';
            else document.forms.profilefrm.email.value = queue.profile.contactInfo.email;
            if (profile.contactInfo.phoneNumber === undefined) document.forms.profilefrm.phone.value = '';
            else document.forms.profilefrm.phone.value = queue.profile.contactInfo.phoneNumber;
        } else {
            return;
        }

        
    });

    document.getElementById("section-1").style.display = "block";
    document.getElementById("section-2").style.display = "none";
    document.getElementById("section-3").style.display = "none";
    document.getElementById("coins-gps").style.display = "none";
    document.getElementById("store").style.display = "none";
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
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("store").style.display = "block";
        document.getElementById("sales-view").style.display = "none";
        myStore();
    });



    // go back to main menu from personal store
    document.getElementById("return-from-storemenu").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "block";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "none";
        document.getElementById("sales-view").style.display = "none";
    });

    // Checks to see if data is filled, runs SQL insert, then return to store menu
    document.getElementById("create-sc-item").addEventListener("click", function(event) {
        addItemModal.style.display = "none";
    });

    // Cancel catalog item creation, return to store menu
    document.getElementById("cancel-sc-item").addEventListener("click", function(event) {
        addItemModal.style.display = "none";

    });

    // Store view button that takes to back to store listings
    document.getElementById("return-from-storeview").addEventListener("click", function(event) {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
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


    document.getElementById("wallet-send").addEventListener("click", function(event) {
        var walletFrm = document.getElementById('WalletFrm');
        var addr = document.forms.walletFrm.recepientAddr.value;
        if (confirm("Send to: " + addr)) {
            spend(addr);
        }
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
        document.getElementById("store-list").style.display = "none";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";
        document.getElementById("purchase-view").style.display = "block";
        document.getElementById("sales-view").style.display = "none";
        getPurchaseHistory();
    });



    $("#return-from-purchases").click(() => {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "block";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
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