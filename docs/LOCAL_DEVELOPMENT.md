# Welcome App 本地開發指南

> 在瀏覽器中運行 Welcome App 的完整教學

## 為什麼要在瀏覽器開發？

### 瀏覽器開發的優勢
- ⚡ **超快速** - 修改程式碼後立即看到結果
- 🔧 **強大的除錯工具** - Chrome DevTools 等專業工具
- 💻 **跨平台** - Windows、macOS、Linux 都能用
- 🔄 **即時更新** - 不需要編譯和重新安裝
- 🆓 **免費** - 不需要 Apple Developer 帳號

### 與手機應用的關係

- **相同程式碼** - 瀏覽器和手機運行完全相同的程式碼
- **Capacitor 魔法** - 同一套程式碼打包成原生 App
- **開發流程** - 瀏覽器開發 → 測試完成 → 打包成手機 App

---

## 四種本地運行方法

### 方法一：npm 腳本 (推薦新手)

#### 適用對象
- 剛接觸 Web 開發的新手
- 想要最簡單可靠的方式
- 已經安裝了 Node.js 和 npm

#### 使用步驟

```bash
# 1. 確保在專案資料夾中
cd capacitor-hello-world-ios

# 2. 安裝依賴 (首次執行)
npm install

# 3. 建置專案
npm run build

# 4. 啟動開發伺服器
npm run serve
```

#### 成功畫面

```
Starting up http-server, serving dist
Available on:
  http://127.0.0.1:8080
  http://192.168.1.100:8080
Hit CTRL-C to stop the server
```

#### 使用方式
1. 打開瀏覽器
2. 前往 `http://localhost:8080`
3. 開始使用 Welcome App！

#### 優缺點
✅ **優點**
- 最穩定可靠
- 使用專案配置的伺服器
- 自動處理建置流程

❌ **缺點**
- 需要先安裝 Node.js
- 每次修改程式碼需要重新建置

---

### 方法二：直接開啟 HTML 檔案 (最快速)

#### 適用對象
- 想要立即看到結果
- 不想安裝任何額外工具
- 只是快速預覽功能

#### 使用步驟

**macOS:**
```bash
open index.html
```

**Windows:**
```cmd
start index.html
```

**Linux:**
```bash
xdg-open index.html
```

**或者直接雙擊 `index.html` 檔案**

#### 使用方式
1. 執行上述指令或雙擊檔案
2. 瀏覽器會自動開啟
3. 立即看到 Welcome App！

#### 優缺點
✅ **優點**
- 瞬間開啟，零等待
- 不需要安裝任何工具
- 適合快速檢查

❌ **缺點**
- 某些瀏覽器限制 `file://` 協議功能
- localStorage 可能無法正常工作
- 無法測試網路相關功能

#### 故障排除
如果遇到問題：
1. **嘗試不同瀏覽器** - Chrome、Firefox、Safari
2. **檢查控制台** - 按 F12 查看錯誤訊息
3. **改用其他方法** - 推薦方法一或三

---

### 方法三：Python 內建伺服器 (跨平台首選)

#### 適用對象
- 沒有 Node.js 環境
- 使用 Windows 或 Linux
- 喜歡使用 Python

#### 使用步驟

**Python 3 (推薦):**
```bash
# 基本用法
python3 -m http.server 8080

# 指定資料夾
python3 -m http.server 8080 --directory .

# 自訂 IP 和埠口
python3 -m http.server 8080 --bind 127.0.0.1
```

**Python 2 (舊系統):**
```bash
python -m SimpleHTTPServer 8080
```

#### 檢查 Python 版本
```bash
python3 --version
# 或
python --version
```

#### 使用方式
1. 在終端機執行指令
2. 看到成功訊息：`Serving HTTP on 0.0.0.0 port 8080`
3. 打開瀏覽器前往 `http://localhost:8080`
4. 按 `Ctrl+C` 停止伺服器

#### 優缺點
✅ **優點**
- 大部分系統都預安裝 Python
- 跨平台支援
- 標準的 HTTP 伺服器

❌ **缺點**
- 需要手動停止伺服器
- 功能相對簡單
- 沒有自動重新載入

