'use client';
import { useSearchParams } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

export default function ClaimError() {
  const message = useSearchParams().get('message');

  let error = message
    ? (message?.slice(0, 1).toUpperCase() + message?.slice(1)).replaceAll(
        '-',
        ' '
      )
    : 'Something went wrong with your claim. Please try again later.';

  return (
    <div className='relative flex w-full grow snap-center flex-col items-center justify-center'>
      <h1 className='font-semi-bold text-2xl text-black'>{error}</h1>
      <div className='flex flex-row items-center justify-center space-x-10'>
        <a
          href='https://passport.underdogprotocol.com/syndicate'
          className='text-blue-500'
        >
          Continue to Underdog Protocol Passport
        </a>
        <FaArrowRight className='text-blue-500' />
      </div>
    </div>
  );
}
