// Массив зображень для слотів
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

let balance = 100;  // Початковий баланс
const jackpotMultiplier = 14;

// Оновлює відображення балансу
function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

// Функція для отримання випадкового індексу зображення
function getRandomImageIndex() {
    return Math.floor(Math.random() * images.length);
}

// Функція для анімації та зміни зображень у слотах
function spin() {

    const betAmount = parseInt(document.getElementById('bet-amount').value);

    // Перевірка, чи ставка дійсна
    if (isNaN(betAmount) || betAmount <= 0) {
        alert("Будь ласка, введіть дійсну суму ставки.");
        return;
    }

    if (betAmount > balance) {
        alert("Недостатньо коштів для цієї ставки.");
        return;
    }

    balance -= betAmount;  // Знімаємо ставку при програші
    updateBalance();

    // Імітація прокручування слотів
    let spins = 10; // Кількість циклів прокручування

    let interval = setInterval(() => {

        // Отримуємо випадкові індекси для трьох слотів
        const slot1Index = getRandomImageIndex();
        const slot2Index = getRandomImageIndex();
        const slot3Index = getRandomImageIndex();

        // Встановлюємо відповідні зображення для кожного слота
        document.getElementById('slot1').src = images[slot1Index];
        document.getElementById('slot2').src = images[slot2Index];
        document.getElementById('slot3').src = images[slot3Index];
        spins--;

        // Після завершення прокручування
        if (spins <= 0) {
            clearInterval(interval);

            // Перевірка на виграш за індексами
            if (slot1Index === slot2Index && slot2Index === slot3Index) {
                const winAmount = betAmount * jackpotMultiplier;
                balance += winAmount;  // Додаємо виграш до балансу
                document.getElementById('result-message').textContent = `Вітаємо! Ви виграли ${winAmount} монет!`;
            } else {
                document.getElementById('result-message').textContent = "На жаль, ви програли.";
            }
        }
    }, 100); // Інтервал між зміною зображень

    updateBalance();  // Оновлюємо баланс
}

// Початкове відображення балансу
updateBalance();

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
