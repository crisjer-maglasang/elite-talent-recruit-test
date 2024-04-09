import classNames from "classnames";
import cloud from "../../../assets/cloud.png";
import sun from "../../../assets/sun.png";
import rain from "../../../assets/rain.png";

const WeatherCard = ({ date, weather }) => {
  const { main, description } = weather[0].weather[0];
  const { temp_min, temp_max, temp, pressure, humidity, feels_like } =
    weather[0].main;
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center border-2 rounded-lg shadow-md",
        main === "Clouds" && "cloudy-theme",
        main === "Rain" && "rainy-theme",
        main === "Clear" && "shiny-theme"
      )}
    >
      <div className="text-xl my-4">{date}</div>
      <div className="w-full">
        <div className="flex flex-row items-center px-4 gap-4">
          <img
            className="block w-auto h-16"
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
        <div className="p-8 text-left w-full">
          <div className="text-sm font-medium flex flex-col gap-2">
            <p>Temperature: {temp} F</p>
            <p>Max Temperature: {temp_max} F</p>
            <p>Min Temperature: {temp_min} F</p>
            <p>Feels Like: {feels_like} F</p>
            <p>Pressure: {pressure} Pa</p>
            <p>Humidity: {humidity} %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
