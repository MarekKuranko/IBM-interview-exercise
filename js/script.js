/*
 * IBM interview exercise
 */
var jsonData;
//
var balance = 0;
var negBalance = 0;
var posBalacne = 0;

//list
var options = {
  valueNames: [ 'name', 'balance', 'active' ],
  item: '<li onclick="setContent(this.children[0].innerHTML)"><h3 class="name"></h3><p class="balance"></p><p class="active"></p></li>'
};

var values;
var userList = new List('users', options, values);

//read jsonu from url
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

getJSON("https://api.myjson.com/bins/1eyqeh",
function(err, data) {
  if (err != null) {
    alert("Something went wrong: " + err);
  } else {
    jsonData=data;	
	/*
	* foreach for iterate over jsonData to calc balance
	*/
	jsonData.forEach( function ( m ) {
		//set balance
		var tempStr = m["balance"].split(',').join('');
		var temp = parseFloat(tempStr);
		balance = balance + temp;
		if(temp<0){
			negBalance = negBalance + temp;
		}else if (temp>0){
			posBalacne = posBalacne + temp;
		}
		//set list
		if(m["isActive"] == "true"){
		var active = 'yes';
		}else {
			var active = 'no';
		}	
		userList.add({
		  name: m["name"],
		  balance: 'balance: ' + temp.formatMoney(0, '.', ','),
		  active: 'active: ' + active	  
		});	
	});
	document.getElementById("balance").innerHTML = "Balance: " + balance.formatMoney(0, '.', ',') + " (positive: " + posBalacne.formatMoney(0, '.', ',') + ", Negative: " + negBalance.formatMoney(0, '.', ',') + ")";
  }
});

function setContent(str){
	var customer = jsonData.filter(function( obj ) {
	  return obj.name == str;
	});
	document.getElementById("baseName").innerHTML = "Name: " + customer[0].name;
	document.getElementById("baseAge").innerHTML = "Age: " + customer[0].age;
	document.getElementById("baseGender").innerHTML = "Gender: " +  customer[0].gender;
	document.getElementById("baseCompany").innerHTML = "Company: " +  customer[0].company;
	document.getElementById("baseEmail").innerHTML = "Email: " +  customer[0].email;
	document.getElementById("basePhone").innerHTML = "Phone: " +  customer[0].phone;
	document.getElementById("baseAdress").innerHTML = "Address: " +  customer[0].address;
	document.getElementById("baseRegistred").innerHTML = "Registered: " +  dateFormat(customer[0].registered);
	document.getElementById("baseBalance").innerHTML = "Balance: " +  customer[0].balance;
	var tempStr = customer[0].balance.split(',').join('');
	var temp = parseFloat(tempStr);
	if(customer[0].active == "true"){
		var active = 'yes';
		document.getElementById("baseDiscount").innerHTML = "";
		}else {
			var active = 'no';
			if(temp>0){
				temp = temp/100*10;
				document.getElementById("baseDiscount").innerHTML = "Proposed discount (10%): " +  temp.formatMoney(1, '.', ',');
			}else{
				document.getElementById("baseDiscount").innerHTML = "";
			}
		}	
	document.getElementById("baseActive").innerHTML = "Active: " +  active;
	//note
	document.getElementById("text").value = localStorage.getItem(document.getElementById("baseName").innerHTML);

	
}

//tabs
document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//number format 
Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
 
 //date format
 function dateFormat(date){
	 var day = date.substring(8, 10);
	 var month = date.substring(5, 7);
	 var year = date.substring(0, 4);
	 var time = date.substring(11, 19);
	 
	 return day + "." + month + "." + year + ", " + time;
 }
 
 //save
 function save(){
	 var text = document.getElementById("text").value;
	 localStorage.setItem(document.getElementById("baseName").innerHTML, text);
     document.getElementById("text").value = localStorage.getItem(document.getElementById("baseName").innerHTML);
}








