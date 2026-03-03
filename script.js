function updateTime() {
    const now = new Date();
    
    // Update Time
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    document.getElementById('clock').textContent = timeString;
    
    // Update Date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById('date').textContent = dateString;
}

function updateFooterYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

function init() {
    // Run immediately
    updateTime();
    updateFooterYear();
    
    // Update time every second
    setInterval(updateTime, 1000);

    // Simulate Status Check (Optional advanced feature)
    console.log("System initialized for Hsin Chaio Tien");
    console.log("Status: Online");
}

document.addEventListener('DOMContentLoaded', init);