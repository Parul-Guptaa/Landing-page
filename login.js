// Get the login form and inputs
const loginForm = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Listen for form submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the user input values
    const email = emailInput.value;
    const password = passwordInput.value;

    // Simple validation
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Debugging: Log the stored user data for verification
    console.log("Stored user:", storedUser);

    // Check if the user exists and password matches
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", storedUser.username); // Store the logged-in user's name
        // Redirect to home page
        window.location.assign("home.html");
    } else {
        alert("Invalid credentials. Please check your email and password.");
    }
});
