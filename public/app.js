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
    //load Welcome screen
    var old = alert;

    alert = function() {
        console.log(new Error().stack);
        old.apply(window, arguments);
    };


    document.getElementById("section-1").style.display = "block";
    document.getElementById("section-2").style.display = "none";
    document.getElementById("section-3").style.display = "none";
    document.getElementById("coins-gps").style.display = "none";
    document.getElementById("store").style.display = "none";
    document.getElementById("add_item_block").style.display = "none";
    document.getElementById("store-list").style.display = "none";
    document.getElementById("store-view").style.display = "none";
    document.getElementById("item-view").style.display = "none";

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
    });

    //Enter button for login credentials, checks to see username (alias) is not empty and then runs SQL query
    document.getElementById("enter").addEventListener("click", function(event) {
        var alias = document.forms.frm.alias.value;
        var pass = document.forms.frm.pass.value;
        if (alias === "") {
            alert("Please enter a name" + alias);
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
                document.getElementById("store").style.display = "none"
                document.getElementById("add_item_block").style.display = "none"
                document.getElementById("store-list").style.display = "none"
                document.getElementById("store-view").style.display = "none"
                document.getElementById("item-view").style.display = "none"
                //event.preventDefault()
                //blockstack.signUserOut(window.location.href)
                document.getElementById("alias-input").appendChild(document.createTextNode(alias));
            } else {
                alert("Please enter a name " + alias);
            }
        }
    });


    //show profile
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
        document.getElementById("add_item_block").style.display = "none"
        document.getElementById("store-list").style.display = "none"
        document.getElementById("store-view").style.display = "none"
        document.getElementById("item-view").style.display = "none"
    }


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
        document.getElementById("store").style.display = "block";
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
    });

    // Main menu button that takes you to list of shops
    document.getElementById("shops").addEventListener("click", function(event) {

        //var c4c = new c4c.loadShopList()
        //alert(c4c.loadShopList())
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "none";
        document.getElementById("section-3").style.display = "none";
        document.getElementById("coins-gps").style.display = "none";
        document.getElementById("store").style.display = "none";
        document.getElementById("add_item_block").style.display = "none";
        document.getElementById("store-list").style.display = "block";
        document.getElementById("store-view").style.display = "none";
        document.getElementById("item-view").style.display = "none";

        //Create grab profile data for each peer ID in array
        function processStoreJSON(pA) {
            var arr = JSON.parse(pA);
            var sli = arr.slice(0, 3)
            sli.forEach((i) => {
                coinAjax.getStoreData(i).then((res) => {
                    res.text().then((text) => {
                        var json = JSON.parse(text);
                        listStore(json);
                    }).catch((e) => {
                        alert("something wrong with getStoreData()! You need to figure it out: " + e.toString());
                    });
                });
            })

        }

        //get an JSON array of peer IDs
        coinAjax.getConnectedPeers().then((res) => {
            res.text().then((text) => {
                processStoreJSON(text);
            }).catch((e) => {
                alert("something wrong with getConnectedPeers()!  ???" + e.toString());
            });
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

    document.getElementById("putGPS").addEventListener("click", function(event) {
        var x;
        var y;
        getLocation();

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                //x = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            x = position.coords.latitude + "," + position.coords.longitude;
            var data = {
                "handle": "",
                "name": document.forms.profilefrm.name.value,
                "location": document.forms.profilefrm.location.value,
                "about": document.forms.profilefrm.about.value,
                "shortDescription": document.forms.profilefrm.shortDesc.value,
                "nsfw": false,
                "vendor": false,
                "moderator": false,
                "GPS": x
            }
            coinAjax.putGPS(data).then((res) => {
                res.text().then((text) => {
                    alert(text);
                    var y = document.getElementById("demo");
                    y.innerHTML = text;
                }).catch((e) => {
                    alert("something wrong!  ???" + e.toString());
                });
            });
        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    // x = "User denied the request for Geolocation."
                    // alert(x);
                    break;
                case error.POSITION_UNAVAILABLE:
                    // x = "Location information is unavailable."
                    // alert(x);
                    break;
                case error.TIMEOUT:
                    // x = "The request to get user location timed out."
                    // alert(x);
                    break;
                case error.UNKNOWN_ERROR:
                    // x = "An unknown error occurred."
                    // alert(x);
                    break;
            }
        }




    });

    document.getElementById("save-profile").addEventListener("click", function(event) {
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
        coinAjax.profile("PUT",data).then((res) => {
            res.text().then((text) => {
                var profile = JSON.parse(text);
                document.forms.profilefrm.name.value = profile.name;
                document.forms.profilefrm.location.value = profile.location;
                document.forms.profilefrm.about.value = profile.about;
                document.forms.profilefrm.shortDesc.value = profile.shortDescription;
                document.forms.profilefrm.nsfw.checked = profile.nsfw;
                document.forms.profilefrm.vendor.checked = profile.vendor;
                document.forms.profilefrm.moderator.checked = profile.moderator;
                if(profile.contactInfo == null){
                    document.forms.profilefrm.website.value = "";
                    document.forms.profilefrm.email.value = "";
                    document.forms.profilefrm.phone.value = "";
                } else {
                document.forms.profilefrm.website.value = profile.contactInfo.website; 
                document.forms.profilefrm.email.value = profile.contactInfo.email;
                document.forms.profilefrm.phone.value = profile.contactInfo.phoneNumber;
            }
            })
        });


    });
});
//Add photo
$("input[type=file]").on("change",function(){
    var fileName;
    readURL(this);
      function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        fileName = escape(f.name);
      output.push("<li><strong>", escape(f.name), "</strong> (", f.type || "n/a", ") - ",
                  f.size, " bytes, last modified: ",
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : "n/a",
                  "</li>");
    }
    document.getElementById("sc_image").innerHTML = "<ul>" + output.join("") + "</ul>";
  }

  $("input[type=file]").addEventListener("change", handleFileSelect, false);

  function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
    var formData = new formData();
    formData.append(fileName, e.target.result)
      coinAjax.postImg(formData).then((res) => {
        if(res.ok){
            var imm = $("#sc_image");
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(res.blob());
            imm.setAttribute("src", imageUrl);
            imm.setAttribute("width", "304");
            imm.setAttribute("height", "228");
            alert("IMG Url ::" + imageUrl);          
        }
      }) 
    }

    reader.readAsDataURL(input.files[0]);
  }
}

        coinAjax.getImg(profile.avatarHashes.small).then((res) => {
            if(res.ok){
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(res.blob());
            imm.setAttribute("src", imageUrl);
            imm.setAttribute("width", "304");
            imm.setAttribute("height", "228");
            alert("IMG Url ::" + imageUrl);
            button.appendChild(imm);
        }
        });
});
//Add Catalog Item client code
$(document).ready(function() {
    $(".digital_good").hide();
    $(".crypto").hide();
    $(".physical_good").show();
    $(".good").show();
$( "#sc_type" ).change(() => {
//catalog item type
if ($("#sc_type").val() == "physical_good"){
    $(".digital_good").hide();
    $(".crypto").hide();
    $(".physical_good").show();
    $(".good").show();
} else if ($("#sc_type").val() == "digital_good" || $( "#sc_type" ).val() == "service") {
    $(".physical_good").hide();
    $(".good").show();
    $(".digital_good").show();
    $(".crypto").hide();

} else if ($("#sc_type").val() == "cryptocurrency"){
    $(".physical_good").hide();
    $(".good").hide();
    $(".digital_good").hide();
    $(".crypto").show();
}
})
});

