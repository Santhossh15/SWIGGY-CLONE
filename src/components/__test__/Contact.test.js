import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("Should load Contact Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Should load Button inside Contact Component", () => {
    render(<Contact />)
    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument();
})

test("Should load 2 Input Boxes in the Contact Component ", () => {
    render(<Contact />)
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
})
