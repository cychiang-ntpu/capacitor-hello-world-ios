# 📱 Capacitor iOS Hello World 應用程式

> 從零開始學習如何使用 Capacitor 建立你的第一個 iOS 手機應用程式

## 📖 關於這個專案

這是一個完整的教學專案，展示如何使用 **Capacitor** 技術將網頁應用程式打包成原生 iOS 應用程式。

### 🤔 什麼是 Capacitor？

Capacitor 是由 Ionic 團隊開發的跨平台應用程式開發框架，它可以讓你：

- 📝 **使用網頁技術** - HTML、CSS、JavaScript 來開發手機應用程式
- 📱 **打包成原生應用** - 在 iOS 和 Android 上運行
- 🔧 **存取原生功能** - 相機、GPS、推播通知等
- 🚀 **快速開發** - 一套程式碼，多平台運行

### 🎯 學習目標

完成這個教學後，你將學會：

- ✅ 設定 iOS 開發環境
- ✅ 建立你的第一個 Capacitor 專案
- ✅ 將網頁應用打包成 iOS 應用程式
- ✅ 在 iOS 模擬器和實體裝置上測試
- ✅ 解決常見的開發問題

### 📋 應用程式功能

這個 Hello World 應用程式包含：

- 🎨 **美觀的使用者介面** - 現代化設計風格
- 💬 **互動式按鈕** - 點擊顯示隨機問候訊息
- ✨ **動畫效果** - 平滑的載入動畫
- 📱 **響應式設計** - 適應不同螢幕尺寸
- 🔄 **原生整合** - 使用原生對話框

## 🚀 30秒快速開始

> 已經有經驗的開發者可以直接執行這些命令：

```bash
npm install
npm run build
npx cap add ios
npx cap open ios
```

⚠️ **新手請繼續閱讀詳細步驟！**

## 📁 專案結構

```
capacitor-hello-world-ios/
├── 📁 .github/              # GitHub 設定檔
├── 📁 js/                   # JavaScript 檔案
│   └── app.js              # 主要應用程式邏輯
├── 📁 dist/                 # 建構後的檔案 (自動產生)
├── 📁 ios/                  # iOS 原生專案 (執行 cap add ios 後產生)
├── 📄 index.html            # 主要 HTML 檔案
├── 📄 package.json          # Node.js 依賴和腳本
├── 📄 capacitor.config.json # Capacitor 配置檔
└── 📄 README.md             # 本說明文件
```

## 🛠 技術架構

| 層級 | 技術 | 用途 |
|------|------|------|
| **前端** | HTML5, CSS3, JavaScript | 使用者介面和互動邏輯 |
| **框架** | Capacitor 5.x | 網頁轉原生應用程式 |
| **平台** | iOS | 目標運行平台 |
| **工具** | Node.js, npm, Xcode | 開發和建構工具 |
| **依賴管理** | CocoaPods, rbenv | iOS 依賴和 Ruby 版本管理 |

## 🔧 環境設定

> ⏱️ **預估時間**: 30-60 分鐘（首次設定）

### 📋 系統需求

- 💻 **macOS** 12.0 或更高版本
- 🧠 **記憶體** 8GB 以上（建議 16GB）
- 💾 **儲存空間** 20GB 可用空間
- 🌐 **網路連線** 用於下載依賴套件

### 🛠 第一步：安裝基礎工具

#### 0️⃣ Homebrew（macOS 套件管理工具）

首先確保你有最新版本的 Homebrew：

```bash
# 安裝或升級 Homebrew（來自 https://brew.sh/）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 驗證安裝
brew --version
```

> 💡 **什麼是 Homebrew？** 它是 macOS 上最受歡迎的套件管理工具，可以輕鬆安裝和管理開發工具。

#### 1️⃣ Node.js（JavaScript 執行環境）

```bash
# 檢查是否已安裝
node --version
npm --version
```

