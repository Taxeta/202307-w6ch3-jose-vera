import { newToDoMock, toDoMock } from "../../../mocks/mocksData";
import { addToDoActionCreator, toDosReducer } from "../toDosSlice";
import { ToDoState } from "../types";

describe("Given a toDosReducer", () => {
  describe("When it receives a list of toDos and toDosAction", () => {
    test("Then it should create a new toDo", () => {
      const currentState: ToDoState = { toDos: toDoMock };

      const addToDoAction = addToDoActionCreator(newToDoMock);

      const newToDoState = toDosReducer(currentState, addToDoAction);

      const expectedNewState: ToDoState = {
        toDos: [...currentState.toDos, newToDoMock],
      };

      expect(newToDoState.toDos).toStrictEqual(expectedNewState.toDos);
    });
  });
});
