import { EmbeddingPageSkeleton } from '@/app/ui/skeletons';

export default function Loading() {
  return <EmbeddingPageSkeleton quantity={5}/>;
  // return <div className="text-black">Loading...</div>;
}