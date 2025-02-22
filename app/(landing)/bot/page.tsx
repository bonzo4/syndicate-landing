import { LiveFeed } from '@/components/feed/LiveFeed';
import { LogoBar } from '@/components/landing/LogoBar';
import BotLanding from '@/components/sections/BotLanding';
import Landing from '@/components/sections/Landing';
import Tiers from '@/components/sections/Tiers';
import { getNews } from '@/utils/news';
import { Metadata } from 'next';
import { FaDiscord, FaTwitter, FaArrowRight } from 'react-icons/fa';

export async function generateMetadata(): Promise<Metadata> {
  // const data = await getNews()

  const tags = [];

  return {
    metadataBase: new URL('https://www.syndicatenetwork.io/'),
    title: 'Syndicate Network',
    description:
      'News, entertainment, and experiences. Join our news network of 600+ Web3 communities and 10K+ readers.',
    keywords: [
      'Crypto',
      'Solana',
      'NFT',
      'Web3',
      'News',
      'Discord',
      'Communities',
      'Syndicate Network',
    ],
    icons: {
      icon: 'https://api.syndicatenetwork.io/storage/v1/object/public/misc/favicon.ico',
      shortcut:
        'https://api.syndicatenetwork.io/storage/v1/object/public/misc/favicon.ico',
      apple:
        'https://api.syndicatenetwork.io/storage/v1/object/public/misc/favicon.ico',
    },
    openGraph: {
      type: 'website',
      url: 'https://www.syndicatenetwork.io/',
      description:
        'News, entertainment, and experiences. Join our news network of 600+ Web3 communities and 10K+ readers.',
      title: 'Syndicate Network',
      siteName: 'Syndicate Network',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    twitter: {
      title: 'Syndicate Network',
      description:
        'News, entertainment, and experiences. Join our news network of 600+ Web3 communities and 10K+ readers.',
      creator: '@SyndicateNTWRK',
    },
  };
}

export default function Index() {
  return (
    <div className='flex w-full grow snap-y snap-proximity flex-col'>
      <BotLanding />
      <Tiers />
    </div>
  );
}
