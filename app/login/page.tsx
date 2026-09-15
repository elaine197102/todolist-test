'use client';

import { createClient } from '@/lib/supabase/client';
import { CheckSquare } from 'lucide-react';

export default function LoginPage() {
  async function login() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/auth/callback` } });
  }
  return <main className="login-page"><section className="login-card"><div className="brand-mark"><CheckSquare size={23} /></div><p className="eyebrow">FLOWDAY</p><h1>把注意力放回<br /><em>重要的事。</em></h1><p className="muted">一個安靜、清楚的地方，整理你的待辦與專案。</p><button className="google-button" onClick={login}>使用 Google 登入</button></section></main>;
}
