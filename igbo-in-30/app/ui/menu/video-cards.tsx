import { Embedding } from '@/lib/definitions';
import { videoPlaylists} from '@/lib/data/video-data';
import parse from 'html-react-parser';
import Card from '@/app/ui/Card';

export default async function VideoCardWrapper() {
  return (
    <>
      {videoPlaylists.map(({name, embedText}: Embedding) => {
        return (
          <Card key={name}>
            <h2 
              className="text-indigo-700 mb-4 text-lg md:text-xl font-bold"
            >
              {name}
            </h2>
            {parse(embedText)}
          </Card>
        );
      })}
    </>
  );
}