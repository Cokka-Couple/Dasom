import { useRecoilValue } from "recoil";
import { resultDataState } from "../recoil/atoms";
import CloudsIcon from "../assets/icons/clouds_icon";
import ClearIcon from "../assets/icons/clear_icon";
import AtmosphereIcon from "../assets/icons/atmosphere_icon";
import SnowIcon from "../assets/icons/snow_icon";
import RainIcon from "../assets/icons/rain_icon";
import DrizzleIcon from "../assets/icons/drizzle_icon";
import ThunderstormIcon from "../assets/icons/thunderstorm_icon";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

export default function WeatherToday() {
  // 오늘 날씨 상태
  const result = useRecoilValue(resultDataState);

  const weather = result?.weather[0].main;
  const weatherIcon =
    weather === "Clouds" ? (
      <CloudsIcon />
    ) : weather === "Clear" ? (
      <ClearIcon />
    ) : weather === "Atmosphere" ? (
      <AtmosphereIcon />
    ) : weather === "Snow" ? (
      <SnowIcon />
    ) : weather === "Rain" ? (
      <RainIcon />
    ) : weather === "Drizzle" ? (
      <DrizzleIcon />
    ) : weather === "Thunderstorm" ? (
      <ThunderstormIcon />
    ) : null;

  // 오늘 날짜
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, "EEE dd MMM", { locale: enUS });
    setFormattedDate(formattedDate);
  }, []);

  return (
    <div className="flex justify-between items-center">
      {result && (
        <>
          <div>
            <div className="mb-1 text-[#E9EAEA] text-xl font-medium">
              {result.name}, {result.sys.country}
            </div>
            <div className="temp_font mb-1 text-[#E9EAEA] text-8xl font-['SquadaOne']">
              {Math.round(((result.main.temp - 273.15) * 10) / 10)
                .toFixed(0)
                .padStart(2, "0")}
              °C
            </div>
            <div className="text-[#E9EAEA] text-sm font-light tracking-[0.65em]">
              {formattedDate}
            </div>
          </div>
          <div className="w-20 h-20 text-white">{weatherIcon}</div>
        </>
      )}
    </div>
  );
}
