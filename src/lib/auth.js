import crypto from 'crypto';

export function verifyPassword(input) {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret || !input || typeof input !== 'string') return false;
  try {
    const hashA = crypto.createHash('sha256').update(input).digest();
    const hashB = crypto.createHash('sha256').update(secret).digest();
    return crypto.timingSafeEqual(hashA, hashB);
  } catch {
    return false;
  }
}

export function getExpectedSessionToken() {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) return null;
  return crypto.createHmac('sha256', secret).update('bhargavi_carnatic_admin_session_v1').digest('hex');
}

export function verifySessionToken(token) {
  const expected = getExpectedSessionToken();
  if (!expected || !token || typeof token !== 'string') return false;
  try {
    const bufA = Buffer.from(token);
    const bufB = Buffer.from(expected);
    if (bufA.length !== bufB.length) return false;
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

export function isAuthorized(request) {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) return false;

  // 1. Check x-admin-password header
  const authHeader = request.headers.get('x-admin-password');
  if (authHeader && verifyPassword(authHeader)) {
    return true;
  }

  // 2. Check admin_session cookie
  const cookieHeader = request.headers.get('cookie') || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map((c) => {
      const [k, ...v] = c.trim().split('=');
      return [k, v.join('=')];
    })
  );
  const sessionToken = cookies['admin_session'];
  if (sessionToken && verifySessionToken(sessionToken)) {
    return true;
  }

  return false;
}

export function getSessionCookieHeader(token) {
  const isProd = process.env.NODE_ENV === 'production';
  return `admin_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400${isProd ? '; Secure' : ''}`;
}

export function getClearSessionCookieHeader() {
  const isProd = process.env.NODE_ENV === 'production';
  return `admin_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${isProd ? '; Secure' : ''}`;
}
