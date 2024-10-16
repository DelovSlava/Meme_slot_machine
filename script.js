// Массив зображень для слотів
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.png'
];

// Функція для рандомного вибору зображення
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Функція для анімації та зміни зображень у слотах
function spin() {
    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');

    // Імітація прокручування слотів
    let spins = 10; // Кількість циклів прокручування
    let interval = setInterval(() => {
        slot1.src = getRandomImage();
        slot2.src = getRandomImage();
        slot3.src = getRandomImage();
        spins--;

        // Після завершення прокручування
        if (spins <= 0) {
            clearInterval(interval);
        }
    }, 100); // Інтервал між зміною зображень
}

// Функція для показу відповідної форми
function showForm(formType) {
    closeForm(); // Закриваємо інші форми перед відкриттям нової
    if (formType === 'login') {
        document.getElementById('login-form').style.display = 'flex';
    } else if (formType === 'register') {
        document.getElementById('register-form').style.display = 'flex';
    }
}

// Функція для закриття форми
function closeForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
}
