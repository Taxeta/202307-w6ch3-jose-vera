import { useDispatch } from "react-redux";
import { toggleToDoActionCreator } from "../../store/toDos/toDosSlice";
import { ToDo } from "../../types";
import "./ToDoCard.css";

interface ToDoCardProps {
  todo: ToDo;
}

const ToDoCard = ({
  todo: { id, name, isDone },
}: ToDoCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  const toggleToDoButton = (id: number) => {
    dispatch(toggleToDoActionCreator(id));
  };

  return (
    <article className="container">
      <div className="container__Card">
        <span>ToDo Number: {id}</span>
        <h2>{name}</h2>
        <button
          className="container__button"
          onClick={() => toggleToDoButton(id)}
        >
          {isDone ? "Done" : "Not Done"}
        </button>
      </div>
    </article>
  );
};

export default ToDoCard;