---

### 方法四：專業開發工具 (進階用戶)

#### 適用對象
- 有經驗的開發者
- 使用 VS Code 編輯器
- 需要進階功能

#### 選項 A：npx http-server

```bash
# 無需全域安裝
npx http-server . -p 8080

# 啟用 CORS (跨域支援)
npx http-server . -p 8080 --cors

# 啟用快取
npx http-server . -p 8080 -c-1
```

#### 選項 B：npx serve

```bash
# 現代化的靜態檔案伺服器
npx serve . -l 8080

# 自動開啟瀏覽器
npx serve . -l 8080 -o
```

#### 選項 C：VS Code Live Server

**安裝步驟：**
1. 開啟 VS Code
2. 前往擴充功能 (Ctrl+Shift+X)
3. 搜尋 "Live Server"
4. 安裝 "Live Server" by Ritwick Dey

**使用步驟：**
1. 在 VS Code 中開啟專案資料夾
2. 右鍵點擊 `index.html`
3. 選擇 "Open with Live Server"
4. 瀏覽器會自動開啟並顯示應用程式

#### Live Server 特色功能
- 🔄 **自動重新載入** - 修改檔案後瀏覽器自動刷新
- 📱 **行動裝置同步** - 同網路的手機也能同步查看
- ⚙️ **豐富設定** - 可自訂埠口、路徑等
- 🎯 **零配置** - 安裝後立即可用

#### 優缺點
✅ **優點**
- 專業級開發伺服器
- 豐富的配置選項
- 自動重新載入功能
- 行動裝置同步測試

❌ **缺點**
- 需要安裝額外工具
- 學習成本較高
- 功能可能過於複雜

---

## 🆚 方法比較與選擇指南

### 完整比較表

| 特性 | npm 腳本 | 直接開啟 | Python 伺服器 | 專業工具 |
|------|----------|----------|---------------|----------|
| **安裝難度** | 簡單 | 無需安裝 | 簡單 | 中等 |
| **啟動速度** | 快 | 最快 | 快 | 快 |
| **功能完整度** | 高 | 低 | 中 | 最高 |
| **學習成本** | 低 | 最低 | 低 | 中 |
| **跨平台支援** | 高 | 最高 | 高 | 高 |
| **除錯友善度** | 高 | 中 | 中 | 最高 |
| **適合新手** | ✅ | ✅ | ✅ | ❌ |

### 情境選擇建議

#### 🆕 **完全新手**
```
推薦順序：
1. 方法二 (直接開啟) - 先快速看到成果
2. 方法一 (npm 腳本) - 正式開始開發
```

#### 🚀 **有程式經驗**
```
推薦順序：
1. 方法一 (npm 腳本) - 標準開發流程
2. 方法四 (專業工具) - 需要進階功能時
```

#### 🐍 **Python 愛好者**
```
推薦：方法三 (Python 伺服器)
```

#### 💻 **VS Code 用戶**
```
推薦：方法四 (Live Server)
```

#### ⚡ **只想快速預覽**
```
推薦：方法二 (直接開啟)
```

---

## 故障排解指南

### 常見問題 1：瀏覽器顯示空白頁面

**可能原因：**
- JavaScript 檔案路徑錯誤
- 瀏覽器快取問題
- 檔案權限問題

**解決方法：**
```bash
# 1. 檢查檔案是否存在
ls js/
# 應該看到：app.js, app-state.js, page-renderer.js, form-validators.js

# 2. 清除瀏覽器快取
# 按 Ctrl+Shift+R (Windows/Linux) 或 Cmd+Shift+R (macOS)

# 3. 檢查瀏覽器控制台
# 按 F12 → Console 標籤查看錯誤訊息
```

### 常見問題 2：localStorage 不工作

**症狀：** 註冊後重新整理頁面，用戶資料消失

**解決方法：**
```bash
# 改用 HTTP 伺服器而非直接開啟檔案
npm run serve
# 或
python3 -m http.server 8080
```

### 常見問題 3：埠口被占用

**錯誤訊息：** `Address already in use` 或 `EADDRINUSE`

