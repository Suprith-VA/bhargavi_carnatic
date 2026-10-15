import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Photo Gallery of Carnatic Music Classes',
  description:
    'Photos of Carnatic music classes, stage performances and exam results from Bhargavi Bhadri\'s classes in KR Puram, Bengaluru and online.',
  path: '/gallery',
});

export default function GalleryLayout({ children }) {
  return children;
}
