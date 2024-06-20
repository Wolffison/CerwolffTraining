document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object from the form element
    const formData = new FormData(this);

    // Convert FormData to JSON
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Optional: Perform client-side validation before sending the data
    if (data.password !== data.confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Send the data to the server
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('Sign up successful!');
        } else {
            alert('Sign up failed: ' + result.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Sign up failed due to an error');
    });
});
