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
  const res = await fetch(`/api/newsletter`, {
    method: 'GET',
  });

  const data = await res.json();

  if (res.status !== 200) {
    console.error(data);
    return [];
  }

  return data as Newsletter[];
}
