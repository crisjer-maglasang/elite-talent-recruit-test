import { useLocation } from "react-router";
import classNames from "classnames";
import { splitPathBySlashes } from "@/lib/utils";

const menuItems = [
  { name: "Today's weather", path: "/" },
  { name: "Forecast (5 days)", path: "/forecast-view" },
  { name: "History (last year)", path: "/history-view" },
];

const TopNav = () => {
  const location = useLocation();
  const isCurrentLocation = (path) => {
    const splittedMenuPath = splitPathBySlashes(path);
    const splittedPathName = splitPathBySlashes(location.pathname);
    return splittedMenuPath === splittedPathName;
  };

  return (
    <nav className="bg-gray-100 border-b">
      <div className="flex items-center">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className={classNames(
              isCurrentLocation(item.path)
                ? "border-gray-500 border-b-2"
                : "border-transparent text-gray-700 hover:bg-gray-200 border-b-2",
              "block pl-3 pr-4 py-2 text-base font-medium"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default TopNav;
