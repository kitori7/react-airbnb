import { getEntireRoomList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRoomDataAction = createAsyncThunk(
  "fetchRoomData",
  async (page = 0, { dispatch }) => {
    dispatch(changeCurrentPageAction(page));
    dispatch(changeIsLoadingAction(true));
    const data = await getEntireRoomList(page * 20);
    dispatch(changeRoomListAction(data.list));
    dispatch(changeTotalCountAction(data.totalCount));
    dispatch(changeIsLoadingAction(false));
  }
);

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0,
    totalCount: 0,
    roomList: [],
    isLoading: false,
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
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const {
  changeCurrentPageAction,
  changeTotalCountAction,
  changeRoomListAction,
  changeIsLoadingAction,
} = entireSlice.actions;

export default entireSlice.reducer;
