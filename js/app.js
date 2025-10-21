// Hello World Capacitor App JavaScript

// 等待頁面載入完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello World App 已載入');
    
    // 檢查是否在 Capacitor 環境中執行
    if (window.Capacitor) {
        console.log('運行在 Capacitor 環境中');
        console.log('平台:', window.Capacitor.platform);
    } else {
        console.log('運行在網頁瀏覽器中');
    }
});

// 顯示問候訊息的函數
function showAlert() {
    const messages = [
        '你好！歡迎使用我們的 App！',
        'Hello! Welcome to our App!',
        '很高興見到你！',
        '這是我的第一個 iOS App！',
        '使用 Capacitor 建立的應用程式真棒！'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // 如果在 Capacitor 環境中，可以使用原生對話框
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Dialog) {
        window.Capacitor.Plugins.Dialog.alert({
            title: 'Hello World',
            message: randomMessage
        });
    } else {
        // 否則使用網頁的 alert
        alert(randomMessage);
    }
    
    // 在控制台記錄點擊事件
    console.log('用戶點擊了按鈕:', new Date().toLocaleString());
}

// 添加一些互動效果
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    // 添加動畫效果
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});