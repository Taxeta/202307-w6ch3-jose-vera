import { toDoMock } from "../../mocks/mocksData";
import { ToDo } from "../../types";
import {
  deleteToDosActionCreator,
  loadToDosActionCreator,
  toDosReducer,
} from "./toDosSlice";
import { ToDoState } from "./types";

describe("Given a reducer component", () => {
  describe("When it receives a loadToDos reducer action", () => {
    test("Then it should return a new state with the received two task", () => {
      const currentToDosState: ToDoState = {
        toDos: [],
      };

      const toDos: ToDo[] = toDoMock;

      const loadToDosAction = loadToDosActionCreator(toDos);

      const newToDoState = toDosReducer(currentToDosState, loadToDosAction);

      expect(newToDoState).toHaveProperty("toDos", toDos);
    });
  });

  describe("When it receives a toDos with id=1 and a deleteToDo reducer action", () => {
    test("Then it should return a new state without the toDo id=1", () => {
      const deleteId = 1;

      const deleteAction = deleteToDosActionCreator(deleteId);
      const newToDosState = toDosReducer({ toDos: toDoMock }, deleteAction);

      const deleteToDo = toDoMock.find((todo) => todo.id !== deleteId);

      expect(newToDosState).not.toContain(deleteToDo);
    });
  });
});
