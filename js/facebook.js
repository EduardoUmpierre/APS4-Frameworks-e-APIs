window.fbAsyncInit = function() {
	FB.init({
		appId  : '1848178382176295',
		cookie : true,
		xfbml  : true,
		version: 'v2.8'
	});

	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

function statusChangeCallback(response) {
	var fbLogin = document.getElementById('fb-login');
	var userData = document.getElementById('user-data');

	if (response.status === 'connected') {
		fetchUserData();

		hide(fbLogin);
		show(userData);
	} else {
		document.getElementById('status').innerHTML = 'Faça login para continuar.';

		hide(userData);
		show(fbLogin);
	}
}

function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

function fetchUserData() {
	FB.api('/me?fields=id,name,email,picture.width(150)', function(response) {
		showUserData(response);
	});
}

function fbLogout() {
	FB.logout(function(response) {
		checkLoginState();
	});
}

function hide(element) {
	element.classList.remove("visible");
	element.classList.add("hidden");
}

function show(element) {
	element.classList.remove("hidden");
	element.classList.add("visible");	
}

// Load the SDK asynchronously
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/pt_BR/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));