**解決方法：**

```bash
# 檢查哪個程式占用埠口
lsof -i :8080

# 使用不同埠口
npx http-server dist -p 3000
```

### 常見問題 4：跨域 (CORS) 錯誤

**錯誤訊息：** `Access to ... has been blocked by CORS policy`

**解決方法：**
```bash
# 使用支援 CORS 的伺服器
npx http-server . -p 8080 --cors

# 或在 Chrome 中停用安全檢查 (僅開發用)
# 關閉所有 Chrome 視窗，然後執行：
# macOS:
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev" --disable-web-security

# Windows:
chrome.exe --user-data-dir="c:/tmp/chrome_dev" --disable-web-security
```

### 常見問題 5：iOS 平台構建失敗

**錯誤訊息：** `[error] ios platform has not been added yet.`

**症狀：** 運行 `npm run build:ios` 時出現平台未添加的錯誤

**完整解決步驟：**

```bash
# 1. 添加 iOS 平台
npx cap add ios

# 2. 如果 CocoaPods 安裝過程中斷，手動完成
cd ios/App
pod install
cd ../..

# 3. 重新構建專案
npm run build:ios

# 4. 打開 Xcode 專案
npm run open:ios
```

**注意事項：**

- 需要 macOS 系統和已安裝的 Xcode
- CocoaPods 安裝可能需要數分鐘，請耐心等待
- 如果網路較慢，可能需要重複執行 `pod install`
- 確保 Xcode Command Line Tools 已安裝：`xcode-select --install`

**進階診斷：**

```bash
# 檢查 Capacitor 狀態
npx cap doctor

# 檢查 iOS 專案結構
ls -la ios/

# 檢查 Podfile 是否存在
cat ios/App/Podfile
```

### 常見問題 6：iOS 代碼簽名錯誤

**錯誤訊息：** `Signing for "App" requires a development team. Select a development team in the Signing & Capabilities editor.`

**症狀：** 在 Xcode 中嘗試構建或運行應用程式時出現簽名錯誤

**解決步驟：**

#### 方法一：在 Xcode 中設置（推薦）

1. **打開 Xcode 專案**

   ```bash
   npm run open:ios
   ```

2. **選擇專案設定**
   - 在左側專案導航器中點擊最上方的專案名稱 "App"
   - 確保選中 "App" target

3. **設置開發團隊**
   - 點擊 "Signing & Capabilities" 標籤
   - 在 "Team" 下拉選單中選擇您的 Apple ID 或開發團隊
   - 如果沒有看到團隊，點擊 "Add Account..." 登入您的 Apple ID

4. **自動管理簽名**
   - 確保勾選 "Automatically manage signing"
   - Xcode 會自動生成必要的證書和配置文件

#### 方法二：使用個人免費帳號

如果您沒有付費的 Apple Developer 帳號：

1. **使用 Apple ID 登入**
   - 在 Xcode 中前往 `Preferences` > `Accounts`
   - 點擊 "+" 號添加 Apple ID
   - 選擇 "Apple ID" 並登入

2. **設置個人團隊**
   - 回到專案設定的 "Signing & Capabilities"
   - 選擇您的個人團隊（通常顯示為 "Personal Team"）

3. **修改 Bundle Identifier**
   - 將 Bundle Identifier 改為唯一的名稱
   - 例如：`com.yourname.welcomeapp`

#### 方法三：修改環境變數（進階）

```bash
# 編輯 .env 檔案
cp .env.example .env
```

然後在 `.env` 檔案中設置：

```bash
# iOS 開發團隊 ID（可在 Apple Developer Portal 找到）
IOS_TEAM_ID=YOUR_TEAM_ID_HERE

# 唯一的 Bundle ID
IOS_BUNDLE_ID=com.yourname.welcomeapp
```

重新同步專案：

```bash
npm run build:ios
```

**注意事項：**

- **個人免費帳號限制**：應用程式只能在註冊的設備上運行 7 天
- **付費開發者帳號**：$99/年，可發布到 App Store
- **Bundle ID 必須唯一**：不能與已存在的應用程式重複
- **真機測試需要**：設備必須在開發者帳號中註冊

