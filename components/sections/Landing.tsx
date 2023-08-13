import { FaArrowRight, FaDiscord, FaTwitter } from "react-icons/fa";
import { LogoBar } from "../landing/LogoBar";
import { LiveFeed } from "../feed/LiveFeed";

export default function Landing() {
  return (
    <div className='flex flex-col lg:flex-row w-full grow snap-center'>
        <div className='flex flex-col w-full lg:w-1/2 bg-black text-white px-10 pb-10 pt-48 lg:pt-64 lg:px-20 space-y-8 min-h-screen'>
          <div className='flex flex-col space-y-5'>
            <div className='flex flex-col -space-y-3 font-bold text-[40px] lg:text-[65px] lg:leading-[66px]'>
              <h1 className='flex flex-col space-y-3'>Web3 News for <br /> Discord Communities</h1>
            </div>
            <p className='text-[18px] leading-[30px] text-[#DADADA]'>News, entertainment, and experiences. Join our news network of 600+ Web3 communities and 10K+ readers.</p>
          </div>
          <div className='flex flex-row space-x-5'>
            <a href="https://discord.com/oauth2/authorize?client_id=1053779815418843166&permissions=268921873&redirect_uri=https%3A%2F%2Fwww.discord.gg%2F2sXPeCTzp6&response_type=code&scope=applications.commands%20bot" target='_blank' rel='noreferrer' className='border-2 border-white px-4 py-3 flex flex-row rounded-full hover:opacity-75'>
              Add to Discord <FaArrowRight className='my-auto ml-2' />
            </a>
            <a href="https://discord.gg/syndicatenetwork" target='_blank' rel='noreferrer' className='my-auto hover:opacity-75'>
              <FaDiscord className='w-[24px] h-[24px]' />
            </a>
            <a href="https://twitter.com/SyndicateNTWRK" target='_blank' rel='noreferrer' className='my-auto hover:opacity-75'>
              <FaTwitter className='w-[24px] h-[24px]' />
            </a>
          </div>
          <div className='flex flex-col space-y-5'>
            <p>Enjoyed by top Web3 Communities</p>
            <LogoBar />
          </div>
        
        </div>
        <div className='flex flex-col w-full lg:w-1/2 min-h-screen bg-white text-black px-5 lg:px-20 pt-16 lg:pt-36 pb-10'>
          <LiveFeed />
        </div>
      </div>
  ) 
}