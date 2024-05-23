document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const otherNames = document.getElementById('otherNames').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const errorMessages = document.getElementById('errorMessages');
    
    errorMessages.innerHTML = '';
    let errors = [];

    if (firstName.length < 1) {
        errors.push('First name is required and cannot be less than 1 character.');
    }
    if (lastName.length < 1) {
        errors.push('Last name is required and cannot be less than 1 character.');
    }
    if (/\d/.test(firstName) || /\d/.test(lastName) || /\d/.test(otherNames)) {
        errors.push('Names cannot contain numbers.');
    }
    if (!email.includes('@') || !email.includes('.')) {
        errors.push('Invalid email address.');
    }
    if (phone.length !== 11) {  // Assuming phone number must be 11 characters long
        errors.push('Phone number must be 11 characters long.');
    }
    if (gender === '') {
        errors.push('Gender is required.');
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
    } else {
        const formData = {
            firstName,
            lastName,
            otherNames,
            email,
            phone,
            gender
        };
        saveData(formData);
    }
});

function saveData(formData) {
    fetch('http://localhost:3000/save-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
