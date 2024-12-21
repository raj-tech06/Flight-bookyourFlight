// ----Signup form -----
let a=document.querySelector("#signup")
a.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.querySelector("#Signupusername").value;
    let password = document.querySelector("#Signuppass").value;
    let email = document.querySelector("#Signupemail").value;
    let number = document.querySelector("#Signupnumber").value;

    // ------Save user data in local storage-------- 
    localStorage.setItem('checkusername', username);
    localStorage.setItem('checkpassword', password);

    // alert('Signup Successful! Please login.');
    location.href="login.html"
});
