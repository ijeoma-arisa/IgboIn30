import { EmbeddingPageSkeleton } from '@/app/ui/skeletons';
import { numYoutubeLessons } from '@/lib/data/playlists/youtube-lesson';

export default function Loading() {
  return <EmbeddingPageSkeleton quantity={numYoutubeLessons}/>;
}