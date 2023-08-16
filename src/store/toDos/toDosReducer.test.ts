import { toDoTask } from "../../mocks/mocksData";
import { ToDo } from "../../types";
import { loadToDosActionCreator, toDosReducer } from "./toDosSlice";
import { ToDoState } from "./types";

describe("Given a reducer component", () => {
  describe("When it receives a loadToDos reducer", () => {
    test("Then it should return a new state with the received two task", () => {
      const currentToDosState: ToDoState = {
        toDos: [],
      };

      const toDos: ToDo[] = toDoTask;

      const loadToDosAction = loadToDosActionCreator(toDos);

      const newToDoState = toDosReducer(currentToDosState, loadToDosAction);

      expect(newToDoState).toHaveProperty("toDos", toDos);
    });
  });
});
