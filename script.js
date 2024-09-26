// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let isValid = true;

    // Clear previous error messages
    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate Username
    if (username.length < 3) {
        document.getElementById('usernameError').innerText = 'Username must be at least 3 characters long.';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        isValid = false;
    }

    // Validate Password
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Display success message if the form is valid
    if (isValid) {
        document.getElementById('successMessage').innerText = 'Registration Successful!';
        document.getElementById('registrationForm').reset(); // Clear form fields after successful submission
    } else {
        document.getElementById('successMessage').innerText = ''; // Clear success message if form is invalid
    }
});

// Real-time validation for dynamic feedback
document.getElementById('username').addEventListener('input', function() {
    if (this.value.length < 3) {
        document.getElementById('usernameError').innerText = 'Username must be at least 3 characters long.';
    } else {
        document.getElementById('usernameError').innerText = '';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!this.value.match(emailPattern)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
    } else {
        document.getElementById('emailError').innerText = '';
    }
});

document.getElementById('password').addEventListener('input', function() {
    if (this.value.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
    } else {
        document.getElementById('passwordError').innerText = '';
    }
});
