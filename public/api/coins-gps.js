
function initMap(){

  // Map options
  var options = {
    zoom:15,
    center:{lat:32.7157,lng:-117.1611}
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function(event){
    // Add marker
    addMarker({coords:event.latLng});
  });


/*{lat:32.7157,lng:-117.1611}
  // add marker
  var marker = new google.maps.Marker({
    position:{lat:32.7114,lng:-117.1599},
    map:map,
    icon:"http://i66.tinypic.com/ykzdv.jpg"
  })
}
var infoWindow = new google.maps.InfoWindow({
  content:"<h1>Lynn MA</h1>"
})

marker.addListener('click',function(){
infoWindow.open(map,marker);

})
*/
/*
addMarker({coords:lat:42.4668,lng:-70.9495},
iconImage:'http://i66.tinypic.com/ykzdv.jpg');
addMarker({coords:lat:42,lng:-70.9});
addMarker({coords:lat:22,lng:-117.2});*/

var markers = [
{
  coords:{lat:25.4668,lng:-110.9495},
  iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
  content:'<h1>Lynn MA</h1>'
},
{
  coords:{lat:33.8584,lng:-109.9300},
  content:'<h1>Amesbury MA</h1>'
},
{
  coords:{lat:27.7762,lng:-114.0773}
}
];


            // Loop through markers
            for(var i = 0;i < markers.length;i++){
              // Add marker
              addMarker(markers[i]);
            }
      // Add Marker Function

//add Marker function
function addMarker(props){
var marker = new google.maps.Marker({
  position:props.coords,
  map:map,
  //icon:props.iconImage
});

//check for custom icon
if(props.iconImage){
// Set icon image
marker.setIcon(props.iconImage);
}

  // Check content
  if(props.content){
    var infoWindow = new google.maps.InfoWindow({
      content:props.content
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
  }
}
}

document.getElementById('return-from-map').addEventListener('click', function(event) {
      console.log('return')
      document.getElementById('coins-gps').style.display = 'none'
      document.getElementById('section-2').style.display = 'none'
      document.getElementById('section-3').style.display = 'block'
      

      //document.getElementById('alias-input').appendChild(document.createTextNode(alias));
      //user = document.getElementById('alias-input');
      //user.value = alias;
      //blockstack.signUserOut(window.location.href)
    })
