import ProviderWrapper from "@/redux/common/provider-wrapper";
import configureStore from "@/redux/common/configureStore";

const { store } = configureStore({});

export const withProvider = (story) => (
  <ProviderWrapper store={store}>{story()}</ProviderWrapper>
);
