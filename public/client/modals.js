var profileModal = document.getElementById('profileModal');

// Get the button that opens the modal
var btn1 = document.getElementById("profile-button");

// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn1.onclick = function() {
    var profile;
    profileModal.style.display = "block";
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

// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
    profileModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        profileModal.style.display = "none";
    }
}

var walletModal = document.getElementById('walletModal');

// Get the button that opens the modal
var btn2 = document.getElementById("wallet-button");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal 
btn2.onclick = function() {
    var balance;
    walletModal.style.display = "block";
    coinAjax.wallet('GET').then((res) => {
        balance = res.confirmed * .00000001
        var amount = document.createTextNode("Amount :" + balance + " coins");
        document.getElementById("amount").append(amount);
        document.getElementById("amount").append(document.createElement("BR"));
    });
    coinAjax.exchangeRate().then((res) => {
        var convertedAmount = Number(res) * balance;
        var countryCurrency = document.createTextNode("USD : " + convertedAmount + " $")
        document.getElementById("amount").append(countryCurrency);
    });


}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    walletModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        walletModal.style.display = "none";
    }
}

var coinModal = document.getElementById('coinModal');

// Get the button that opens the modal
var btn3 = document.getElementById("post");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal 
btn3.onclick = function() {
    coinModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    coinModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        coinModal.style.display = "none";
    }
}



var moderatorModal = document.getElementById('moderatorModal');

// Get the button that opens the modal
var btn5 = document.getElementById("moderators-button");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal 
btn5.onclick = function() {
    var ind;
    coinAjax.moderator("GET").then((res) => {
        var str = JSON.stringify(res);
        var arr = JSON.parse(str);
        arr.forEach((obj) => {
            coinAjax.profile("GET", undefined, obj).then((res) => {
                var string = JSON.stringify(res);
                var profile = JSON.parse(string);
                // Get a reference to the table
                var tableRef = document.getElementById("mod-table")

                // Insert a row in the table at row index 0
                var newRow = tableRef.insertRow(-1);
                var newCell = newRow.insertCell(-1);
                // Insert a cell in the row at index 0

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
    moderatorModal.style.display = "block";
    $("#save-moderator").click(() => {
        moderatorModal.style.display = "none";
    })
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    moderatorModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == moderatorModal) {
        moderatorModal.style.display = "none";
    }
}