//http://hoc12.elet.polimi.it/testing/badgecraft/fakeactivity.php

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