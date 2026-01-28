import { Embedding } from '@/app/lib/definitions';
import { musicPlaylists } from '@/app/lib/data';
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