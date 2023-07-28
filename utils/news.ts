import { Database } from "@/types/supabase"

type News = Database["public"]["Tables"]["news_previews"]["Row"]

export async function getData(): Promise<News[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/news`)
  
    if (!res.ok) {
      throw new Error('Failed to load news')
    }
  
    return res.json()
  }