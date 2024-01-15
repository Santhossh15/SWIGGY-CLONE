import { fireEvent, render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react"

it("Should render Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>)
    const loginButton = screen.getByRole("button");
    //const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
})
it("Should render 0 Header Component with 0 Cart Items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartItem = screen.getByText("Cart (0 items)");
    expect(cartItem).toBeInTheDocument();
})
test("Should change Login button to Logout onClick", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
})