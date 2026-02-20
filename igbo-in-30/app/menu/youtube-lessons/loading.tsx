import { EmbeddingPageSkeleton } from '@/app/ui/skeletons';
import { numYoutubeLessonsPlaylists } from '@/lib/data/playlists/youtube-lessons';

export default function Loading() {
  return <EmbeddingPageSkeleton quantity={numYoutubeLessonsPlaylists}/>;
}