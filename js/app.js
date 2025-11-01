//  Welcome App - 主要應用程式控制器
// 負責應用程式的初始化和核心功能

class WelcomeApp {
    constructor() {
        this.isCapacitorEnvironment = false;
        this.isInitialized = false;
    }
    
    //  應用程式初始化
    async init() {
        console.log(' Welcome App 正在初始化...');
        
        // 檢查 Capacitor 環境
        this.checkCapacitorEnvironment();
        
        // 等待 DOM 完全載入
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }
    }
    
    //  檢查 Capacitor 環境
    checkCapacitorEnvironment() {
        if (window.Capacitor) {
            this.isCapacitorEnvironment = true;
            console.log(' 運行在 Capacitor 環境中');
            console.log(' 平台:', window.Capacitor.platform);
            
            // 初始化 Capacitor 插件
            this.initCapacitorPlugins();
        } else {
            console.log('運行在網頁瀏覽器中');
        }
    }
    
    //  初始化 Capacitor 插件
    async initCapacitorPlugins() {
        try {
            // 這裡可以初始化需要的 Capacitor 插件
            // 例如：狀態列、鍵盤、相機等
            
            if (window.Capacitor.Plugins) {
                console.log(' Capacitor 插件可用');
                
                // 可以在這裡添加插件初始化邏輯
                // const { StatusBar } = window.Capacitor.Plugins;
                // await StatusBar.setStyle({ style: 'dark' });
            }
        } catch (error) {
            console.error(' Capacitor 插件初始化失敗:', error);
        }
    }
    
    //  DOM 準備就緒
    onDOMReady() {
        console.log(' DOM 已載入完成');
        
        // 初始化應用程式狀態管理
        if (window.appState) {
            console.log(' 應用程式狀態管理器已初始化');
            this.isInitialized = true;
            
            // 隱藏載入畫面，顯示實際內容
            this.hideLoadingScreen();
            
            // 設置全域錯誤處理
            this.setupErrorHandling();
            
            // 設置性能監控（可選）
            this.setupPerformanceMonitoring();
            
        } else {
            console.error(' 無法找到應用程式狀態管理器');
            this.showError('應用程式初始化失敗，請重新整理頁面。');
        }
    }
    
    //  隱藏載入畫面
    hideLoadingScreen() {
        const loadingContainer = document.querySelector('.loading-container');
        if (loadingContainer) {
            loadingContainer.style.opacity = '0';
            setTimeout(() => {
                if (loadingContainer.parentNode) {
                    loadingContainer.parentNode.removeChild(loadingContainer);
                }
            }, 500);
        }
    }
    
    //  設置全域錯誤處理
    setupErrorHandling() {
        // 捕捉未處理的 JavaScript 錯誤
        window.addEventListener('error', (event) => {
            console.error(' 全域錯誤:', event.error);
            this.handleGlobalError(event.error);
        });
        
        // 捕捉未處理的 Promise 拒絕
        window.addEventListener('unhandledrejection', (event) => {
            console.error(' 未處理的 Promise 拒絕:', event.reason);
            this.handleGlobalError(event.reason);
        });
    }
    
    //  處理全域錯誤
    handleGlobalError(error) {
        // 在開發環境中顯示詳細錯誤
        if (this.isDevelopmentMode()) {
            this.showError(`開發錯誤: ${error.message || error}`);
        } else {
            // 在生產環境中顯示用戶友好的錯誤訊息
            this.showError('應用程式發生錯誤，請稍後再試。');
        }
    }
    
    //  檢查是否為開發模式
    isDevelopmentMode() {
        return window.location.hostname === 'localhost' || 
               window.location.hostname === '127.0.0.1' ||
               window.location.hostname.includes('dev');
    }
    
    //  設置性能監控
    setupPerformanceMonitoring() {
        // 監控頁面載入時間
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(` 頁面載入時間: ${loadTime.toFixed(2)}ms`);
            
            // 可以在這裡發送性能數據到分析服務
        });
        
        // 監控路由變化時間（如果有的話）
        const originalPushState = history.pushState;
        history.pushState = function() {
            const start = performance.now();
            originalPushState.apply(history, arguments);
            const end = performance.now();
            console.log(` 路由變化時間: ${(end - start).toFixed(2)}ms`);
        };
    }
    
    //  顯示錯誤訊息
    showError(message) {
        // 創建錯誤通知
        const notification = document.createElement('div');
        notification.className = 'notification error';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // 動畫顯示
        setTimeout(() => notification.classList.add('show'), 100);
        
        // 自動隱藏
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
    
    //  Capacitor 特定功能
    async showNativeAlert(title, message) {
        if (this.isCapacitorEnvironment && window.Capacitor.Plugins.Dialog) {
            try {
                await window.Capacitor.Plugins.Dialog.alert({
                    title: title,
                    message: message
                });
            } catch (error) {
                console.error('原生對話框顯示失敗:', error);
                // 降級到網頁 alert
                alert(`${title}\n\n${message}`);
            }
        } else {
            // 網頁環境使用標準 alert
            alert(`${title}\n\n${message}`);
        }
    }
    
    //  獲取應用程式狀態資訊
    getAppInfo() {
        return {
            isCapacitor: this.isCapacitorEnvironment,
            platform: this.isCapacitorEnvironment ? window.Capacitor.platform : 'web',
            isInitialized: this.isInitialized,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
        };
    }
    
    //  重新初始化應用程式
    async reinitialize() {
        console.log(' 重新初始化應用程式...');
        this.isInitialized = false;
        
        // 清除現有狀態
        if (window.appState) {
            window.appState.currentPage = 'register';
            window.appState.renderCurrentPage();
        }
        
        // 重新初始化
        await this.init();
    }
}

//  全域應用程式實例
window.welcomeApp = new WelcomeApp();

//  啟動應用程式
window.welcomeApp.init();

//  向後兼容的全域函數（保留舊的 showAlert 函數）
window.showAlert = function() {
    const messages = [
        '歡迎使用 Welcome App！ ',
        '這是一個全新的應用程式體驗！ ',
        '感謝你的使用！ ',
        '探索更多精彩功能吧！ '
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    if (window.welcomeApp) {
        window.welcomeApp.showNativeAlert('Hello!', randomMessage);
    } else {
        alert(randomMessage);
    }
};

//  調試工具（僅在開發模式下可用）
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.debugApp = {
        getAppState: () => window.appState,
        getAppInfo: () => window.welcomeApp.getAppInfo(),
        reinitialize: () => window.welcomeApp.reinitialize(),
        clearStorage: () => {
            localStorage.clear();
            location.reload();
        }
    };
    
    console.log(' 調試工具已載入，輸入 window.debugApp 查看可用命令');
}