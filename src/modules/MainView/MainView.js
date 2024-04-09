import {
  requestCurrentWeatherAsync,
  weatherDataSelector,
} from "@/redux/modules/CurrentWeather";
import { locationDataSelector } from "@/redux/modules/LocationReverse";
import { currentWeatherDataLoadingSelector } from "@/redux/loading";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Loader } from "@/components/common";
import classNames from "classnames";
import cloud from "../../assets/cloud.png";
import sun from "../../assets/sun.png";
import rain from "../../assets/rain.png";

const MainView = ({
  getCurrentWeatherData,
  location,
  weatherData,
  isDataLoading,
}) => {
  useEffect(() => {
    if (location[0]) {
      getCurrentWeatherData({
        lat: location[0].lat,
        lon: location[0].lon,
      });
    }
  }, [location, getCurrentWeatherData]);

  const { main, description } = weatherData.weather
    ? weatherData.weather[0]
    : "";

  const { temp_min, temp_max, temp, pressure, humidity, feels_like } =
    weatherData.weather ? weatherData.main : "";

  return (
    <div
      className={classNames(
        "grow flex items-center justify-center ",
        main === "Clouds" && "cloudy-theme",
        main === "Rain" && "rainy-theme",
        main === "Clear" && "shiny-theme",
        isDataLoading && ""
      )}
    >
      {isDataLoading ? (
        <Loader className="w-64" />
      ) : (
        <div className="flex gap-4">
          <div className="px-4 flex flex-col items-center justify-center">
            <img
              className="block w-auto h-64"
              src={
                main === "Clouds"
                  ? cloud
                  : main === "Clear"
                  ? sun
                  : main === "Rain"
                  ? rain
                  : ""
              }
              alt="Elite Talent Recruit"
            />
            <p className="text-3xl">{description}</p>
          </div>
          <div className="py-16">
            <div className="text-lg font-medium flex flex-col gap-4">
              <p>Temperature: {temp} F</p>
              <p>Max Temperature: {temp_max} F</p>
              <p>Min Temperature: {temp_min} F</p>
              <p>Feels Like: {feels_like} F</p>
              <p>Pressure: {pressure} Pa</p>
              <p>Humidity: {humidity} %</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: locationDataSelector(state),
  weatherData: weatherDataSelector(state),
  isDataLoading: currentWeatherDataLoadingSelector(state),
});

const mapDispatchToProps = {
  getCurrentWeatherData: requestCurrentWeatherAsync.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
