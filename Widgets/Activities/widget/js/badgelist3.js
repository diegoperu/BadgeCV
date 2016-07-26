/*
  ACTIVITY
*/
function refreshActivity(){
	var lenght = window.jsonBadge['list'].length;
	console.log("Lunghezza JSON: " + lenght);
	var dimension = 6; //here you can set how many activities you want to see
	console.log("Lunghezza - Dimensione: " + (lenght - dimension));
	for (var i = 0; i < dimension; i++){ 
	console.log("i: " + (i));
	var top_level_div = document.getElementById('listactivity');
				
			var element = document.createElement("div");
			element.className = "singleWidget";
			//localjson type access
			var type = window.jsonBadge['list'][i]['type'];
			var username = window.jsonBadge['list'][i]['user']['displayName'];
			
			if (type == "badge-issued"){ 
			var bpict = window.jsonBadge['list'][i]['badgeClass']['picture'];
			var bname = window.jsonBadge['list'][i]['badgeClass']['name'];
			} else if (type == "project-join"){ 
			var bpict = window.jsonBadge['list'][i]['project']['picture'];
			var pName = window.jsonBadge['list'][i]['project']['name'];
			}
			
			var badgediv = document.createElement("div");
			badgediv.setAttribute('class', 'imagediv');
			
			var aimg = document.createElement("img");			
			aimg.setAttribute('src', 'https://www.badgecraft.eu' + bpict + '');
			aimg.setAttribute('alt', 'na');
			aimg.setAttribute('height', '100px');
			aimg.setAttribute('width', '100px');						
			badgediv.appendChild(aimg);
			element.appendChild(badgediv);
			
			var badgediv = document.createElement("div");
			badgediv.setAttribute('class', 'descriptiondiv');
			
			
			var para = document.createElement("p");
			para.className = "singleP";
			if (type == "badge-issued"){ 
			var nodetype = document.createTextNode(username + ' received the ' + bname + ' Badge ');
			} else if (type == "project-join"){ 
			var nodetype = document.createTextNode(username + ' joined the ' + pName + ' Project ');
			}
			
			para.appendChild(nodetype);
			badgediv.appendChild(para);
			element.appendChild(badgediv);
			
			document.getElementById('listactivity').appendChild(element);
			
			
					
			
			
		
	}
}
