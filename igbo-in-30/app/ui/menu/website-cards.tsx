import { Website } from '@/lib/definitions';
import { websites } from '@/lib/data/website-data';
import Image from 'next/image';
import Card from '@/app/ui/Card';

export default async function WebsiteCardWrapper() {
  return (
    <>
      {websites.map((website) => {
        return (
          <WebsiteCard
            key={website.link}
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
    <Card className="bg-indigo-700 text-center hover:bg-purple-200 hover:text-indigo-700 transition">
      <div className="flex flex-col p-4">
        <div className="flex items-center">

        </div>
        <h3 className="ml-2 text-xl font-bold py-2">
          {title}
        </h3>
        <p className="text-md text-sm italic">{description}</p>
      </div>
      <div
        className="relative rounded-xl bg-white px-4 py-8 text-2xl"
      >
        <a
          key={link}
          href={link}
          className="flex flex-col h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 text-black p-3 text-sm font-medium md:flex-none md:justify-center md:p-2 md:px-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`/menu/websites/${imageSrc}`}
            alt={`${title} logo`}
            className="object-fill"
            fill={true}
          />
        </a>
      </div>
    </Card>
  );
}