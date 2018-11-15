function Queue() {
  this.image = {
         filename :   ``,
         hashes : [{
             tiny :   ``,
             small :   ``,
             medium :   ``,
             large :   ``,
             original :  ``  
        }]
    };

    this.profile = {
     peerID :   ``,
     handle :   ``,
     name :   ``,
     location :    ``,
     about :   ``,
     shortDescription :   ``,
     nsfw :  ``,
     vendor :   ``,
     moderator :   ``,
     contactInfo : {
         website :   ``,
         email :   ``,
         phoneNumber :  ``  
    },
     stats : {
         followerCount :   ``,
         followingCount :   ``,
         listingCount :   ``,
         ratingCount :   ``,
         postCount :   ``,
         averageRating :  ``  
    },
     bitcoinPubkey :   ``,
     lastModified :   ``,
     currencies : [
          ``
    ],
     GPS :   ``
}

	this.listing = {
    metadata: {
      contractType:  ``,
      format:  ``,
      expiry:  ``,
      pricingCurrency:  ``
    },
    item: {
      title:  ``,
      description:  ``,
      processingTime:  ``,
      price: ``,
      tags: [
         ``
      ],
      images: [{
        filename:  ``,
        tiny:  ``,
        small:  ``,
        medium:  ``,
        large:  ``,
        original:  ``
      }, {
        filename:  ``,
        tiny:  ``,
        small:  ``,
        medium:  ``,
        large:  ``,
        original:  ``
      }, {
        filename:  ``,
        tiny:  ``,
        small:  ``,
        medium:  ``,
        large:  ``,
        original:  ``
      }, {
        filename:  ``,
        tiny:  ``,
        small:  ``,
        medium:  ``,
        large:  ``,
        original:  ``
      }],
      categories: [
         ``
      ],
      condition:  ``,
      options: [{
          name:  ``,
          description:  ``,
          variants: [{
              name:  ``,
              image: {
                filename:  ``,
                tiny:  ``,
                small:  ``,
                medium:  ``,
                large:  ``,
                original:  ``
              }
            },
            {
              name:  ``,
              image: {
                filename:  ``,
                tiny:  ``,
                small:  ``,
                medium:  ``,
                large:  ``,
                original:  ``
              }
            },
            {
              name:  ``,
              image: {
                filename:  ``,
                tiny:  ``,
                small:  ``,
                medium:  ``,
                large:  ``,
                original:  ``
              }
            }
          ]
        },
        {
          name:  ``,
          description:  ``,
          variants: [{
              name:  ``
            },
            {
              name:  ``
            },
            {
              name:  ``
            },
            {
              name:  ``
            }
          ]
        }
      ],
      skus: [{
        variantCombo: [],
        productID:  ``,
        surcharge: ``,
        quantity: ``
      }, {
        variantCombo: [],
        productID:  ``,
        surcharge: ``,
        quantity: ``
      }, {
        variantCombo: [],
        productID:  ``,
        surcharge: ``,
        quantity: ``
      }, {
        variantCombo: [],
        productID:  ``,
        surcharge: ``,
        quantity: ``
      }, {
        variantCombo: [],
        productID:  ``,
        surcharge: ``,
        quantity: ``
      }, {
        variantCombo: [],
        productID:  ``,
        surcharge: ``,
        quantity: ``
      }, {
        variantCombo: [],
        productID:  ``,
        surcharge: ``,
        quantity: ``
      }, {
        variantCombo: [],
        productID:  ``,
        surcharge: ``,
        quantity: ``
      }, {
        variantCombo: [],
        productID:  ``,
        surcharge: ``,
        quantity: ``
      }],
      nsfw: ``
    },
    shippingOptions: [{
      name:  ``,
      type:  ``,
      regions: [
         ``
      ],
      services: [{
          name:  ``,
          price: ``,
          estimatedDelivery:  ``
        },
        {
          name:  ``,
          price: ``,
          estimatedDelivery:  ``
        }
      ]
    }],
    taxes: [],
    coupons: [],
    moderators: [
    	 ``,
    	 ``
    	],
    termsAndConditions:  ``,
    refundPolicy:  ``
  }


  
}
Queue.prototype.addImage = function(obj) {
  this.data.extend(record);
}
Queue.prototype.remove = function() {
  this.data.pop();
}