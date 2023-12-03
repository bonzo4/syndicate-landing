'use client';
import { Database } from '@/types';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { RxChatBubble } from 'react-icons/rx';
import Image from 'next/image';
import { Tag } from './Tag';
import { TwitterShareButton } from 'next-share';

type NewsCardProps = {
  news: Database['public']['Tables']['news_previews']['Row'];
};

export function NewsCard({ news }: NewsCardProps) {
  const date = new Date(news.created_at);

  return (
    <a
      href='https://discord.gg/csybktKjnd'
      target='_blank'
      rel='noreferrer'
      className='flex cursor-pointer flex-row justify-between overflow-hidden rounded-lg bg-cardWhite drop-shadow-xl hover:opacity-90'
    >
      <div className='flex w-full flex-col space-y-1 py-2 pl-4 pr-4'>
        <p className='text-[12px]'>
          {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
        </p>
        <h1 className='text-[20px] font-bold'>{news.title}</h1>
        <p className='text-[16px]'>{news.slug}</p>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row space-x-2'>
            {news.tags &&
              news.tags.map((tag) => (
                <div className='rounded-full bg-[#DADADA] px-2 py-1' key={tag}>
                  <Tag tag={tag} />
                </div>
              ))}
          </div>
          <div className='my-auto flex flex-row space-x-1 text-[14px]'>
            {news.clicks !== 0 && (
              <div className='flex flex-row '>
                <AiOutlineHeart className='my-auto mr-px' />
                <p className='my-auto'>{news.clicks}</p>
              </div>
            )}
            {news.inputs !== 0 && (
              <div className='flex flex-row'>
                <RxChatBubble className='my-auto mr-1' />
                <p className='my-auto'>{news.inputs}</p>
              </div>
            )}
            {news.slug && (
              <TwitterShareButton
                url={`https://www.syndicatenetwork.io/`}
                title={news.slug}
              >
                <AiOutlineShareAlt className='my-auto text-[16px] hover:opacity-75' />
              </TwitterShareButton>
            )}
          </div>
        </div>
      </div>
      <div className='relative hidden min-h-[88px] min-w-[200px] bg-black lg:flex'>
        {news.thumbnail && (
          <Image
            src={news.thumbnail}
            alt='news'
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>
    </a>
  );
}
