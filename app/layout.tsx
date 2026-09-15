import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Flowday｜個人專案管理', description: '清楚管理每天要完成的事' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
