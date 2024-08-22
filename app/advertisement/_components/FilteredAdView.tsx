"use client";

import { useState } from "react";
import FilterBar from "./FilterBar";
import AdsView from "./AdCards";
import AdCardsLayout from "./AdCardsLayout";

const FilteredAdView = ({ advertisementData }: {advertisementData:AdProps[]}) => {

  const [filteredAds, setFilteredAds] = useState<AdProps[]|null>(advertisementData);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [layout, setLayout] = useState<string>("layout2");



  function removeAccents(str: string) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  const handleFilterChange = (newFilterValue: string, newCategory: string) => {
    setInputValue(newFilterValue);
    setSelectedCategory(newCategory);

    const filtered = advertisementData.filter(({title, desc, category}:AdProps) => {
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
      <AdCardsLayout setLayout={setLayout} />
      </div>
      <AdsView filteredAds={filteredAds} layout={layout} />
    </div>
  );
};

export default FilteredAdView;
