export default function Tiers() {
  return (
    <div id='premium' className='flex flex-col min-h-screen items-center bg-black snap-center py-20 px-2'>
      <h1 className='text-white text-[40px] font-bold'>Choose your tier</h1>
      <div className='flex flex-col lg:flex-row mt-10 space-y-10 lg:space-y-0 lg:space-x-10 px-10'>
        <div className='flex flex-col border-2 border-white rounded-xl px-10 py-10'>
          <h3 className='text-white text-[40px] font-bold mb-3'>Free</h3>
          <ul className='flex flex-col space-y-1 lg:space-y-5 list-disc'>
            <li className='text-white text-[18px]'>High quality daily news</li>
            <li className='text-white text-[18px]'>Crypto news coverage</li>
            <li className='text-white text-[18px]'>Some NFT news coverage</li>
            <li className='text-white text-[18px]'>Stock and crypto market stats</li>
            <li className='text-white text-[18px]'>Market sentiment polls</li>
          </ul>
        </div>
        <div className='flex flex-col border-2 border-gold rounded-xl px-10 py-10'>
          <h3 className='text-white text-[40px] font-bold mb-3'>Premium<br/>($40 USDC)</h3>
          <ul className='flex flex-col space-y-1 lg:space-y-5 list-disc'>
            <li className='text-white text-[18px]'>All the perks of the free plan</li>
            <li className='text-white text-[18px]'>Full NFT news coverage</li>
            <li className='text-white text-[18px]'>Advanced NFT market stats</li>
            <li className='text-white text-[18px]'>Additional custom Web3 content</li>
            <li className='text-white text-[18px]'>Exclusive access to Syndicate <br className="hidden lg:flex"/>merch and airdrops</li>
            <li className='text-white text-[18px]'>Exclusive access to whitelists <br className="hidden lg:flex"/>and presales</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 space-y-5 lg:space-y-0 lg:space-x-5">
        <div className='flex flex-col space-y-2 items-center'>
          <a href="https://whop.com/checkout/plan_GywqOTshW7cHG?d2c=true" target='_blank' rel='noreferrer' className='border-2 text-white border-white px-4 py-3 flex flex-row rounded-full hover:border-gold cursor-pointer'>
            Pay using Card
          </a>
          <p className='text-white text-xs'>Powered by Whop</p>
        </div>
        <div className='flex flex-col space-y-2 items-center'>
          <a href="https://whop.com/checkout/plan_GywqOTshW7cHG?d2c=true" target='_blank' rel='noreferrer' className='border-2 text-white border-white px-4 py-3 flex flex-row rounded-full hover:border-gold cursor-pointer'>
            Pay using ETH
          </a>
          <p className='text-white text-xs'>Powered by Whop</p>
        </div>
        <div className='flex flex-col space-y-2 items-center'>
          <a href="https://www.hel.io/s/64d6968c2fccaf03133b80dc" target='_blank' rel='noreferrer' className='border-2 text-white border-white px-4 py-3 flex flex-row rounded-full hover:border-gold cursor-pointer'>
            Pay using Solana
          </a>
          <p className='text-white text-xs'>Powered by Helio</p>
        </div>
      </div>
    </div>
  );
}