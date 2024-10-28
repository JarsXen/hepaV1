// File: script.js

// Menampilkan waktu real-time
function updateTime() {
    const timeElement = document.getElementById('real-time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Simulasi pembaruan data kualitas udara setiap 2 menit
function updateAirQualityData() {
    // Simulasi data baru
    const coValue = (Math.random() * 2).toFixed(2) + ' ppm'; // Simulasi CO
    const no2Value = (Math.random() * 20).toFixed(2) + ' ppm'; // Simulasi NO2
    const pm10Value = (Math.random() * 150).toFixed(2) + ' mg/m3'; // Simulasi PM10

    // Update nilai di UI
    document.getElementById('co-value').textContent = coValue;
    document.getElementById('no2-value').textContent = no2Value;
    document.getElementById('pm10-value').textContent = pm10Value;

    // Update status kualitas udara
    const airQualityStatus = document.getElementById('air-quality-status');
    const activityAdvice = document.getElementById('activity-advice');

    if (parseFloat(coValue) > 1.0 || parseFloat(no2Value) > 10.0 || parseFloat(pm10Value) > 100.0) {
        airQualityStatus.textContent = 'Kualitas Udara Tidak Sehat';
        activityAdvice.textContent = 'Kurangi aktivitas fisik yang terlalu lama dan berat';
    } else {
        airQualityStatus.textContent = 'Kualitas Udara Sehat';
        activityAdvice.textContent = 'Aktivitas fisik normal diperbolehkan';
    }
}

// Fungsi navigasi antara halaman Home dan History
document.addEventListener('DOMContentLoaded', () => {
    // Jalankan fungsi updateTime setiap detik
    setInterval(updateTime, 1000);
    
    // Jalankan fungsi updateAirQualityData setiap 2 menit (120000 ms)
    setInterval(updateAirQualityData, 120000);
    updateAirQualityData(); // Update data saat halaman dimuat

    const homeLink = document.getElementById('home-link');
    const historyLink = document.getElementById('history-link');

    const mainContent = document.getElementById('main-content');
    const historyPage = document.getElementById('history-page');

    // Default tampilkan halaman Home
    mainContent.style.display = 'block';
    historyPage.style.display = 'none';

    homeLink.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        showHomePage();
    });

    historyLink.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        showHistoryPage();
    });

    function showHomePage() {
        mainContent.style.display = 'block';
        historyPage.style.display = 'none';
    }

    function showHistoryPage() {
        mainContent.style.display = 'none';
        historyPage.style.display = 'block';
    }
});
