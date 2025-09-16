import { draftMode, cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const PREVIEW_COOKIE = 'kontent_preview_enabled';
const HOURS = 8;

export async function GET(req: Request) {
  const url = new URL(req.url);
  if (url.searchParams.get('disable')) {
    draftMode().disable();
    (await cookies()).set(PREVIEW_COOKIE, '', { maxAge: 0, path: '/' });
    return NextResponse.redirect(new URL('/', req.url));
  }

  draftMode().enable();
  (await cookies()).set(PREVIEW_COOKIE, '1', { maxAge: HOURS*60*60, path: '/' });
  return NextResponse.redirect(new URL('/', req.url));
}
