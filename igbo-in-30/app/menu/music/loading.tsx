import { EmbeddingPageSkeleton } from '@/app/ui/skeletons';
import { numMusicPlaylists } from '@/lib/data/music-data';

export default function Loading() {
  return <EmbeddingPageSkeleton quantity={numMusicPlaylists}/>;
}