import ReferralLanding from '@/components/sections/ReferralLanding';
import Tiers from '@/components/sections/Tiers';
import {
  getNewsletterPost,
  getNewsletterPostContent,
} from '@/utils/newsletter';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export async function generateMetadata({
  params: { id },
}: {
  params: NewsletterPostPageParams;
}): Promise<Metadata> {
  if (!id) return redirect('/');
  const newsletter = await getNewsletterPost(id);

  if (!newsletter) return redirect('/');

  return {
    metadataBase: new URL('https://www.syndicatenetwork.io/'),
    title: newsletter.title,
    description: newsletter.subtitle,
    keywords: [
      'Crypto',
      'Solana',
      'Ethereum',
      'NFT',
      'Web3',
      'News',
      'Syndicate Network',
    ],
    icons: {
      icon: 'https://api.syndicatenetwork.io/storage/v1/object/public/misc/favicon.ico',
      shortcut:
        'https://api.syndicatenetwork.io/storage/v1/object/public/misc/favicon.ico',
      apple:
        'https://api.syndicatenetwork.io/storage/v1/object/public/misc/favicon.ico',
    },
    authors: newsletter.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      type: 'website',
      url: `https://www.syndicatenetwork.io/newsletter/${id}`,
      title: newsletter.title,
      description: newsletter.subtitle,
      siteName: 'Syndicate Network',
      images: [newsletter.thumbnail_url],
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
      title: newsletter.title,
      description: newsletter.subtitle,
      creator: '@SyndicateNTWRK',
      images: [newsletter.thumbnail_url],
    },
  };
}

type NewsletterPostPageParams = {
  id: string | undefined;
};

export default async function NewsletterPostPage({
  params: { id },
}: {
  params: NewsletterPostPageParams;
}) {
  if (!id) return redirect('/');

  const newsletter = await getNewsletterPostContent(id);

  if (!newsletter || !newsletter.content) return redirect('/');

  return (
    <div
      dangerouslySetInnerHTML={{ __html: newsletter.content.free.web }}
      className='w-full py-20'
    />
  );
}
