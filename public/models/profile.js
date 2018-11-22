const axios = require("axios")
let id = "";
let body = "";
let url = "https://freshmintrecords.com:4002/ob/profile/"
let opt = "";
let options = {
    headers: {
        Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
    },
};
const Profile = module.exports;

module.exports.getPeers = () => {

    url = "https://freshmintrecords.com:4002/ob/peers/"
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.fetchProfiles = (arr) => {
    url = "https://freshmintrecords.com:4002/ob/fetchprofiles?async=/"
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
        },
        method: "POST",
        mode: "cors",
        data: arr,
        crossDomain: true
    });
}


module.exports.getExchangeRate = () => {
    url = "https://freshmintrecords.com:4002/ob/exchangerate/USD/"
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}


module.exports.postProfile = (json) => {
    if (JSON.stringify(json).charAt(0) == "{") {
        url = "https://freshmintrecords.com:4002/ob/profile/";
    } else {
        url = "https://freshmintrecords.com:4002/ob/fetchprofiles?async=";
    }
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
        },
        method: "POST",
        mode: "cors",
        data: json,
        crossDomain: true
    });

}

module.exports.getProfile = (pID) => {
	console.log("TTESSSTTT");
    url = "https://freshmintrecords.com:4002/ob/profile/";
    if (pID) url = url + pID;
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.putProfile = (json) => {
    url = "https://freshmintrecords.com:4002/ob/profile/";
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
        },
        method: "PUT",
        mode: "cors",
        data: json,
        crossDomain: true
    });
}

module.exports.patchProfile = (json) => {
    url = "https://freshmintrecords.com:4002/ob/profile/";
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
        },
        method: "PATCH",
        mode: "cors",
        data: json,
        crossDomain: true
    });
}

module.exports.getModerators = (peerID) => {
    url = "https://freshmintrecords.com:4002/ob/moderators?async=&include=/";
    if (peerID) url = "https://freshmintrecords.com:4002/ob/moderators/" + peerID;
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.getFollowing = (peerID) => {
    url = "https://freshmintrecords.com:4002/ob/following?offsetId=&limit=/";
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.getFollowers = (peerID) => {
    url = "https://freshmintrecords.com:4002/ob/followers/?offsetId=&limit=/";
    return axios(url, {
        responseType: "json",
        headers: {
            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng==",
        },
        method: "GET",
        mode: "cors",
        crossDomain: true
    });
}

module.exports.isFollowing = (peerID) => {
	if(!peerID){
		return
	} else {
	    url = "https://freshmintrecords.com:4002/ob/isfollowing/" + peerID;
	    return axios(url, {
	        responseType: "json",
	        headers: {
	            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
	        },
	        method: "GET",
	        mode: "cors",
	        crossDomain: true
	    });
	}
}

module.exports.followsMe = (peerID) => {
	if(!peerID){
		return
	} else {
	    url = "https://freshmintrecords.com:4002/ob/followsMe/" + peerID;
	    return axios(url, {
	        responseType: "json",
	        headers: {
	            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
	        },
	        method: "GET",
	        mode: "cors",
	        crossDomain: true
	    });
	}
}

module.exports.follow = (json) => {
	if(!json){
		return
	} else {
	    url = "https://freshmintrecords.com:4002/ob/follow/";
	    return axios(url, {
	        responseType: "json",
	        headers: {
	            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
	        },
	        method: "POST",
	        mode: "cors",
	        data: json,
	        crossDomain: true
	    });
	}
}

module.exports.unfollow = (json) => {
	if(!json){
		return
	} else {
	    url = "https://freshmintrecords.com:4002/ob/unfollow/";
	    return axios(url, {
	        responseType: "json",
	        headers: {
	            Authorization: "Basic YzRjdGVzdGVyOlN0YXJ0QDEyMzY2Ng=="
	        },
	        method: "POST",
	        mode: "cors",
	        data: json,
	        crossDomain: true
	    });
	}
}
