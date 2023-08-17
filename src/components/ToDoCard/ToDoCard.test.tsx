import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { ToDo } from "../../types";
import ToDoCard from "./ToDoCard";

describe("Given a ToDoCard component", () => {
  describe("When it receives the toDo task", () => {
    test("Then it should show the text 'gym'", () => {
      const toDo: ToDo = {
        id: 1,
        name: "gym",
        isDone: false,
      };

      const headingText = "gym";

      render(
        <Provider store={store}>
          <ToDoCard todo={toDo} />
        </Provider>,
      );

      const heading = screen.getByRole("heading", {
        name: headingText,
      });
      expect(heading).toBeInTheDocument();
    });
  });
});
