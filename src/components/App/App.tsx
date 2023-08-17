import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { toDoData } from "../../store/data";
import { loadToDoActionCreator } from "../../store/toDos/toDosSlice";
import ToDosList from "../ToDosList/ToDosList";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadToDoActionCreator(toDoData));
  }, [dispatch]);

  return (
    <>
      <h1>To Do List</h1>
      <ToDosList />
    </>
  );
};

export default App;
