//this file is used to get the activities for your project. It uses a PHP helper to retrieve the data
function getBadgeList(authdata){
if(XMLHttpRequest) var x = new XMLHttpRequest();
else var x = new ActiveXObject("Microsoft.XMLHTTP");

var projectID = 350; //here you can set your personal project ID
var url = "http://yoursite/badgecraft/activitylist.php?auth=".concat(authdata)+"&projectID="+projectID; //here you have to set the address of the php file

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
