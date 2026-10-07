import { getClearSessionCookieHeader } from '@/lib/auth';

export async function POST() {
  const clearHeader = getClearSessionCookieHeader();
  return new Response(JSON.stringify({ success: true, message: 'Logged out successfully' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': clearHeader,
    },
  });
}
