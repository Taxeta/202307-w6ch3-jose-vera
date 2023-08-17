import { useDispatch } from "react-redux";
import { loadToDoActionCreator } from "../../store/toDos/toDosSlice";
import { ToDo } from "../../types";

interface ToDoCardProps {
  todo: ToDo;
}

const ToDoCard = ({
  todo: { id, name },
}: ToDoCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  dispatch(loadToDoActionCreator);

  return (
    <article>
      <ul>
        <li>
          <span>{id}</span>
        </li>
        <li>
          <span>{name}</span>
        </li>
        <li>
          <button></button>
        </li>
      </ul>
    </article>
  );
};

export default ToDoCard;
