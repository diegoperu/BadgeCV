function refreshActivity(){
	var lenght = jsonBadge['list'].length;
	//console.log("Lunghezza JSON: " + lenght);
	var dimension = 6;
	//console.log("Lunghezza - Dimensione: " + (lenght - dimension));
	for (var i = 0; i < lenght; i++){ 
	//console.log("i: " + (i));
	var top_level_div = document.getElementById('listactivity');
	var count = top_level_div.getElementsByTagName('div').length;
		//console.log("Count: " + count);
		
			var element = document.createElement("div");
			element.className = "singleWidget";
			//localjson bname access
			var bname = jsonBadge['list'][i]['name'];
			var bcrit = jsonBadge['list'][i]['criteria'];
			var bdesc = jsonBadge['list'][i]['description'];
			//tronco se troppo lungo
			if (bdesc.length > 35) {
			bdesc = bdesc.substr(0,35) + '...';
			} 
			var bpict = jsonBadge['list'][i]['picture'];
			
			var alink = document.createElement("a");
			alink.setAttribute('id', 'link' + i + '');
			alink.setAttribute('class', 'badgeimage');
			alink.setAttribute('href', 'https://www.badgecraft.eu/en/user-badges/' + jsonBadge['list'][i]['id']);
			
			var aimg = document.createElement("img");			
			aimg.setAttribute('src', 'https://www.badgecraft.eu' + bpict + '');
			aimg.setAttribute('alt', 'na');
			aimg.setAttribute('height', '223px');
			aimg.setAttribute('width', '223px');
			
			alink.appendChild(aimg);						
			element.appendChild(alink);
			
			var badgediv = document.createElement("div");
			badgediv.setAttribute('class', 'descriptiondiv');
			
			
			var blink = document.createElement("a");
			blink.className = "titlelink";
			blink.setAttribute('href', 'https://www.badgecraft.eu/en/user-badges/' + jsonBadge['list'][i]['id']);			
			var nodebname = document.createTextNode(bname);			
			blink.appendChild(nodebname);
			
			
			var para = document.createElement("span");
			para.setAttribute('class', 'badgedescrption');
			var nodedesc = document.createTextNode(bdesc);
			para.appendChild(nodedesc);
			
			badgediv.appendChild(blink);
			badgediv.appendChild(para);
			
			element.appendChild(badgediv);
			
			document.getElementById('listactivity').appendChild(element);
			//top_level_div.insertBefore( element, top_level_div.firstChild );
			
			
			
			selectedbadges.push(""+jsonBadge['list'][i]['id']+"");
	}
}