function addListing(i){

}
function listStore(profile) {
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

    if (profile.avatarHashes != null) {
        coinAjax.getImg(profile.avatarHashes.small).then((res) => {
            if(res.ok){
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(res.blob());
            imm.setAttribute("src", imageUrl);
            imm.setAttribute("width", "304");
            imm.setAttribute("height", "228");
            alert("IMG Url ::" + imageUrl);
            button.appendChild(imm);
        }
        });

    }
    button.addEventListener("click", function() {
        openStoreFunc(profile, button)
    });

}



function openStoreFunc(profile, button) {

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
    coinAjax.getPeerListings(profile.peerID).then((res) => {
        res.text().then((str) => {
            if(str.charAt(0) == "<") {
                return;
            } 
            var listings = JSON.parse(str);
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
            var ava = coinAjax.getImg(i.thumbnail.small)
            ava.done(function(res) {
                var imm = document.createElement("IMG");
                pic = res;

                var urlCreator = window.URL || window.webkitURL;
                var imageUrl = urlCreator.createObjectURL(pic);
                imm.setAttribute("src", imageUrl);
                imm.setAttribute("width", "304");
                imm.setAttribute("height", "228");
                alert("IMG Url ::" + imageUrl);
                button.appendChild(imm);
            });
        }
        button.addEventListener("click", function() {
            items(id);
        });
  
        })
    });
  });




}



function items(profile) {
    alert("buy");

}