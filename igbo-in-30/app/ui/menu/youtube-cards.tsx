import { Embedding } from '@/lib/definitions';
import { youtubePlaylists} from '@/lib/data/youtube-lesson-data';
import parse from 'html-react-parser';
import Card from '@/app/ui/Card';

export default async function YouTubeCardWrapper() {
  return (
    <>
      {youtubePlaylists.map(({name, embedText}) => {
        return (
          <Card key={name}>
            <h2 
              className="text-indigo-700 mb-4 text-lg md:text-xl font-bold">
              {name}
            </h2>
            <YouTubeCard
              name={name}
              embedText={embedText}
            />
          </Card>
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