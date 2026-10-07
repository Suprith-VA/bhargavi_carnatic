import { isAuthorized } from '@/lib/auth';

export async function GET(request) {
  const authorized = isAuthorized(request);
  return Response.json({ authenticated: authorized });
}
