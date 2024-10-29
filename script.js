// File: script.js

// Update real-time display
function updateTime() {
    const timeElement = document.getElementById('real-time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Display greeting based on the time of day
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();
    let greetingText;

    if (hour >= 5 && hour < 12) {
        greetingText = 'Selamat Pagi';
    } else if (hour >= 12 && hour < 15) {
        greetingText = 'Selamat Siang';
    } else if (hour >= 15 && hour < 18) {
        greetingText = 'Selamat Sore';
    } else {
        greetingText = 'Selamat Malam';
    }

    greetingElement.textContent = greetingText;
}

// Initialize data and page events
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    updateTime();
    setInterval(updateTime, 1000);

    const homeLink = document.getElementById('home-link');
    const historyLink = document.getElementById('history-link');
    const mainContent = document.getElementById('main-content');
    const historyPage = document.getElementById('history-page');

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.style.display = 'block';
        historyPage.style.display = 'none';
    });

    historyLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.style.display = 'none';
        historyPage.style.display = 'block';
    });
});
