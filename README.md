# Welcome App - iOS 原生應用程式

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/cychiang-ntpu/capacitor-hello-world-ios)
[![Platform](https://img.shields.io/badge/platform-iOS-lightgrey.svg)](https://developer.apple.com/ios/)
[![Capacitor](https://img.shields.io/badge/Capacitor-5.5.1-blue.svg)](https://capacitorjs.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> 🎯 **適合對象**: 想學習手機應用程式開發的初學者  
> ⏱️ **預估時間**: 2-3 小時完成  
> 📱 **成果**: 一個完整的 iOS 註冊登入應用程式

一個**簡潔但功能完整**的使用者註冊登入應用程式，使用 Capacitor 技術將網頁應用程式打包成原生 iOS 應用程式。經過完整的簡化重構，移除了複雜的動畫效果和響應式設計，但保留了所有核心功能。

## 這個 App 可以做什麼

### 主要功能

- 📝 **用戶註冊** - 建立新帳號
- 🔑 **用戶登入** - 安全登入系統
- 🏠 **個人主頁** - 登入後的歡迎頁面
- �� **資料保存** - 記住登入狀態
- 📱 **原生應用** - 真正的 iOS App

### 簡化設計哲學

- 🎨 **簡潔的視覺風格** - 移除複雜漸層背景和動畫效果
- 📐 **統一的佈局** - 移除響應式設計的複雜性
- 🔧 **模組化架構** - CSS 與 HTML 完全分離
- 📦 **輕量化代碼** - HTML 從 500+ 行簡化到 25 行

## 專案架構

```text
capacitor-hello-world-ios/
├── 📄 README.md               # 專案主要說明文件 (這個文件)
├── 📄 index.html              # 主要 HTML 檔案 (25 行)
├── 📄 package.json            # 專案依賴設定
├── 📄 capacitor.config.json   # Capacitor 設定
├── 📄 LICENSE                 # MIT 授權文件
│
├── 🎨 css/                    # 樣式表資料夾
│   └── style.css              # 簡化的外部樣式表
│
├── 📱 js/                     # JavaScript 功能模組
│   ├── app.js                 # 主要應用程式控制器
│   ├── app-state.js          # 應用程式狀態管理
│   ├── page-renderer.js      # 頁面渲染系統
│   └── form-validators.js    # 表單驗證邏輯
│
├── 📚 docs/                   # 完整文檔資料夾
│   ├── QUICK_START.md         # 快速開始指南
│   ├── LOCAL_DEVELOPMENT.md   # 本地開發詳細指南
│   ├── PROJECT_OVERVIEW.md    # 專案架構總覽
│   ├── CONTRIBUTING.md        # 貢獻指南
│   ├── GITHUB_CHECKLIST.md    # GitHub 專案檢查清單
│   ├── REPOSITORY_INFO.md     # 儲存庫詳細資訊
│   └── README_OLD.md          # 原始詳細說明備份
│
├── 🔧 dist/                   # 建置輸出資料夾
│   ├── index.html             # 建置後的 HTML
│   ├── css/                   # 建置後的樣式
│   └── js/                    # 建置後的 JavaScript
│
├── 📱 ios/                    # iOS 原生專案
│   ├── App/                   # Xcode 專案檔案
│   └── capacitor-cordova-ios-plugins/  # Cordova 插件
│
├── ⚙️ .github/                # GitHub 設定資料夾
│   └── ISSUE_TEMPLATE/        # Issue 範本
│
├── 🔧 .vscode/                # VS Code 設定
├── 📦 node_modules/           # npm 依賴套件 (自動產生)
└── 🔒 .gitignore              # Git 忽略檔案清單
```

## 快速開始

### 5 分鐘快速體驗

```bash
# 1. 克隆專案
git clone https://github.com/cychiang-ntpu/capacitor-hello-world-ios.git
cd capacitor-hello-world-ios

# 2. 安裝依賴並啟動
npm install
npm run build
npm run serve
```

🌐 **打開瀏覽器**: `http://localhost:8080`

### iOS 應用體驗

```bash
# 3. 建置 iOS 版本
npm run build:ios
npm run open:ios
```

📱 **在 Xcode 中**: 選擇模擬器並運行

## 完整文檔

### 新手必讀

- 📋 **[快速開始指南](docs/QUICK_START.md)** - 15 分鐘上手指南
- 🛠️ **[本地開發指南](docs/LOCAL_DEVELOPMENT.md)** - 詳細安裝和設定
- 🏗️ **[專案架構總覽](docs/PROJECT_OVERVIEW.md)** - 了解代碼結構

### 進階學習

- 🤝 **[貢獻指南](docs/CONTRIBUTING.md)** - 如何參與開發
- 📋 **[GitHub 檢查清單](docs/GITHUB_CHECKLIST.md)** - 專案管理
- 📊 **[儲存庫資訊](docs/REPOSITORY_INFO.md)** - 專案詳細資訊

## 技術棧

### 核心技術

- **前端**: HTML5, CSS3, JavaScript (Vanilla)
- **行動端**: Capacitor 5.5.1
- **平台**: iOS 14+, Web
- **建置工具**: npm scripts

### 開發環境

- **Node.js**: 16+
- **iOS 開發**: Xcode 14+, macOS
- **工具**: Git, npm

## 設計特色

### 簡化後的特點

- ✅ **乾淨的 HTML 結構** (25 行)
- ✅ **分離的 CSS 樣式表**
- ✅ **模組化 JavaScript 架構**
- ✅ **統一的色彩方案**
- ✅ **響應式基礎佈局**

### 移除的複雜性

- ❌ **複雜漸層背景**
- ❌ **過度動畫效果**
- ❌ **多斷點響應式設計**
- ❌ **內嵌樣式混合**

## 學習目標

完成這個專案後，你將學會：

1. 🔧 **Capacitor 基礎** - 網頁轉原生應用
2. 📱 **iOS 開發入門** - Xcode 和模擬器使用
3. 🎨 **前端架構** - HTML/CSS/JS 分離設計
4. 📦 **專案管理** - npm scripts 和建置流程
5. 🔄 **版本控制** - Git 基礎操作

## 貢獻

歡迎所有形式的貢獻！請先閱讀 [貢獻指南](docs/CONTRIBUTING.md)。

### 快速貢獻方式

1. 🐛 **回報問題** - [建立 Issue](https://github.com/cychiang-ntpu/capacitor-hello-world-ios/issues)
2. 💡 **建議改進** - [提出想法](https://github.com/cychiang-ntpu/capacitor-hello-world-ios/discussions)
3. �� **提交代碼** - Fork 並創建 Pull Request
4. 📚 **改善文檔** - 修正錯字或增加範例

## 授權

本專案採用 [MIT 授權](LICENSE) - 詳見授權檔案。

## 致謝

- [Capacitor](https://capacitorjs.com/) - 優秀的跨平台框架
- [Apple Developer](https://developer.apple.com/) - iOS 開發平台
- 所有貢獻者和使用者的回饋

---

⭐ **如果這個專案對你有幫助，請給我們一個星星！**

🚀 **立即開始**: [快速開始指南](docs/QUICK_START.md)
