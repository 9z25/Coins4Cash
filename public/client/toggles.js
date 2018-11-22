
               
  $('#openStore').on('change', function () {
    if($(this).prop('checked')){
                    var data = {
                "vendor": true
            }
            coinAjax.profile("PATCH", data).catch((e) => {
                alert("411, something wrong!  ???" + e);
            });
    } else {
                            var data = {
                "vendor": false
            }
            coinAjax.profile("PATCH", data).catch((e) => {
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
                "GPS": x
            }
            coinAjax.profile("PATCH", data).then(() => {
                coinAjax.profile("GET").then((res) => {
                var y = document.getElementById("demo");
                y.innerHTML = res.GPS;    
                })
                
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
                "GPS": " "
            }
            coinAjax.profile("PATCH", data).then(() => {
                coinAjax.profile("GET").then((res) => {
                var y = document.getElementById("demo");
                y.innerHTML = res.GPS;
                })
            }).catch((e) => {
                alert("411, something wrong!  ???" + e);
            });
    }
});