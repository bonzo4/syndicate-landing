import { Database } from '@/types/supabase';

type News = Database['public']['Tables']['news_previews']['Row'];

export async function getNews(): Promise<News[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/news`);

  const data = await res.json();
  //   if (res.status !== 200) {
  //     throw new Error(`Failed to load news`);
  //   }

  return data;
}
