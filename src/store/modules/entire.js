import { getEntireRoomList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRoomDataAction = createAsyncThunk(
  "fetchRoomData",
  async (payload, { dispatch, getState }) => {
    const currentPage = getState().entire.currentPage;
    const data = await getEntireRoomList(currentPage * 20);
    dispatch(changeRoomListAction(data.list));
    dispatch(changeTotalCountAction(data.totalCount));
  }
);

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0,
    totalCount: 0,
    roomList: [],
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload;
    },
    changeRoomListAction(state, { payload }) {
      state.roomList = payload;
    },
  },
});

export const {
  changeCurrentPageAction,
  changeTotalCountAction,
  changeRoomListAction,
} = entireSlice.actions;

export default entireSlice.reducer;
