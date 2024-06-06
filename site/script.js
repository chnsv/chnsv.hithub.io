document.getElementById('accept').addEventListener('click', function() {
    // Перенаправляем на страницу с деталами свидания
    window.location.href = 'details.html';
});

document.getElementById('decline').addEventListener('click', function() {
    // Перенаправляем на страницу с сообщением "Попробовать снова?"
    window.location.href = 'decline.html';
});
