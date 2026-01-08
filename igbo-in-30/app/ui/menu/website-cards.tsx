import { Website } from '@/app/lib/definitions';
import { websites } from '@/app/lib/data';

export default async function WebsiteCardWrapper() {
  return (
    <>
      {websites.map((website) => {
        return (
          <WebsiteCard 
            title={website.title} 
            description={website.description} 
            link={website.link} 
            imageSrc={website.imageSrc}
          />
        );
      })}
    </>
  );
};

export function WebsiteCard({
  title,
  description,
  link,
  imageSrc,
}: Website ) {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <p>{imageSrc}</p>
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <div
        className="
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl"
      >
        <p>{description}</p>
        <p>{link}</p>
      </div>
    </div>
  );
}