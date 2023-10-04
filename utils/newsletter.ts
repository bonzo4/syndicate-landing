export type Newsletter = {
  id: string;
  title: string;
  subtitle: string;
  publish_date: number;
  authors: string[];
  thumbnail_url: string;
  web_url: string;
  content_tags: string[];
  content?: { free: { web: string } } | null;
};

export async function getNewsletter(): Promise<Newsletter[]> {
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
    const data = await response.json();
    return data.data as Newsletter[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getNewsletterPost(
  id: string
): Promise<Newsletter | null> {
  const url = `https://api.beehiiv.com/v2/publications/${process.env.BEE_HIIV_ID}/posts/${id}`;
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
    return data.data as Newsletter;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getNewsletterPostContent(
  id: string
): Promise<Newsletter | null> {
  const url = `https://api.beehiiv.com/v2/publications/${process.env.BEE_HIIV_ID}/posts/${id}?expand%5B%5D=free_web_content`;
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
    return data.data as Newsletter;
  } catch (error) {
    console.error(error);
    return null;
  }
}
