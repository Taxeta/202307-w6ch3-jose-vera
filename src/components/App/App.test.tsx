import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'To Do List' inside a heading", () => {
      const title = "To Do List";

      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );

      const text = screen.getByRole("heading", { name: title });

      expect(text).toBeInTheDocument();
    });
  });
});
