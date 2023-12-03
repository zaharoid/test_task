import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { advertsReducer } from "./slices/advertsSlice";
import { favoritesReducer } from "./slices/favoritesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer
);

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorites: persistedFavoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
