import { getNews } from "@/utils/news";
import { NewsCard } from "./NewsCard";

export const revalidate = 60;

export async function LiveFeed() {

  const data = await getNews()

  return (
    <div className='flex flex-col'>
      <h1 className="font-bold text-[36px] leading-[66px]">Live News Feed</h1>
      <div className="flex flex-col space-y-5">
        {data?.map((news) => (
          <div key={news.news_id}>
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  );
}