# Password-Generator

The HTML code creates a simple form with a label, an input field for the length of the password, a button to generate the password, and an output field to display the generated password. The output field also includes a button to copy the password to the clipboard. The CSS code styles the form elements to make them look nice and readable. The JavaScript code contains two functions: generatePassword() and copyPassword().

---

```
<!DOCTYPE html>
<html>
<head>
	<title>Random Password Generator</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="container">
		<h1>Random Password Generator</h1>
		<label for="length">Password Length:</label>
		<input type="number" id="length" min="1" max="100" value="8">
		<button id="generate" onclick="generatePassword()">Generate Password</button>
		<div class="output-container">
			<input type="text" id="password" readonly>
			<button id="copy" onclick="copyPassword()">Copy Password</button>
		</div>
	</div>
	<script src="script.js"></script>
</body>
</html>
```

The first line <!DOCTYPE html> tells the browser which version of HTML to use.
The <html> tags contain all of the HTML code for the web page.
The <head> tags contain information about the web page that is not displayed to the user, such as the title of the web page and the link to the CSS file.
The <title> tag sets the title of the web page that is displayed in the browser's title bar.
The <link> tag links to the CSS file that styles the web page.
The <body> tags contain all of the visible content of the web page.
The <form> tags create a form that the user can interact with.
The <label> tags provide a label for an input field.
The for attribute of the <label> tags links the label to the corresponding input field using the id attribute.
The <input> tags create input fields for the user to enter data.
The type attribute of the <input> tags specifies the type of input field.
The id attribute of the <input> tags creates a unique identifier for the input field that is used to reference it in the JavaScript code.
The name attribute of the <input> tags specifies the name of the input field that is used when the form is submitted.
The <button> tags create a button that the user can click to perform an action.
The onclick attribute of the <button> tags calls a JavaScript function when the button is clicked.
The readonly attribute of the output <input> tag makes it so that the user can't edit the generated password.
The <script> tag links to the JavaScript file that contains the code to generate and copy the password.
	
---

```
.container {
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
}

h1 {
	text-align: center;
}

label {
	display: inline-block;
	margin-bottom: 10px;
}

input[type="number"] {
	display: inline-block;
	margin-right: 10px;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 3px;
	width: 50px;
}

button {
	display: inline-block;
	padding: 5px 10px;
	border: none;
	border-radius: 3px;
	background-color: #4CAF50;
	color: #fff;
	cursor: pointer;
}

button:hover {
	background-color: #3e8e41;
}

.output-container {
	margin-top: 20px;
	display: flex;
	align-items: center;
}

#password {
	flex-grow: 1;
	margin-right: 10px;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 3px;
	font-family: monospace;
}

#copy {
	border: none;
	background-color: #fff;
	color: #4CAF50;
	cursor: pointer;
}

```
	
The form selector applies styles to the entire form element. <br>
margin, padding, and border properties set the margin, padding, and border of the form element respectively. <br>
border-radius property sets the rounded corners of the form element. <br>
width property sets the width of the form element. <br>
font-family property sets the font used for the text in the form element. <br>
The label selector applies styles to all the label elements in the form. <br>
display: inline-block property makes the label elements display next to each other. <br>
width property sets the width of the label elements. <br>
text-align property sets the horizontal alignment of the text in the label elements. <br>
margin-right property sets the right margin of the label elements. <br>
The input[type="number"] and input[type="text"] selectors apply styles to the input fields with type attribute set to number and text respectively. <br>
padding property sets the padding of the input fields. <br>
margin-bottom property sets the bottom margin of the input fields. <br>
border-radius property sets the rounded corners of the input fields. <br>
border property sets the border of the input fields. <br>
font-size property sets the font size of the text in the input fields. <br>
The button selector applies styles to all the button elements. <br>
padding property sets the padding of the button elements. <br>
background-color property sets the background color of the button elements. <br>
color property sets the text color of the button elements. <br>
border property sets the border of the button elements. <br>
border-radius property sets the rounded corners of the button elements. <br>
font-size property sets the font size of the text in the button elements. <br>
cursor property changes the shape of the cursor when hovering over the button element. <br>
The button:hover selector applies styles to the button element when the mouse pointer is hovering over it. <br>
background-color property sets the background color of the button element when the mouse pointer is hovering over it. <br>
	
---

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

