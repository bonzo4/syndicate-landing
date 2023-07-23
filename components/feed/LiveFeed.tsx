import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NewsCard } from "./NewsCard";

export async function LiveFeed() {

  const supabase = createServerComponentClient<Database>({ cookies })
  
  const {data, error} = await supabase.from("news_previews")
    .select("*")
    .neq("title", null)
    .neq("slug", null)
    .neq("thumbnail", null)
    .order("created_at", { ascending: false })
    .order("news_id", { ascending: false })
    .limit(4)
  
  if (error || !data) {
    console.log(error)
    return <div>error</div>
  }

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