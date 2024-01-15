import RestaurantCard from "../RestaurantCard"
import { screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardMock.json"
import { render } from "@testing-library/react"


it("Should render RestaurantCard component with props Data", () => {
    render(
        <RestaurantCard resData={MOCK_DATA} />
    )
    const name = screen.getByText("Andhra Gunpowder");
    expect(name).toBeInTheDocument();
})