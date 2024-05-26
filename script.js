document.getElementById("submitButton").addEventListener("click", function() {

    var email = document.getElementById("emailInput").value;
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        alert("Email is valid!");
    } else {
        alert("Please enter a valid email address!");
    }
});

document.getElementById("submitButton2").addEventListener("click", function() {

    var email = document.getElementById("emailInput2").value;
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        alert("Email is valid!");
    } else {
        alert("Please enter a valid email address!");
    }
});