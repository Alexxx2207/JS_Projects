function notify(message) {
    let notificationElement = document.getElementById('notification');
    notificationElement.style.display = 'block';
    notificationElement.textContent = message;
    notificationElement.addEventListener('click', function () {
        this.style.display = 'none';
    });
}