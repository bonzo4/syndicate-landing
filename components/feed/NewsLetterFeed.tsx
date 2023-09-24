import { getNewsletter } from '@/utils/newsletter';
import { NewsletterCard } from './NewsletterCard';

export async function NewsLetterFeed() {
  const data = await getNewsletter();

  return (
    <div className='flex flex-col'>
      <h1 className='text-[36px] font-bold leading-[66px]'>Newsletter feed</h1>
      <div className='flex flex-col space-y-5'>
        {data.length !== 0 &&
          data.map((news) => (
            <div key={news.id}>
              <NewsletterCard news={news} />
            </div>
          ))}
      </div>
    </div>
  );
}
