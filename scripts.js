// Функция для открытия модального окна
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden'; // Запрет прокрутки фона
}

// Функция для закрытия модального окна
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto'; // Возврат прокрутки
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
}

// Закрытие модального окна при нажатии Esc
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});