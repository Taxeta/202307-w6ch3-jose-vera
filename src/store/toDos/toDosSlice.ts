import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToDo } from "../../types";
import { ToDoState as ToDosState } from "./types";

const initialToDosState: ToDosState = {
  toDos: [],
};

const toDosSlice = createSlice({
  name: "toDos",
  initialState: initialToDosState,
  reducers: {
    loadToDos: (
      _currentToDosState,
      action: PayloadAction<ToDo[]>,
    ): ToDosState => ({ toDos: action.payload }),
    deleteToDo: (
      currentToDoState,
      action: PayloadAction<number>,
    ): ToDosState => ({
      toDos: currentToDoState.toDos.filter(
        (toDo) => toDo.id !== action.payload,
      ),
    }),
    addToDo: (currentToDoState, action: PayloadAction<ToDo>) => ({
      toDos: [...currentToDoState.toDos, action.payload],
    }),
  },
});

export const toDosReducer = toDosSlice.reducer;
export const {
  loadToDos: loadToDoActionCreator,
  deleteToDo: deleteToDoActionCreator,
  addToDo: addToDoActionCreator,
} = toDosSlice.actions;
