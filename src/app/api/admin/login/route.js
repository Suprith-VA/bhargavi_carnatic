import { verifyPassword, getExpectedSessionToken, getSessionCookieHeader } from '@/lib/auth';

export async function POST(request) {
  try {
    const body = await request.json();
    const { password } = body || {};

    if (!process.env.ADMIN_PASSWORD) {
      console.error('ADMIN_PASSWORD environment variable is not configured');
      return Response.json(
        { error: 'Server authentication is not configured. Please set ADMIN_PASSWORD in environment variables.' },
        { status: 500 }
      );
    }

    if (!password || typeof password !== 'string' || !verifyPassword(password)) {
      return Response.json(
        { error: 'Incorrect password. Access denied.' },
        { status: 401 }
      );
    }

    const token = getExpectedSessionToken();
    const cookieHeader = getSessionCookieHeader(token);

    return new Response(JSON.stringify({ success: true, message: 'Authentication successful' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': cookieHeader,
      },
    });
  } catch (err) {
    console.error('Admin login error:', err);
    return Response.json(
      { error: 'Authentication failed. Please try again.' },
      { status: 500 }
    );
  }
}
