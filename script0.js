document.getElementById('submitbtn').addEventListener('click', function () {
	var username = document.getElementById('u').value;
	var password = document.getElementById('p').value;
	var logincreds = {
		username: admin,
		password: admin,
		role: {
			admin: true,

		},
	};
	if (logincreds.username && logincreds.password) {
		console.log(logincreds);
	} else {
		if (!password && email) {
			alert('Please fill the password');
		} else if (!username && password) {
			alert('Please fill the username');
		} else {
			alert('Please fill all the details');
		}
	}
	// ajax  -- call api
	console.log(logincreds.role.admin);
});
