import { EmbeddingPageSkeleton } from '@/app/ui/skeletons';
import { numMusicPlaylists } from '@/lib/data/playlists/music';

export default function Loading() {
  return <EmbeddingPageSkeleton quantity={numMusicPlaylists}/>;
}