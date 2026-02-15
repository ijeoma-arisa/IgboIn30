import { EmbeddingPageSkeleton } from '@/app/ui/skeletons';
import { numVideoPlaylists } from '@/lib/data/video-data';

export default function Loading() {
  return <EmbeddingPageSkeleton quantity={numVideoPlaylists}/>;
}