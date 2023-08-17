import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { toDoData } from "../../store/data";
import ToDosList from "./ToDosList";

describe("Given a ToDoList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of cards headings", () => {
      render(
        <Provider store={store}>
          <ToDosList />
        </Provider>,
      );

      toDoData.forEach((toDo) => {
        const headingTest = screen.getByRole("heading", { name: toDo.name });

        expect(headingTest).toBeInTheDocument();
      });
    });
  });
});
