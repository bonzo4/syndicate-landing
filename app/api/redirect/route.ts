import { Database } from '@/types';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get('name');

  if (!name) {
    return NextResponse.redirect('/');
  }

  const supabase = createRouteHandlerClient<Database>({ cookies });

  const { data, error } = await supabase.rpc('increment_website_redirects', {
    redirect_name: name,
  });
  if (error && !data) {
    console.error(error);
  }
  return NextResponse.redirect(process.env.NEXT_PUBLIC_URL!);
}
