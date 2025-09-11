document.querySelector("form").addEventListener("submit", function(event) {
    const email = document.querySelector("[name='txt_Email']");
    const pattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!pattern.test(email.value)) {
        alert("Please enter a valid email address (must contain @ and .)");
        event.preventDefault(); // מונע שליחה
    }
});