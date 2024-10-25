document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
    } else {
        errorMessage.textContent = '';
        // Simulate a successful login
        alert('Login successful! Redirecting...');
        // Redirect logic goes here
    }
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Password recovery process initiated.');
});

document.getElementById('toggleForm').addEventListener('click', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('formTitle');
    const form = document.getElementById('authForm');
    
    if (title.textContent === "Login to Your Account") {
        title.textContent = "Create Your Account";
        form.innerHTML = `
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required aria-required="true" autofocus>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required aria-required="true">
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required aria-required="true">
            </div>
            <button type="submit">Sign Up</button>
            <p id="error-message" class="error-message" aria-live="assertive"></p>
        `;
    } else {
        title.textContent = "Login to Your Account";
        form.innerHTML = `
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required aria-required="true" autofocus>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required aria-required="true">
            </div>
            <button type="submit">Login</button>
            <p id="error-message" class="error-message" aria-live="assertive"></p>
        `;
    }
});