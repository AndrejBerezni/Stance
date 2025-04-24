import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

const intlMiddleware = createMiddleware(routing);

export default intlMiddleware;

/* Create additional middleware if needed.
  Example:
  const authMiddleware = async (req: NextRequest) => {
  const isPublicRoute = req.nextUrl.pathname.startsWith('/login');

  const cookie = await cookies();
  const sessionCookie = cookie.get('session')?.value;
  // const session = await decrypt(cookie);
  if (!isPublicRoute && !sessionCookie) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
  if (isPublicRoute && sessionCookie) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return intlMiddleware(req);
  };

  export default authMiddlware
  */
