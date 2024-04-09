import {
  requestWeatherForecastAsync,
  weatherDataSelector,
} from "@/redux/modules/WeatherForecast";
import { locationDataSelector } from "@/redux/modules/LocationReverse";
import { weatherForecastDataLoadingSelector } from "@/redux/loading";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Loader } from "@/components/common";
import WeatherCard from "@/modules/ForecastView/components/WeatherCard";
import { parseWeatherList } from "@/modules/ForecastView/lib";

const ForecastView = ({
  getWeatherForecastData,
  location,
  weatherData,
  isDataLoading,
}) => {
  useEffect(() => {
    if (location[0]) {
      getWeatherForecastData({
        lat: location[0].lat,
        lon: location[0].lon,
      });
    }
  }, [location, getWeatherForecastData]);

  const { list } = weatherData;
  const parsedList = parseWeatherList(list);

  return (
    <div className="bg-gray-200 grow flex flex-wrap items-center justify-center gap-2">
      {isDataLoading ? (
        <Loader className="w-64" />
      ) : parsedList ? (
        Object.keys(parsedList)?.map((el, index) => (
          <div key={index} className="w-full md:w-1/3 lg:w-1/4 m-8 md:m-auto">
            <WeatherCard date={el} weather={parsedList[el]} />
          </div>
        ))
      ) : (
        <div>No data to display</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: locationDataSelector(state),
  weatherData: weatherDataSelector(state),
  isDataLoading: weatherForecastDataLoadingSelector(state),
});

const mapDispatchToProps = {
  getWeatherForecastData: requestWeatherForecastAsync.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastView);
