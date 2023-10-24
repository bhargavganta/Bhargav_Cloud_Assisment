document.getElementById("submit-button").addEventListener("click", function () {
    // Check if all required fields are filled
    if (validateForm()) {
        // Display the popup with the form data
        displayPopup();
    }
});

document.getElementById("reset-button").addEventListener("click", function () {
    // Reset the form
    document.getElementById("survey-form").reset();
});

document.getElementById("close-popup").addEventListener("click", function () {
    // Close the popup and reset the form
    document.getElementById("popup").style.display = "none";
    document.getElementById("survey-form").reset();
});

function validateForm() {
    var form = document.getElementById("survey-form");
    if (form.checkValidity()) {
        return true;
    } else {
        alert("Please fill in all required fields.");
        return false;
    }
}

function displayPopup() {
    var popup = document.getElementById("popup");
    var formData = new FormData(document.getElementById("survey-form"));

    document.getElementById("popup-first-name").textContent = formData.get("first-name");
    document.getElementById("popup-last-name").textContent = formData.get("last-name");
    document.getElementById("popup-date-of-birth").textContent = formData.get("date-of-birth");
    document.getElementById("popup-country").textContent = formData.get("country");

    var genderArray = formData.getAll("gender");
    document.getElementById("popup-gender").textContent = genderArray.join(", ");

    document.getElementById("popup-profession").textContent = formData.get("profession");
    document.getElementById("popup-email").textContent = formData.get("email");
    document.getElementById("popup-mobile").textContent = formData.get("mobile");

    popup.style.display = "block";
}