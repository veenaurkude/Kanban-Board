import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "../slice/slice";

export const store = configureStore({
  reducer: {
    dataList: dataSlice.reducer,
  },
});
