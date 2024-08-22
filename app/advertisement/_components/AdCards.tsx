import { House, Layers3, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}

const AdCards = ({ filteredAds }) => {
  return (
    <div className="max-w-7xl grid grid-cols-1 gap-4 gap-y-10 pt-8 md:px-4 px-1 mx-auto">
      {filteredAds?.map((ad: AdProps) => (
        <Link
          href={`/advertisement/${ad.id}`}
          key={ad.id}
          className="h-[100px] border-2 flex border-customPurple justify-between bg-slate-100 shadow-md rounded-lg last:mb-10"
        >
          <div className="relative md:w-1/4 w-1/3 h-full overflow-hidden rounded-xl">
            {ad.TabAdsImages.length > 0 ? (
              <Image
                src={ad.TabAdsImages[0].imageUrl}
                fill
                sizes=""
                alt="Fotogragie inzerátu"
                className="object-cover"
              />
            ) : (
              <p className="text-center mt-16 font-bold">
                Nebyli nalezeny fotografie
              </p>
            )}
          </div>
          <article className="px-2 py-2 flex gap-2 justify-between flex-auto">
            <div>
              <h2 className="md:text-sm text-xs font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {truncateText(ad.title, 20)}
              </h2>
              <p className="md:text-sm text-xs leading-snug tracking-normal text-blue-gray-900 antialiased">
                {truncateText(ad.desc, 40)}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="md:text-sm text-xs flex flex-co gap-1 justify-center text-inherit">
                <Wallet size={20} />
                <span className="font-bold whitespace-nowrap">
                  {ad.price} Kč
                </span>
              </p>
              <p className="md:text-sm text-xs flex gap-1 justify-center text-inherit">
                <House size={20} />
                <span>{truncateText(ad.city, 10)}</span>
              </p>
              <p className="md:text-sm text-xs flex gap-1 justify-center text-inherit">
                <Layers3 size={20} />
                <span>{ad.category}</span>
              </p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default AdCards;

{
  /* <div className="max-w-7xl grid grid-cols-1 gap-4 gap-y-10 lg:grid-cols-2 pt-14 px-4 mx-auto flex-auto ">
    {filteredAds?.map((ad: AdProps) => (
      <div
        key={ad.id}
        className="h-[300px] border-2 flex flex-col border-customPurple justify-between bg-slate-100 shadow-md rounded-lg last:mb-10"
      >
        <div className="relative mx-4 -mt-6 h-1/2 overflow-hidden rounded-xl">
          {ad.TabAdsImages.length > 0 ? (
            <Image
              src={ad.TabAdsImages[0].imageUrl}
              fill
              sizes=""
              alt="Fotogragie inzerátu"
              className="object-cover rounded-2xl"
            />
          ) : (
            <p className="text-center mt-16 font-bold">
              Nebyli nalezeny fotografie
            </p>
          )}
        </div>
        <article className="pb-4 mt-2 px-4 flex-auto">
          <h2 className="mb-2 md:text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {ad.title}
          </h2>
          <p className="md:text-base text-sm font-light leading-relaxed text-inherit">
            Cena: <span className="font-bold">{ad.price}Kč</span>{" "}
          </p>
          <p className="md:text-base text-sm font-light leading-relaxed text-inherit">
            Město: <span className="font-bold">{ad.city}</span>
          </p>
          <p className="md:text-base text-sm mb-6 font-light leading-relaxed text-inherit">
            Kategorie: <span className="font-bold">{ad.category}</span>{" "}
          </p>
          <Link
            href={`/advertisement/${ad.id}`}
            className="rounded-lg w-full whitespace-nowrap bg-purple-800 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Více informací
          </Link>
        </article>
      </div>
    ))}
  </div> */
}
