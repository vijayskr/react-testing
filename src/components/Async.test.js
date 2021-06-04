import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request succeeds", async () => {
    
    //Doing MOCK Test Data by changing the fetch
    window.fetch = jest.fn();
    //Not sending any request to the API, we are mocking data
    window.fetch.mockResolvedValueOnce({
        json: async () => [{id: 'p1', title: 'First Post'}],
    });

    render(<Async />);

    //Fails because of ASYNC call
    //const listItemElements = screen.getAllByRole("listitem");

    const listItemElements = await screen.findAllByRole("listitem",{}, {});
    
    expect(listItemElements).not.toHaveLength(0);
  });
});