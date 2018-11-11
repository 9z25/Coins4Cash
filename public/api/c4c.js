var c4c = new Object()
//capture store name, short desc, and avatar
c4c.loadShopList = function(){
    	var pID = coinAjax.getConnectedPeers()
    	return coinAjax.getStoreData(pID)
        }
c4c.getAvatar = function(){
	    return coinAjax.getImg(pID)
        }
c4c.getItemListing = function(){
	    return coinAjax.getPeerListing(pID)
        }
