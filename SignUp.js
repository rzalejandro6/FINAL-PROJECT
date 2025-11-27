//select the sign up form
const form = document.getElementById('signupForm');

//Listen for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission


    // Get the input value
    const email = document.getElementById('email').value;
    const password = document.getElementById('password-input').value;

// Check f both field are filled 
    if (email && password) {
        alert('You have created an account!');
        window.location.href = "LogIn.html"; //Directing to Log in page
    } else {
        alert('Please fill out all fields.');
    }
});


