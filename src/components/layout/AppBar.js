import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { SearchBar } from "@/components/common";
import { getCityNameToGeocodeAsync } from "@/redux/modules/LocationReverse";
import { connect } from "react-redux";
import { getGeoDataLoadingSelector } from "@/redux/loading";
import { Loader } from "@/components/common";

const AppBar = ({ getCityNameToGeocode, isSearchLoading }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery !== undefined && searchQuery !== "") {
      getCityNameToGeocode({ q: searchQuery });
    }
  }, [searchQuery, getCityNameToGeocode]);

  const handleSearchClick = ({ searchText }) => {
    setSearchQuery(searchText);
  };

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="relative flex justify-between items-center px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            className="block w-auto h-16"
            src={logo}
            alt="Elite Talent Recruit"
          />
          <p className="text-lg font-bold">Weather Information</p>
        </Link>
        {isSearchLoading ? (
          <Loader />
        ) : (
          <SearchBar
            id=""
            name=""
            label="Search Location"
            placeholder="City name, State code, Country code"
            className="flex items-center gap-2"
            labelClassName="text-gray-500 font-semibold"
            searchText={searchQuery}
            onSearchClick={handleSearchClick}
          />
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isSearchLoading: getGeoDataLoadingSelector(state),
});

const mapDispatchToProps = {
  getCityNameToGeocode: getCityNameToGeocodeAsync.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
