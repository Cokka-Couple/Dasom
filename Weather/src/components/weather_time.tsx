import { useRecoilState, useRecoilValue } from "recoil";
import CloudsIcon from "../assets/icons/clouds_icon";
import { locationState, weatherTimeState } from "../recoil/atoms";
import axios from "axios";
import { useCallback, useEffect } from "react";
import ClearIcon from "../assets/icons/clear_icon";
import AtmosphereIcon from "../assets/icons/atmosphere_icon";
import SnowIcon from "../assets/icons/snow_icon";
import RainIcon from "../assets/icons/rain_icon";
import DrizzleIcon from "../assets/icons/drizzle_icon";
import ThunderstormIcon from "../assets/icons/thunderstorm_icon";

export default function WeatherTime() {
  const location = useRecoilValue(locationState);
  const [weatherTime, setWeatherTime] = useRecoilState(weatherTimeState);

  const url =
    location === ""
      ? `https://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=${
          import.meta.env.VITE_API_KEY
        }`
      : `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${
          import.meta.env.VITE_API_KEY
        }`;

  const handleFetchData = useCallback(async () => {
    try {
      const data = await axios({
        method: "get",
        url,
      });
      setWeatherTime(data.data);
    } catch (error) {
      console.error(error);
    }
  }, [url, setWeatherTime]);

  useEffect(() => {
    handleFetchData();
  }, []);

  const today = new Date().toLocaleDateString("ko-KR");

  const todayWeather = weatherTime?.list.filter(el => {
    const elTime = new Date(el.dt_txt).toLocaleDateString("ko-KR");
    return today === elTime;
  });

  console.log(todayWeather);

  return (
    <div className="flex flex-row justify-between">
      {todayWeather &&
        todayWeather.map((el, index) => (
          <div key={index} className="w-10">
            <div className="mb-4 text-center">
              <div className="text-[#E9EAEA]">
                {new Date(el.dt_txt).toLocaleTimeString("ko-KR", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </div>
              <div className="temp_font text-[#E9EAEA]">
                {Math.round(((el.main.temp - 273.15) * 10) / 10)
                  .toFixed(0)
                  .padStart(2, "0")}
                °C
              </div>
            </div>
            <div className="w-10 h-10">
              {el.weather[0].main === "Clouds" ? (
                <CloudsIcon />
              ) : el.weather[0].main === "Clear" ? (
                <ClearIcon />
              ) : el.weather[0].main === "Atmosphere" ? (
                <AtmosphereIcon />
              ) : el.weather[0].main === "Snow" ? (
                <SnowIcon />
              ) : el.weather[0].main === "Rain" ? (
                <RainIcon />
              ) : el.weather[0].main === "Drizzle" ? (
                <DrizzleIcon />
              ) : el.weather[0].main === "Thunderstorm" ? (
                <ThunderstormIcon />
              ) : null}
            </div>
          </div>
        ))}
    </div>
  );
}
