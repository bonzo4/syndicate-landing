import { Database } from '@/types/supabase';

type News = Database['public']['Tables']['news_previews']['Row'];

export async function getNews(): Promise<News[]> {
  const res = await fetch(`/api/news`);

  if (res.status !== 200) {
    throw new Error(`Failed to load news`);
  }

  return res.json();
}
