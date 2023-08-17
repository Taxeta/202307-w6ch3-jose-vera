import { toDoMock } from "../../../mocks/mocksData";
import { ToDo } from "../../../types";
import { loadToDoActionCreator, toDosReducer } from "../toDosSlice";
import { ToDoState } from "../types";

describe("Given a toDosReducer", () => {
  describe("When it receives a loadToDos action with two task", () => {
    test("Then it should return a new state with the received two task", () => {
      const currentToDosState: ToDoState = {
        toDos: [],
      };

      const toDos: ToDo[] = toDoMock;

      const loadToDosAction = loadToDoActionCreator(toDos);

      const newToDoState = toDosReducer(currentToDosState, loadToDosAction);

      expect(newToDoState).toHaveProperty("toDos", toDos);
    });
  });
});
