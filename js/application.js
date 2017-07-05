function showUserData(user_data) {
	document.getElementById('user-data__picture').src = user_data.picture.data.url;
	document.getElementById('user-data__name').innerHTML = user_data.name;
	document.getElementById('user-data__email').innerHTML = user_data.email || 'E-mail não informado';
}