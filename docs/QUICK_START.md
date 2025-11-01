# 快速開始指南

> **目標**: 在 15 分鐘內運行 Welcome App  
> **平台**: Web + iOS  
> **難度**: 初級

## 快速運行（5 分鐘）

### 方法一：瀏覽器運行（推薦新手）

```bash
# 1. 克隆專案
git clone https://github.com/cychiang-ntpu/capacitor-hello-world-ios.git
cd capacitor-hello-world-ios

# 2. 安裝依賴
npm install

# 3. 建置和啟動
npm run build
npm run serve
```

**在瀏覽器中打開**: `http://localhost:8080`

### 方法二：iOS 模擬器運行

```bash
# 完成上述步驟後

# 選項 A: 一鍵完成 (推薦新手)
npm run first:ios

# 選項 B: 分步執行
# 1. 添加 iOS 平台 (首次運行必須)
npm run setup:ios

# 2. 建置 iOS 版本
npm run build:ios

# 3. 開啟 Xcode
npm run open:ios
```

**在 Xcode 中**: 選擇模擬器並點擊運行按鈕

## 可用的 npm 指令

### 基礎指令

- `npm run build` - 建置 Web 版本到 dist/ 資料夾
- `npm run serve` - 啟動本地開發服務器 (port 8080)
- `npm run dev` - 等同於 `npm run serve`
- `npm run clean` - 清除所有建置檔案和依賴

### iOS 相關指令

#### 新手推薦

- `npm run first:ios` - **一鍵設置** - 建置 + 添加 iOS 平台 + 開啟 Xcode

#### 分步執行

- `npm run setup:ios` - 添加 iOS 平台 (等同於 `npx cap add ios`)
- `npm run build:ios` - 建置並同步到 iOS
- `npm run open:ios` - 在 Xcode 中開啟 iOS 專案

#### 進階指令

- `npm run sync:ios` - 只同步代碼到 iOS (不重新建置)
- `npm run ensure:ios` - 檢查並確保 iOS 平台存在
- `npm run reset:ios` - 完全重置 iOS 專案
- `npm run copy` - 複製 Web 資源到原生平台

### 建議工作流程

#### 首次使用者

```bash
npm install          # 安裝依賴
npm run first:ios    # 一鍵完成 iOS 設置
```

#### 日常開發

```bash
npm run build:ios    # 建置並更新 iOS
npm run open:ios     # 在 Xcode 中測試
```

## 完整安裝指南

### 前置需求檢查

#### 必要工具

