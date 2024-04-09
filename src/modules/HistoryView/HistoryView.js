import {
  requestWeatherHistoryAsync,
  weatherDataSelector,
} from "@/redux/modules/WeatherHistory";
import { locationDataSelector } from "@/redux/modules/LocationReverse";
import { weatherHistoryDataLoadingSelector } from "@/redux/loading";
import { connect } from "react-redux";
import { useEffect } from "react";

const HistoryView = ({
  getWeatherHistoryData,
  location,
  weatherData,
  isDataLoading,
}) => {
  useEffect(() => {
    if (location[0]) {
      getWeatherHistoryData({
        lat: location[0].lat,
        lon: location[0].lon,
      });
    }
  }, [location, getWeatherHistoryData]);

  return (
    <div className="grow flex flex-col justify-center items-center text-center px-4">
      <div className="text-2xl font-medium text-gray-400">
        Sorry, free version of history api call doesn't exist. We have to pay to
        use this functionality
      </div>
      <div className="mt-4 text-gray-400">
        please see{" "}
        <a
          className=" text-blue-400"
          href="http://openweathermap.org/faq#error401"
        >
          http://openweathermap.org/faq#error401
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: locationDataSelector(state),
  weatherData: weatherDataSelector(state),
  isDataLoading: weatherHistoryDataLoadingSelector(state),
});

const mapDispatchToProps = {
  getWeatherHistoryData: requestWeatherHistoryAsync.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryView);
