
    const signInForm = document.getElementById('signInForm');
    const usernameInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.createElement('p');

    signInForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Replace with your actual username and password validation logic
        if (username === 'mahatasourav35@gmail.com' && password === 'Sourav@2003') {
            // Redirect to the next page if both username and password are correct
            window.location.href = 'main-html.html';
        } else {
            // Display an error message and highlight invalid fields
            errorMessage.textContent = 'Incorrect username or password.';
            signInForm.appendChild(errorMessage);
            errorMessage.classList.add('error')
            usernameInput.classList.add('invalid');
            passwordInput.classList.add('invalid');
        }
    });
