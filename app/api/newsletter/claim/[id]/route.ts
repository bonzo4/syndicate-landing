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

    const id = request.nextUrl.pathname.split('/').pop();

    if (!subscriberId) {
      throw new Error('Please subscribe to the email list first.');
    }

    const subscriber = await getSubscriber(subscriberId);

    if (!subscriber) {
      throw new Error(
        'You are not subscribed to the email list. Please subscribe first.'
      );
    }

    const email = subscriber.email;

    const supabase = createRouteHandlerClient<Database>({ cookies });

    const now = new Date().toISOString();

    const { data: nftData, error: nftError } = await supabase
      .from('nfts')
      .select('*')
      .eq('id', id)
      .single();

    if (nftError || !nftData) {
      console.log(nftError);
      throw new Error('Not a valid nft to claim.');
    }

    if (nftData.opens_at > now) {
      throw new Error('NFT not available to claim yet.');
    }

    const { data: claimData, error: claimError } = await supabase
      .from('nft_email_claims')
      .select('*')
      .eq('email', email)
      .eq('nft_id', nftData.id)
      .single();

    if (claimData) {
      throw new Error('NFT already claimed.');
    }

    await claimNft({ nft: nftData, email });

    const { error: claimError2 } = await supabase
      .from('nft_email_claims')
      .insert({
        email,
        nft_id: nftData.id,
      });

    return NextResponse.redirect(
      'https://passport.underdogprotocol.com/syndicate'
    );
  } catch (error: any) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/api/newsletter/claim/error?message=${(
        (error.message as string) || ''
      )
        .toLowerCase()
        .replace(' ', '-')}`
    );
    // return NextResponse.json({ error }, { status: 400 });
    // console.error(error);
    // return NextResponse.redirect(
    //   'https://passport.underdogprotocol.com/syndicate'
    // );
  }
}
