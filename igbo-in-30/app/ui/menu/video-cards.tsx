import { Embedding } from '@/lib/definitions';
import { videoPlaylists} from '@/lib/data/video-data';
import parse from 'html-react-parser';

export default async function VideoCardWrapper() {
  return (
    <>
      {videoPlaylists.map(({name, embedText}) => {
        return (
          <div key={name}>
            <h2 className="text-indigo-700 mb-4 text-lg md:text-xl font-bold">
              {name}
            </h2>
            <VideoCard
              name={name}
              embedText={embedText}
            />
          </div>
        );
      })}
    </>
  );
}

export function VideoCard({
  name,
  embedText
}: Embedding){

  return (
    <>
      {parse(embedText)}
    </>
  )
};