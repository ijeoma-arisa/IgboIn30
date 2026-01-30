import { Embedding } from '@/lib/definitions';
import { musicPlaylists } from '@/lib/data/music-data';
import parse from 'html-react-parser';


export default async function MusicPlaylistWrapper() {
  return (
    <>
    { musicPlaylists.map(({name, embedText}) => {
      return (
        <MusicPlaylistCard
          key={name}
          name={name}
          embedText={embedText}
        />
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