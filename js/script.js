// Function to validate email
function isInvalidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(email); // Returns true if invalid
}

// Add event listener for input
const emailInput = document.getElementById("email");
const errorMessage = document.getElementsByClassName("error-message")[0];
const div = emailInput.parentElement;

emailInput.addEventListener("input", () => {
    const email = emailInput.value;

    if (email && isInvalidEmail(email)) {
        // Show error message if email is invalid
        errorMessage.style.display = "inline";
        div.className = "hasError";
        emailInput.className = "hasError";
    } else {
        // Hide error message if email is valid or empty
        errorMessage.style.display = "none";
        div.className = "";
        emailInput.className = "";
    }
});