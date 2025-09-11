// בחירת כל הכפתורים
const buttons = document.querySelectorAll(".card-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const moreText = btn.previousElementSibling; // הפסקה הנוספת
        moreText.classList.toggle("hidden");
        
        // שינוי טקסט הכפתור
        if (moreText.classList.contains("hidden")) {
            btn.textContent = "Read more";
        } else {
            btn.textContent = "Read less";
        }
    });
});