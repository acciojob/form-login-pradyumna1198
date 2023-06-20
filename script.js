function getFormvalue() {
    //Write your code here
	var firstName = document.getElementById('form1').elements.namedItem('fname').value;

	var lastName = document.getElementById('form1').elements.namedItem('lname').value;

	alert(firstName + ' ' + lastName);
}
