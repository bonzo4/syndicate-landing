import { Database } from '@/types';
import { claimNft } from '@/utils/claim';
import { getSubscriber } from '@/utils/subscriber';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const subscriberId = searchParams.get('subscriber_id');

    if (!subscriberId) {
      throw new Error('Missing subscriber_id');
    }

    const subscriber = await getSubscriber(subscriberId);

    if (!subscriber) {
      throw new Error('Subscriber not found');
    }

    const email = subscriber.email;

    const supabase = createRouteHandlerClient<Database>({ cookies });

    const now = new Date().toISOString();

    const { data: nftData, error: nftError } = await supabase
      .from('nfts')
      .select('*')
      .lt('opens_at', now)
      .gt('ends_at', now)
      .single();

    if (nftError || !nftData) {
      throw new Error('No NFTs to claim at this time');
    }

    const { data: claimData, error: claimError } = await supabase
      .from('nft_email_claims')
      .select('*')
      .eq('email', email)
      .eq('nft_id', nftData.id)
      .single();

    if (claimData) {
      throw new Error('NFT already claimed');
    }

    await claimNft({ nft: nftData, email });

    const { error: claimError2 } = await supabase
      .from('nft_email_claims')
      .insert({
        email,
        nft_id: nftData.id,
      });

    if (claimError2) {
      console.log(claimError2);
      throw new Error('Error claiming NFT');
    }

    return NextResponse.redirect(
      'https://passport.underdogprotocol.com/syndicate'
    );
  } catch (error) {
    // return NextResponse.json({ error }, { status: 400 });
    console.error(error);
    return NextResponse.redirect(
      'https://passport.underdogprotocol.com/syndicate'
    );
  }
}
