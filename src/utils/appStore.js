import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import movieReducers from "./moviesSlice";
import gptSearchReducers from './gptSlice'

const appStore = configureStore({
  reducer: {
    user: UserReducer,
   movies: movieReducers,
   gptsearch:gptSearchReducers
  },
});

export default appStore;
