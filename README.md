# Password-Generator

The HTML code creates a simple form with a label, an input field for the length of the password, a button to generate the password, and an output field to display the generated password. The output field also includes a button to copy the password to the clipboard. The CSS code styles the form elements to make them look nice and readable. The JavaScript code contains two functions: generatePassword() and copyPassword().

```
function generatePassword() {
	const length = document.getElementById("length").value;
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[];:<>,.?/~`";
	let password = "";
	for (let i = 0; i < length; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	document.getElementById("password").value = password;
}
```

The generatePassword() function gets the length of the password from the input field by using the getElementById() method to get the element with the id "length" and then accessing its value property. It then creates a string of all the characters that can be used in the password by using a string of uppercase and lowercase letters, numbers, and special characters. Finally, it generates a random password of the specified length using a loop that runs length number of times. In each iteration of the loop, it generates a random character from the characters string by using the charAt() method and passing in a random index generated by the Math.random() function. The generated character is then added to the password string using the += operator. Once the loop is finished, the generated password is displayed in the output field by using the getElementById() method to get the element with the id "password" and then setting its value property to the password string.

```
function copyPassword() {
	const password = document.getElementById("password");
	password.select();
	password.setSelectionRange(0, 99999); // For mobile devices
	document.execCommand("copy");
	alert("Password copied to clipboard!");
}
```

The copyPassword() function copies the password from the output field to the clipboard when the user clicks the "Copy Password" button. It first gets a reference to the output field by using the getElementById() method to get the element with the id "password". It then selects the text in the output field by calling the select() method on the element, followed by the setSelectionRange() method with the values of 0 and 99999 as arguments (the latter value is used for mobile devices). Finally, it calls the execCommand() method with the argument "copy" to copy the selected text to the clipboard. It then displays an alert message to the user to indicate that the password has been copied.

Overall, this code demonstrates how to use HTML, CSS, and JavaScript to create a simple password generator that can be customized by the user, and how to use JavaScript to interact with the DOM and manipulate the content of HTML elements. The generatePassword() function also illustrates the use of loops and random number generation in JavaScript. The copyPassword() function demonstrates how to use the execCommand() method to interact with the user's system clipboard.

[Try it out here](https://chengus.github.io/Password-Generator/)

