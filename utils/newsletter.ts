export type Newsletter = {
  id: string;
  title: string;
  subtitle: string;
  publish_date: number;
  authors: string[];
  thumbnail_url: string;
  web_url: string;
  content_tags: string[];
};

export async function getNewsletter(): Promise<Newsletter[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/newsletter`, {
    method: 'GET',
  });

  if (res.status !== 200) {
    throw new Error(`Failed to load news`);
  }

  const data = await res.json();

  return data as Newsletter[];
}
