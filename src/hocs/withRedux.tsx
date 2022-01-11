import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "store/configure-store";

const store = configureStore;

export const withRedux = (Component: React.FC) => {
  return (props: Record<string, any>) => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };
};
