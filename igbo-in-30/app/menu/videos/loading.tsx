import { EmbeddingPageSkeleton } from '@/app/ui/skeletons';
import { numVideoPlaylists } from '@/lib/data/playlists/video';

export default function Loading() {
  return <EmbeddingPageSkeleton quantity={numVideoPlaylists}/>;
}