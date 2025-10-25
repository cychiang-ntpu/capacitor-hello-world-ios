# 🚀 Welcome App - 30分鐘快速體驗

> 想快速看到結果？跟著這個指南，30分鐘內體驗完整的手機應用程式開發！

## 📋 開始之前

確認你有：
- 💻 Mac 電腦 (iOS 開發必需)
- 🌐 網路連線
- ☕ 一杯咖啡和30分鐘時間

## ⚡ 步驟 1：安裝工具 (10分鐘)

### 安裝 Homebrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 安裝 Node.js
```bash
brew install node
node --version  # 確認安裝成功
```

### 安裝 Xcode
1. 打開 App Store
2. 搜尋並安裝 "Xcode" (需要等待下載)

## ⚡ 步驟 2：取得專案 (5分鐘)

```bash
# 下載專案到桌面
cd ~/Desktop
git clone https://github.com/cychiang-ntpu/capacitor-hello-world-ios.git
cd capacitor-hello-world-ios

# 切換到完整功能分支
git checkout register-trial

# 安裝套件
npm install
```

## ⚡ 步驟 3：運行應用程式 (10分鐘)

### 🌐 在瀏覽器中運行 (四種方法)

#### 方法 1：npm 腳本 (推薦)

```bash
npm run build    # 建置專案
npm run serve    # 啟動伺服器
```
然後打開瀏覽器前往 `http://localhost:8080`

#### 方法 2：直接開啟 HTML 檔案 (最快)

```bash
open index.html  # macOS
# 或直接雙擊 index.html 檔案
```

#### 方法 3：Python 伺服器 (跨平台)

```bash
python3 -m http.server 8080
```
然後前往 `http://localhost:8080`

#### 方法 4：其他 Node.js 工具

```bash
npx http-server . -p 8080
# 或使用 VS Code Live Server 擴充功能
```

### 📱 在 iOS 模擬器運行 (完整體驗)

如果你想要完整的手機體驗：

```bash
npm run build        # 建置專案
npm run sync:ios     # 同步到 iOS
open ios/App/App.xcworkspace  # 開啟 Xcode
```

## ⚡ 步驟 4：在模擬器測試 (5分鐘)

1. 在 Xcode 中點擊裝置選擇器
2. 選擇 "iPhone 15" 或任何 iPhone 模擬器
3. 點擊播放按鈕 ▶️
4. 等待模擬器啟動

## 🎉 成功！

現在你應該看到 Welcome App 在 iPhone 模擬器中運行了！

嘗試：
- 註冊一個新帳號
- 登入
- 查看主頁面

## 📚 想要深入學習？

查看完整的 [README.md](README.md) 文件，裡面有詳細的程式碼解說和教學！

## ❓ 遇到問題？

常見問題：

**Xcode 建置失敗？**
```bash
npx cap sync ios --force
```

**模擬器無法啟動？**
- 重新啟動 Xcode
- 選擇不同的模擬器裝置

**還是不行？**
- 檢查 [完整教學文件](README.md) 的問題排解章節
- 或者提交 GitHub Issue