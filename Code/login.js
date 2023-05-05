var users = [
    { username: 'amr', password: 123 },
    { username: 'nour', password: 123 },
    { username: 'dina', password: 123 },
    { username: 'norhan', password: 123 },
    { username: 'ahmed', password: 123 },
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''},
    { username: '', password:''}

];

var button = document.getElementById('loginbuttonn');

button.onclick = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value; 

    for (var i = 0; i < users.length; i++) {
    if(username == users[i].username && password == users[i].password) {
        window.location=("premiumlogedin.html");
        break;
        }
    }
}



