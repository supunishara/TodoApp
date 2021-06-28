import React from "react";
import { ScrollView } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem"
import PropTypes from "prop-types";
import { persistStore, persistReducer } from "redux-persist";

//Redux handlers of the app

const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage
};

const store = createStore(persistReducer(persistConfig, reducers));

const Provider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
    </ReduxProvider>
  );
};

const styles = {
  content: {
    alignItems: "center"
  }
};

Provider.propTypes = {
  children: PropTypes.element.isRequired
};

export default Provider;
