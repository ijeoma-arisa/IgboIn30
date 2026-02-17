import { EmbeddingPageSkeleton } from '@/app/ui/skeletons';
import { numYoutubePlaylists } from '@/lib/data/youtube-lesson-data';

export default function Loading() {
  return <EmbeddingPageSkeleton quantity={numYoutubePlaylists}/>;
}