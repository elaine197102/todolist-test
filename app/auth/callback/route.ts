import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { headers } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  if (code) { const supabase = await createClient(); await supabase.auth.exchangeCodeForSession(code); }
  const host = (await headers()).get('x-forwarded-host');
  const base = host ? `https://${host}` : origin;
  return NextResponse.redirect(`${base}/today`);
}
