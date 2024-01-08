type Subscriber = {
  email: string;
};

export async function getSubscriber(
  subscriberId: string
): Promise<Subscriber | null> {
  const url = `https://api.beehiiv.com/v2/publications/${process.env.BEE_HIIV_ID}/subscriptions/by_subscriber_id/${subscriberId}`;
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
    const data = await response.json();
    return data.data as Subscriber;
  } catch (error) {
    console.error(error);
    return null;
  }
}
