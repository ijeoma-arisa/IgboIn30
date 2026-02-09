import { Embedding } from '@/lib/definitions';
import { musicPlaylists } from '@/lib/data/music-data';
import parse from 'html-react-parser';


export default async function MusicPlaylistWrapper() {
  return (
    <>
    {musicPlaylists.map(({name, embedText}) => {
      return (
        <div key={name}>
          <h2 
            className="text-indigo-700 mb-4 text-lg md:text-xl font-bold"
          >
            {name}
          </h2>
          <MusicPlaylistCard
            name={name}
            embedText={embedText}
          />
        </div>
        );
      })}
    </>
  );
}

export function MusicPlaylistCard({
  name,
  embedText,
}: Embedding){
  return (
    <>
      {parse(embedText)}
    </>
  );
}