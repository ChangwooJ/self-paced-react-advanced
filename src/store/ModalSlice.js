import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    detail: false,
    add: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openAddModal: (state) => {
            state.add = true;
        },
        closeAddModal: (state) => {
            state.add = false;
        },
        openDetailModal: (state) => {
            state.detail = true;
        },
        closeDetailModal: (state) => {
            state.detail = false;
        }
    }
});

export const {
    openDetailModal,
    closeDetailModal,
    openAddModal,
    closeAddModal,
} = modalSlice.actions;

export default modalSlice.reducer;