**除錯提示：**

```bash
# 檢查當前的簽名設定
security find-identity -v -p codesigning

# 清除 Xcode 快取
rm -rf ~/Library/Developer/Xcode/DerivedData

# 重新生成專案
npm run clean
npm run build:ios
```

---

## 開發最佳實踐

### 1. 選擇合適的瀏覽器

**推薦開發瀏覽器：**
- **Chrome** - 最強大的開發者工具
- **Firefox** - 優秀的網路和性能分析
- **Safari** - iOS 相容性測試 (macOS)

### 2. 使用瀏覽器開發者工具

```javascript
// 在程式碼中加入除錯資訊
console.log('用戶資料:', userData);
console.error('發生錯誤:', error);
console.warn('注意事項:', warning);

// 檢查應用程式狀態
console.log('目前用戶:', AppState.currentUser);
console.log('所有用戶:', AppState.users);
```

**快捷鍵：**
- `F12` - 開啟開發者工具
- `Ctrl+Shift+I` - 開啟開發者工具
- `Ctrl+Shift+J` - 直接開啟 Console
- `Ctrl+Shift+C` - 元素選擇模式

### 3. 測試響應式設計

1. 按 `F12` 開啟開發者工具
2. 點擊裝置圖示 📱 (Toggle device toolbar)
3. 選擇不同裝置尺寸：
   - iPhone SE (375x667)
   - iPhone 12 Pro (390x844)
   - iPad (768x1024)

### 4. 性能監控

```javascript
// 測量程式執行時間
console.time('用戶註冊');
// ... 註冊邏輯
console.timeEnd('用戶註冊');

// 檢查記憶體使用
console.log('記憶體使用:', performance.memory);
```

---

## 從瀏覽器到手機應用

### 開發完成後的部署流程

```bash
# 1. 在瀏覽器中完成開發和測試
npm run serve

# 2. 建置最終版本
npm run build

# 3. 同步到 iOS 平台
npm run sync:ios

# 4. 在 Xcode 中開啟專案
open ios/App/App.xcworkspace

# 5. 在 iOS 模擬器或實體裝置測試
# 6. 提交到 App Store (需要 Apple Developer 帳號)
```

### 瀏覽器與手機的差異

| 特性 | 瀏覽器 | 手機應用 |
|------|--------|----------|
| **觸控體驗** | 滑鼠點擊 | 手指觸控 |
| **性能** | 通常較快 | 取決於裝置 |
| **網路** | 通常穩定 | 可能不穩定 |
| **原生功能** | 受限 | 完全支援 |
| **使用者介面** | 桌面風格 | 行動風格 |

### 最終測試檢查清單

- [ ] 在多個瀏覽器測試 (Chrome, Firefox, Safari)
- [ ] 測試不同螢幕尺寸
- [ ] 測試觸控操作 (使用瀏覽器的觸控模擬)
- [ ] 測試網路中斷情況
- [ ] 檢查載入速度
- [ ] 驗證所有功能正常運作

---

## 小提示和技巧

### VS Code 使用者
- 安裝 "Live Server" 擴充功能
- 安裝 "Prettier" 自動格式化程式碼
- 安裝 "ESLint" 檢查程式碼品質

### Chrome 使用者
- 使用 "Lighthouse" 檢查應用程式品質
- 使用 "Application" 標籤檢查 localStorage
- 使用 "Network" 標籤監控載入時間

### 快速除錯技巧
```javascript
// 快速檢查變數
debugger;  // 在這行暫停執行

// 條件式除錯
if (user.email === 'test@example.com') {
    debugger;
}
```

### 自動重新載入設定
```html
<!-- 在開發時加入這段 JavaScript -->
<script>
if (location.hostname === 'localhost') {
    setInterval(() => {
        fetch(location.href)
            .then(() => location.reload())
            .catch(() => {});
    }, 1000);
}
</script>
```

---

希望這個完整的本地開發指南能幫助你快速上手 Welcome App 的開發！記住，瀏覽器開發是學習和測試的最佳方式，當你熟悉後再進階到手機應用開發。

**開始你的開發旅程吧！**