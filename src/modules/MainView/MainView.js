import { requestCurrentWeatherAsync } from "@/redux/modules/CurrentWeather";
import { locationDataSelector } from "@/redux/modules/LocationReverse";
import {
  currentWeatherDataLoadingSelector,
  getGeoDataLoadingSelector,
} from "@/redux/loading";
import { connect } from "react-redux";
import { useEffect } from "react";

const MainView = ({ getCurrentWeatherData, location }) => {
  useEffect(() => {
    if (location[0]) {
      getCurrentWeatherData({
        lat: location[0].lat,
        lon: location[0].lon,
      });
    }
  }, [location, getCurrentWeatherData]);

  return <div>MainView</div>;
};

const mapStateToProps = (state) => ({
  location: locationDataSelector(state),
});

const mapDispatchToProps = {
  getCurrentWeatherData: requestCurrentWeatherAsync.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
