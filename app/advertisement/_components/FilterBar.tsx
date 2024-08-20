const FilterBar = ({ inputValue, selectValue }) => {
  return (
    <form className="w-fit pl-8 flex flex-col md:flex-row justify-between gap-2 md:items-center">
      {/* TEXT FILTER */}
      <div className="flex flex-col">      
      <label
        htmlFor="text-search"
        className="mb-2 text-sm font-medium text-gray-900 whitespace-nowrap sr-only dark:text-white"
      >
        Filtruj podle textu
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={(e) => inputValue(e.target.value)}
          type="search"
          id="text-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border-black border-2 rounded-lg"
          placeholder="Vyhledej inzerát"
          required
        />
      </div>
      {/* CATEGORY FILTER */}
      </div>
      <div className="flex flex-col">  
      <label
        htmlFor="category-search"
        className="mb-2 text-sm font-medium text-gray-900 whitespace-nowrap sr-only dark:text-white"
      >
        Filtruj podle kategorie
      </label>
      <select
        onChange={(e) => selectValue(e.target.value)}
        className="block max-w-sm p-4 text-sm border-black border-2 rounded-lg"
        id="category-search"
      >
        <option value="">Vše</option>
        <option value="Elektronika">Elektronika</option>
        <option value="Auto/Moto">Auto/Moto</option>
        <option value="Drogérie">Drogérie</option>
        <option value="Ostatní">Ostatní</option>
      </select>
      </div>
    </form>
  );
};

export default FilterBar;
