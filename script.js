function selectDrink() {
    const drink = document.getElementById('drinkSelect').value;
    const message = document.getElementById('drinkMessage');
    switch (drink) {
        case 'кава':
            message.textContent = "Ви вибрали каву.";
            break;
        case 'чай':
            message.textContent = "Ви вибрали чай.";
            break;
        case 'сік':
            message.textContent = "Ви вибрали сік.";
            break;
        default:
            message.textContent = "";
    }
}

function checkDay() {
    const day = document.getElementById('dayInput').value.toLowerCase();
    const message = document.getElementById('dayMessage');
    const weekdays = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця"];
    const weekend = ["субота", "неділя"];
    if (weekdays.includes(day)) {
        message.textContent = "Це робочий день.";
    } else if (weekend.includes(day)) {
        message.textContent = "Це вихідний день.";
    } else {
        message.textContent = "Невірний день тижня.";
    }
}

function checkSeason() {
    const month = parseInt(document.getElementById('monthInput').value);
    const message = document.getElementById('seasonMessage');
    if (month >= 1 && month <= 12) {
        if (month >= 3 && month <= 5) {
            message.textContent = "Весна";
        } else if (month >= 6 && month <= 8) {
            message.textContent = "Літо";
        } else if (month >= 9 && month <= 11) {
            message.textContent = "Осінь";
        } else {
            message.textContent = "Зима";
        }
    } else {
        message.textContent = "Невірний номер місяця.";
    }
}

function checkDaysInMonth() {
    const month = parseInt(document.getElementById('daysInput').value);
    const message = document.getElementById('daysMessage');
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month >= 1 && month <= 12) {
        const days = (month === 2) ? 28 : daysInMonth[month - 1];
        message.textContent = `Кількість днів у місяці: ${days}`;
    } else {
        message.textContent = "Невірний номер місяця.";
    }
}

function checkColor() {
    const color = document.getElementById('colorInput').value.toLowerCase();
    const message = document.getElementById('colorMessage');
    switch (color) {
        case 'червоний':
            message.textContent = "Стоп";
            break;
        case 'зелений':
            message.textContent = "Йти";
            break;
        case 'жовтий':
            message.textContent = "Чекати";
            break;
        default:
            message.textContent = "Невідомий колір.";
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operationSelect').value;
    const message = document.getElementById('calcMessage');

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                message.textContent = "Помилка: ділення на нуль!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            message.textContent = "Невідома операція.";
            return;
    }
    message.textContent = `Результат: ${result}`;
}