如果沒有安裝，請到 [Node.js 官網](https://nodejs.org/) 下載 LTS 版本（建議 18.x 或更高版本）。

#### 2️⃣ Xcode（iOS 開發必備）

1. **安裝 Xcode**：
   - 開啟 Mac App Store
   - 搜尋「Xcode」並安裝（約 12GB，需要一些時間）

2. **安裝 Command Line Tools**：
   ```bash
   xcode-select --install
   ```

3. **啟動 Xcode 並接受授權**：
   - 第一次開啟 Xcode
   - 接受使用者授權協議
   - 安裝額外組件

### 💎 第二步：Ruby 環境設定

> ❓ **為什麼需要 Ruby？** CocoaPods（iOS 依賴管理工具）是用 Ruby 寫的

#### 方法一：使用 rbenv（推薦）

rbenv 可以讓你管理多個 Ruby 版本，避免權限問題：

```bash
# 1. 安裝 rbenv
brew install rbenv ruby-build

# 2. 初始化 rbenv（加入 shell 設定）
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init - bash)"' >> ~/.bash_profile

# 3. 重新載入 shell 設定
source ~/.bash_profile

# 4. 安裝 Ruby
rbenv install 3.2.2
rbenv global 3.2.2

# 5. 驗證安裝
ruby --version  # 應該顯示 ruby 3.2.2
which ruby     # 應該指向 ~/.rbenv/shims/ruby
```

#### 方法二：使用系統 Ruby（簡單但不推薦）

```bash
# 直接使用 sudo 安裝（可能會有權限問題）
sudo gem install cocoapods
```

### 📦 第三步：安裝 CocoaPods

```bash
# 使用 rbenv 安裝的 Ruby（不需要 sudo）
gem install cocoapods

# 驗證安裝
pod --version
```

### ✅ 環境檢查

執行以下命令確認所有工具都正確安裝：

```bash
# 檢查 Homebrew
brew --version && echo "✅ Homebrew 已安裝"

# 檢查 Node.js
node --version && echo "✅ Node.js 已安裝"

# 檢查 Ruby
ruby --version && echo "✅ Ruby 已安裝"

# 檢查 CocoaPods
pod --version && echo "✅ CocoaPods 已安裝"

# 檢查 Xcode Command Line Tools
xcode-select -p && echo "✅ Xcode Command Line Tools 已安裝"
```

如果所有命令都有輸出且無錯誤，代表環境設定完成！🎉

## 🚀 建立你的第一個 iOS 應用程式

> ⏱️ **預估時間**: 10-15 分鐘

### 📝 步驟一：下載並設定專案

```bash
# 1. 進入專案目錄
cd /path/to/capacitor-hello-world-ios

# 2. 安裝 Node.js 依賴
npm install
```

**這個步驟做了什麼？**

- 下載專案需要的所有 JavaScript 套件
- 安裝 Capacitor 核心函式庫
- 設定開發伺服器工具

### 🔨 步驟二：建構網頁應用程式

```bash
npm run build
```

**這個步驟做了什麼？**
- 將 `index.html` 和 `js/` 複製到 `dist/` 目錄
- 準備要打包到 iOS 應用程式中的網頁檔案

### 📱 步驟三：初始化 iOS 專案

```bash
# 初始化 Capacitor（使用現有設定）
npx cap init

# 添加 iOS 平台
npx cap add ios
```

**這個步驟做了什麼？**
- 建立 `ios/` 目錄
- 產生 Xcode 專案檔案
- 自動執行 `pod install` 安裝 iOS 依賴

> ⚠️ **注意**：第一次執行 `npx cap add ios` 可能需要 3-10 分鐘，這是正常的！

### 🔧 步驟四：處理可能的問題

如果 `npx cap add ios` 失敗，通常是 CocoaPods 的問題：

```bash
# 手動進入 iOS 目錄安裝依賴
cd ios/App
pod install
cd ../../
```

### ✅ 驗證專案建立

檢查是否成功建立：

```bash
# 應該看到這些目錄和檔案
ls -la
# ✅ dist/          (建構檔案)
# ✅ ios/           (iOS 專案)
# ✅ node_modules/  (Node.js 依賴)
```

## 📱 測試你的應用程式

### 🌐 方法一：在網頁瀏覽器中測試（快速預覽）

```bash
# 啟動開發伺服器
npm run serve
```

然後在瀏覽器開啟 `http://localhost:8080`

**優點**：
- ⚡ 快速預覽
- 🔄 即時重新載入
- 🛠 使用瀏覽器開發工具

### 📱 方法二：在 iOS 模擬器中測試（推薦）

#### 步驟 1：開啟 Xcode 專案

```bash
npx cap open ios
```

這會開啟 Xcode 並載入你的專案。

#### 步驟 2：選擇模擬器

在 Xcode 中：
1. 點擊上方工具列的裝置選擇器
2. 選擇一個 iOS 模擬器（建議：iPhone 15 或 iPhone 15 Pro）
3. 如果沒有模擬器，選擇「Add Additional Simulators...」來下載

#### 步驟 3：建構並執行

1. 點擊 **播放按鈕（▶️）** 或按 `Cmd + R`
2. 首次建構可能需要 2-5 分鐘
3. 模擬器會自動開啟並顯示你的應用程式

### 📱 方法三：在實體 iPhone/iPad 上測試

#### 📋 前置需求檢查

在開始之前，確保你有：
- ✅ 一台 Mac 電腦
- ✅ 一根 Lightning 或 USB-C 傳輸線
- ✅ iOS 13.0 或更高版本的 iPhone/iPad
- ✅ 一個 Apple ID（免費帳號即可）

#### 🔧 準備工作

##### 1. **連接裝置**
```bash
# 使用 USB 線連接 iOS 裝置到 Mac
# 確保使用原廠或 MFi 認證的傳輸線
```

##### 2. **信任電腦**
當你第一次連接裝置時：
- iPhone 會顯示「信任此電腦？」的彈出視窗
- 點擊「信任」
- 輸入 iPhone 的密碼確認

##### 3. **開發者設定**
- 需要一個 Apple ID（免費即可，不需要 $99/年的開發者帳號）
- 確保你的 Apple ID 已在 Mac 上登入

#### 🛠 在 Xcode 中設定

##### 步驟 1：開啟專案並選擇裝置
```bash
# 確保專案已建構和同步
npm run build
npx cap sync ios
npx cap open ios
```

在 Xcode 中：
1. 在上方工具列找到裝置選擇器（通常顯示模擬器名稱）
2. 點擊下拉選單
3. 選擇你的實體裝置（會顯示裝置名稱，例如「CY 的 iPhone」）

##### 步驟 2：設定程式碼簽名
1. 在左側專案導航器中點擊 `App` 專案（最上方的藍色圖示）
2. 選擇 `TARGETS` 下的 `App`
3. 點擊 `Signing & Capabilities` 標籤
4. 勾選 `✓ Automatically manage signing`
5. 在 `Team` 下拉選單中選擇你的 Apple ID

> 💡 **提示**：如果沒有看到你的 Apple ID，點擊「Add Account...」來添加

##### 步驟 2.5：處理程式碼簽名密碼請求
當你第一次設定程式碼簽名時，macOS 會顯示密碼對話框：

**對話框內容**：「codesign 想存取鑰匙圈中的密碼『Apple Development: 振宇 江 (振宇 江)』」

**解決方案**：
1. **輸入你的 Mac 登入密碼**（不是 Apple ID 密碼）
2. 建議選擇「**永遠允許**」，這樣之後就不會再跳出
3. 如果選擇「允許」，每次建構時都會詢問
4. 點擊「允許」或「永遠允許」

> ⚠️ **重要**：這是正常的安全流程，macOS 在保護你的開發者憑證！

##### 步驟 3：處理 Bundle Identifier
Xcode 可能會要求你修改 Bundle Identifier，因為 `com.ntpu.capacitor.helloworld` 可能與其他開發者衝突：

```
建議格式：com.[你的名字].capacitor.helloworld
例如：com.john.capacitor.helloworld
```

##### 步驟 4：建構並執行
1. 點擊 **播放按鈕（▶️）** 或按 `Cmd + R`
2. 首次安裝可能需要 3-8 分鐘
3. 應用程式會自動安裝到你的 iPhone 上

##### 步驟 5：在 iPhone/iPad 上信任開發者（重要！）
**應用程式安裝完成後，你需要在裝置上信任開發者，否則無法開啟 App**

1. **找到應用程式圖示**：
   - 在 iPhone/iPad 主畫面找到你的應用程式圖示
   - 圖示可能顯示為 "Capacitor Hello World" 或你設定的名稱

2. **嘗試開啟應用程式**：
   - 點擊應用程式圖示
   - 如果是第一次執行，會顯示：**「無法打開 [應用程式名稱]，因為開發者身分無法驗證」**

3. **前往裝置設定**：
   - 開啟 iPhone/iPad 的 **「設定」**
   - 滑動找到 **「一般」** → **「VPN 與裝置管理」**
   - 或搜尋 **「VPN 與裝置管理」**

4. **信任開發者**：
   - 在 **「開發者 App」** 區域找到你的 Apple ID
   - 例如：**「Apple Development: 江振宇 (XXXXXXXXXX)」**
   - 點擊你的開發者憑證

5. **確認信任**：
   - 點擊 **「信任 [你的 Apple ID]」**
   - 在彈出的確認對話框中再次點擊 **「信任」**

6. **重新開啟應用程式**：
   - 回到主畫面
   - 點擊應用程式圖示
   - 現在應該可以正常開啟了！

> ⚠️ **重要提醒**：這個步驟只需要執行一次。之後用同一個 Apple ID 開發的所有應用程式都會自動被信任。

#### ⚠️ 常見問題和解決方案

##### 問題 1：「開發者不受信任」錯誤
**症狀**：應用程式安裝後無法開啟，顯示「無法打開 [應用程式名稱]，因為開發者身分無法驗證」

**這是正常現象！** 所有使用免費 Apple ID 開發的應用程式都需要這個步驟。

**解決方案**：
1. 在 iPhone/iPad 上前往：**「設定」** → **「一般」** → **「VPN 與裝置管理」**
2. 在「開發者 App」區域找到你的 Apple ID（例如：Apple Development: 江振宇）
3. 點擊你的開發者憑證
4. 點擊 **「信任 [你的 Apple ID]」**
5. 在確認對話框中再次點擊 **「信任」**
6. 回到主畫面重新開啟應用程式

> 💡 **小技巧**：如果找不到「VPN 與裝置管理」，可以在設定中搜尋「VPN」或「裝置管理」

##### 問題 2：找不到裝置
**症狀**：Xcode 裝置列表中沒有顯示你的 iPhone

**解決方案**：
```bash
# 1. 檢查裝置連接
# 在終端機執行：
xcrun devicectl list devices

# 2. 重新連接裝置
# 拔掉重插 USB 線

# 3. 重啟 Xcode
# 完全關閉 Xcode 後重新開啟
```

##### 問題 2.5：裝置映像檔案錯誤
**症狀**：「The developer disk image could not be mounted on this device」或「Error mounting image」

**完整錯誤訊息可能包含**：
```
kAMDMobileImageMounterPersonalizedBundleMissingVariantError: 
The bundle image is missing the requested variant for this device.
```

**原因分析**：
- Xcode 版本太舊，不支援你的 iOS 版本
- 缺少對應的開發者磁碟映像檔案

**解決方案**：
```bash
# 1. 檢查版本相容性
xcodebuild -version
# 在 iPhone：設定 → 一般 → 關於本機 → 軟體版本

# 2. 更新 Xcode
# 到 Mac App Store 搜尋 "Xcode" 並更新

# 3. 重新連接裝置
# 拔掉 USB 線，重新插入，在 iPhone 上重新信任電腦
```

**版本對應參考**：
- **iOS 18.x** → 需要 **Xcode 16.x** 或更高
- **iOS 17.x** → 需要 **Xcode 15.x** 或更高  
- **iOS 16.x** → 需要 **Xcode 14.x** 或更高

**特別注意**：
- iPhone 16 系列（iOS 18.x）需要 Xcode 16.0 或更新版本
- 如果你有最新的 iPhone，建議立即更新 Xcode

**臨時解決方案**：如果無法立即更新 Xcode，可以：
1. 使用 iOS 模擬器進行開發和測試
2. 降級 iPhone iOS 版本（不建議）
3. 等待 Xcode 更新後再測試實體裝置

**更新 Xcode 的方法**：
1. **Mac App Store**（推薦）：
   - 開啟 Mac App Store
   - 搜尋 "Xcode"
   - 點擊 "更新"
   - 下載大小約 6-8GB，需時 30分鐘-2小時

2. **Apple Developer 網站**：
   - 訪問 https://developer.apple.com/xcode/
   - 免費 Apple ID 即可下載

##### 問題 3：程式碼簽名錯誤
**症狀**：「Signing for "App" requires a development team」

**解決方案**：
1. 確保已選擇正確的 Team（你的 Apple ID）
2. 嘗試修改 Bundle Identifier 為唯一值
3. 清理專案：在 Xcode 中選擇 `Product` → `Clean Build Folder`

##### 問題 3.5：程式碼簽名密碼請求
**症狀**：出現「codesign 想存取鑰匙圈中的密碼」對話框

**解決方案**：
1. **這是正常的安全流程！** macOS 在保護你的開發者憑證
2. 輸入你的 **Mac 登入密碼**（不是 Apple ID 密碼）
3. 建議選擇「**永遠允許**」：
   - ✅ 永遠允許：之後不會再詢問
   - ⚠️ 允許：每次建構都會詢問
   - ❌ 拒絕：無法進行程式碼簽名
4. 如果忘記密碼，使用 Mac 的「系統偏好設定」重設

##### 問題 4：安裝失敗或閃退
**症狀**：應用程式安裝失敗或立即閃退

**解決方案**：
```bash
# 1. 檢查 iOS 版本相容性
# 確保 iPhone 是 iOS 13.0 或更高版本

# 2. 重新建構和同步
npm run build
npx cap sync ios

# 3. 在 Xcode 中查看錯誤訊息
# 查看 Xcode 底部的輸出面板
```

#### 🔍 除錯和開發者工具

##### 使用 Safari 開發者工具
1. 在 iPhone 上開啟你的應用程式
2. 在 Mac 上開啟 Safari
3. 選單：`開發` → `[你的 iPhone 名稱]` → `[應用程式名稱]`
4. 現在可以使用完整的網頁開發者工具

##### 查看 Console 輸出
```bash
# 在終端機中查看裝置日誌
xcrun devicectl log stream --device [裝置ID]

# 或使用 Xcode 的 Console
# Window → Devices and Simulators → 選擇你的裝置 → View Device Logs
```

#### 🚀 效能優化建議

為了在實體裝置上獲得最佳效能：

1. **使用 Release 建構**：
   - 在 Xcode 中：`Product` → `Scheme` → `Edit Scheme`
   - 將 `Build Configuration` 改為 `Release`

2. **最佳化資源**：
   - 壓縮圖片
   - 最小化 CSS 和 JavaScript
   - 使用 WebP 格式圖片

3. **測試不同網路狀況**：
   - 測試 WiFi 和 4G/5G 環境
   - 模擬慢速網路條件

#### 💡 實用技巧

1. **快速重新載入**：
   ```bash
   # 修改程式碼後快速同步
   npm run build && npx cap sync ios
   ```

2. **保持裝置喚醒**：
   - 在開發期間，建議在 iPhone 設定中延長自動鎖定時間

3. **使用 Wireless 除錯**（iOS 16+）：
   - 在 Xcode 中啟用無線除錯，之後可以不用 USB 線

4. **多裝置測試**：
   - 如果有多台裝置，可以同時連接測試不同尺寸螢幕

### 🔄 開發工作流程

當你修改程式碼時：

```bash
# 1. 修改 index.html 或 js/app.js
# 2. 重新建構
npm run build

# 3. 同步到 iOS（重要！）
npx cap sync ios

# 4. 在 Xcode 中重新執行應用程式
```

> 💡 **小技巧**：可以使用 VS Code 的任務功能快速執行 `Build and Sync iOS`

## 應用程式功能

- ✅ 顯示歡迎訊息
- ✅ 美觀的使用者介面
- ✅ 互動按鈕
- ✅ 隨機問候訊息
- ✅ 支援原生對話框
- ✅ 動畫效果

## 自訂化

### 修改應用程式資訊
編輯 `capacitor.config.json`：
```json
{
  "appId": "你的.應用程式.識別碼",
  "appName": "你的應用程式名稱"
}
```

### 修改內容
- **HTML**: 編輯 `index.html`
- **樣式**: 修改 `index.html` 中的 CSS
- **互動**: 編輯 `js/app.js`

### 添加圖示和啟動畫面
1. 將圖示檔案放在 `ios/App/App/Assets.xcassets/`
2. 使用 Xcode 設定啟動畫面

## 🛠 故障排除指南

> 遇到問題不要慌張！以下是最常見問題的解決方案。

### 🔴 環境設定問題

#### 問題：Homebrew 未安裝或版本過舊

```bash
# 症狀
brew --version
# bash: brew: command not found
# 或顯示很舊的版本

# 解決方案：安裝或升級 Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 如果已安裝，更新到最新版本
brew update && brew upgrade
```

#### 問題：找不到 `pod` 指令

```bash
# 症狀
pod --version
# bash: pod: command not found

# 解決方案
which pod                    # 檢查是否安裝
gem install cocoapods       # 重新安裝
```

#### 問題：Ruby 權限錯誤

```bash
# 症狀
gem install cocoapods
# ERROR: You don't have write permissions...

# 解決方案 1：使用 rbenv（推薦）
rbenv install 3.2.2
rbenv global 3.2.2
gem install cocoapods

# 解決方案 2：user install
gem install cocoapods --user-install
export PATH="$HOME/.gem/bin:$PATH"
```

#### 問題：Xcode Command Line Tools 未安裝

```bash
# 症狀
xcode-select -p
# xcode-select: error: unable to get active developer directory

# 解決方案
xcode-select --install
```

### 🔴 專案建立問題

#### 問題：`npx cap add ios` 卡住或失敗

```bash
# 解決步驟
# 1. 刪除部分建立的檔案
rm -rf ios

# 2. 清除 npm 快取
npm cache clean --force

# 3. 重新嘗試
npx cap add ios
```

#### 問題：CocoaPods 安裝卡住

```bash
# 症狀：長時間顯示 "Updating iOS native dependencies with pod install"

# 解決方案：手動執行
cd ios/App
pod repo update
pod install
cd ../../
```

### 🔴 Xcode 編譯問題

#### 問題：找不到 .xcconfig 檔案

```bash
# 完整重置 CocoaPods
cd ios/App
rm -rf Pods
rm Podfile.lock
pod install
cd ../../
```

#### 問題：Xcode 無法開啟專案

**正確方式**：
- ✅ 開啟 `ios/App/App.xcworkspace`
- ❌ 不要開啟 `ios/App/App.xcodeproj`

#### 問題：編譯錯誤 "Signing for ... requires a development team"

1. 在 Xcode 中選擇專案根目錄
2. 選擇 `Signing & Capabilities`
3. 勾選 `Automatically manage signing`
4. 選擇你的 Apple ID 作為 `Team`

### 🔴 應用程式運行問題

#### 問題：應用程式顯示空白畫面

```bash
# 檢查網頁檔案是否正確建構
ls dist/
# 應該看到 index.html 和 js/

# 重新建構和同步
npm run build
npx cap sync ios
```

#### 問題：修改程式碼後沒有更新

```bash
# 完整同步流程
npm run build      # 1. 建構網頁
npx cap copy ios   # 2. 複製檔案
npx cap sync ios   # 3. 同步專案
# 4. 在 Xcode 中重新執行
```

#### 問題：在實體裝置上閃退

1. 在 Xcode 中檢查 Console 輸出
2. 在 Safari 中開啟開發者選單：`Develop` → `[你的裝置]` → `[應用程式]`
3. 檢查 JavaScript 錯誤

### 🆘 萬能重置方案

如果所有方法都失敗，試試完全重置：

```bash
# 1. 清理所有產生的檔案
rm -rf ios dist node_modules

# 2. 重新安裝
npm install
npm run build

# 3. 重新建立 iOS 專案
npx cap add ios

# 4. 開啟 Xcode
npx cap open ios
```

### 📞 尋求幫助

如果還是有問題，請：

1. 🔍 檢查錯誤訊息的關鍵字
2. 📋 記錄你執行的完整步驟
3. 💻 記下你的系統版本（macOS、Xcode、Node.js）
4. 🌐 在 [Capacitor 官方文件](https://capacitorjs.com/docs) 中搜尋
5. 💬 到 [Capacitor Community](https://github.com/ionic-team/capacitor/discussions) 詢問

## ⚡ 進階自訂化

### 🎨 修改應用程式外觀

#### 更改應用程式名稱和圖示

編輯 `capacitor.config.json`：
```json
{
  "appId": "com.yourname.helloworld",
  "appName": "我的第一個 App",
  "webDir": "dist"
}
```

#### 自訂 CSS 樣式

在 `index.html` 的 `<style>` 區塊中修改：
- 顏色：更改 `background` 漸層色彩
- 字體：修改 `font-family` 和 `font-size`
- 動畫：調整 `transition` 和 `transform` 效果

#### 添加更多 JavaScript 功能

在 `js/app.js` 中可以：
- 添加更多互動按鈕
- 整合網路 API
- 使用本地存儲
- 添加手勢控制

### 📱 添加原生功能

Capacitor 提供豐富的插件生態系：

```bash
# 相機功能
npm install @capacitor/camera
npx cap sync

# 地理位置
npm install @capacitor/geolocation
npx cap sync

# 推播通知
npm install @capacitor/push-notifications
npx cap sync
```

### 🔧 效能優化

#### 網頁效能
- 壓縮圖片和 CSS
- 使用 CDN 載入外部資源
- 實作 Service Worker

#### 原生效能
- 使用原生導航
- 優化圖片載入
- 減少 JavaScript 與原生的溝通

## 🚀 部署到 App Store

### 準備發佈

1. **完善應用程式資訊**
   - 應用程式圖示（1024x1024）
   - 啟動畫面
   - 應用程式描述

2. **測試**
   - 在多種 iOS 裝置上測試
   - 檢查各種網路狀況
   - 確保符合 App Store 審核指南

### 建立發佈版本

```bash
# 1. 建構最終版本
npm run build
npx cap sync ios

# 2. 在 Xcode 中
# - 選擇 "Any iOS Device" 或 "Generic iOS Device"
# - Product → Archive
# - 上傳到 App Store Connect
```

## 📚 學習資源

### 官方文件
- 📖 [Capacitor 官方文件](https://capacitorjs.com/docs) - 完整技術文件
- 🍎 [Apple 開發者指南](https://developer.apple.com/ios/) - iOS 開發官方資源
- 🔨 [Xcode 使用手冊](https://developer.apple.com/xcode/) - Apple 官方工具指南

### 社群資源
- 💬 [Ionic Forum](https://forum.ionicframework.com/) - 活躍的開發者社群
- 🐙 [GitHub Discussions](https://github.com/ionic-team/capacitor/discussions) - 問題討論
- 📺 [YouTube 教學](https://www.youtube.com/results?search_query=capacitor+ios+tutorial) - 影片教學

### 進階主題
- 🔌 [Capacitor Plugins](https://capacitorjs.com/docs/plugins) - 官方和社群插件
- 🛠 [建立自訂插件](https://capacitorjs.com/docs/plugins/creating) - 開發原生功能
- 🔄 [CI/CD 自動化](https://capacitorjs.com/docs/guides/ci-cd) - 自動建構和部署

### 相關技術
- ⚛️ **React + Capacitor** - 使用 React 框架
- 🅰️ **Angular + Ionic** - 完整的企業級解決方案
- 🟢 **Vue.js + Capacitor** - 漸進式框架整合

## ❓ 常見問題

### Q: 我需要付費的 Apple Developer 帳號嗎？
A: 開發和測試不需要，但發佈到 App Store 需要年費 $99 USD 的開發者帳號。

### Q: 可以在 Windows 或 Linux 上開發嗎？
A: 網頁部分可以，但 iOS 專案的建構和測試必須在 macOS 上使用 Xcode。

### Q: 這個應用程式效能如何？
A: 對於大多數應用程式場景，效能很好。複雜的遊戲或高效能應用可能需要原生開發。

### Q: 可以使用其他 JavaScript 框架嗎？
A: 可以！Capacitor 支援 React、Vue、Angular、Svelte 等任何前端框架。

## 🙏 致謝

感謝以下開源專案：
- [Capacitor](https://capacitorjs.com/) by Ionic Team
- [Node.js](https://nodejs.org/) JavaScript 執行環境  
- [CocoaPods](https://cocoapods.org/) iOS 依賴管理

## 📄 授權

MIT License - 自由使用、修改和分發