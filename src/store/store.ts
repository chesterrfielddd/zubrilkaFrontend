import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { trainersApi } from "../services/TrainersService";
import { usersApi } from "../services/UsersService";

const rootReducer = combineReducers({
  [trainersApi.reducerPath]: trainersApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(trainersApi.middleware)
        .concat(usersApi.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
