import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  detailModal: false,
  addModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setDetailModal: (state, action) => {
      state.detailModal = action.payload;
    },
    setAddModal: (state, action) => {
      state.addModal = action.payload;
    },
  },
});

export const { setDetailModal, setAddModal } = modalSlice.actions;
export default modalSlice.reducer;
