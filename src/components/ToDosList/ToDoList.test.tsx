import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { toDoData } from "../../store/data";
import App from "../App/App";

describe("Given a App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of cards headings", async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );

      toDoData.forEach((toDo) => {
        const ToDoHeading = screen.getByRole("heading", { name: toDo.name });

        expect(ToDoHeading).toBeInTheDocument();
      });
    });
  });
});
