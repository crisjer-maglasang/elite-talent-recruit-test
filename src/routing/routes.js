import { Layout } from "@/components";
import { MainView } from "@/modules/MainView";
import { HistoryView } from "@/modules/HistoryView";
import { ForecastView } from "@/modules/ForecastView";

const routes = () => {
  const layout = <Layout />;

  return [
    {
      path: "/",
      element: layout,
      children: [{ path: "/", element: <MainView /> }],
    },
    {
      path: "/history-view",
      element: layout,
      children: [{ path: "/history-view", element: <HistoryView /> }],
    },
    {
      path: "/forecast-view",
      element: layout,
      children: [{ path: "/forecast-view", element: <ForecastView /> }],
    },
  ];
};

export default routes;
