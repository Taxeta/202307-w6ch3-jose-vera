import { useAppSelector } from "../../store";
import ToDoCard from "../ToDoCard/ToDoCard";

const ToDosList = (): React.ReactElement => {
  const toDos = useAppSelector((state) => state.toDosState.toDos);

  return (
    <div>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <ToDoCard todo={toDo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDosList;
