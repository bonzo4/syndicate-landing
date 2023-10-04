'use client';

import { AiOutlineShareAlt } from 'react-icons/ai';
import Image from 'next/image';
import { Tag } from './Tag';
import { TwitterShareButton } from 'next-share';
import { Newsletter } from '@/utils/newsletter';
import Link from 'next/link';

type NewsletterCardProps = {
  news: Newsletter;
};

export function NewsletterCard({ news }: NewsletterCardProps) {
  const date = new Date(news.publish_date * 1000);

  return (
    <Link
      href={`newsletter/${news.id}`}
      className='flex cursor-pointer flex-row justify-between overflow-hidden rounded-lg bg-cardWhite drop-shadow-xl hover:opacity-90'
    >
      <div className='flex w-full flex-col space-y-1 py-2 pl-4 pr-4'>
        <p className='text-[12px]'>
          {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
        </p>
        <h1 className='text-[20px] font-bold'>{news.title}</h1>
        <p className='text-[16px]'>{news.subtitle}</p>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row space-x-2'>
            {news.content_tags.map((tag) => (
              <div className='rounded-full bg-[#DADADA] px-2 py-1' key={tag}>
                <Tag tag={tag} />
              </div>
            ))}
          </div>
          <div className='my-auto flex flex-row space-x-1 text-[14px]'>
            <TwitterShareButton
              url={`https://www.syndicatenetwork.io/`}
              title={news.title}
            >
              <AiOutlineShareAlt className='my-auto text-[16px] hover:opacity-75' />
            </TwitterShareButton>
          </div>
        </div>
      </div>
      <div className='relative hidden min-h-[88px] min-w-[200px] bg-black lg:flex'>
        <Image
          src={news.thumbnail_url}
          alt='news'
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </Link>
  );
}
