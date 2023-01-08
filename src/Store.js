import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Quora/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
