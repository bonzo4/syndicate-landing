import { getNews } from '@/utils/news';
import { NewsCard } from './NewsCard';

export async function LiveFeed() {
  const data = await getNews();

  return (
    <div className='flex flex-col'>
      <h1 className='text-[36px] font-bold leading-[66px]'>Live News Feed</h1>
      <div className='flex flex-col space-y-5'>
        {data.length !== 0 &&
          data.map((news) => (
            <div key={news.news_id}>
              <NewsCard news={news} />
            </div>
          ))}
      </div>
    </div>
  );
}
