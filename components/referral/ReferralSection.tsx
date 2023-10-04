import CopyButton from '../buttons/CopyButton';
import step1 from '../../public/referral/step1.png';
import step2 from '../../public/referral/step2.png';
import Image from 'next/image';

type ReferralSectionProps = {
  referral: string;
};

export async function ReferralSection({ referral }: ReferralSectionProps) {
  return (
    <div className='flex flex-col'>
      <h1 className='text-[36px] font-bold leading-[66px]'>
        Referral Code: {referral}
      </h1>
      <div className='flex flex-col space-y-10'>
        <div className='flex flex-col space-y-5 '>
          <h2 className='text-[24px]'>
            Step 1. While in the setup process, press 📄Submit.
          </h2>
          <Image src={step1} alt='step1' />
        </div>
        <div className='relative flex flex-col space-y-5'>
          <h2 className='flex flex-row text-[24px]'>
            Step 2. Enter <h2 className='mx-[6px] font-bold'>{referral}</h2> in
            the referral code box.
          </h2>
          <Image src={step2} alt='step2' />
          <div className='absolute bottom-[105px] left-[40px] flex w-[405px] flex-row items-center justify-between space-x-16 rounded-sm bg-cardBlack px-3 py-[6px]'>
            <p className='text-xl text-[#DADADA]'>{referral}</p>
            <CopyButton text={referral} />
          </div>
        </div>
      </div>
    </div>
  );
}
