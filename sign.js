// // Toggle between Signup and Login form
// function toggleForm(formType) {
//     if (formType === 'signup') {
//         document.getElementById('signupForm').style.display = 'block';
//         document.getElementById('loginForm').style.display = 'none';
//     } else if (formType === 'login') {
//         document.getElementById('loginForm').style.display = 'block';
//         document.getElementById('signupForm').style.display = 'none';
//     }
// }

// // Signup form submit
// document.getElementById('signup').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('usernameSignup').value;
//     const password = document.getElementById('passwordSignup').value;

//     // Save user data in local storage (for demonstration purposes)
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);

//     alert('Signup Successful! Please login.');
//     toggleForm('login');
// });

// // Login form submit
// document.getElementById('login').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('usernameLogin').value;
//     const password = document.getElementById('passwordLogin').value;

//     const storedUsername = localStorage.getItem('username');
//     const storedPassword = localStorage.getItem('password');

//     if (username === storedUsername && password === storedPassword) {
//         alert('Login Successful!');
//         location.href="index.html"
//     } else {
//         alert('Invalid username or password. Please try again.');
//     }
// });











// -------------------------------
