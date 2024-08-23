import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { House, Layers3, Wallet } from 'lucide-react'
import { truncateText } from '@/lib/functions'

const AdCardsSmall = ({adsItems}:{adsItems : AdProps[]|null}) => {
  return (
    <div className="max-w-7xl grid grid-cols-1 gap-y-4 pt-8 md:px-4 px-1 mx-auto">
    {adsItems?.map(({id, title, desc, price, city, category, TabAdsImages }) => (
      <Link
        href={`/advertisement/${id}`}
        key={id}
        className="h-[100px] border-2 flex border-customPurple justify-between bg-slate-100 shadow-md rounded-lg last:mb-10"
      >
        <div className="relative md:w-1/4 w-1/3 h-full overflow-hidden rounded-xl">
          {TabAdsImages.length > 0 ? (
            <Image
              src={TabAdsImages[0].imageUrl}
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
              {truncateText(title, 20)}
            </h2>
            <p className="md:text-sm text-xs leading-snug tracking-normal text-blue-gray-900 antialiased">
              {truncateText(desc, 40)}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="md:text-sm text-xs flex flex-co gap-1 justify-center text-inherit">
              <Wallet size={20} />
              <span className="font-bold whitespace-nowrap">
                {price} Kč
              </span>
            </p>
            <p className="md:text-sm text-xs flex gap-1 justify-center text-inherit">
              <House size={20} />
              <span>{truncateText(city, 10)}</span>
            </p>
            <p className="md:text-sm text-xs flex gap-1 justify-center text-inherit">
              <Layers3 size={20} />
              <span>{category}</span>
            </p>
          </div>
        </article>
      </Link>
    ))}
    </div>
  )
}

export default AdCardsSmall