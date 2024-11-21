import { createSlice } from "@reduxjs/toolkit";

const AddNotePopup_slice = createSlice({
    name: "AddNotePopup_slice",
    initialState: { isOpen: false },
    reducers: {
        openPopup(state) {
            state.isOpen = true;
        },
        closePopup(state) {
            state.isOpen = false;
        },
    },
});

export const { openPopup, closePopup } = AddNotePopup_slice.actions;
export default AddNotePopup_slice.reducer;
