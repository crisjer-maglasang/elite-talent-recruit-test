import { useRoutes } from "react-router-dom";
import routes from "./routing/routes";
import {
  ConfigCatProvider,
  createConsoleLogger,
  LogLevel,
} from "configcat-react";

function App() {
  const routing = useRoutes(routes());
  const logger = createConsoleLogger(LogLevel.Off);

  return (
    <ConfigCatProvider
      sdkKey={process.env.REACT_APP_CONFIG_CAT_SDK_KEY}
      options={{ logger, pollIntervalSeconds: 300 }}
    >
      {routing}
    </ConfigCatProvider>
  );
}

export default App;
