import { atom } from "recoil";
import { WeatherData } from "../interface/type";

export const locationState = atom({
  key: "locationState",
  default: "",
});

export const resultDataState = atom<WeatherData | null>({
  key: "resultDataState",
  default: null,
});
