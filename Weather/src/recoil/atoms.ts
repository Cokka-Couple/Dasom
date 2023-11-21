import { atom } from "recoil";
import { WeatherTimeData, WeatherTodayData } from "../interface/type";

export const locationState = atom({
  key: "locationState",
  default: "",
});

export const weatherTodayState = atom<WeatherTodayData | null>({
  key: "weatherTodayState",
  default: null,
});

export const weatherTimeState = atom<WeatherTimeData | null>({
  key: "weatherTimeState",
  default: null,
});
