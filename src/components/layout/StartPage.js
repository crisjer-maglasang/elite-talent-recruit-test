import logo from "../../assets/weather.png";

const StartPage = () => {
  const currentYear = new Date().getFullYear();
  const copyrightNotice = `\u00A9 ${currentYear} Elite Talent Recruit. All Rights Reserved.`;

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 grow">
      <img
        className="block w-auto h-90"
        src={logo}
        alt="Elite Talent Recruit"
      />
      <h1 className="text-3xl sm:text-5xl text-gray-600 font-medium">
        Weather Information
      </h1>
      <p className="mt-8 text-gray-500 font-normal text-center px-4">
        -Sunshine is delicious, rain is refreshing, wind braces up, snow is
        exhilarating; there is no such thing as bad weather, only different
        kinds of good weather-
      </p>
      <p className="mt-32 sm:text-xl text-gray-500 font-normal">
        {copyrightNotice}
      </p>
    </div>
  );
};

export default StartPage;
