import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import React from 'react';

export function Header() {
  return (
    <header className='absolute z-10 flex h-24 w-full flex-row items-center justify-between px-20 py-10 text-black'>
      <Link href='/' className='-ml-16 mt-10 rounded-md bg-black'>
        <Image src={logo} alt='logo' width={386} height={128} />
      </Link>
      <div className='hidden flex-row items-center space-x-8 text-[18px] lg:flex'>
        <a
          href='https://syndicate-newsletter.beehiiv.com/subscribe'
          target='_blank'
          rel='noreferrer'
          className='cursor-pointer hover:underline'
        >
          Newsletter
        </a>
        <Link href='/bot' className='cursor-pointer hover:underline'>
          Discord Bot
        </Link>
        <Link href='/bot/#premium' className='cursor-pointer hover:underline'>
          Premium
        </Link>
        <a
          href='https://99ogm8xhhm2.typeform.com/to/Gyeg3lnX'
          target='_blank'
          rel='noreferrer'
          className='cursor-pointer hover:underline'
        >
          Sponsor
        </a>
        <p className='opacity-50'>TV & Video</p>
      </div>
    </header>
  );
}
