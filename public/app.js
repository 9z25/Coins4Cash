document.addEventListener("DOMContentLoaded", function(event) {
    //load Welcome screen

    document.getElementById('section-1').style.display = 'block'
    document.getElementById('section-2').style.display = 'none'
    document.getElementById('section-3').style.display = 'none'
    document.getElementById('coins-gps').style.display = 'none'
    document.getElementById('store').style.display = 'none'
    document.getElementById('add_item_block').style.display = 'none'
    document.getElementById('store-list').style.display = 'none'
    document.getElementById('store-view').style.display = 'none'
    document.getElementById('item-view').style.display = 'none'

    //sign in button on Welcome screen, click and show login input
    document.getElementById('signin-button').addEventListener('click', function(event) {
        event.preventDefault()
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'block'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        //document.getElementById('store').style.display = 'none'
        //document.getElementById('add_item_block').style.display = 'none'
        //document.getElementById('store-list').style.display = 'none'
        //document.getElementById('store-view').style.display = 'none'
        //document.getElementById('item-view').style.display = 'none'
    })

    //Enter button for login credentials, checks to see username (alias) is not empty and then runs SQL query
    document.getElementById('enter').addEventListener('click', function(event) {
        var alias = document.forms['frm']['alias'].value;
        var pass = document.forms['frm']['pass'].value;
        if (alias === "") {
            alert("Please enter a name" + alias);
            return false;
        } else {

            document.getElementById('section-1').style.display = 'none'
            document.getElementById('section-2').style.display = 'none'
            document.getElementById('section-3').style.display = 'block'
            document.getElementById('coins-gps').style.display = 'none'
            //document.getElementById('store').style.display = 'none'
            //document.getElementById('add_item_block').style.display = 'none'
            //document.getElementById('store-list').style.display = 'none'
            //document.getElementById('store-view').style.display = 'none'
            //document.getElementById('item-view').style.display = 'none'
            document.getElementById('alias-input').appendChild(document.createTextNode(alias));
            //user = document.getElementById('alias-input');
            //user.value = alias;
            //blockstack.signUserOut(window.location.href)
        }
    })


    // Event listener for enter key, check to see if username is not empty then runs SQL query
    document.addEventListener('keypress', function(e) {
        var key = e.which || e.keyCode;
        var alias = document.forms['frm']['alias'].value;
        var pass = document.forms['frm']['pass'].value;

        if (key === 13)
            if (alias !== "") { // 13 is enter
                document.getElementById('section-1').style.display = 'none'
                document.getElementById('section-2').style.display = 'none'
                document.getElementById('section-3').style.display = 'block'
                document.getElementById('coins-gps').style.display = 'none'
                //document.getElementById('store').style.display = 'none'
                //document.getElementById('add_item_block').style.display = 'none'
                //document.getElementById('store-list').style.display = 'none'
                //document.getElementById('store-view').style.display = 'none'
                //document.getElementById('item-view').style.display = 'none'
                //event.preventDefault()
                //blockstack.signUserOut(window.location.href)
                document.getElementById('alias-input').appendChild(document.createTextNode(alias));
            }
        else {
            alert("Please enter a name " + alias);
        }
    });


    //show profile
    function showProfile(profile) {

        document.getElementById('heading-name').innerHTML = person.name() ? person.name() : "Nameless Person"
        if (person.avatarUrl()) {
            document.getElementById('avatar-image').setAttribute('src', person.avatarUrl())
        }
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'block'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        //document.getElementById('store').style.display = 'none'
        //document.getElementById('add_item_block').style.display = 'none'
        //document.getElementById('store-list').style.display = 'none'
        //document.getElementById('store-view').style.display = 'none'
        //document.getElementById('item-view').style.display = 'none'
    }


    // Trade coins button will show map and options to sell or buy coins
    document.getElementById('trade-coins').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'block'
        document.getElementById('store').style.display = 'none'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'none'
        document.getElementById('store-view').style.display = 'none'
        document.getElementById('item-view').style.display = 'none'

        initMap();
    })

    // button that takes you back to main menu from the trade coin page
    document.getElementById('return-from-map').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'block'
        //document.getElementById('coins-gps').style.display = 'none'
        //document.getElementById('store').style.display = 'none'
        //document.getElementById('add_item_block').style.display = 'none'
        //document.getElementById('store-list').style.display = 'none'
        //document.getElementById('store-view').style.display = 'none'
        //document.getElementById('item-view').style.display = 'none'
    })

    // Menu item that takes you to personal store
    document.getElementById('store-button').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'block'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'none'
        document.getElementById('store-view').style.display = 'none'
        document.getElementById('item-view').style.display = 'none'
    })

    // add catalog item for your personal store
    document.getElementById('add_catalog_item_button').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'none'
        document.getElementById('add_item_block').style.display = 'block'
        document.getElementById('store-list').style.display = 'none'
        document.getElementById('store-view').style.display = 'none'
        document.getElementById('item-view').style.display = 'none'
    })

    // go back to main menu from personal store
    document.getElementById('return-from-storemenu').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'block'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'none'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'none'
        document.getElementById('store-view').style.display = 'none'
        document.getElementById('item-view').style.display = 'none'
    })

    // Checks to see if data is filled, runs SQL insert, then return to store menu
    document.getElementById('create-sc-item').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'block'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'none'
        document.getElementById('store-view').style.display = 'none'
        document.getElementById('item-view').style.display = 'none'
    })

    // Cancel catalog item creation, return to store menu
    document.getElementById('cancel-sc-item').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'block'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'none'
        document.getElementById('store-view').style.display = 'none'
        document.getElementById('item-view').style.display = 'none'
    })

    // Store view button that takes to back to store listings
    document.getElementById('return-from-storeview').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'none'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'block'
        document.getElementById('store-view').style.display = 'none'
        document.getElementById('item-view').style.display = 'none'
    })

    // Main menu button that takes you to list of shops
    document.getElementById('shops').addEventListener('click', function(event) {
    var showProfile = [];

        //var c4c = new c4c.loadShopList()
        //alert(c4c.loadShopList())
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'none'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'block'
        document.getElementById('store-view').style.display = 'none'
        document.getElementById('item-view').style.display = 'none'

        var pIDs = coinAjax.getConnectedPeers()
        var pID = pIDs
        alert(pID)

        pID.forEach(function(i) {
            var store = coinAjax.getStoreData(i)
            //var temp = new Object();
            //temp["id"] = store.peerID;
            //temp["name"] = store.name;
            //temp["shortDescription"] = store.shortDescription;
            //temp["nsfw"] = store.nsfw;
            //temp["currencies"] = store.currencies;

            //var store = coinAjax.getStoreData(pIDs);
            //alert(store.name)
            //alert(store.shortDescription)
            //showProfile.push(temp)
            coinAjax.getImg(store)


        });

    })

    // Return to main menu from shop listings
    document.getElementById('return-from-browser').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'block'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'none'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'none'
        document.getElementById('store-view').style.display = 'none'
        document.getElementById('item-view').style.display = 'none'
    })

    // View store

    document.getElementById('store1').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'none'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'none'
        document.getElementById('store-view').style.display = 'block'
        document.getElementById('item-view').style.display = 'none'
    })

    // Opens item to buy

    document.getElementById('create-sc-item').addEventListener('click', function(event) {
        alert("Execute insert transaction into 'sc_item', show item in list on personal store")
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'block'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'none'
        document.getElementById('store-view').style.display = 'none'
        document.getElementById('item-view').style.display = 'none'
    })

    // Return to store view from specific item

    document.getElementById('leave-item-detail').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'none'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'none'
        document.getElementById('store-view').style.display = 'block'
        document.getElementById('item-view').style.display = 'none'
    })

    // Example item
    document.getElementById('test1').addEventListener('click', function(event) {
        document.getElementById('section-1').style.display = 'none'
        document.getElementById('section-2').style.display = 'none'
        document.getElementById('section-3').style.display = 'none'
        document.getElementById('coins-gps').style.display = 'none'
        document.getElementById('store').style.display = 'none'
        document.getElementById('add_item_block').style.display = 'none'
        document.getElementById('store-list').style.display = 'none'
        document.getElementById('store-view').style.display = 'none'
        document.getElementById('item-view').style.display = 'block'
    })


    document.getElementById('virtual').addEventListener('click', function(event) {
        alert('List OpenBazaar stores')
        //document.getElementById('listview-stores').innerHTML = '<li class="btn btn-primary btn-lg" id="store1">'++'<br>'++'<br>'++'</li>';
    })

    // Purchasing item after clicking buy
    document.getElementById('buy-item').addEventListener('click', function(event) {
        alert('Create iFrame for purchase order')
    })

    document.getElementById('store-location-track').addEventListener('click', function(event) {
        alert('Create iFrame that shows GPS location')
    })

    document.getElementById('post').addEventListener('click', function(event) {
        alert('Set up buy/sell offer for coin')
    })


})

function items(listings){
alert("ITEM :: " +listings[0].title)
alert("ITEM :: " +listings[0].price.amount + listings[0].price.currencyCode)
}
