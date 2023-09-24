import { AiFillCopy } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import CopyButton from '../buttons/CopyButton';
type ReferralSectionProps = {
  referral: string;
};

export async function ReferralSection({ referral }: ReferralSectionProps) {
  return (
    <div className='flex flex-col'>
      <h1 className='text-[36px] font-bold leading-[66px]'>Referral Code</h1>
      <div className='flex flex-col space-y-10'>
        <div className='flex flex-col space-y-5'>
          <h2 className='text-[24px]'>
            Select this referral code when setting up the bot.
          </h2>
          <div className='flex flex-row items-center justify-between space-x-16 rounded-md bg-cardBlack px-3 py-10'>
            <p className='text-4xl text-[#DADADA]'>{referral}</p>
            <BsChevronDown className='text-[#DADADA]' size={20} />
          </div>
        </div>
        <div className='flex flex-col space-y-5 '>
          <h2 className='text-[24px]'>
            Or submit it when adding the bot to your server.
          </h2>
          <div className='flex w-full flex-row items-center space-x-10'>
            <div className='flex w-full flex-row space-x-16 rounded-md bg-cardBlack px-3 py-10'>
              <p className='text-4xl text-[#DADADA]'>{referral}</p>
            </div>
            <CopyButton text={referral} />
          </div>
        </div>
      </div>
    </div>
  );
}
