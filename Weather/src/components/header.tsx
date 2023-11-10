import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import SearchIcon from "../assets/icons/search_icon";
import { locationState, resultDataState } from "../recoil/atoms";
import { SyntheticEvent, useEffect, useCallback } from "react";

export default function Header() {
  const [location, setLocation] = useRecoilState(locationState);
  const setResultData = useSetRecoilState(resultDataState);

  const url =
    location === ""
      ? `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${
          import.meta.env.VITE_API_KEY
        }`
      : `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
          import.meta.env.VITE_API_KEY
        }`;

  const handleLocation = (e: SyntheticEvent) => {
    setLocation((e.target as HTMLInputElement).value);
  };

  const handleFetchData = useCallback(async () => {
    try {
      const data = await axios({
        method: "get",
        url,
      });
      setResultData(data.data);
      setLocation("");
    } catch (error) {
      console.error(error);
    }
  }, [url, setResultData, setLocation]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFetchData();
      setLocation("");
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <header className="w-full px-6 relative flex justify-between items-center">
      <input
        className="input_box"
        type="text"
        placeholder="도시를 입력해주세요."
        value={location}
        onChange={handleLocation}
        onKeyDown={handleKeyDown}
      />
      <div
        className="absolute right-10 cursor-pointer"
        onClick={handleFetchData}
      >
        <SearchIcon />
      </div>
    </header>
  );
}
