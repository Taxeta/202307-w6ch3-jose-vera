import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToDo } from "../../types";
import { ToDoState } from "./types";

const initialToDosState: ToDoState = {
  toDos: [],
};

const toDosSlice = createSlice({
  name: "todos",
  initialState: initialToDosState,
  reducers: {
    loadToDos: (
      _currentToDosState,
      action: PayloadAction<ToDo[]>,
    ): ToDoState => ({ toDos: action.payload }),
    deleteToDo: (
      currentToDoState,
      action: PayloadAction<number>,
    ): ToDoState => ({
      toDos: currentToDoState.toDos.filter(
        (toDo) => toDo.id !== action.payload,
      ),
    }),
  },
});

export const toDosReducer = toDosSlice.reducer;
export const {
  loadToDos: loadToDosActionCreator,
  deleteToDo: deleteToDosActionCreator,
} = toDosSlice.actions;
