import Image from "next/image";
import Link from "next/link";

const AdCardsLarge = ({ adsItems }:{ adsItems: AdProps[] }) => {
  return (
    <div className="max-w-7xl grid grid-cols-1 gap-4 gap-y-10 lg:grid-cols-2 pt-14 px-4 mx-auto flex-auto ">
      {adsItems?.map(({ id, title, price, city, category, TabAdsImages }) => (
        <div
          key={id}
          className="h-[300px] border-2 flex flex-col border-customPurple justify-between bg-slate-100 shadow-md rounded-lg last:mb-10"
        >
          <div className="relative mx-4 -mt-6 h-1/2 overflow-hidden rounded-xl">
            {TabAdsImages.length > 0 ? (
              <Image
                src={TabAdsImages[0].imageUrl}
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
              {title}
            </h2>
            <p className="md:text-base text-sm font-light leading-relaxed text-inherit">
              Cena: <span className="font-bold">{price}Kč</span>{" "}
            </p>
            <p className="md:text-base text-sm font-light leading-relaxed text-inherit">
              Město: <span className="font-bold">{city}</span>
            </p>
            <p className="md:text-base text-sm mb-6 font-light leading-relaxed text-inherit">
              Kategorie: <span className="font-bold">{category}</span>{" "}
            </p>
            <Link
              href={`/advertisement/${id}`}
              className="rounded-lg w-full whitespace-nowrap bg-purple-800 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Více informací
            </Link>
          </article>
        </div>
      ))}
    </div>
  );
};

export default AdCardsLarge;
