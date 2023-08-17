import { useDispatch } from "react-redux";
import { loadToDoActionCreator } from "../../store/toDos/toDosSlice";
import { ToDo } from "../../types";
import "./ToDoCard.css";

interface ToDoCardProps {
  todo: ToDo;
}

const ToDoCard = ({
  todo: { id, name, isDone },
}: ToDoCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  dispatch(loadToDoActionCreator);

  return (
    <article className="container">
      <ul className="container__Card">
        <li>
          <span>ToDo Number: {id}</span>
        </li>
        <li>
          <h2>ToDo Name: {name}</h2>
        </li>
        <li>
          <button>{isDone ? "Done" : "Not Done"}</button>
        </li>
      </ul>
    </article>
  );
};

export default ToDoCard;
