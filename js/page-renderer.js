// 🎨 頁面渲染器
// 負責創建和渲染各個頁面的 UI 組件

class PageRenderer {
    constructor() {
        this.validators = new FormValidators();
    }
    
    // 📝 渲染註冊頁面
    renderRegisterPage() {
        const container = this.createPageContainer();
        
        container.innerHTML = `
            <div class="auth-container">
                <div class="auth-header">
                    <div class="app-logo">
                        <span class="logo-emoji">🚀</span>
                        <h1>Welcome App</h1>
                    </div>
                    <p class="auth-subtitle">建立你的帳戶，開始精彩旅程</p>
                </div>
                
                <form id="registerForm" class="auth-form">
                    <div class="form-group">
                        <label for="reg-username">👤 用戶名稱</label>
                        <input 
                            type="text" 
                            id="reg-username" 
                            name="username" 
                            placeholder="請輸入用戶名稱" 
                            required
                        >
                        <div class="error-message" id="username-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label for="reg-email">📧 Email</label>
                        <input 
                            type="email" 
                            id="reg-email" 
                            name="email" 
                            placeholder="請輸入 Email 地址" 
                            required
                        >
                        <div class="error-message" id="email-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label for="reg-password">🔒 密碼</label>
                        <div class="password-input-container">
                            <input 
                                type="password" 
                                id="reg-password" 
                                name="password" 
                                placeholder="請輸入密碼（至少6位）" 
                                required
                            >
                            <button type="button" class="toggle-password" data-target="reg-password">
                                👁️
                            </button>
                        </div>
                        <div class="password-strength" id="password-strength"></div>
                        <div class="error-message" id="password-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label for="reg-confirm-password">🔒 確認密碼</label>
                        <div class="password-input-container">
                            <input 
                                type="password" 
                                id="reg-confirm-password" 
                                name="confirmPassword" 
                                placeholder="請再次輸入密碼" 
                                required
                            >
                            <button type="button" class="toggle-password" data-target="reg-confirm-password">
                                👁️
                            </button>
                        </div>
                        <div class="error-message" id="confirm-password-error"></div>
                    </div>
                    
                    <button type="submit" class="auth-button" id="register-btn">
                        <span class="button-text">🎉 註冊帳戶</span>
                        <div class="loading-spinner" style="display: none;"></div>
                    </button>
                    
                    <div class="auth-footer">
                        <p>已經有帳戶了？ 
                            <a href="#" id="switch-to-login" class="auth-link">立即登入</a>
                        </p>
                    </div>
                </form>
            </div>
        `;
        
        this.setupRegisterPageEvents(container);
        return container;
    }
    
    // 🔐 渲染登入頁面
    renderLoginPage() {
        const container = this.createPageContainer();
        
        container.innerHTML = `
            <div class="auth-container">
                <div class="auth-header">
                    <div class="app-logo">
                        <span class="logo-emoji">🚀</span>
                        <h1>Welcome App</h1>
                    </div>
                    <p class="auth-subtitle">歡迎回來！請登入你的帳戶</p>
                </div>
                
                <form id="loginForm" class="auth-form">
                    <div class="form-group">
                        <label for="login-email">📧 Email</label>
                        <input 
                            type="email" 
                            id="login-email" 
                            name="email" 
                            placeholder="請輸入 Email 地址" 
                            required
                        >
                        <div class="error-message" id="login-email-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label for="login-password">🔒 密碼</label>
                        <div class="password-input-container">
                            <input 
                                type="password" 
                                id="login-password" 
                                name="password" 
                                placeholder="請輸入密碼" 
                                required
                            >
                            <button type="button" class="toggle-password" data-target="login-password">
                                👁️
                            </button>
                        </div>
                        <div class="error-message" id="login-password-error"></div>
                    </div>
                    
                    <div class="form-group checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" id="remember-me" name="rememberMe">
                            <span class="checkmark"></span>
                            記住我的登入狀態
                        </label>
                    </div>
                    
                    <button type="submit" class="auth-button" id="login-btn">
                        <span class="button-text">🎯 立即登入</span>
                        <div class="loading-spinner" style="display: none;"></div>
                    </button>
                    
                    <div class="auth-footer">
                        <p>還沒有帳戶？ 
                            <a href="#" id="switch-to-register" class="auth-link">免費註冊</a>
                        </p>
                        <a href="#" class="forgot-password">忘記密碼？</a>
                    </div>
                </form>
            </div>
        `;
        
        this.setupLoginPageEvents(container);
        return container;
    }
    
