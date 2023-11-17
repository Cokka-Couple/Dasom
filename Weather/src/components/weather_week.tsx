import CloudsIcon from "../assets/icons/clouds_icon";

export default function WeatherWeek() {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-10">
        <div className="mb-4 text-center">
          <div className="text-[#E9EAEA]">Mon</div>
          <div className="temp_font text-[#E9EAEA]">22°C</div>
        </div>
        <div className="w-10 h-10">
          <CloudsIcon />
        </div>
      </div>
    </div>
  );
}
