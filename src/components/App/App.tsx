import { useAppSelector } from "../../store";

const App = (): React.ReactElement => {
  useAppSelector((state) => state.toDosState.toDos);

  return <h2>To Do List</h2>;
};

export default App;
