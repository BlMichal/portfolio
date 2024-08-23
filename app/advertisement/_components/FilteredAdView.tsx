"use client";

import { useState } from "react";
import FilterBar from "./FilterBar";
import AdsView from "./AdCards";
import AdCardsLayoutButton from "./AdCardsLayoutButton";
import { LoaderCircle } from "lucide-react";

const FilteredAdView = ({ advertisementData }:{advertisementData : AdProps[]|null}) => {

  const [filteredAds, setFilteredAds] = useState<AdProps[]|null>(advertisementData);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [layout, setLayout] = useState<string>("layout2");

  if(!advertisementData){
    return(
    <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-auto">
      <span><LoaderCircle size={50} className="animate-spin" /></span>
      <h2 className="">Načítáme data...</h2>
    </div>
    )
  }

  function removeAccents(str: string) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  const handleFilterChange = (newFilterValue: string, newCategory: string) => {
    setInputValue(newFilterValue);
    setSelectedCategory(newCategory);
    

    const filtered = advertisementData.filter(({title, desc, category}) => {
      const titleMatch = removeAccents(title).includes(removeAccents(newFilterValue));
      const descMatch = removeAccents(desc).includes(removeAccents(newFilterValue));
      const categoryMatch = newCategory ? category === newCategory : true;

      return (titleMatch || descMatch) && categoryMatch;
    });

    setFilteredAds(filtered);
  };

  return (
     <div className="max-w-7xl mx-auto flex-auto">
       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
       <FilterBar inputValue={(value) => handleFilterChange(value, selectedCategory)}
       selectValue={(value) => handleFilterChange(inputValue, value)} />
       <AdCardsLayoutButton setLayout={setLayout} />
       </div>
       <AdsView filteredAds={filteredAds} layout={layout} />
    </div>
   );
};

export default FilteredAdView;
