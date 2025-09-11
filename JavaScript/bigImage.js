document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementById('closeModal');
    const items = document.querySelectorAll('.item');

    // פתיחת המודל בלחיצה על תמונה
    items.forEach(item => {
        item.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-image');
            modalImage.style.backgroundImage = `url(${imageUrl})`;
            modalImage.style.width = '80vw';
            modalImage.style.height = '80vh';
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // סגירת המודל בלחיצה על X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // סגירת המודל בלחיצה על הרקע
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // סגירת המודל בלחיצת ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});