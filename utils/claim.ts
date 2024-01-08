import { Database } from '@/types';

type ClaimNftOptions = {
  nft: Database['public']['Tables']['nfts']['Row'];
  email: string;
};

export async function claimNft({ nft, email }: ClaimNftOptions) {
  const underdogUrl = `https://mainnet.underdogprotocol.com/v2/projects/${process.env.UNDERDOG_ID}/nfts`;

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer ' + process.env.UNDERDOG_API_KEY,
    },
    body: JSON.stringify({
      name: nft.name,
      image: nft.image,
      attributes: nft.attributes,
      receiver: {
        identifier: email,
        namespace: 'syndicate',
      },
    }),
  };

  const response = await fetch(underdogUrl, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
}
