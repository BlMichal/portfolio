"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FilterBar from "./FilterBar";

const AdView = ({ advertisementData }) => {

  const [filteredAds, setFilteredAds] = useState(advertisementData);
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  function removeAccents(str: string) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  const handleFilterChange = (newFilterValue: string, newCategory: string) => {
    setInputValue(newFilterValue);
    setSelectedCategory(newCategory);

    const filtered = advertisementData.filter((ad: AdProps) => {
      const titleMatch = removeAccents(ad.title).includes(removeAccents(newFilterValue));
      const descMatch = removeAccents(ad.desc).includes(removeAccents(newFilterValue));
      const categoryMatch = newCategory ? ad.category === newCategory : true;

      return (titleMatch || descMatch) && categoryMatch;
    });

    setFilteredAds(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto flex-auto">
      <FilterBar inputValue={(value) => handleFilterChange(value, selectedCategory)}
        selectValue={(value) => handleFilterChange(inputValue, value)} />
      <div className="max-w-7xl grid grid-cols-1 gap-4 gap-y-10 lg:grid-cols-2 pt-14 px-4 mx-auto flex-auto ">
        {filteredAds?.map((ad: AdProps) => (
          <div
            key={ad.id}
            className="h-[300px] border-2 flex flex-col border-customColor1 justify-between bg-slate-100 shadow-md rounded-lg last:mb-10"
          >
            <div className="relative mx-4 -mt-6 h-1/2 overflow-hidden rounded-xl">
              {ad.TabAdsImages && ad.TabAdsImages.length > 0 ? (
                <Image
                  src={ad.TabAdsImages[0].imageUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Fotogragie inzerátu"
                  className="object-cover hover: rounded-2xl"
                />
              ) : (
                <p className="text-center mt-16 font-bold">
                  Nebyli nalezeny fotografie
                </p>
              )}
            </div>
            <article className="pb-4 mt-2 px-4 flex-auto">
              <h2 className="mb-2 text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {ad.title}
              </h2>
              <p className="text-base font-light leading-relaxed text-inherit">
                Cena: <span className="font-bold">{ad.price}Kč</span>{" "}
              </p>
              <p className="text-base font-light leading-relaxed text-inherit">
                Město: <span className="font-bold">{ad.city}</span>
              </p>
              <p className="text-base mb-6 font-light leading-relaxed text-inherit">
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
      </div>
    </div>
  );
};

export default AdView;
