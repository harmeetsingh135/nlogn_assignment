import React from "react";
import { IoRainy } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { RiTestTubeFill } from "react-icons/ri";

interface WeatherData {
  temperature: number;
  humidity: number;
  wind_direction: number;
  wind_speed: number;
  rain_intensity: number;
  rain_accumulation: number;
}

interface TemperatureInfo {
  minTemp: number;
  maxTemp: number;
  description: string;
  imagePath: string;
}

interface WeatherdataProps {
  weatherData: WeatherData;
  temperatureInfo?: TemperatureInfo | null; 
}

const Weatherdata: React.FC<WeatherdataProps> = ({
  weatherData,
  temperatureInfo,
}) => {
  return (
    <div>
      <div className="flex flex-wrap items-center  p-2.5 justify-center gap-8 rounded-xl">
        <div className="">
          <img
            src="/sun.svg"
            alt="Weather Icon"
            className="min-w-20 min-h-20 mb-4"
          />
        </div>

        <div className="bg-[#1B1D24] p-2.5 rounded-lg text-white font-sans shadow-custom">
          <div className="text-6xl font-semibold">
            {weatherData?.temperature ? weatherData.temperature : "0.0"}
          </div>

          <div className="text-sm text-gray-400 text-center mt-2">
            {temperatureInfo?.description
              ? temperatureInfo.description
              : "No description available"}
          </div>
        </div>
      </div>

      <div className="bg-[#20242D] p-4 rounded-xl text-white my-10 max-w-[38rem] m-auto">
        <div className="flex justify-between items-center px-3">
          <div className="flex items-center">
            <img src="/sun.svg" alt="Rain" className="w-6 h-6 mr-4 " />
            <div>
              <p className="text-blue-300">Humidity</p>
            </div>
          </div>
          <div className="text-right">
            <p> {weatherData?.humidity ? weatherData.humidity : "0.0"}°</p>
          </div>
        </div>

        <hr className="border-gray-700 my-5 m-auto w-[95%]" />
        <div className="flex justify-between items-center mt-2 px-3">
          <div className="flex items-center">
          <FaWind className="w-6 h-6 mr-4" />
            <div>
              <p className="text-yellow-300">Wind Speed</p>
            </div>
          </div>
          <div className="text-right">
            <p> {weatherData?.wind_speed ? weatherData.wind_speed : "0.0"}°</p>
          </div>
        </div>
        <hr className="border-gray-700 my-5 m-auto w-[95%]" />
        <div className="flex justify-between items-center mt-2 px-3">
          <div className="flex items-center">
          <FaCompass
 className="w-6 h-6 mr-4" />
            <div>
              <p className="text-blue-300">Wind Direction</p>
            </div>
          </div>
          <div className="text-right">
            <p>
              {" "}
              {weatherData?.wind_direction ? weatherData.wind_direction : "0.0"}
              °
            </p>
          </div>
        </div>
        <hr className="border-gray-700 my-5 m-auto w-[95%]" />
        <div className="flex justify-between items-center mt-2 px-3">
          <div className="flex items-center">
            <IoRainy className="w-6 h-6 mr-4" />
            <div>
              <p className="text-blue-300">Rain Intensity</p>
            </div>
          </div>
          <div className="text-right">
            <p>
              {" "}
              {weatherData?.rain_intensity ? weatherData.rain_intensity : "0.0"}
              °
            </p>
          </div>
        </div>
        <hr className="border-gray-700 my-5 m-auto w-[95%]" />
        <div className="flex justify-between items-center mt-2 px-3">
          <div className="flex items-center">
          <RiTestTubeFill 
          className="w-6 h-6 mr-4" />
            <div>
              <p className="text-blue-300">Rain Accumulation</p>
            </div>
          </div>
          <div className="text-right">
            <p>
              {" "}
              {weatherData?.rain_accumulation
                ? weatherData.rain_accumulation
                : "0.0"}
              °
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weatherdata;
