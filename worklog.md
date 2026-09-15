# 工作記錄

> 每次使用者說「收工」或「今天先這樣」時，新增一筆工作紀錄。內容以重點、決策、驗證結果與下一步為主。

## 對話工作流程

- 「開工」：先讀取 `handoff.md` 與本檔案，再依交接內容恢復工作。
- 「收工」或「今天先這樣」：更新 `handoff.md`，並在本檔案新增本次工作紀錄。

## 2026-09-14

### 本次工作重點

- 讀取並確認 SPEC-01 至 SPEC-04，確定產品方向為個人待辦與專案管理 Web 應用程式。
- 建立 Next.js、TypeScript、Supabase 與 Vercel 基礎專案設定。
- 建立 Supabase 初始 migration，包含使用者、專案、任務、標籤、RLS 與收件匣初始化。
- 建立登入頁、OAuth callback、中介層保護與今日首頁。
- 加入本機展示模式與範例資料，讓未設定 Supabase 時也可以在 localhost 使用。
- 將首頁視覺改為黑底白字，並加入依時段變化的個人問候語。

### 驗證

- 已安裝 Node.js v24.19.0 與 npm v11.17.0。
- 已完成 `npm install`。
- `npm run build` 成功。
- `http://localhost:3000/today` 回應 HTTP 200。

### 尚未完成

- 本機資料尚未持久化。
- Supabase、Google OAuth、專案管理與 Kanban 尚未完成整合。
- Next.js 顯示 middleware convention deprecated 警告。

### 下次開始建議

1. 先確認要採用 Supabase 持久化，或先建立本機資料儲存。
2. 接著完成任務的完整 CRUD 與今日首頁分區。
3. 再實作專案詳情與 Kanban。
