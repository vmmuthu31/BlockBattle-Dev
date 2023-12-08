import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["SET_CONNECTION_DETAILS"],
        // Optionally, ignore specific paths in the state
        // ignoredPaths: ['connection.provider']
      },
    }),
});

export default store;
