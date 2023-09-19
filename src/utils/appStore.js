import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import movieReducers from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: UserReducer,
   movies: movieReducers
  },
});

export default appStore;
