# Welcome App - iOS 原生應用程式

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/cychiang-ntpu/capacitor-hello-world-ios)
[![Platform](https://img.shields.io/badge/platform-iOS-lightgrey.svg)](https://developer.apple.com/ios/)
[![Capacitor](https://img.shields.io/badge/Capacitor-5.5.1-blue.svg)](https://capacitorjs.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> **適合對象**: 想學習手機應用程式開發的初學者  
> **預估時間**: 2-3 小時完成  
> **成果**: 一個完整的 iOS 註冊登入應用程式

一個**簡潔但功能完整**的使用者註冊登入應用程式，使用 Capacitor 技術將網頁應用程式打包成原生 iOS 應用程式。經過完整的簡化重構，移除了複雜的動畫效果和響應式設計，但保留了所有核心功能。

## 這個 App 可以做什麼

### 主要功能

- **用戶註冊** - 建立新帳號
- **用戶登入** - 安全登入系統
- **個人主頁** - 登入後的歡迎頁面
- **資料保存** - 記住登入狀態
- **原生應用** - 真正的 iOS App

### 簡化設計哲學

- **簡潔的視覺風格** - 移除複雜漸層背景和動畫效果
- **統一的佈局** - 移除響應式設計的複雜性
- **模組化架構** - CSS 與 HTML 完全分離
- **輕量化代碼** - HTML 從 500+ 行簡化到 25 行

## 專案架構

```text
capacitor-hello-world-ios/
├── README.md               # 專案主要說明文件 (這個文件)
├── index.html              # 主要 HTML 檔案 (25 行)
├── package.json            # 專案依賴設定
├── package-lock.json       # npm 依賴鎖定檔
├── capacitor.config.json   # Capacitor 設定
├── LICENSE                 # MIT 授權文件
│
├── css/                    # 樣式表資料夾
│   └── style.css              # 簡化的外部樣式表
│
├── js/                     # JavaScript 功能模組
│   ├── app.js                 # 主要應用程式控制器
│   ├── app-state.js          # 應用程式狀態管理
│   ├── page-renderer.js      # 頁面渲染系統
│   └── form-validators.js    # 表單驗證邏輯
│
├── docs/                   # 完整文檔資料夾
│   ├── QUICK_START.md         # 快速開始指南
│   ├── LOCAL_DEVELOPMENT.md   # 本地開發詳細指南
│   ├── PROJECT_OVERVIEW.md    # 專案架構總覽
│   ├── CONTRIBUTING.md        # 貢獻指南
│   ├── GITHUB_CHECKLIST.md    # GitHub 專案檢查清單
│   ├── REPOSITORY_INFO.md     # 儲存庫詳細資訊
│   └── README_OLD.md          # 原始詳細說明備份
│
├── dist/                   # 建置輸出資料夾
│   ├── index.html             # 建置後的 HTML
│   ├── css/                   # 建置後的樣式
│   └── js/                    # 建置後的 JavaScript
│
├── .github/                # GitHub 設定資料夾
│   ├── ISSUE_TEMPLATE/        # Issue 範本
│   │   ├── bug_report.md      # Bug 回報範本
│   │   └── feature_request.md # 功能請求範本
│   ├── workflows/             # GitHub Actions
│   │   └── build.yml          # 自動建置流程
│   └── pull_request_template.md # PR 範本
│
├── 開發環境設定檔案
│   ├── .editorconfig          # 編輯器統一設定
│   ├── .env.example           # 環境變數範例檔
│   ├── .prettierrc.json       # 程式碼格式化設定
│   ├── .gitignore             # Git 忽略檔案清單
│   └── .vscode/               # VS Code 設定
│       ├── extensions.json    # 推薦擴充功能
│       ├── launch.json        # 除錯設定
│       ├── settings.json      # 編輯器設定
│       └── tasks.json         # 任務設定
│
├── node_modules/           # npm 依賴套件 (自動產生)
│
└── � ios/ (使用 npm run build:ios 生成)
    ├── App/                   # Xcode 專案檔案
    └── capacitor-cordova-ios-plugins/  # Cordova 插件
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

**打開瀏覽器**: `http://localhost:8080`

### iOS 應用體驗

```bash
# 3. 首次完整 iOS 設置 (推薦新手)
npm run first:ios

# 或者分步執行：
# 3a. 添加 iOS 平台 (首次運行必須)
npm run setup:ios

# 3b. 建置 iOS 版本
npm run build:ios

# 3c. 開啟 Xcode
npm run open:ios
```

**在 Xcode 中**: 選擇模擬器並運行

## 環境設定

### 環境變數設定（進階）

專案包含 `.env.example` 檔案，提供了環境變數的範例設定：

```bash
# 複製範例檔案為實際設定檔
cp .env.example .env
```

#### 主要設定項目

##### 應用程式基本資訊

- `APP_NAME` - 應用程式顯示名稱
- `APP_ID` - 應用程式唯一識別碼
- `APP_VERSION` - 應用程式版本號

##### 開發環境設定

- `DEV_SERVER_PORT` - 開發服務器端口（預設 8080）
- `DEV_SERVER_HOST` - 開發服務器主機

##### iOS 專用設定

- `IOS_BUNDLE_ID` - iOS Bundle 識別碼
- `IOS_TEAM_ID` - Apple Developer Team ID（發布到 App Store 需要）

##### 注意事項

- `.env` 檔案包含敏感資訊，已在 `.gitignore` 中排除
- 僅在需要自訂設定時才需要創建 `.env` 檔案
- 大部分情況下使用預設設定即可正常運行

## 故障排除

### 常見問題

#### iOS 平台未添加錯誤

如果遇到以下錯誤：

```text
[error] ios platform has not been added yet.
```

**解決方法：**

```bash
# 方法 1: 使用新的 setup 命令
npm run setup:ios

# 方法 2: 直接執行 Capacitor 命令
npx cap add ios

# 3. 如果 pod install 中斷，手動完成
cd ios/App && pod install && cd ../..

# 4. 重新構建
npm run build:ios
```

**重要提醒：**

- 首次使用 iOS 功能前，必須先執行 `npx cap add ios`
- 此步驟會下載並安裝 iOS 相關的原生代碼和依賴
- CocoaPods 安裝過程可能需要 2-5 分鐘，請耐心等待

#### 其他常見問題

- **端口被占用**: 修改 `package.json` 中的 `serve` 腳本端口
- **權限問題**: 使用 `sudo` 執行 npm 安裝命令
- **Xcode 問題**: 確保已安裝最新版本的 Xcode 和 Command Line Tools

#### iOS 代碼簽名錯誤

如果在 Xcode 中看到以下錯誤：

```text
Signing for "App" requires a development team. Select a development team in the Signing & Capabilities editor.
```

**快速解決步驟：**

1. **在 Xcode 中**：
   - 點擊左側專案導航器中的 "App" 專案名稱
   - 選擇 "TARGETS" 下的 "App"
   - 點擊 "Signing & Capabilities" 標籤

2. **設定開發團隊**：
   - 確保勾選 "Automatically manage signing"
   - 在 "Team" 下拉選單中選擇您的 Apple ID
   - 如果沒有看到您的 Apple ID，點擊 "Add Account..." 登入

3. **修改 Bundle Identifier**（如果需要）：
   - 將 Bundle Identifier 改為唯一名稱，例如：`com.yourname.welcomeapp`
   - 避免使用已存在的 Bundle ID

**Apple ID 類型說明：**

- **個人免費帳號**：
  - ✅ 可以在模擬器和個人設備上測試
  - ⚠️ 應用程式只能運行 7 天後需重新簽名
  - ❌ 無法發布到 App Store

- **付費開發者帳號** ($99/年)：
  - ✅ 完整的開發和發布權限
  - ✅ 可以發布到 App Store
  - ✅ 應用程式可長期運行

**如果沒有 Apple ID：**

1. 前往 [Apple ID 官網](https://appleid.apple.com/) 註冊免費帳號
2. 在 Xcode 中添加此帳號即可開始開發

## 完整文檔

### 新手必讀

- **[快速開始指南](docs/QUICK_START.md)** - 15 分鐘上手指南
- **[本地開發指南](docs/LOCAL_DEVELOPMENT.md)** - 詳細安裝和設定
- **[專案架構總覽](docs/PROJECT_OVERVIEW.md)** - 了解代碼結構

### 進階學習

- **[貢獻指南](docs/CONTRIBUTING.md)** - 如何參與開發
- **[GitHub 檢查清單](docs/GITHUB_CHECKLIST.md)** - 專案管理
- **[儲存庫資訊](docs/REPOSITORY_INFO.md)** - 專案詳細資訊

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

- **乾淨的 HTML 結構** (25 行)
- **分離的 CSS 樣式表**
- **模組化 JavaScript 架構**
- **統一的色彩方案**
- **響應式基礎佈局**

### 移除的複雜性

- **複雜漸層背景**
- **過度動畫效果**
- **多斷點響應式設計**
- **內嵌樣式混合**

## 學習目標

完成這個專案後，你將學會：

1. **Capacitor 基礎** - 網頁轉原生應用
2. **iOS 開發入門** - Xcode 和模擬器使用
3. **前端架構** - HTML/CSS/JS 分離設計
4. **專案管理** - npm scripts 和建置流程
5. **版本控制** - Git 基礎操作

## 貢獻

歡迎所有形式的貢獻！請先閱讀 [貢獻指南](docs/CONTRIBUTING.md)。

### 快速貢獻方式

1. 🐛 **回報問題** - [建立 Issue](https://github.com/cychiang-ntpu/capacitor-hello-world-ios/issues)
2. **建議改進** - [提出想法](https://github.com/cychiang-ntpu/capacitor-hello-world-ios/discussions)
3. �� **提交代碼** - Fork 並創建 Pull Request
4. **改善文檔** - 修正錯字或增加範例

## 授權

本專案採用 [MIT 授權](LICENSE) - 詳見授權檔案。

## 致謝

- [Capacitor](https://capacitorjs.com/) - 優秀的跨平台框架
- [Apple Developer](https://developer.apple.com/) - iOS 開發平台
- 所有貢獻者和使用者的回饋

---

**如果這個專案對你有幫助，請給我們一個星星！**

**立即開始**: [快速開始指南](docs/QUICK_START.md)
