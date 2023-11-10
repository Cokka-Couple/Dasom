import { useRecoilValue } from "recoil";
import Header from "./components/header";
import BodyLayout from "./components/layout/body_layout";
import { resultDataState } from "./recoil/atoms";

function App() {
  const result = useRecoilValue(resultDataState);
  console.log(result);
  return (
    <BodyLayout>
      <Header />
      <div className="flex flex-col">
        {result && (
          <div className="mt-[60px] p-[10px] border border-white rounded-lg">
            <div className="text-[24px] text-white">
              {result.name}, {result.sys.country}
            </div>
            <div className="text-[60px] mt-[8px] text-white">
              {Math.round(((result.main.temp - 273.15) * 10) / 10)}°C
            </div>
            <div className="text-[20px] text-right mt-[8px] text-white">
              {result.weather[0].main}
            </div>
          </div>
        )}
      </div>
    </BodyLayout>
  );
}

export default App;
