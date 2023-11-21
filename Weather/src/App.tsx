import Header from "./components/header";
import BodyLayout from "./components/layout/body_layout";
import MainLayout from "./components/layout/main_layout";
import SheepIcon from "./assets/icons/sheep_icon";
import WeatherToday from "./components/weather_today";
import WeatherTime from "./components/weather_time";

function App() {
  return (
    <BodyLayout>
      <Header />
      <MainLayout>
        <WeatherToday />
        <div className="flex justify-end">
          <SheepIcon />
        </div>
        <WeatherTime />
      </MainLayout>
    </BodyLayout>
  );
}

export default App;
