var queue = (function() {
var image = null;
var profile = null;
var listing = {
    "slug": "vintage-dress-physical-no-options",
    "metadata": {
      "contractType": "PHYSICAL_GOOD",
      "format": "FIXED_PRICE",
      "expiry": "2037-12-31T05:00:00.000Z",
      "pricingCurrency": "USD"
    },
    "item": {
      "title": "Vintage dress (physical; no options)",
      "description": "This is a listing example.",
      "processingTime": "3 days",
      "price": 100,
      "tags": [
        "vintage dress"
      ],
      "images": [],
      "categories": [
        "👚 Apparel & Accessories"
      ],
      "condition": "New",
      "options": [],
      "skus": [],
      "nsfw": false
    },
    "shippingOptions": [{
      "name": "Worldwide",
      "type": "FIXED_PRICE",
      "regions": [
        "ALL"
      ],
      "services": [{
          "name": "Standard",
          "price": 0,
          "estimatedDelivery": "3 days"
        },
        {
          "name": "Express",
          "price": 1,
          "estimatedDelivery": "3 days"
        }
      ]
    }],
    "taxes": [],
    "coupons": [],
    "moderators": [
    	"QmamG5uQjRqrdxAxp4DJK4TLvs2Yet8Nuiztip4ALD7i1U",
    	"Qmbh95GgLueUusSgm4tUhHFEZA6hNuB8yYAgzi1FCDQX2G"
    	],
    "termsAndConditions": "Terms and conditions.",
    "refundPolicy": "Refund policy."
  };
var wallet = null;
let dispute = {
	"orderId": "",
	"claim": ""
}
let spend = {
    "wallet": "TBTC",
    "address": "",
    "amount": "",
    "feeLevel": "",
    "memo": "",
}
let follow = {
	"id":""
}
 

return {
returnProfile: () => {
	return profile;
},
returnBalance: () => {
	return JSON.stringify(balance);
},
loadProfile: () => {
	coinAjax.profile("GET").then(data => profile = data);
},

loadSpend: () => {
	return spend;
},

loadDispute: (oid,r) => {
	dispute.orderId = oid;
	dispute.claim = r;
	return dispute;
},
loadListing: () => {
	return listing;
},
loadListingImg: (json) => {
	listing.push(json);
	return;
},
loadFollower: (pid) => {
	follow.id = pid;
	return follow;
}
}

})()