import { Embedding } from '@/app/lib/definitions';
import { youtubePlaylists} from '@/app/lib/data';
import parse from 'html-react-parser';

export default async function YouTubeCardWrapper() {
  return (
    <>
      {youtubePlaylists.map(({name, embedText}) => {
        return (
          <div key={name}>
            <h2 
              className="text-indigo-700 mb-4 text-lg md:text-xl font-bold">
              {name}
            </h2>
            <YouTubeCard
              name={name}
              embedText={embedText}
            />
          </div>
        );
      })}
    </>
  );
}

export function YouTubeCard({
  name,
  embedText,
}: Embedding){

  return (
    <>
      {parse(embedText)}
    </>
  );
}