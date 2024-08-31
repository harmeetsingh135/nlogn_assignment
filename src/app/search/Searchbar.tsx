"use client";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { localities } from "../jsondata/Locality";
import temperatureRanges from "../jsondata/Temprange";
import Weatherdata from "../weatherdata";
import { SearchResultsList } from "./searchresultlist";
import { IoIosSearch } from "react-icons/io";

type TemperatureRange = {
  minTemp: number;
  maxTemp: number;
  description: string;
  imagePath: string;
};

const Searchbar: React.FC = () => {
  const [resultss, setResults] = useState<any>([]);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [input, setInput] = useState<string>("");
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [temperatureInfo, setTemperatureInfo] =
    useState<TemperatureRange | null>(null);
  const [location, setLocation] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.value.length > 0) {
      fetchData(e.target.value);
    } else {
      setResults([]);
    }
  };

  const fetchData = (value: string) => {
    const results = localities.filter((city) => {
      return (
        value &&
        city.localityName &&
        city.localityName.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(results);
  };

  const fetchWeatherData = useCallback(
    async (input: string) => {
      const locality = localities.find(
        (loc) => loc.localityName.toLowerCase() === input.toLowerCase()
      );

      if (locality) {
        setIsSearched(true);
        console.log(locality.localityId);
        const options = {
          method: "GET",
          url: "https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data",
          params: { locality_id: locality.localityId },
          headers: {
            "X-Zomato-Api-Key": process.env.REACT_APP_ZOMATO_API_KEY as string,
          },
        };

        try {
          const { data } = await axios.request(options);
          setWeatherData(data.locality_weather_data);
          setLocation(input);

          const foundTemperatureRange = temperatureRanges.find(
            (range) =>
              data.locality_weather_data.temperature >= range.minTemp &&
              data.locality_weather_data.temperature <= range.maxTemp
          );

          setTemperatureInfo((prev) => foundTemperatureRange || null);
          setInput("");
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      } else {
        console.log("Locality not found");
      }
    },
    [localities]
  );

  const clearResults = () => setResults([]);

  return (
    <div className="w-[85%]">
      <div>
    
        <div
          className={`  text-[#494D5C]  w-[85%] mx-auto max-w-[38rem]  ${
            isSearched ? "top-position" : "initial-position"
          }`}
        >
         
          <input
            className="bg-[#1B1D24] pl-4 pr-10 py-2 rounded-full w-full text-[#7187d6]"
            placeholder="Enter Locality Name"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
          <button
            onClick={() => fetchWeatherData(input)}
            className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-transparent border-none cursor-pointer"
          >
            <IoIosSearch />
          </button>

          {resultss.length > 0 && (
            <SearchResultsList
              resultss={resultss}
              setInput={setInput}
              clearResults={clearResults}
              fetchWeatherData={fetchWeatherData}
            />
          )}
        </div>
      </div>

      {weatherData && (
        <div>
          <h3 className=" justify-center my-3 mt-24 text-3xl text-center font-semibold">
           <p className="text-white">{location}</p>
          </h3>

          <Weatherdata
            weatherData={weatherData}
            temperatureInfo={temperatureInfo}
          />
        </div>
      )}
    </div>
  );
};

export default Searchbar;
