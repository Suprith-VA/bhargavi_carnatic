import { SITE_URL, PROGRAMS } from '@/lib/site';
import { GALLERY_IMAGES } from '@/lib/gallery';

export default function sitemap() {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    ...PROGRAMS.map((p) => ({
      url: `${SITE_URL}/${p.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    {
      url: `${SITE_URL}/gallery`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
      images: GALLERY_IMAGES.map((img) => `${SITE_URL}${img.src}`),
    },
  ];
}
