import ReferralLanding from '@/components/sections/ReferralLanding';
import Tiers from '@/components/sections/Tiers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { Database } from '@/types';

export async function generateMetadata(): Promise<Metadata> {
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

type ReferralPageParams = {
  code: string | undefined;
};

export default async function ReferralPage({
  params: { code },
}: {
  params: ReferralPageParams;
}) {
  if (!code) return redirect('/');

  const supabase = createServerComponentClient<Database>({ cookies });

  let referralCode: string | undefined;

  const { data: ambassadorData } = await supabase
    .from('ambassador_codes')
    .select('code')
    .eq('code', code)
    .single();

  if (ambassadorData) {
    referralCode = ambassadorData.code;
    await supabase
      .from('ambassador_codes')
      .update({ last_accessed: new Date().toISOString() })
      .eq('code', code);
  }

  await supabase
    .from('ambassador_codes')
    .update({ last_accessed: new Date().toISOString() })
    .eq('code', code);

  const { data: referralData } = await supabase
    .from('referral_codes')
    .select('code')
    .eq('code', code)
    .single();

  if (referralData) {
    referralCode = referralData.code;
    await supabase
      .from('referral_codes')
      .update({ last_accessed: new Date().toISOString() })
      .eq('code', code);
  }

  if (!referralCode) return redirect('/');

  return (
    <div className='flex w-full grow snap-y snap-proximity flex-col'>
      <ReferralLanding referral={referralCode} />
      <Tiers />
    </div>
  );
}
