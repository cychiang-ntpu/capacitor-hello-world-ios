//  App 狀態管理系統
// 管理使用者登入狀態、路由和全域狀態

class AppState {
    constructor() {
        this.currentUser = null;
        this.currentPage = 'register'; // 'register', 'login', 'main'
        this.isLoggedIn = false;
        this.users = []; // 模擬用戶資料庫
        
        this.init();
    }
    
    //  初始化應用程式狀態
    init() {
        this.loadFromStorage();
        this.checkAuthStatus();
        this.setupEventListeners();
    }
    
    //  從本地存儲載入資料
    loadFromStorage() {
        try {
            const users = localStorage.getItem('app_users');
            const currentUser = localStorage.getItem('app_current_user');
            
            if (users) {
                this.users = JSON.parse(users);
            }
            
            if (currentUser) {
                this.currentUser = JSON.parse(currentUser);
                this.isLoggedIn = true;
                this.currentPage = 'main';
            }
        } catch (error) {
            console.error('載入本地資料失敗:', error);
        }
    }
    
    //  儲存資料到本地存儲
    saveToStorage() {
        try {
            localStorage.setItem('app_users', JSON.stringify(this.users));
            if (this.currentUser) {
                localStorage.setItem('app_current_user', JSON.stringify(this.currentUser));
            } else {
                localStorage.removeItem('app_current_user');
            }
        } catch (error) {
            console.error('儲存本地資料失敗:', error);
        }
    }
    
    //  檢查驗證狀態
    checkAuthStatus() {
        if (this.currentUser && this.isLoggedIn) {
            this.currentPage = 'main';
        } else {
            this.currentPage = 'register';
            this.isLoggedIn = false;
        }
    }
    
    //  註冊新用戶
    register(userData) {
        try {
            // 檢查 email 是否已存在
            const existingUser = this.users.find(user => user.email === userData.email);
            if (existingUser) {
                throw new Error('此 Email 已經被註冊');
            }
            
            // 創建新用戶
            const newUser = {
                id: Date.now(),
                username: userData.username,
                email: userData.email,
                password: userData.password, // 在實際應用中應該加密
                registeredAt: new Date().toISOString(),
                lastLogin: null
            };
            
            this.users.push(newUser);
            this.saveToStorage();
            
            console.log('註冊成功:', newUser.username);
            return { success: true, message: '註冊成功！' };
            
        } catch (error) {
            console.error('註冊失敗:', error.message);
            return { success: false, message: error.message };
        }
    }
    
    //  用戶登入
    login(email, password) {
        try {
            const user = this.users.find(u => u.email === email && u.password === password);
            
            if (!user) {
                throw new Error('Email 或密碼錯誤');
            }
            
            // 更新登入時間
            user.lastLogin = new Date().toISOString();
            
            this.currentUser = user;
            this.isLoggedIn = true;
            this.currentPage = 'main';
            
            this.saveToStorage();
            
            console.log('登入成功:', user.username);
            return { success: true, message: '登入成功！' };
            
        } catch (error) {
            console.error('登入失敗:', error.message);
            return { success: false, message: error.message };
        }
    }
    
    //  用戶登出
    logout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.currentPage = 'register';
        
        localStorage.removeItem('app_current_user');
        
        console.log('已登出');
        this.navigateTo('register');
    }
    
    //  頁面導航
    navigateTo(page) {
        this.currentPage = page;
        this.renderCurrentPage();
        this.updateURL();
    }
    
    //  渲染當前頁面
    renderCurrentPage() {
        const app = document.getElementById('app');
        if (!app) return;
        
        // 清除當前內容
        app.innerHTML = '';
        
        // 根據當前頁面渲染對應內容
        switch (this.currentPage) {
            case 'register':
                app.appendChild(this.createRegisterPage());
                break;
            case 'login':
                app.appendChild(this.createLoginPage());
                break;
            case 'main':
                if (this.isLoggedIn) {
                    app.appendChild(this.createMainPage());
                } else {
                    this.navigateTo('register');
                }
                break;
            default:
                this.navigateTo('register');
        }
    }
    
    //  更新 URL（模擬路由）
    updateURL() {
        if (window.history && window.history.pushState) {
            const url = `#${this.currentPage}`;
            window.history.pushState({ page: this.currentPage }, '', url);
        }
    }
    
    //  設置事件監聽器
    setupEventListeners() {
        // 監聽瀏覽器返回按鈕
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.page) {
                this.currentPage = event.state.page;
                this.renderCurrentPage();
            }
        });
        
        // 監聽頁面載入完成
        document.addEventListener('DOMContentLoaded', () => {
            this.renderCurrentPage();
        });
    }
    
    //  創建註冊頁面
    createRegisterPage() {
        return window.pageRenderer.renderRegisterPage();
    }
    
    //  創建登入頁面
    createLoginPage() {
        return window.pageRenderer.renderLoginPage();
    }
    
    //  創建主頁面
    createMainPage() {
        return window.pageRenderer.renderMainPage(this.currentUser);
    }
}

//  全域 App 狀態實例
window.appState = new AppState();