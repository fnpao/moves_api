document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (this.checkValidity()) {
        alert('Заявка успешно отправлена.');
        this.reset();
    }
    this.classList.add('was-validated');
});