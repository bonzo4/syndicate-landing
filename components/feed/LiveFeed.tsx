import { getNews } from "@/utils/news";
import { NewsCard } from "./NewsCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";

export const revalidate = 60;

export async function LiveFeed() {

  const supabase = createServerComponentClient<Database>({ cookies })
  const {data, error} = await supabase.from("news_previews")
        .select("*")
        .neq("title", null)
        .neq("slug", null)
        .neq("thumbnail", null)
        .order("news_id", { ascending: false })
        .limit(4);

  return (
    <div className='flex flex-col'>
      <h1 className="font-bold text-[36px] leading-[66px]">Live News Feed</h1>
      <div className="flex flex-col space-y-5">
        {data?.map((news) => (

          <NewsCard news={news} key={news.news_id} />
        ))}
      </div>
    </div>
  );
}