import { createSlice } from "@reduxjs/toolkit";

const mainStore = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false,
    },
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload;
    },
  },
});
export const { changeHeaderConfigAction } = mainStore.actions;
export default mainStore.reducer;
