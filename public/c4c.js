var c4c = {
//capture store name, short desc, and avatar
loadShopList: function(){
    	var pID = coinAjax.getConnectedPeers()[1]
    	for(var t in pID){
    		coinAjax.getStoreData(pID[t])
    		} 	
    },
getAvatar: function(){
	    return coinAjax.getImg(pID)
        },
getItemListing: function(){
	    return coinAjax.getPeerListing(pID)
        }
        }

