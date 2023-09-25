import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase
    .from('news_previews')
    .select('*')
    .neq('title', null)
    .neq('slug', null)
    .neq('thumbnail', null)
    .order('news_id', { ascending: false })
    .limit(4);

  if (error) {
    console.error(error);
    NextResponse.json(
      { error: `Failed to load news ${error.message}` },
      { status: 500 }
    );
    return NextResponse.json(data, { status: 200 });
  }
}
