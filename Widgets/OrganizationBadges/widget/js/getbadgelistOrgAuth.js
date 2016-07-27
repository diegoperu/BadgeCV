//http://hoc12.elet.polimi.it/testing/badgecraft/fakeactivity.php
var selectedbadges = [];
function getBadgeList(authdata){
if(XMLHttpRequest) var x = new XMLHttpRequest();
else var x = new ActiveXObject("Microsoft.XMLHTTP");
var projectID = 919; //here you can set your project ID
var url = "http://yoursite/badgecraft/badgelistOrg.php?auth=".concat(authdata)+"&projectID=" + projectID;

x.open("GET", url, true);
x.send();
x.onreadystatechange = function(){
    if(x.readyState == 4){
        if(x.status == 200) {window.jsonBadge = JSON.parse(x.responseText);
		//console.log(jsonBadge);
		refreshActivity();
		//createCheckbox();
		//printBadgeList();
		}
        else {console.log("Error loading Json");
		console.log(jsonBadge);
		}
		
        }
    }
}
