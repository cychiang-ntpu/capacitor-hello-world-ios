# 快速開始指南

> 🎯 **目標**: 在 15 分鐘內運行 Welcome App  
> 📱 **平台**: Web + iOS  
> 🔧 **難度**: 初級

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

🌐 **在瀏覽器中打開**: `http://localhost:8080`

### 方法二：iOS 模擬器運行

```bash
# 完成上述步驟後
npm run build:ios
npm run open:ios
```

📱 **在 Xcode 中**: 選擇模擬器並點擊運行按鈕

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

# 同步到 iOS
npm run build:ios

# 開啟 Xcode
npm run open:ios
```

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

- [ ] Xcode 能正常打開專案
- [ ] 能選擇 iOS 模擬器
- [ ] 能成功運行應用程式
- [ ] 應用程式在模擬器中正常顯示

## 下一步

### 新手推薦路徑

1. ✅ 完成快速開始
2. 📖 閱讀 [本地開發指南](LOCAL_DEVELOPMENT.md)
3. 🏗️ 了解 [專案架構](PROJECT_OVERVIEW.md)
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

🎉 **恭喜！你已經成功運行 Welcome App！**

如果遇到任何問題，請查看 [本地開發指南](LOCAL_DEVELOPMENT.md) 或提交 [Issue](https://github.com/cychiang-ntpu/capacitor-hello-world-ios/issues)。
