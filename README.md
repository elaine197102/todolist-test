# todolist-test

# Flowday
# Flowday

個人待辦與專案管理 Web 應用程式，依照 SPEC-01 至 SPEC-04 建置。

## 本機啟動

1. 安裝 Node.js 20 LTS。
2. 在此資料夾執行 `npm install`。
3. 複製 `.env.example` 為 `.env.local`，先填入：

```env
NEXT_PUBLIC_LOCAL_MODE=true
```

4. 執行 `npm run dev`，開啟 http://localhost:3000。

本機模式會使用展示資料，不需要登入即可查看介面。接上 Supabase 時，移除 `NEXT_PUBLIC_LOCAL_MODE`，填入 Supabase URL 與 anon key，再執行 `supabase/migrations/20260914000000_initial.sql`。Google OAuth callback URL 設為 `http://localhost:3000/auth/callback`。
