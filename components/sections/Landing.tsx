import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { LogoBar } from '../landing/LogoBar';
import { NewsLetterFeed } from '../feed/NewsLetterFeed';
import NewsletterSubscribe from '../newsletter/Subscribe';

export default function Landing() {
  return (
    <div className='relative flex w-full grow snap-center flex-col lg:flex-row'>
      <div className='flex min-h-screen w-full flex-col space-y-8 bg-black px-10 pb-10 pt-32 text-white lg:w-1/2 lg:px-20 lg:pt-48'>
        <div className='flex flex-col space-y-5'>
          <div className='flex flex-col -space-y-3 text-[40px] font-bold lg:text-[65px] lg:leading-[66px]'>
            <h1 className='flex flex-col space-y-3'>
              Syndicate Email
              <br /> Newsletter
            </h1>
          </div>
          <p className='text-[18px] leading-[30px] text-[#DADADA]'>
            Your trusted crypto companion.
          </p>
        </div>
        <div className='flex flex-col space-y-2'>
          <h2 className='text-[24px] font-bold'>Subscribe to our newsletter</h2>
          <div className='flex flex-row space-x-5'>
            <NewsletterSubscribe />
            <a
              href='https://discord.gg/syndicatenetwork'
              target='_blank'
              rel='noreferrer'
              className='my-auto hover:opacity-75'
            >
              <FaDiscord className='h-[24px] w-[24px]' />
            </a>
            <a
              href='https://twitter.com/SyndicateNTWRK'
              target='_blank'
              rel='noreferrer'
              className='my-auto hover:opacity-75'
            >
              <FaTwitter className='h-[24px] w-[24px]' />
            </a>
          </div>
        </div>
        <div className='flex flex-col space-y-5'>
          <p>Read by crypto&apos;s most influential</p>
          <LogoBar />
        </div>
      </div>
      <div className='flex min-h-screen w-full flex-col bg-white px-5 pb-10 pt-16 text-black lg:w-1/2 lg:px-20 lg:pt-36'>
        <NewsLetterFeed />
      </div>
    </div>
  );
}
