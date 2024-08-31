import React from "react";

type SearchResultType = {
  localityName: string;
};
interface SearchResultsListProps {
  resultss: SearchResultType[];
  setInput: (input: string) => void;
  clearResults: () => void;
  fetchWeatherData: (input: string) => void;
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({ resultss, setInput, clearResults , fetchWeatherData }) => {
  const handleSelect = (localityName: string) => {
    setInput(localityName);
    fetchWeatherData(localityName);
    clearResults();
  };

  return (
    <div className="w-full bg-white flex flex-col shadow-md rounded-lg mt-4 max-h-[300px] overflow-y-auto">
      {resultss.map((result, id) => (
        <div
          key={id}
          className="p-2.5 px-5 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleSelect(result.localityName)}
        >
          {result.localityName}
        </div>
      ))}
    </div>
  );
};
