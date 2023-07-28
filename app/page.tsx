import { LiveFeed } from '@/components/feed/LiveFeed'
import { LogoBar } from '@/components/landing/LogoBar'
import { Metadata } from 'next'
import { FaDiscord, FaTwitter, FaArrowRight } from 'react-icons/fa'
import { getData } from '@/utils/news'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData()
  
  const tags = data?.map((news) => news.tags).flat() || []
  
  return {
    metadataBase: new URL('https://www.syndicatenetwork.io/'),
    title: 'Syndicate Network',
    description: 'News, entertainment, and experiences. Join our news network of 600+ Web3 communities and 10K+ readers.',
    keywords: [...tags, 'Crypto', 'Solana', 'NFT', 'Web3', 'News', 'Discord', 'Communities', 'Syndicate Network'],
    icons: {
      icon: 'https://api.syndicatenetwork.io/storage/v1/object/public/misc/favicon.ico',
      shortcut: 'https://api.syndicatenetwork.io/storage/v1/object/public/misc/favicon.ico',
      apple: 'https://api.syndicatenetwork.io/storage/v1/object/public/misc/favicon.ico',
    },
    openGraph: {
      type: 'website',
      url: 'https://www.syndicatenetwork.io/',
      description: 'News, entertainment, and experiences. Join our news network of 600+ Web3 communities and 10K+ readers.',
      title: 'Syndicate Network',
      siteName: 'Syndicate Network',
      images: data?.map((news) => {
        return {
          url: news.thumbnail,
          width: 200,
          height: 88,
          alt: news.title
        }
      })
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      }
    },
    twitter: {
      title: 'Syndicate Network',
      description: 'News, entertainment, and experiences. Join our news network of 600+ Web3 communities and 10K+ readers.',
      creator: '@SyndicateNTWRK',
    }
  }
}

export default function Index() {

  return (
    <div className='flex flex-col lg:flex-row w-full grow'>
      <div className='flex flex-col w-full lg:w-1/2 bg-black text-white px-10 pb-10 pt-48 lg:pt-64 lg:px-20 space-y-8 min-h-screen'>
        <div className='flex flex-col space-y-5'>
          <div className='flex flex-col -space-y-3 font-bold text-[40px] lg:text-[65px] lg:leading-[66px]'>
          <h1 className='flex flex-col space-y-3'>Web3 News for <br/> Discord Communities</h1>
        </div>
        <p className='text-[18px] leading-[30px] text-[#DADADA]'>News, entertainment, and experiences. Join our news network of 600+ Web3 communities and 10K+ readers.</p>
        </div>
        <div className='flex flex-row space-x-5'>
          <a href="https://discord.com/oauth2/authorize?client_id=1053779815418843166&permissions=268921873&redirect_uri=https%3A%2F%2Fwww.discord.gg%2F2sXPeCTzp6&response_type=code&scope=applications.commands%20bot" target='_blank' rel='noreferrer' className='border-2 border-white px-4 py-3 flex flex-row rounded-full hover:opacity-75'>
            Add to Discord <FaArrowRight className='my-auto ml-2'/>
          </a>
          <a href="https://discord.gg/syndicatenetwork" target='_blank' rel='noreferrer' className='my-auto hover:opacity-75'>
            <FaDiscord className='w-[24px] h-[24px]'/>
          </a>
          <a href="https://twitter.com/SyndicateNTWRK" target='_blank' rel='noreferrer' className='my-auto hover:opacity-75'>
            <FaTwitter className='w-[24px] h-[24px]'/>
          </a>
        </div>
        <div className='flex flex-col space-y-5'>
          <p>Enjoyed by top Web3 Communities</p>
          <LogoBar />
        </div>
        
      </div>
      <div className='flex flex-col min-h-screen w-full lg:w-1/2 bg-white text-black px-5 lg:px-20 pt-16 lg:pt-36 pb-10'>
        <LiveFeed />
      </div>
    </div>
  )
}
