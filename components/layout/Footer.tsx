import Link from 'next/link';

export function Footer() {
  return (
    <footer className='absolute bottom-0 hidden w-full flex-row items-start space-x-5 px-20 py-10 text-[15px] text-white lg:flex'>
      <p>2023 Ⓒ Syndicate</p>
      <a
        href='https://discord.gg/syndicatenetwork'
        target='_blank'
        rel='noreferrer'
        className='cursor-pointer hover:underline'
      >
        About Us
      </a>
      <a
        href='https://discord.gg/syndicatenetwork'
        target='_blank'
        rel='noreferrer'
        className='cursor-pointer hover:underline'
      >
        Help
      </a>
      <a
        href='https://discord.gg/syndicatenetwork'
        target='_blank'
        rel='noreferrer'
        className='cursor-pointer hover:underline'
      >
        Contact Us
      </a>
      <div className='flex flex-col text-xs'>
        <Link href='/privacy' className='cursor-pointer hover:underline'>
          Privacy Policy
        </Link>
        <Link href='/terms' className='cursor-pointer hover:underline'>
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
}
