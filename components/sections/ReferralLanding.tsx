import {
  FaArrowDown,
  FaArrowRight,
  FaDiscord,
  FaTwitter,
} from 'react-icons/fa';
import { LogoBar } from '../landing/LogoBar';
import { ReferralSection } from '../referral/ReferralSection';

type ReferralLandingProps = {
  referral: string;
};

export default function ReferralLanding({ referral }: ReferralLandingProps) {
  return (
    <div className='relative flex w-full grow snap-center flex-col lg:flex-row'>
      <div className='flex min-h-screen w-full flex-col space-y-8 bg-black px-10 pb-10 pt-32 text-white lg:w-1/2 lg:px-20 lg:pt-64'>
        <div className='flex flex-col space-y-5'>
          <div className='flex flex-col -space-y-3 text-[40px] font-bold lg:text-[65px] lg:leading-[66px]'>
            <h1 className='flex flex-col space-y-3'>
              Web3 News for <br /> Discord Communities
            </h1>
          </div>
          <p className='text-[18px] leading-[30px] text-[#DADADA]'>
            News, entertainment, and experiences. Join our news network of 700+
            Web3 communities and 1.8M+ readers.
          </p>
        </div>
        <div className='flex flex-col space-y-2'>
          <div className='flex flex-row space-x-5'>
            <a
              href='https://discord.com/oauth2/authorize?client_id=1053779815418843166&permissions=309506567185&redirect_uri=https%3A%2F%2Fwww.discord.gg%2F2sXPeCTzp6&response_type=code&scope=applications.commands%20bot'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row rounded-full border-2 border-white px-4 py-3 hover:opacity-75'
            >
              Add to Discord <FaArrowRight className='my-auto ml-2' />
            </a>
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
          <p>Read by crypto`&apos;`s most influential</p>
          <LogoBar />
        </div>
        <a
          href='#premium'
          className='w-content flex w-[130px] rounded-full bg-cardWhite px-4 py-2 text-black drop-shadow-xl'
        >
          Premium
          <FaArrowDown className='my-auto ml-2' />
        </a>
      </div>
      <div className='flex min-h-screen w-full flex-col bg-white px-5 pb-10 pt-16 text-black lg:w-1/2 lg:px-20 lg:pt-28'>
        <ReferralSection referral={referral} />
      </div>
    </div>
  );
}