- **Node.js 16+**: [下載連結](https://nodejs.org/)
- **Git**: [安裝指南](https://git-scm.com/downloads)

#### iOS 開發（可選）

- **macOS** (iOS 開發必須)
- **Xcode 14+**: [Mac App Store](https://apps.apple.com/app/xcode/)
- **iOS 模擬器**: Xcode 內建

### 詳細安裝步驟

#### 1. 環境驗證

```bash
# 檢查 Node.js 版本
node --version  # 應該顯示 v16.0.0 或更高

# 檢查 npm 版本  
npm --version   # 應該顯示 8.0.0 或更高

# 檢查 Git 版本
git --version   # 應該顯示 2.0.0 或更高
```

#### 2. 專案設置

```bash
# 克隆專案
git clone https://github.com/cychiang-ntpu/capacitor-hello-world-ios.git

# 進入專案目錄
cd capacitor-hello-world-ios

# 安裝所有依賴
npm install

# 驗證安裝 (可選)
npm list --depth=0
```

##### 環境變數設定（可選）

專案預設設定已足夠使用，但如需自訂可以：

```bash
# 複製環境變數範例檔案
cp .env.example .env

# 編輯 .env 檔案（可選）
# 修改 APP_NAME、PORT 等設定
```

> **提示**: 首次使用建議跳過此步驟，使用預設設定即可

#### 3. 建置專案

```bash
# 建置 Web 版本
npm run build

# 驗證建置結果
ls -la dist/
```

#### 4. 啟動開發服務器

```bash
# 啟動服務器
npm run serve
```

服務器啟動後會顯示：

```bash
Available on:
  http://127.0.0.1:8080
  http://192.168.1.110:8080
```

#### 5. iOS 專案設置（可選）

```bash
# 首次安裝 Capacitor CLI (如果需要)
npm install -g @capacitor/cli

# 選項 A: 一鍵設置 (推薦)
npm run first:ios

# 選項 B: 分步執行
# 添加 iOS 平台 (首次必須執行)
npm run setup:ios

# 同步到 iOS
npm run build:ios

# 開啟 Xcode
npm run open:ios
```

**重要說明：**

- `npm run setup:ios` 等同於 `npx cap add ios`，是首次使用 iOS 功能的必要步驟
- `npm run first:ios` 是為新手設計的一鍵命令，會自動完成所有初始化步驟
- 此命令會創建 iOS 專案結構並安裝相關依賴
- 過程中會自動執行 CocoaPods 安裝，請耐心等待完成

## 常見問題解決

### 問題：npm install 失敗

**解決方案:**

```bash
# 清除快取
npm cache clean --force

# 刪除 node_modules
rm -rf node_modules package-lock.json

# 重新安裝
npm install
```

### 問題：端口 8080 被占用

**解決方案:**

```bash
# 方法 1: 使用不同端口
npx http-server dist -p 3000

# 方法 2: 找到並終止占用進程
lsof -i :8080
kill <PID>
```

### 問題：iOS 專案無法打開

**檢查清單:**

- [ ] 確認已安裝 Xcode
- [ ] 確認已運行 `npm run build:ios`
- [ ] 確認 Xcode 命令行工具已安裝

```bash
# 安裝 Xcode 命令行工具
xcode-select --install
```

### 問題：iOS 平台未添加錯誤

如果運行 `npm run build:ios` 時遇到以下錯誤：

```text
[error] ios platform has not been added yet.
See the docs for adding the ios platform:
https://capacitorjs.com/docs/ios#adding-the-ios-platform
```

**完整解決步驟:**

```bash
# 方法 1: 使用新的 npm script (推薦)
npm run setup:ios

# 方法 2: 直接使用 Capacitor 命令
npx cap add ios

# 如果 pod install 過程中斷，手動完成
cd ios/App && pod install
cd ../..

# 重新構建專案
npm run build:ios

# 打開 Xcode 專案
npm run open:ios
```

**重要提醒:**

- **首次使用者必讀**: 在第一次嘗試建置 iOS 版本前，務必執行 `npx cap add ios`
- **網路需求**: 此過程需要下載 iOS 原生依賴，請確保網路連線穩定
- **時間估算**: CocoaPods 安裝可能需要 2-10 分鐘，根據網路速度而定
- **錯誤重試**: 如果網路較慢導致 pod install 失敗，可以重複執行命令

### 問題：iOS 代碼簽名錯誤

如果在 Xcode 中看到簽名錯誤：

```text
Signing for "App" requires a development team. Select a development team in the Signing & Capabilities editor.
```

**詳細解決步驟：**

#### 步驟 1：打開簽名設定

1. 在 Xcode 左側專案導航器中，點擊最上方的 "App" 專案圖標
2. 在中間區域選擇 "TARGETS" 下的 "App"
3. 點擊右側的 "Signing & Capabilities" 標籤

#### 步驟 2：設定自動簽名

1. 確保勾選 "Automatically manage signing" 核取方塊
2. 在 "Team" 下拉選單中：
   - 如果已有 Apple ID，直接選擇
   - 如果沒有，點擊 "Add Account..." 按鈕

#### 步驟 3：添加 Apple ID（如果需要）

1. 點擊 "Add Account..." 
2. 選擇 "Apple ID"
3. 輸入您的 Apple ID 和密碼
4. 完成雙重認證（如果啟用）

#### 步驟 4：修改 Bundle Identifier

1. 將 Bundle Identifier 改為唯一名稱
2. 建議格式：`com.yourname.welcomeapp`
3. 例如：`com.john.welcomeapp` 或 `com.mary.myapp`

#### 步驟 5：驗證設定

確認以下設定正確：
- ✅ "Automatically manage signing" 已勾選
- ✅ Team 已選擇您的 Apple ID
- ✅ Bundle Identifier 是唯一的
- ✅ 沒有紅色錯誤訊息

**Apple ID 帳號類型：**

| 帳號類型 | 費用 | 功能 | 限制 |
|---------|------|------|------|
| **個人免費帳號** | 免費 | 模擬器測試<br>個人設備測試 | 應用程式 7 天後過期<br>無法上架 App Store |
| **付費開發者帳號** | $99/年 | 完整開發權限<br>App Store 發布 | 無限制 |

**新手建議：**
- 使用免費 Apple ID 即可開始學習
- 只有要發布應用程式時才需要付費帳號

### 問題：瀏覽器顯示空白頁面

**除錯步驟:**

1. 打開瀏覽器開發者工具 (F12)
2. 檢查 Console 是否有錯誤
3. 檢查 Network 標籤是否所有資源都載入成功

```bash
# 重新建置
rm -rf dist
npm run build
npm run serve
```

## 驗證成功清單

### Web 版本驗證

- [ ] 瀏覽器能正常打開 `http://localhost:8080`
- [ ] 看到 Welcome App 標題和圖示
- [ ] 可以看到註冊/登入表單
- [ ] 點擊按鈕有正常反應

### iOS 版本驗證（可選）

**前置條件：**

- [ ] 已執行 `npx cap add ios` 添加 iOS 平台
- [ ] CocoaPods 安裝完成（無錯誤訊息）
- [ ] 已在 Xcode 中完成代碼簽名設定

**運行測試：**

- [ ] Xcode 能正常打開專案
- [ ] 沒有紅色的簽名錯誤訊息
- [ ] 能選擇 iOS 模擬器
- [ ] 能成功運行應用程式
- [ ] 應用程式在模擬器中正常顯示

### iOS 設定檢查清單

#### Xcode 專案設定驗證

**簽名與功能 (Signing & Capabilities)：**

- [ ] "Automatically manage signing" 已勾選
- [ ] "Team" 已選擇正確的 Apple ID
- [ ] "Bundle Identifier" 設定為唯一名稱
- [ ] 沒有紅色警告或錯誤訊息

**建置設定：**

- [ ] 選擇了正確的模擬器 (例如：iPhone 15)
- [ ] 建置目標設定為 iOS 14.0 或更高版本

**專案結構：**

- [ ] 可以在專案導航器中看到 App 資料夾
- [ ] public 資料夾包含 Web 檔案
- [ ] Info.plist 檔案存在且可編輯

## 下一步

### 新手推薦路徑

1. 完成快速開始
2. 閱讀 [本地開發指南](LOCAL_DEVELOPMENT.md)
3. 了解 [專案架構](PROJECT_OVERVIEW.md)
4. 🤝 查看 [貢獻指南](CONTRIBUTING.md)

### 進階學習

- 修改 `css/style.css` 中的顏色
- 更改 `index.html` 中的文字內容
- 添加新的 JavaScript 功能

## 小技巧

### 開發工作流程

```bash
# 快速重啟開發環境
npm run build && npm run serve

# 快速測試 iOS 變更
npm run build:ios && npm run open:ios
```

### 行動設備測試

1. 確保手機和電腦在同一網路
2. 使用區域網路 IP: `http://192.168.1.110:8080`
3. 在手機瀏覽器中打開該網址

### 自訂修改建議

- 修改 `css/style.css` 中的顏色
- 更改 `index.html` 中的文字內容
- 添加新的 JavaScript 功能

---

**恭喜！你已經成功運行 Welcome App！**

如果遇到任何問題，請查看 [本地開發指南](LOCAL_DEVELOPMENT.md) 或提交 [Issue](https://github.com/cychiang-ntpu/capacitor-hello-world-ios/issues)。
