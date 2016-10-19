function getXML(url,callback){
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.setRequestHeader("Content-type","text/plain;charset= utf-8");
	request.send();
	request.onreadystatechange = function(){
		if(request.readyState==4&&request.status==200){
			callback(request.responseXML);
		}
	};
}
getJSONP.counter = 0;
function getJSONP(url,callback){
	var cbnum = "cb" + getJSONP.counter++;
	var cbname = "getJSONP" + cbnum;
	if(url.indexOf("?")){
		url = "?jsonp" + cbname;
	}else{
		url = "&jsonp" + cbname;
	}
	getJSONP[cbname] = function(){
		try{
			callback(response);
		}finally{
			delete getJSONP[cbnum];
			script.parentNode.removeChild(script);
		}
	};
	var script = document.createElement("script");
	script.src = url;
	document.body.appendChild(scrupt);
}
function encodeFormData(data){
	if(!data){
		return "";
	}
	var pairs = [];
	for(var name in data){
		if(!data.hasOwnProperty(name)){
			continue;
		}
		if(typeof data[name] == "function"){
			continue;
		}
		var value = data[name].toString();
		name = encodeURIComponent(name).replace("%20","+");//编码名字
		value = encodeURIComponent(value).replace("%20","+");//编码值
		pairs.push(name+"="+value);
	}
	return pairs.join('&');
}