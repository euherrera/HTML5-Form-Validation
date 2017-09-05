var element = document.querySelector("form");
/*selects the first form in your document. If you used the querySelectorAll() method, you'd be targetting all forms in a list in your document.*/

/*var element = document.forms[0]; 
targets form using index function to reference the first form on the list of forms as arrays have a zero based index.

var element = document.personal; 
targets form element through assigned name attribute value on form. It is a way to target many forms sharing the same name attribute value.

var element = document.getElementById('nationality');
targets form through unique reference by id as ids can ONLY exist once in the document.

*/
element.addEventListener('submit', function (event) {
	event.preventDefault();
	
	//TEXT FIELD VALIDATION
	var name = document.personal.name.value;
	var address = document.personal.address.value;
	var city = document.personal.city.value;
document.getElementById('textResults').innerHTML =
name + ', ' + address + ' , ' + city;

//SELECT BOX VALIDATION
			
var selectBoxVal = document.getElementById('s-county').value;
//gets the value of the selected option tag through this referenced id.
document.getElementById('selectResults').innerHTML = selectBoxVal;

//RADIO BOX VALIDATION
var methods = document.getElementById("nationality").r_method;
//gets reference to the 3 input types sharing the same name attribute value within this referenced id assigned to the form element.
			
for (var i = 0; i < methods.length; i++) {
// uses loop to loop through and read the length of the list and check using an if statement which one has been checked.
	if (methods[i].checked == true) {
		document.getElementById('radioResults').innerHTML =
		methods[i].value;
	}
}

/*CHECKBOX VALIDATION
			
if (document.getElementById('c-special-gift').checked) {
	document.getElementById('checkboxResults').innerHTML = 
	document.getElementById('c-special-gift').value;
			
}else if (document.getElementById('c-special-caps').checked) {
		  document.getElementById('checkboxResults').innerHTML = 
		  document.getElementById('c-special-caps').value;	
				
}else if (document.getElementById('c-special-bottles').checked) {
		  document.getElementById('checkboxResults').innerHTML = 
		  document.getElementById('c-special-bottles').value;	
				
} else {
		  document.getElementById('checkboxResults').innerHTML = ' ';
}
*/

var specials = document.getElementById('nationality').c_special;
		var specialsResults = "";
		for (var i = 0; i < specials.length; i++) {
			if (specials[i].checked == true) {
				if (specialsResults == "") {
					specialsResults = specials[i].value;
				} else {
					specialsResults = specialsResults + ', ' + specials[i].value;
				}
			document.getElementById('checkboxResults').innerHTML = specialsResults;
			}
		}
//Sliced

var slicedInput = document.personal.sliced.value;
var firstCharacter = slicedInput.slice(0, 1);
if(firstCharacter != '£'){
var slicedFormatted = slicedInput.slice(1, 20);	
var slicedConvert = Number(slicedFormatted);
var operation = slicedConvert * .07;
document.getElementById('slicedResults').innerHTML = operation;
}else{
	
}
		

	
}); //end of submit