    // 🏠 渲染主頁面
    renderMainPage(user) {
        const container = this.createPageContainer();
        
        const lastLoginText = user.lastLogin 
            ? new Date(user.lastLogin).toLocaleString('zh-TW')
            : '首次登入';
        
        container.innerHTML = `
            <div class="main-container">
                <header class="main-header">
                    <div class="header-content">
                        <div class="user-info">
                            <div class="user-avatar">
                                ${user.username.charAt(0).toUpperCase()}
                            </div>
                            <div class="user-details">
                                <h2>歡迎回來，${user.username}！</h2>
                                <p class="user-email">${user.email}</p>
                                <p class="last-login">上次登入：${lastLoginText}</p>
                            </div>
                        </div>
                        <button id="logout-btn" class="logout-button">
                            🚪 登出
                        </button>
                    </div>
                </header>
                
                <main class="main-content">
                    <div class="dashboard">
                        <h3>🎯 主要功能</h3>
                        
                        <div class="feature-grid">
                            <div class="feature-card" data-feature="profile">
                                <div class="feature-icon">👤</div>
                                <h4>個人資料</h4>
                                <p>查看和編輯你的個人資訊</p>
                            </div>
                            
                            <div class="feature-card" data-feature="settings">
                                <div class="feature-icon">⚙️</div>
                                <h4>設定</h4>
                                <p>自訂應用程式偏好設定</p>
                            </div>
                            
                            <div class="feature-card" data-feature="notifications">
                                <div class="feature-icon">🔔</div>
                                <h4>通知</h4>
                                <p>管理你的通知和提醒</p>
                            </div>
                            
                            <div class="feature-card" data-feature="help">
                                <div class="feature-icon">❓</div>
                                <h4>幫助</h4>
                                <p>查看說明文件和常見問題</p>
                            </div>
                        </div>
                        
                        <div class="stats-section">
                            <h3>📊 統計資訊</h3>
                            <div class="stats-grid">
                                <div class="stat-item">
                                    <div class="stat-number">${this.getDaysSinceRegistration(user.registeredAt)}</div>
                                    <div class="stat-label">加入天數</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">1</div>
                                    <div class="stat-label">今日登入</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">100%</div>
                                    <div class="stat-label">活躍度</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;
        
        this.setupMainPageEvents(container);
        return container;
    }
    
    // 📦 創建頁面容器
    createPageContainer() {
        const container = document.createElement('div');
        container.className = 'page-container';
        return container;
    }
    
    // 📅 計算註冊天數
    getDaysSinceRegistration(registeredAt) {
        const registrationDate = new Date(registeredAt);
        const today = new Date();
        const diffTime = Math.abs(today - registrationDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
    
    // 🎯 設置註冊頁面事件
    setupRegisterPageEvents(container) {
        const form = container.querySelector('#registerForm');
        const switchToLogin = container.querySelector('#switch-to-login');
        
        // 表單提交
        form.addEventListener('submit', (e) => this.handleRegisterSubmit(e));
        
        // 切換到登入頁面
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            window.appState.navigateTo('login');
        });
        
        // 即時驗證
        this.setupFormValidation(container);
        
        // 密碼顯示/隱藏切換
        this.setupPasswordToggle(container);
    }
    
    // 🎯 設置登入頁面事件
    setupLoginPageEvents(container) {
        const form = container.querySelector('#loginForm');
        const switchToRegister = container.querySelector('#switch-to-register');
        
        // 表單提交
        form.addEventListener('submit', (e) => this.handleLoginSubmit(e));
        
        // 切換到註冊頁面
        switchToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            window.appState.navigateTo('register');
        });
        
        // 密碼顯示/隱藏切換
        this.setupPasswordToggle(container);
    }
    
    // 🎯 設置主頁面事件
    setupMainPageEvents(container) {
        const logoutBtn = container.querySelector('#logout-btn');
        const featureCards = container.querySelectorAll('.feature-card');
        
        // 登出按鈕
        logoutBtn.addEventListener('click', () => {
            this.showConfirmDialog('確定要登出嗎？', () => {
                window.appState.logout();
            });
        });
        
        // 功能卡片點擊
        featureCards.forEach(card => {
            card.addEventListener('click', () => {
                const feature = card.dataset.feature;
                this.handleFeatureClick(feature);
            });
        });
    }
    
    // 📝 處理註冊表單提交
    async handleRegisterSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const userData = {
            username: formData.get('username').trim(),
            email: formData.get('email').trim(),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        };
        
        // 驗證表單
        if (!this.validateRegisterForm(userData)) {
            return;
        }
        
        // 顯示載入狀態
        this.setButtonLoading('register-btn', true);
        
        // 模擬網路延遲
        await this.delay(1000);
        
        // 執行註冊
        const result = window.appState.register(userData);
        
        this.setButtonLoading('register-btn', false);
        
        if (result.success) {
            this.showMessage(result.message, 'success');
            
            // 延遲後跳轉到登入頁面
            setTimeout(() => {
                window.appState.navigateTo('login');
            }, 1500);
        } else {
            this.showMessage(result.message, 'error');
        }
    }
    
    // 🔐 處理登入表單提交
    async handleLoginSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password');
        
        if (!email || !password) {
            this.showMessage('請填寫所有必填欄位', 'error');
            return;
        }
        
        // 顯示載入狀態
        this.setButtonLoading('login-btn', true);
        
        // 模擬網路延遲
        await this.delay(1000);
        
        // 執行登入
        const result = window.appState.login(email, password);
        
        this.setButtonLoading('login-btn', false);
        
        if (result.success) {
            this.showMessage(result.message, 'success');
            
            // 延遲後跳轉到主頁面
            setTimeout(() => {
                window.appState.navigateTo('main');
            }, 1000);
        } else {
            this.showMessage(result.message, 'error');
        }
    }
    
    // ✅ 驗證註冊表單
    validateRegisterForm(userData) {
        let isValid = true;
        
        // 清除之前的錯誤訊息
        this.clearErrorMessages();
        
        // 驗證用戶名稱
        if (!this.validators.validateUsername(userData.username)) {
            this.showFieldError('username-error', '用戶名稱至少需要 2 個字元');
            isValid = false;
        }
        
        // 驗證 Email
        if (!this.validators.validateEmail(userData.email)) {
            this.showFieldError('email-error', '請輸入有效的 Email 地址');
            isValid = false;
        }
        
        // 驗證密碼
        if (!this.validators.validatePassword(userData.password)) {
            this.showFieldError('password-error', '密碼至少需要 6 個字元');
            isValid = false;
        }
        
        // 驗證確認密碼
        if (userData.password !== userData.confirmPassword) {
            this.showFieldError('confirm-password-error', '密碼確認不一致');
            isValid = false;
        }
        
        return isValid;
    }
    
    // 🎨 工具方法
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    setButtonLoading(buttonId, isLoading) {
        const button = document.getElementById(buttonId);
        const text = button.querySelector('.button-text');
        const spinner = button.querySelector('.loading-spinner');
        
        if (isLoading) {
            text.style.display = 'none';
            spinner.style.display = 'inline-block';
            button.disabled = true;
        } else {
            text.style.display = 'inline';
            spinner.style.display = 'none';
            button.disabled = false;
        }
    }
    
    showMessage(message, type) {
        // 創建訊息通知
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // 動畫顯示
        setTimeout(() => notification.classList.add('show'), 100);
        
        // 自動隱藏
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }
    
    showFieldError(fieldId, message) {
        const errorElement = document.getElementById(fieldId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }
    
    clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none';
        });
    }
    
    setupFormValidation(container) {
        // 即時密碼強度檢查
        const passwordInput = container.querySelector('#reg-password');
        if (passwordInput) {
            passwordInput.addEventListener('input', (e) => {
                this.updatePasswordStrength(e.target.value);
            });
        }
    }
    
    updatePasswordStrength(password) {
        const strengthElement = document.getElementById('password-strength');
        if (!strengthElement) return;
        
        const strength = this.validators.getPasswordStrength(password);
        strengthElement.className = `password-strength ${strength.class}`;
        strengthElement.textContent = strength.text;
    }
    
    setupPasswordToggle(container) {
        const toggleButtons = container.querySelectorAll('.toggle-password');
        
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.dataset.target;
                const passwordInput = document.getElementById(targetId);
                
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    button.textContent = '🙈';
                } else {
                    passwordInput.type = 'password';
                    button.textContent = '👁️';
                }
            });
        });
    }
    
    showConfirmDialog(message, onConfirm) {
        if (confirm(message)) {
            onConfirm();
        }
    }
    
    handleFeatureClick(feature) {
        this.showMessage(`${feature} 功能開發中...`, 'info');
    }
}

// 🌍 全域頁面渲染器實例
window.pageRenderer = new PageRenderer();