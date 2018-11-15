

window.onload = function(){
//profile modal
var profileModal = document.getElementById('profileModal');
var walletModal = document.getElementById('walletModal');
var coinModal = document.getElementById('coinModal');
var moderatorModal = document.getElementById('moderatorModal');
var orderModal = document.getElementById('orderModal');
var addItemModal = document.getElementById('addItemModal');

// Get the button that opens the modal
var btn0 = document.getElementById("profile-button");
var btn1 = document.getElementById("wallet-button");
var btn2 = document.getElementById("post");
var btn3 = document.getElementById("moderators-button");
var btn4 = document.getElementById("order-button");
var btn5 = document.getElementById("add_catalog_item_button");


// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];
var span5 = document.getElementsByClassName("close")[5];

// Profile modal will display data on form
btn0.onclick = () => {
    profileModal.style.display = "block";
    getProfileData();
}

//wallet modal will display balance and has send and recieve payments abilities
btn1.onclick = () => {
  walletModal.style.display = "block";
  showBalance();
}


//coin modal that calls openOrder(). openOrder() will display order data on modal
btn2.onclick = () => {
  addItemModal.style.display = "block";
}



//moderator modal will render table to select moderators for your store
btn3.onclick = () => {
    moderatorModal.style.display = "block";
    renderModTable();
    $("#save-moderator").click(() => {
        moderatorModal.style.display = "none";
    });
}
btn5.onclick = () => {
    addItemModal.style.display = "block";
    $("#create-sc-item").click(() => {
        addItemModal.style.display = "none";
    });
    $("#cancel-sc-item").click(() => {
        addItemModal.style.display = "none";
    });
}

//btn4.onclick = () => {}


// When the user clicks on <span> (x), close the modal
span0.onclick = () => {
    profileModal.style.display = "none";
}

span1.onclick = () => {
    walletModal.style.display = "none";
}

span2.onclick = () => {
    coinModal.style.display = "none";
}

span3.onclick = () => {
    moderatorModal.style.display = "none";
}


span4.onclick = () => {
    addItemModal.style.display = "none";
}

span5.onclick = () => {
    addItemModal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == profileModal) {
        profileModal.style.display = "none";
    }
}

window.onclick = (event) => {
    if (event.target == walletModal) {
        walletModal.style.display = "none";
    }
}


window.onclick = (event) => {
    if (event.target == coinModal) {
        coinModal.style.display = "none";
    }
}

window.onclick = (event) => {
    if (event.target == moderatorModal) {
        moderatorModal.style.display = "none";
    }
}


window.onclick = (event) => {
    if (event.target == orderModal) {
        orderModal.style.display = "none";
    }
}

window.onclick = (event) => {
    if (event.target == addItemModal) {
        addItemModal.style.display = "none";
    }
}
}



function openOrderFunc(order) {
 orderModal.style.display = "block";
    var str = JSON.stringify(order.contract.vendorListings);
    var listings = JSON.parse(str);
    var orderList = document.getElementById("orderList");
    if (listings.length > 10) listings.slice(0, 10);
    listings.forEach(function(i) {
        var itemTitle = document.createTextNode(i.item.title);
        var desc = document.createTextNode(i.item.description);
        var peerID = document.createTextNode(i.vendorID.peerID);
        var type = document.createTextNode(i.metadata.contractType);
        var a = document.createElement("LI");
        var b = document.createElement("LI");
        var c = document.createElement("LI");
        var d = document.createElement("LI");

        a.appendChild(itemTitle);
        b.appendChild(desc);
        c.appendChild(peerID);
        d.appendChild(type);

        orderList.appendChild(a);
        orderList.appendChild(b);
        orderList.appendChild(c);
        orderList.appendChild(d);
        $("#orderList").append(orderList);
        if (i.item.images) {
            i.item.images.forEach((y) => {
                var filename = document.createTextNode(i.image.filename);
                var a = document.createElement("LI");
                a.appendChild(fileName)
                orderList.appendChild(a);
                if (y.medium != null) {
                    var images = coinAjax.img("GET", y.medium).then(function(res) {
                        var imm = document.createElement("IMG");
                        var urlCreator = window.URL || window.webkitURL;
                        var imageUrl = urlCreator.createObjectURL(res);
                        imm.setAttribute("src", imageUrl);
                        imm.setAttribute("width", "304");
                        imm.setAttribute("height", "228");
                        var image = $("li").append(imm);
                        image.append("#orderList")
                    });
                }
            });


        }

    });

}


function getProfileData(){
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
}
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

// render moderator table

function renderModTable(){
      coinAjax.moderator("GET").then((res) => {
        var str = JSON.stringify(res);
        var arr = JSON.parse(str);
        arr.forEach((obj) => {
            coinAjax.profile("GET", undefined, obj).then((res) => {
                var string = JSON.stringify(res);
                var profile = JSON.parse(string);

                // Get a reference to the table
                var tableRef = document.getElementById("mod-table")

                // Insert a row at the end of the table
                var newRow = tableRef.insertRow(-1);
                var newCell = newRow.insertCell(-1);

                // Insert a cell at the end of the row
                var x = newRow.insertCell(-1);

                // Append a text node to the cell
                var newText = document.createTextNode(res.name);
                newCell.appendChild(newText);
                newCell.addEventListener("click", () => {
                    if (newCell.innerHTML !== "") {
                        x.innerHTML = newCell.innerHTML;
                        newCell.innerHTML = "";
                    }
                })
                x.addEventListener("click", () => {
                    if (x.innerHTML !== "") {
                        newCell.innerHTML = x.innerHTML;
                        x.innerHTML = "";
                    }
                })
            }).catch((e) => {
                return;
            });
        });
    });
}
//open order on order screen and display order modal 


function showBalance(){
    var balance;
    coinAjax.wallet("BALANCE").then((res) => {
        balance = res.confirmed * .00000001
        var amount = document.createTextNode("Amount :" + balance + " coins");
        document.getElementById("amount").append(amount);
        document.getElementById("amount").append(document.createElement("BR"));
    }).catch((err) => {
        alert(err.message);
    });
    coinAjax.exchangeRate().then((res) => {
        var convertedAmount = res * balance;
        var countryCurrency = document.createTextNode("USD : " + convertedAmount + " $")
        document.getElementById("amount").append(countryCurrency);
    });
}



//display itemModal to purchase item 
function items(profile) {
    alert("680, buy");

}