import { NextResponse } from 'next/server';

export async function GET(_request: Request) {
  const url = `https://api.beehiiv.com/v2/publications/${process.env.BEE_HIIV_ID}/posts?status=confirmed&limit=4&order_by=publish_date&direction=desc`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.BEE_HIIV_TOKEN}`,
    },
  };
  try {
    const response = await fetch(url, options);

    const data = (await response.json()).data;
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: `Failed to load news ${error}` },
      { status: 500 }
    );
  }
}
