document.addEventListener("DOMContentLoaded", function () {
    console.log("Attempting to load navbar...");
    
    fetch("navbar.html")
        .then(response => {
            console.log("Navbar response status:", response.status);
            return response.text();
        })
        .then(data => {
            console.log("Navbar loaded successfully");
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});
