import { getData } from "@/utils/news";
import { NewsCard } from "./NewsCard";


export async function LiveFeed() {

  const data = await getData()

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