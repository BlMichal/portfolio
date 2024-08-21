"use client";

import { useState } from "react";
import FilterBar from "./FilterBar";
import AdsView from "./AdCards";

const FilteredAdView = ({ advertisementData }) => {

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
      <AdsView filteredAds={filteredAds} />
    </div>
  );
};

export default FilteredAdView;
