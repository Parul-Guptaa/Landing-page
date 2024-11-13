// Get the signup form and inputs
const signupForm = document.querySelector("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

// Listen for form submission
signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the user input values
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate input fields
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Save user details to localStorage
    const newUser = {
        username: username,
        email: email,
        password: password
    };

    // Debugging: Check if the user details are correct
    console.log("User details being stored:", newUser);

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(newUser)); // Save user info
    localStorage.setItem("loggedInUser", username); // Store logged-in user's name

    alert("Signup successful! You are now logged in.");

    // Redirect to home page
    window.location.assign("home.html");
});
