import { Embedding } from '@/lib/definitions';
import { instagramPages } from '@/lib/data/social-media-data';
import DOMPurify from 'isomorphic-dompurify';
import parse from 'html-react-parser';


export default async function InstagramCardWrapper() {
  return (
    <>
      {instagramPages.map((instagramPage) => {
        return (
          <InstagramCard
          key={instagramPage.name}
          name={instagramPage.name}
          embedText={instagramPage.embedText}
          />
        );
      })}
    </>
  );
};


export function InstagramCard({
  name, 
  embedText,
}: Embedding ){
  DOMPurify.addHook('afterSanitizeAttributes', (node) => {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noopener noreferrer');
    }
  );
  const cleanEmbedText = DOMPurify.sanitize(embedText);

  return (
    <>
      {parse(cleanEmbedText)}
    </>
  );
}