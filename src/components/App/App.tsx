import { useEffect } from "react";
import { toDoData } from "../../data";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadToDoActionCreator } from "../../store/toDos/toDosSlice";

const App = (): React.ReactElement => {
  useAppSelector((state) => state.toDosState.toDos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadToDoActionCreator(toDoData));
  });

  return <h1>To Do List</h1>;
};

export default App;
