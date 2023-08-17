import { render, screen } from "@testing-library/react";
import { toDoMock } from "../../mocks/mocksData";
import ToDoCard from "./ToDoCard";

describe("Given a ToDoCard component", () => {
  describe("When it receives the toDo task", () => {
    test("Then it should show the text 'gym'", () => {
      const headingText = "gym";

      render(<ToDoCard todo={toDoMock} />);

      const heading = screen.getByRole("heading", {
        name: headingText,
      });
      expect(heading).toBeInTheDocument();
    });
  });
});
