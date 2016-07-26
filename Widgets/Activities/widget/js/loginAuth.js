//this file is used to get the auth code. At this stage the file uses a PHP helper file

window.onload = function(){
if(XMLHttpRequest) var x = new XMLHttpRequest();
else var x = new ActiveXObject("Microsoft.XMLHTTP");
x.open("GET", "http://yoursite/badgecraft/login.php", true);
x.send();
x.onreadystatechange = function(){
    if(x.readyState == 4){
        if(x.status == 200) {window.loginData = JSON.parse(x.responseText);
		//console.log(loginData);
		window.authdata = loginData["auth"];
		console.log(authdata);
		getBadgeList(window.authdata);
		}
        else {console.log("Error loading Json");
		//console.log(loginData);
		}
		
        }
    }
}