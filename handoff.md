# 交接紀錄

> 這份文件提供下一次開啟對話時快速恢復工作脈絡。當使用者說「收工」或「今天先這樣」時，請更新本檔案。

## 開工流程

當使用者輸入「開工」時，先讀取本檔案與 `worklog.md`，確認上次工作狀況、已完成內容、未完成事項與接下來的待辦，再向使用者回報目前進度並銜接工作。

## 目前專案

- 專案：Flowday 個人待辦與專案管理系統
- 工作目錄：`C:\Users\chen\Desktop\0914VB`
- 技術：Next.js、TypeScript、Supabase、Vercel
- 目前模式：本機展示模式
- 本機網址：`http://localhost:3000/today`

## 已完成

- 建立 Next.js + TypeScript 專案骨架。
- 建立 Supabase client、server client 與登入 callback。
- 建立 SPEC-01 至 SPEC-04 對應的資料庫 migration，包含 profiles、projects、tasks、tags、task_tags、RLS 與首次登入收件匣初始化。
- 建立今日首頁基本介面：今日焦點、收件匣、所有任務、搜尋、快速新增、完成任務。
- 加入本機展示模式，沒有 Supabase 環境變數也能開啟首頁。
- 首頁改為黑底白字，加入依時段顯示的「早安／午安／晚安」問候語與使用者名稱。
- `npm install` 已完成，`npm run build` 已成功。

## 目前狀態

- Next.js 開發伺服器已啟動於 `http://localhost:3000`。
- 本機展示資料為前端狀態，重新整理後會恢復範例資料。
- `.env.local` 目前只有 `NEXT_PUBLIC_LOCAL_MODE=true`。
- Supabase 與 Google OAuth 尚未接上實際環境。

## 下一步待辦

- 完成本機資料持久化，或設定 Supabase 專案並執行 migration。
- 完成專案 CRUD、任務詳情、子任務與標籤操作。
- 完成今日首頁的逾期、今日到期、即將到期、進行中區塊。
- 完成專案詳情、Kanban 拖曳與進度統計。
- 接上 Google OAuth 並測試 RLS 跨帳號資料隔離。
- 處理 Next.js 將 middleware 遷移為 proxy 的提示。

## 交接注意事項

- 不要覆蓋使用者已有的 SPEC 文件。
- 本機模式的新增與完成操作目前只存在瀏覽器記憶體中。
- 若要接 Supabase，請先填寫 `.env.local`，再移除或改掉 `NEXT_PUBLIC_LOCAL_MODE=true`。
