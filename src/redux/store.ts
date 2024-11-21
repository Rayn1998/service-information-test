import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import AddNotePopup_slice from "./slices/AddNotePopup_slice";

export const store = configureStore({
    reducer: {
        AddNotePopup_slice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
