import { toDoMock } from "../../../mocks/mocksData";
import { deleteToDoActionCreator, toDosReducer } from "../toDosSlice";

describe("Given a toDosReducer", () => {
  describe("When it receives a toDos task with id '1' and a deleteToDo action", () => {
    test("Then it should return a new state without the toDo id '1'", () => {
      const deleteId = 1;
      const deleteToDo = toDoMock.find((todo) => todo.id !== deleteId)!;

      const deleteAction = deleteToDoActionCreator(deleteToDo?.id);
      const newToDosState = toDosReducer({ toDos: toDoMock }, deleteAction);

      expect(newToDosState.toDos).not.toContain(toDoMock[1]);
    });
  });
});
