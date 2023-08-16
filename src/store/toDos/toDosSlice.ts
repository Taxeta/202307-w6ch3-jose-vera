import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToDo } from "../../types";
import { ToDoState } from "./types";

const initialToDosState: ToDoState = {
  toDos: [],
};

const toDosSlice = createSlice({
  name: "",
  initialState: initialToDosState,
  reducers: {
    loadToDos: (
      _currentToDosState,
      action: PayloadAction<ToDo[]>,
    ): ToDoState => {
      const newState = {
        toDos: action.payload,
      };
      return newState;
    },
  },
});

export const toDosReducer = toDosSlice.reducer;
