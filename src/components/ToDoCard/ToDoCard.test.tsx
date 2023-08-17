import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { toDoMock } from "../../mocks/mocksData";
import { store } from "../../store";
import ToDoCard from "./ToDoCard";

describe("Given a ToDoCard component", () => {
  describe("When it receives the toDo task", () => {
    test("Then it should show the text 'gym'", () => {
      const ariaLabelText = "gym";

      render(
        <Provider store={store}>
          <ToDoCard todo={toDoMock[0].name} />
        </Provider>,
      );

      const nameText = screen.getByLabelText(ariaLabelText);

      expect(nameText).toBeInTheDocument();
    });
  });
});
