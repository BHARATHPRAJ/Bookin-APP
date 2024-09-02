// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Toggle between login and signup forms
    document.getElementById("show-signup").addEventListener("click", () => {
        document.getElementById("login-form").classList.add("hidden");
        document.getElementById("signup-form").classList.remove("hidden");
    });

    document.getElementById("show-login").addEventListener("click", () => {
        document.getElementById("signup-form").classList.add("hidden");
        document.getElementById("login-form").classList.remove("hidden");
    });

    // Handle login form submission
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // Simple client-side validation
        if (username === "admin" && password === "password123") {
            alert("Login successful!");
            // Redirect or perform another action after successful login
        } else {
            document.getElementById("login-error-message").textContent = "Invalid username or password";
        }
    });

    // Handle signup form submission
    document.getElementById("signupForm").addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById("signup-username").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                // Optionally redirect or perform another action
            } else {
                document.getElementById("signup-error-message").textContent = result.error;
            }
        } catch (err) {
            document.getElementById("signup-error-message").textContent = "Server error";
        }
    });
});
