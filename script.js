function generatePassword() {
	const length = document.getElementById("length").value;
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[];:<>,.?/~`";
	let password = "";
	for (let i = 0; i < length; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	document.getElementById("password").value = password;
}

function copyPassword() {
	const password = document.getElementById("password");
	password.select();
	password.setSelectionRange(0, 99999); // For mobile devices
	document.execCommand("copy");
	alert("Password copied to clipboard!");
}
