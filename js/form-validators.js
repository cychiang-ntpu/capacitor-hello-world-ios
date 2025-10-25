// ✅ 表單驗證器
// 處理各種表單欄位的驗證邏輯

class FormValidators {
    constructor() {
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.usernameMinLength = 2;
        this.passwordMinLength = 6;
    }
    
    // 👤 驗證用戶名稱
    validateUsername(username) {
        if (!username || typeof username !== 'string') {
            return false;
        }
        
        const trimmed = username.trim();
        return trimmed.length >= this.usernameMinLength;
    }
    
    // 📧 驗證 Email 格式
    validateEmail(email) {
        if (!email || typeof email !== 'string') {
            return false;
        }
        
        return this.emailRegex.test(email.trim());
    }
    
    // 🔒 驗證密碼強度
    validatePassword(password) {
        if (!password || typeof password !== 'string') {
            return false;
        }
        
        return password.length >= this.passwordMinLength;
    }
    
    // 🎯 獲取密碼強度
    getPasswordStrength(password) {
        if (!password) {
            return { class: 'weak', text: '' };
        }
        
        let score = 0;
        
        // 長度檢查
        if (password.length >= 6) score += 1;
        if (password.length >= 8) score += 1;
        if (password.length >= 12) score += 1;
        
        // 字元種類檢查
        if (/[a-z]/.test(password)) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;
        
        if (score < 3) {
            return { class: 'weak', text: '🔴 密碼強度：弱' };
        } else if (score < 5) {
            return { class: 'medium', text: '🟡 密碼強度：中等' };
        } else {
            return { class: 'strong', text: '🟢 密碼強度：強' };
        }
    }
    
    // 📱 驗證手機號碼（可選功能）
    validatePhone(phone) {
        if (!phone) return false;
        
        const phoneRegex = /^09\d{8}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }
    
    // 🎂 驗證年齡
    validateAge(age) {
        const numAge = parseInt(age);
        return numAge >= 13 && numAge <= 120;
    }
    
    // 🔗 驗證 URL
    validateURL(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }
}

// 導出驗證器類別
window.FormValidators = FormValidators;