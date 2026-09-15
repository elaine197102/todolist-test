import { createClient } from '@/lib/supabase/server';
import TodayClient from '@/components/today-client';

export default async function TodayPage() {
  if (process.env.NEXT_PUBLIC_LOCAL_MODE === 'true' || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return <TodayClient user={{ email: 'local@localhost', name: '本機使用者' }} projects={[{ id: 'inbox', name: '收件匣', color: '#8b7cf6', is_inbox: true }, { id: 'demo', name: '產品開發', color: '#ee9b63', is_inbox: false }]} tasks={[{ id: '1', title: '整理今天的工作重點', status: 'todo', priority: 'high', due_at: new Date().toISOString(), is_today_focus: true, projects: { name: '收件匣', color: '#8b7cf6' } }, { id: '2', title: '完成待辦事項系統首頁', status: 'in_progress', priority: 'normal', due_at: null, is_today_focus: true, projects: { name: '產品開發', color: '#ee9b63' } }, { id: '3', title: '回覆重要信件', status: 'todo', priority: 'normal', due_at: null, is_today_focus: false, projects: { name: '收件匣', color: '#8b7cf6' } }]} />;
  }
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: projects } = user ? await supabase.from('projects').select('id,name,color,is_inbox').order('created_at') : { data: [] };
  const { data: tasks } = user ? await supabase.from('tasks').select('*, projects(name,color), task_tags(tags(name,color))').neq('status', 'cancelled').order('due_at', { ascending: true, nullsFirst: false }) : { data: [] };
  return <TodayClient user={user ? { email: user.email ?? '', name: user.user_metadata?.full_name ?? '我的工作區' } : null} projects={projects ?? []} tasks={tasks ?? []} />;
}
