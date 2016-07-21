var selectedbadges = [];
function getBadgeList(authdata){
if(XMLHttpRequest) var x = new XMLHttpRequest();
else var x = new ActiveXObject("Microsoft.XMLHTTP");

var url = "http://hoc12.elet.polimi.it/testing/badgecraft_CV/badgelist.php?auth=".concat(authdata);

x.open("GET", url, true);
x.send();
x.onreadystatechange = function(){
    if(x.readyState == 4){
        if(x.status == 200) {window.jsonBadge = JSON.parse(x.responseText);
		refreshActivity();
		createCheckbox();
		}
        else {console.log("Error loading Json");
		console.log(jsonBadge);
		}
		
        }
    }
}

function printBadgeList(selectedbadges){
if(XMLHttpRequest) var x = new XMLHttpRequest();
else var x = new ActiveXObject("Microsoft.XMLHTTP");

var url = "http://hoc12.elet.polimi.it/testing/badgecraft_CV/createPdf.php";

var jsonbadges = JSON.stringify(window.jsonBadge);

var form = document.getElementById("selectID"),
    inputs = form.getElementsByTagName("input"),
    badgearray = [],
	selectall = 1;

for (var i = 0, max = inputs.length; i < max; i += 1) {
   // Take only those inputs which are checkbox
   if (inputs[i].type === "checkbox" && inputs[i].checked) {
	  selectall=0;
   }
}
if(selectall == 0){
for (var i = 0, max = inputs.length; i < max; i += 1) {
   // Take only those inputs which are checkbox
   if (inputs[i].type === "checkbox" && inputs[i].checked) {
      badgearray.push(""+inputs[i].value+"");
   }
}
var badges = JSON.stringify(badgearray);

} else {
 //if no selection -> select all
var badges = JSON.stringify(selectedbadges);
}



// Create a form
var mapForm = document.createElement("form");
mapForm.target = "_blank";    
mapForm.method = "POST";
mapForm.action = url;

// Create an input
var mapInput = document.createElement("input");
mapInput.type = "text";
mapInput.name = "jsonbadge";
mapInput.value = jsonbadges;

// Add the input to the form
mapForm.appendChild(mapInput);

var mapInput = document.createElement("input");
mapInput.type = "text";
mapInput.name = "badgelist";
mapInput.value = badges;

// Add the input to the form
mapForm.appendChild(mapInput);

// Add the form to dom
document.body.appendChild(mapForm);

// Just submit
mapForm.submit();
mapForm.remove();


}

function printBadgeListDocx(selectedbadges){
if(XMLHttpRequest) var x = new XMLHttpRequest();
else var x = new ActiveXObject("Microsoft.XMLHTTP");

var url = "http://hoc12.elet.polimi.it/testing/badgecraft_CV/badgecvdocx.php";

var jsonbadges = JSON.stringify(window.jsonBadge);
//if selction is made, clear array an fill up DEMO ONLY

var form = document.getElementById("selectID"),
    inputs = form.getElementsByTagName("input"),
    badgearray = [],
	selectall = 1;

for (var i = 0, max = inputs.length; i < max; i += 1) {
   // Take only those inputs which are checkbox
   if (inputs[i].type === "checkbox" && inputs[i].checked) {
	  selectall=0;
   }
}
if(selectall == 0){
for (var i = 0, max = inputs.length; i < max; i += 1) {
   // Take only those inputs which are checkbox
   if (inputs[i].type === "checkbox" && inputs[i].checked) {
      badgearray.push(""+inputs[i].value+"");
   }
}
var badges = JSON.stringify(badgearray);

} else {
 //if no selection -> select all
var badges = JSON.stringify(selectedbadges);
}


x.onreadystatechange = function(){
    if(x.readyState == 4){
        if(x.status == 200) {var temp = x.responseText;
		var win = window.open(temp, '_blank');
				if (win) {
					//Browser has allowed it to be opened
					win.focus();
						} else {
					//Browser has blocked it
					alert('Please allow popups for this website');
						}
		}
        else {console.log("Error loading Json");
		console.log(temp);
		}
		
        }
    }
	var parameters = "jsonbadge="+jsonbadges+"&badgelist="+badges;
	x.open("POST", url, true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	x.send(parameters);
	
}

function createCheckbox(){   
var lenght = jsonBadge['list'].length;
var sel = document.getElementById('selectID');
var fragment = document.createDocumentFragment();
for (var i = 0; i < lenght; i++){ 
		var opt = document.createElement('input');
		opt.type = "checkbox";
		opt.name = jsonBadge['list'][i]['bName'];
		opt.value = jsonBadge['list'][i]['id'];
		opt.id = jsonBadge['list'][i]['id'];
		
		var label = document.createElement('label')
		label.htmlFor = ""+jsonBadge['list'][i]['id']+"";
		label.appendChild(document.createTextNode(''+jsonBadge['list'][i]['bName']+''));
		
		fragment.appendChild(opt);
		fragment.appendChild(label);
}

sel.appendChild(fragment);
}
