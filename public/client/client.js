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


//Add Catalog Item clientside code
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

//show catalog items on personal store screen
function myStore() {
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