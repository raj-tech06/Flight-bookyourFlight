// ----Login form-----
document.querySelector("#login").addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('loginnumber').value;
    let password = document.getElementById('loginpass').value;
    
    let storedUsername = localStorage.getItem('checkusername');
    let storedPassword = localStorage.getItem('checkpassword');

    if (username === storedUsername && password === storedPassword) {
        // alert('Login Successful!');
        location.href="index.html"
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
