document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    let valid = true;

    // Validate First Name
    if (!/^[A-Za-z\s]{6,}$/.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'First name must contain only alphabets and be at least 6 characters long.';
        valid = false;
    }

    // Validate Last Name
    if (!/^[A-Za-z\s]{6,}$/.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Last name must contain only alphabets and be at least 6 characters long.';
        valid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate Password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }

    // Confirm Password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match!';
        valid = false;
    }

    // Validate Phone Number
    if (!/^\d{10}$/.test(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent = 'Phone number must be exactly 10 digits long.';
        valid = false;
    }

    if (valid) {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNumber: phoneNumber
        };

        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration successful!');
        window.location.href = 'login_page.html';
    }
});
