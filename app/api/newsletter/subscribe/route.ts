import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, referral } = await request.json();

  const url = `https://api.beehiiv.com/v2/publications/${process.env.BEE_HIIV_ID}/subscriptions`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.BEE_HIIV_TOKEN}`,
    },
    body: JSON.stringify({
      email,
      referral_code: referral || undefined,
    }),
  };
  try {
    const response = await fetch(url, options);

    const data = await response.json();
    if (response.status !== 200 && response.status !== 201) {
      throw new Error(`Failed to subscribe to newsletter ${data}`);
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
