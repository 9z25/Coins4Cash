
               
  $('#openStore').on('change', function () {
    if($(this).prop('checked')){
                    var data = {
                "handle": "",
                "name": document.forms.profilefrm.name.value,
                "location": document.forms.profilefrm.location.value,
                "about": document.forms.profilefrm.about.value,
                "shortDescription": document.forms.profilefrm.shortDesc.value,
                "vendor": true,
            }
            coinAjax.profile("PUT", data).catch((e) => {
                alert("411, something wrong!  ???" + e);
            });
    } else {
                            var data = {
                "handle": "",
                "name": document.forms.profilefrm.name.value,
                "location": document.forms.profilefrm.location.value,
                "about": document.forms.profilefrm.about.value,
                "shortDescription": document.forms.profilefrm.shortDesc.value,
                "vendor": false,
            }
            coinAjax.profile("PUT", data).catch((e) => {
                alert("411, something wrong!  ???" + e);
            });
    }
});

    $('#putGPS').on('change', function () {
    if($(this).prop('checked')){
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
            coinAjax.profile("PUT", data).then((res) => {
                var y = document.getElementById("demo");
                y.innerHTML = res.GPS;
            }).catch((e) => {
                alert("411, something wrong!  ???" + e);
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




    } else {
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
            coinAjax.profile("PUT", data).then((res) => {
                var y = document.getElementById("demo");
                y.innerHTML = res.GPS;
            }).catch((e) => {
                alert("411, something wrong!  ???" + e);
            });
    }
});