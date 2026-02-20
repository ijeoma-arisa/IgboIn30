import { Embedding } from '@/lib/definitions';
import { instagramLinks } from '@/lib/data/links/social-media';
import DOMPurify from 'isomorphic-dompurify';
import parse from 'html-react-parser';

export default async function InstagramCardWrapper() {
  return (
    <>
      {instagramLinks.map((instagramLink) => {
        return (
          <InstagramCard
          key={instagramLink.name}
          name={instagramLink.name}
          embedText={instagramLink.embedText}
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
    <div className="max-w-sm">
      {parse(cleanEmbedText)}
    </div>
  );
}