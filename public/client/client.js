

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
            json.forEach((i) => {
            var listing = {};
            listing.filename = i.filename;
            listing.hashes.tiny = i.hashes.tiny;
            listing.hashes.small = i.hashes.small;
            listing.hashes.medium = i.hashes.medium;
            listing.hashes.large = i.hashes.large;
            listing.hashes.original = i.hashes.original;
            queue.loadListingImg(listing)

        });

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
        if ($("#sc_type").val() == "PHYSICAL_GOOD") {
            $(".digital_good").hide();
            $(".crypto").hide();
            $(".physical_good").show();
            $(".good").show();
        } else if ($("#sc_type").val() == "DIGITAL_GOOD" || $("#sc_type").val() == "SERVICE") {
            $(".physical_good").hide();
            $(".good").show();
            $(".digital_good").show();
            $(".crypto").hide();

        } else if ($("#sc_type").val() == "CRYPTOCURRENCY") {
            $(".physical_good").hide();
            $(".good").hide();
            $(".digital_good").hide();
            $(".crypto").show();
        }
    })
});

//toggle

    $('#follow-profile').change(function() {
  if($(this).prop('checked') == true){
    json = queue.loadfollower($("#store-view").data());
    coinAjax.friends("FOLLOW",json);
  } else {
    json = queue.loadfollower($("#store-view").data());
    coinAjax.friends("UNFOLLOW",json);
  }
})