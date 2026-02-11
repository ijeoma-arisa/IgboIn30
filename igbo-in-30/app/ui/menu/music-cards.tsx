import { Embedding } from '@/lib/definitions';
import { musicPlaylists } from '@/lib/data/music-data';
import parse from 'html-react-parser';
import Card from '@/app/ui/Card';

export default async function MusicPlaylistWrapper() {
  return (
    <>
      {musicPlaylists.map(({name, embedText}: Embedding) => {
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