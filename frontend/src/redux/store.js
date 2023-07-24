import { configureStore } from "@reduxjs/toolkit";
import sectionOperate from "./state";

// 状態
export const store = configureStore({
  reducer : {
    sectionList: sectionOperate,
  }
})